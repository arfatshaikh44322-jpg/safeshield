/* =========================================================
   SS SCROLL HERO — 3D
   A pinned, scroll-driven cinematic sequence built from the
   site's own imagery.

   The shield is a real 3D point cloud: a domed front shell, a
   domed back shell and a rim, so rotating it reveals actual
   volume. Points are rotated in 3D, perspective-projected,
   depth-sorted (painter's algorithm) and shaded by depth.

   Sequence: scattered red "threat" points converge into the
   shield (turning blue as they lock in) -> the shield holds
   and rotates while the headline word swaps -> it shatters
   outward in 3D into a full-screen burst that reveals the
   statement.

   Pure canvas 2D + rAF. No libraries, no external assets.
   Self-injects at <div id="ssxMount">, else after .hero.
========================================================= */

(function(){
"use strict";

var file = (location.pathname.split("/").pop() || "home.html").toLowerCase();

/* ---------- copy (EN / HI) ---------- */

var COPY = {
    en:{
        line1:"BORN OF",
        wordA:"PANIC",
        wordB:"VIGILANCE",
        sideL:"WE TURN AWARENESS<br>INTO DEFENSE",
        sideR:"BUILT FOR<br>THE REAL WORLD",
        reveal:"SafeShield exists because the best defence isn't fear — it's recognising the trick before it works. Learn the patterns. Slow down. Verify.",
        hint:"Scroll"
    },
    hi:{
        line1:"जन्म हुआ",
        wordA:"घबराहट से",
        wordB:"सतर्कता से",
        sideL:"हम जागरूकता को<br>सुरक्षा में बदलते हैं",
        sideR:"असल दुनिया<br>के लिए बना",
        reveal:"SafeShield इसलिए है क्योंकि सबसे अच्छा बचाव डर नहीं है — बल्कि चाल को काम करने से पहले पहचान लेना है। तरीके सीखें। धीमे चलें। जाँच करें।",
        hint:"स्क्रॉल करें"
    }
};

function lang(){ return window.ssLang === "hi" ? "hi" : "en"; }

/* ---------- build DOM ---------- */

function buildSection(){

    var mount = document.getElementById("ssxMount");
    if(!mount && file !== "home.html") return null;

    var c = COPY[lang()];

    var section = document.createElement("section");
    section.className = "ssx";
    section.id = "ssxSection";
    section.setAttribute("aria-label","SafeShield introduction");

    section.innerHTML =
        '<div class="ssx-sticky">' +
            '<div class="ssx-grid"></div>' +
            '<div class="ssx-textlayer">' +
                '<div class="ssx-line ssx-line-1">' + c.line1 + '</div>' +
                '<div class="ssx-line ssx-line-2"><span class="ssx-word" id="ssxWord">' + c.wordA + '</span></div>' +
            '</div>' +
            '<canvas class="ssx-canvas" id="ssxCanvas"></canvas>' +
            '<div class="ssx-side ssx-side-l" id="ssxSideL">' + c.sideL + '</div>' +
            '<div class="ssx-side ssx-side-r" id="ssxSideR">' + c.sideR + '</div>' +
            '<div class="ssx-count" id="ssxCount">+ 00</div>' +
            '<div class="ssx-reveal" id="ssxReveal"><p>' + c.reveal + '</p></div>' +
            '<div class="ssx-hint" id="ssxHint">' + c.hint + '</div>' +
            '<div class="ssx-progress"><i id="ssxBar"></i></div>' +
        '</div>';

    if(mount){
        mount.parentNode.insertBefore(section,mount);
        mount.parentNode.removeChild(mount);
    }else{
        var hero = document.querySelector(".hero");
        if(!hero || !hero.parentNode) return null;
        if(hero.nextSibling) hero.parentNode.insertBefore(section,hero.nextSibling);
        else hero.parentNode.appendChild(section);
    }

    return section;
}

/* ---------- shield silhouette sampling ----------
   Fill the shield path into a small offscreen canvas and read
   the pixels back, so the target shape stays honest rather
   than being hand-placed. Returns normalised (-0.5..0.5) pts. */

function shieldPoints(){

    var R = 120;
    var off = document.createElement("canvas");
    off.width = R;
    off.height = R;
    var octx = off.getContext("2d");

    octx.fillStyle = "#fff";
    octx.beginPath();
    octx.moveTo(0.50 * R,0.02 * R);
    octx.lineTo(0.95 * R,0.18 * R);
    octx.lineTo(0.95 * R,0.52 * R);
    octx.bezierCurveTo(0.95 * R,0.78 * R,0.75 * R,0.93 * R,0.50 * R,0.99 * R);
    octx.bezierCurveTo(0.25 * R,0.93 * R,0.05 * R,0.78 * R,0.05 * R,0.52 * R);
    octx.lineTo(0.05 * R,0.18 * R);
    octx.closePath();
    octx.fill();

    var data = null;
    try{ data = octx.getImageData(0,0,R,R).data; }catch(e){ data = null; }

    var inside = [];
    var edge = [];

    if(data){
        for(var y=0;y<R;y++){
            for(var x=0;x<R;x++){
                if(data[(y * R + x) * 4 + 3] > 130){

                    var nx = x / R - 0.5;
                    var ny = y / R - 0.5;
                    inside.push([nx,ny]);

                    var l = data[(y * R + Math.max(0,x-1)) * 4 + 3];
                    var r = data[(y * R + Math.min(R-1,x+1)) * 4 + 3];
                    var u = data[(Math.max(0,y-1) * R + x) * 4 + 3];
                    var dn = data[(Math.min(R-1,y+1) * R + x) * 4 + 3];
                    if(l <= 130 || r <= 130 || u <= 130 || dn <= 130){
                        edge.push([nx,ny]);
                    }
                }
            }
        }
    }

    if(!inside.length){
        for(var i=0;i<4000;i++){
            var a = Math.random() * Math.PI * 2;
            var rr = Math.sqrt(Math.random()) * 0.5;
            inside.push([Math.cos(a) * rr,Math.sin(a) * rr]);
        }
        edge = inside.slice(0,400);
    }

    return { inside:inside, edge:edge };
}

/* ---------- easing ---------- */

function clamp01(v){ return v < 0 ? 0 : (v > 1 ? 1 : v); }
function easeOut(t){ return 1 - Math.pow(1 - t,3); }
function easeIn(t){ return t * t * t; }
function seg(p,a,b){ return clamp01((p - a) / (b - a)); }

/* ---------- main ---------- */

function init(){

    var reduce = window.matchMedia &&
                 window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var section = buildSection();
    if(!section) return;

    var canvas   = document.getElementById("ssxCanvas");
    var wordEl   = document.getElementById("ssxWord");
    var revealEl = document.getElementById("ssxReveal");
    var hintEl   = document.getElementById("ssxHint");
    var barEl    = document.getElementById("ssxBar");
    var countEl  = document.getElementById("ssxCount");
    var sticky   = section.querySelector(".ssx-sticky");

    if(!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");

    var W = 0, H = 0, DPR = 1, size = 0, focal = 0;
    var P = [], N = 0, order = [];

    var THICK = 0.17;

    function particleCount(){
        var w = window.innerWidth;
        if(w < 620)  return 900;
        if(w < 1100) return 1600;
        return 2300;
    }

    function build(){

        DPR = Math.min(window.devicePixelRatio || 1,2);
        W = sticky.clientWidth;
        H = sticky.clientHeight;

        canvas.width  = Math.round(W * DPR);
        canvas.height = Math.round(H * DPR);
        ctx.setTransform(DPR,0,0,DPR,0,0);

        size  = Math.min(W,H) * 0.60;
        focal = size * 2.3;
        N     = particleCount();

        var sp = shieldPoints();
        var inside = sp.inside;
        var edge = sp.edge;

        P = [];
        order = [];

        for(var i=0;i<N;i++){

            var useRim = (i % 9 === 0 || i % 9 === 1) && edge.length > 0;
            var src = useRim ? edge : inside;
            var pt = src[(Math.random() * src.length) | 0];

            var u = pt[0];
            var v = pt[1];

            var rn = clamp01(Math.sqrt(u * u + v * v) / 0.52);
            var dome = Math.sqrt(Math.max(0,1 - rn * rn));

            var zs = useRim ? (Math.random() * 2 - 1)
                            : (Math.random() < 0.62 ? 1 : -1);

            var hz = zs * THICK * dome * size;

            var sa = Math.random() * Math.PI * 2;
            var sb = Math.acos(Math.random() * 2 - 1);
            var far = Math.max(W,H) * (0.6 + Math.random() * 0.85);

            var ea = Math.random() * Math.PI * 2;
            var eb = Math.acos(Math.random() * 2 - 1);
            var esp = Math.max(W,H) * (0.35 + Math.random() * 1.0);

            P.push({
                hx:u * size, hy:v * size, hz:hz,
                sx:Math.sin(sb) * Math.cos(sa) * far,
                sy:Math.sin(sb) * Math.sin(sa) * far * 0.8,
                sz:Math.cos(sb) * far,
                ex:Math.sin(eb) * Math.cos(ea) * esp,
                ey:Math.sin(eb) * Math.sin(ea) * esp,
                ez:Math.cos(eb) * esp,
                r:0.7 + Math.random() * 1.5,
                ph:Math.random() * Math.PI * 2,
                sp:0.5 + Math.random() * 1.3,
                dl:Math.random() * 0.34,
                rim:useRim,
                teal:(i % 7) === 0
            });

            order.push(i);
        }
    }

    /* ---------- scroll progress ---------- */

    var progress = 0, target = 0;

    function measure(){
        var rect = section.getBoundingClientRect();
        var total = section.offsetHeight - window.innerHeight;
        if(total <= 0) return 0;
        return clamp01(-rect.top / total);
    }

    /* ---------- render ---------- */

    var swapped = false;
    var px = [], py = [], pz = [], ps = [], pa = [];

    function draw(p){

        ctx.clearRect(0,0,W,H);

        var cx = W / 2, cy = H / 2;

        var assemble = seg(p,0.04,0.42);
        var hold     = seg(p,0.42,0.60);
        var burst    = seg(p,0.62,0.92);

        var t = performance.now() / 1000;

        /* Rotation oscillates rather than spinning full circle —
           a continuous spin would sit edge-on (a thin sliver)
           half the time and lose the shield silhouette. This
           keeps it readable while still showing real volume. */
        var yaw   = Math.sin(t * 0.32) * 0.42 + hold * 0.75 + burst * 0.6;
        var pitch = -0.16 + Math.sin(t * 0.24) * 0.06;

        var cyaw = Math.cos(yaw),   syaw = Math.sin(yaw);
        var cpit = Math.cos(pitch), spit = Math.sin(pitch);

        if(burst > 0){
            var g = ctx.createRadialGradient(cx,cy,0,cx,cy,Math.max(W,H) * (0.12 + burst * 0.95));
            var a1 = 0.55 * (1 - Math.abs(burst - 0.35) / 0.65);
            g.addColorStop(0,"rgba(140,195,255," + Math.max(0,a1) + ")");
            g.addColorStop(0.45,"rgba(79,140,255," + Math.max(0,a1 * 0.4) + ")");
            g.addColorStop(1,"rgba(3,7,15,0)");
            ctx.fillStyle = g;
            ctx.fillRect(0,0,W,H);
        }

        for(var i=0;i<N;i++){

            var q = P[i];

            var a = clamp01((assemble - q.dl) / (1 - q.dl));
            var ae = easeOut(a);

            var x = q.sx + (q.hx - q.sx) * ae;
            var y = q.sy + (q.hy - q.sy) * ae;
            var z = q.sz + (q.hz - q.sz) * ae;

            if(a > 0.98 && burst <= 0){
                x += Math.sin(t * q.sp + q.ph) * 1.9;
                y += Math.cos(t * q.sp * 0.9 + q.ph) * 1.9;
            }

            if(burst > 0){
                var be = easeIn(burst);
                x += q.ex * be;
                y += q.ey * be;
                z += q.ez * be;
            }

            var x1 =  x * cyaw + z * syaw;
            var z1 = -x * syaw + z * cyaw;
            var y2 =  y * cpit - z1 * spit;
            var z2 =  y * spit + z1 * cpit;

            var denom = focal + z2;
            if(denom < 1) denom = 1;
            var k = focal / denom;

            px[i] = cx + x1 * k;
            py[i] = cy + y2 * k;
            pz[i] = z2;
            ps[i] = k;

            var alpha = (a < 1) ? (0.22 + 0.62 * a) : 0.9;
            if(burst > 0) alpha *= (1 - burst * 0.92);
            pa[i] = alpha;
        }

        order.sort(function(A,B){ return pz[B] - pz[A]; });

        ctx.globalCompositeOperation = "lighter";

        for(var j=0;j<N;j++){

            var idx = order[j];
            var alpha2 = pa[idx];
            if(alpha2 <= 0.012) continue;

            var X = px[idx], Y = py[idx];
            if(X < -40 || X > W + 40 || Y < -40 || Y > H + 40) continue;

            var qq = P[idx];
            var k2 = ps[idx];

            var depth = clamp01((k2 - 0.72) / 0.62);
            var lift = 0.55 + depth * 0.65;

            var aFill = clamp01((assemble - qq.dl) / (1 - qq.dl));

            var cr,cg,cb;

            if(aFill < 1){
                var m = aFill;
                cr = Math.round(239 + (79  - 239) * m);
                cg = Math.round(68  + (140 - 68 ) * m);
                cb = Math.round(68  + (255 - 68 ) * m);
            }else if(qq.teal){
                cr = 34; cg = 211; cb = 167;
            }else{
                cr = 96; cg = 155; cb = 255;
            }

            cr = Math.min(255,Math.round(cr * lift));
            cg = Math.min(255,Math.round(cg * lift));
            cb = Math.min(255,Math.round(cb * lift));

            var rad = qq.r * k2 * (qq.rim ? 1.15 : 1) * (1 + burst * 0.7);
            if(rad < 0.35) rad = 0.35;

            ctx.fillStyle = "rgba(" + cr + "," + cg + "," + cb + "," +
                            (alpha2 * (0.5 + depth * 0.5)).toFixed(3) + ")";
            ctx.beginPath();
            ctx.arc(X,Y,rad,0,Math.PI * 2);
            ctx.fill();
        }

        ctx.globalCompositeOperation = "source-over";

        if(barEl) barEl.style.width = (p * 100).toFixed(1) + "%";

        if(countEl){
            var n = String(Math.round(assemble * 78));
            while(n.length < 2){ n = "0" + n; }
            countEl.textContent = "+ " + n;
        }

        if(hintEl) hintEl.classList.toggle("ssx-hint-off",p > 0.06);

        section.classList.toggle("ssx-in",p > 0.05 && p < 0.80);

        var c = COPY[lang()];

        if(hold > 0.35 && !swapped){
            swapped = true;
            wordEl.classList.add("ssx-word-out");
            setTimeout(function(){
                wordEl.textContent = c.wordB;
                wordEl.classList.remove("ssx-word-out");
            },420);
        }else if(hold <= 0.05 && swapped){
            swapped = false;
            wordEl.classList.add("ssx-word-out");
            setTimeout(function(){
                wordEl.textContent = c.wordA;
                wordEl.classList.remove("ssx-word-out");
            },420);
        }

        if(revealEl) revealEl.classList.toggle("ssx-reveal-on",p > 0.80);
    }

    /* ---------- loop ---------- */

    var running = false;
    var onScreen = false;

    function frame(){
        progress += (target - progress) * 0.12;
        draw(progress);
        if(onScreen){
            requestAnimationFrame(frame);
        }else{
            running = false;
        }
    }

    function kick(){
        target = measure();
        if(!running && onScreen){
            running = true;
            requestAnimationFrame(frame);
        }
    }

    build();

    if(reduce){
        section.classList.add("ssx-in");
        wordEl.textContent = COPY[lang()].wordB;
        draw(0.5);
        if(revealEl) revealEl.classList.add("ssx-reveal-on");
        return;
    }

    if("IntersectionObserver" in window){
        new IntersectionObserver(function(entries){
            onScreen = entries[0].isIntersecting;
            if(onScreen) kick();
        },{ threshold:0 }).observe(section);
    }else{
        onScreen = true;
    }

    window.addEventListener("scroll",kick,{ passive:true });

    var rt;
    window.addEventListener("resize",function(){
        clearTimeout(rt);
        rt = setTimeout(function(){
            build();
            progress = target = measure();
            draw(progress);
        },180);
    });

    document.addEventListener("ssLangChange",function(){
        var c2 = COPY[lang()];
        section.querySelector(".ssx-line-1").textContent = c2.line1;
        wordEl.textContent = swapped ? c2.wordB : c2.wordA;
        document.getElementById("ssxSideL").innerHTML = c2.sideL;
        document.getElementById("ssxSideR").innerHTML = c2.sideR;
        revealEl.querySelector("p").textContent = c2.reveal;
        if(hintEl) hintEl.textContent = c2.hint;
    });

    onScreen = true;
    kick();
    draw(0);
}

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded",init);
}else{
    init();
}

})();
