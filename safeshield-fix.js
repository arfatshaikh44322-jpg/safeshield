/* =========================================================
   SAFESHIELD SITE-WIDE FIX LAYER (JS)
   Loaded on every page. Everything here is additive and
   defensive — it only touches what's broken/missing and
   never removes a page's own working functionality.
========================================================= */

(function(){
"use strict";

var currentFile = (location.pathname.split("/").pop() || "home.html").toLowerCase();

var LANG_KEY = "ssLang";
var currentLang = "en";
try{ currentLang = localStorage.getItem(LANG_KEY) === "hi" ? "hi" : "en"; }catch(e){}
window.ssLang = currentLang;

/* ---------- Hindi translations for nav labels + every page's hero ---------- */

var NAV_HI = {
    "Home":"होम",
    "Protect":"सुरक्षा",
    "Scams":"घोटाले",
    "Play & Learn":"खेलें और सीखें",
    "Tools":"टूल्स",
    "Checklist":"चेकलिस्ट",
    "Register Complaint":"शिकायत दर्ज करें",
    "Contact":"संपर्क करें",
    "Security Check":"सुरक्षा जाँच",
    "Sign In":"साइन इन",
    "Guest Account":"गेस्ट खाता",

    "Bank Scam":"बैंक घोटाला",
    "Prize Scam":"इनाम घोटाला",
    "Job Scam":"नौकरी घोटाला",
    "Romance Scam":"रोमांस घोटाला",
    "Delivery Scam":"डिलीवरी घोटाला",
    "Investment Scam":"निवेश घोटाला",
    "Tech Support Scam":"टेक सपोर्ट घोटाला",
    "Social Media Scam":"सोशल मीडिया घोटाला",
    "QR Code Scam":"क्यूआर कोड घोटाला",
    "UPI Payment Scam":"यूपीआई भुगतान घोटाला",
    "Impersonation Scam":"इम्पर्सनेशन घोटाला",
    "Phishing Scam":"फ़िशिंग घोटाला",
    "Password Protection":"पासवर्ड सुरक्षा",
    "Two-Factor Authentication":"टू-फैक्टर ऑथेंटिकेशन",
    "Device Security":"डिवाइस सुरक्षा",
    "Backup Your Data":"डेटा बैकअप",
    "Verify Websites":"वेबसाइट सत्यापन",
    "Stop Phishing":"फ़िशिंग रोकें",
    "All Scams":"सभी घोटाले",
    "Protection Guide":"सुरक्षा गाइड",
    "Start":"शुरुआत",
    "End":"अंत"
};

var HERO_HI = {
    "Learn by doing, one level at a time.":"करके सीखें, एक बार में एक स्तर।",
    "Short lessons, hands-on simulations, and a quick quiz — pass with 70% or better to unlock the next level. Fall short, and we'll revisit the lesson before you go again.":"छोटे पाठ, व्यावहारिक अभ्यास, और एक छोटी क्विज़ — अगला स्तर अनलॉक करने के लिए 70% या उससे बेहतर स्कोर करें। कम अंक आने पर, आगे बढ़ने से पहले हम पाठ फिर से दिखाएँगे।",

    "Add Another Layer of Security. Protect Your Accounts.":"सुरक्षा की एक और परत जोड़ें। अपने खातों को सुरक्षित रखें।",
    "Two-factor authentication adds an extra verification step when you sign in. Even if someone obtains your password, the additional factor can help prevent unauthorized access.":"टू-फैक्टर ऑथेंटिकेशन साइन इन करते समय एक अतिरिक्त सत्यापन चरण जोड़ता है। अगर कोई आपका पासवर्ड जान भी ले, तो यह अतिरिक्त सुरक्षा अनधिकृत पहुँच रोकने में मदद कर सकती है।",

    "The UPI & QR Code Scam":"यूपीआई और क्यूआर कोड घोटाला",
    "A QR code may look harmless, but scammers can use fake refunds, payment requests and social engineering to trick you into authorizing a payment.":"क्यूआर कोड देखने में हानिरहित लग सकता है, लेकिन ठग नकली रिफंड, भुगतान अनुरोध और सोशल इंजीनियरिंग का इस्तेमाल कर आपसे भुगतान करवा सकते हैं।",

    "Keep Your Data Safe. Prepare for the Unexpected.":"अपना डेटा सुरक्षित रखें। अनहोनी के लिए तैयार रहें।",
    "Important photos, documents and personal files can be lost through device failure, theft, accidental deletion or cyberattacks. Regular backups give you another way to recover your important information.":"ज़रूरी तस्वीरें, दस्तावेज़ और निजी फ़ाइलें डिवाइस खराब होने, चोरी, गलती से डिलीट होने या साइबर हमले से गुम हो सकती हैं। नियमित बैकअप आपकी अहम जानकारी वापस पाने का एक और तरीका देता है।",

    "Your Bank Account Isn't Blocked.":"आपका बैंक खाता ब्लॉक नहीं हुआ है।",
    "Bank scammers create fear by pretending to be your bank and claiming that your account has suspicious activity. They want you to panic, click a link, share an OTP or reveal your banking information before you have time to think.":"बैंक ठग आपके बैंक होने का नाटक करके और खाते में संदिग्ध गतिविधि बताकर डर पैदा करते हैं। वे चाहते हैं कि आप घबरा जाएँ और सोचने से पहले ही लिंक पर क्लिक कर दें, ओटीपी बता दें या अपनी बैंकिंग जानकारी दे दें।",

    "How Secure Are You?":"आप कितने सुरक्षित हैं?",
    "Test your cybersecurity instincts against realistic situations, spot common scam patterns and discover exactly where your digital security habits can improve.":"वास्तविक परिस्थितियों में अपनी साइबर सुरक्षा समझ को परखें, आम घोटाले के तरीके पहचानें और जानें कि आपकी डिजिटल सुरक्षा आदतों में कहाँ सुधार हो सकता है।",

    "Your Package Is Stuck?":"आपका पार्सल अटक गया है?",
    "A message says your package cannot be delivered because your address or payment information needs updating. It may look like a normal delivery message — but one click could lead to a fake website designed to steal your information.":"एक मैसेज कहता है कि आपका पार्सल डिलीवर नहीं हो सकता क्योंकि पता या भुगतान जानकारी अपडेट करनी है। यह एक सामान्य डिलीवरी मैसेज जैसा लग सकता है — लेकिन एक क्लिक आपको एक नकली वेबसाइट पर ले जा सकता है जो आपकी जानकारी चुराने के लिए बनाई गई है।",

    "Secure Your Devices. Protect Your Digital Life.":"अपने डिवाइस सुरक्षित करें। अपनी डिजिटल ज़िंदगी सुरक्षित रखें।",
    "Your phone, computer and other connected devices contain valuable personal information. Learn how to keep your devices updated, protected and safer from digital threats.":"आपके फ़ोन, कंप्यूटर और अन्य जुड़े डिवाइस में अहम निजी जानकारी होती है। जानें कि अपने डिवाइस को अपडेटेड, सुरक्षित और डिजिटल खतरों से कैसे बचाएँ।",

    "Protect What Matters in the Digital World.":"डिजिटल दुनिया में जो मायने रखता है, उसे सुरक्षित रखें।",
    "SafeShield is a cybersecurity and digital privacy awareness platform designed to help you understand online threats, protect your personal information, recognize scams and build safer digital habits.":"SafeShield एक साइबर सुरक्षा और डिजिटल प्राइवेसी जागरूकता मंच है, जो आपको ऑनलाइन खतरों को समझने, अपनी निजी जानकारी सुरक्षित रखने, घोटालों को पहचानने और सुरक्षित डिजिटल आदतें बनाने में मदद करता है।",

    "Is That Really Who They Say They Are?":"क्या वे सच में वही हैं, जो होने का दावा कर रहे हैं?",
    "An impersonation scam happens when someone pretends to be a person, company or organization you trust in order to trick you into sharing information, sending money or taking an action. The identity may look real. The request is what you need to question.":"इम्पर्सनेशन स्कैम तब होता है जब कोई ऐसे व्यक्ति, कंपनी या संस्था होने का नाटक करता है जिस पर आप भरोसा करते हैं, ताकि आपसे जानकारी, पैसे या कोई कार्रवाई करवाई जा सके। पहचान असली लग सकती है — लेकिन अनुरोध पर सवाल उठाना ज़रूरी है।",

    "Don't Let a Fake Profit Empty Your Wallet.":"नकली मुनाफ़े को अपना बटुआ खाली न करने दें।",
    "Investment scams promise easy money, guaranteed returns and exclusive opportunities. The bigger the promise, the more carefully you should verify it.":"निवेश घोटाले आसान पैसे, गारंटीड रिटर्न और खास मौकों का वादा करते हैं। वादा जितना बड़ा हो, उसे उतनी ही सावधानी से जाँचना चाहिए।",

    "Fake Job Scam":"नकली नौकरी घोटाला",
    "A fake recruiter can make an opportunity look too good to be true — then ask for money, personal information or sensitive documents.":"एक नकली भर्तीकर्ता किसी मौके को बहुत आकर्षक दिखा सकता है — और फिर पैसे, निजी जानकारी या संवेदनशील दस्तावेज़ माँग सकता है।",

    "Is That Really Their Account?":"क्या यह सच में उन्हीं का अकाउंट है?",
    "A scammer doesn't always need to hack an account. Sometimes, all they need is a convincing profile picture, username and story. Learn how scammers impersonate people online and how to spot the signs before you trust them.":"एक ठग को हमेशा अकाउंट हैक करने की ज़रूरत नहीं होती। कभी-कभी उसे बस एक विश्वसनीय प्रोफ़ाइल फ़ोटो, यूज़रनेम और कहानी चाहिए होती है। जानें कि ठग ऑनलाइन लोगों की नकल कैसे करते हैं और भरोसा करने से पहले इसके संकेत कैसे पहचानें।",

    "Build Stronger Passwords. Protect Your Accounts.":"मज़बूत पासवर्ड बनाएँ। अपने खातों को सुरक्षित रखें।",
    "Strong, unique passwords are one of the most important defenses for your digital accounts. Learn how to create better passwords and protect the information behind them.":"मज़बूत और अलग-अलग पासवर्ड आपके डिजिटल खातों की सबसे अहम सुरक्षा में से एक हैं। जानें बेहतर पासवर्ड कैसे बनाएँ और उनके पीछे की जानकारी कैसे सुरक्षित रखें।",

    "Don't Take the Bait.":"जाल में मत फँसिए।",
    "A phishing message can look like it came from your bank, delivery company, university, employer or even someone you know. The goal is simple: make you trust the message long enough to give away something valuable.":"एक फ़िशिंग मैसेज आपके बैंक, डिलीवरी कंपनी, यूनिवर्सिटी, नियोक्ता या किसी जान-पहचान वाले से आया हुआ लग सकता है। मकसद सीधा है: आपको इतना भरोसा दिलाना कि आप कोई अहम जानकारी दे दें।",

    "You Didn't Enter. So Why Did You Win?":"आपने भाग ही नहीं लिया, तो जीते कैसे?",
    "Prize scams are designed to make you feel excited before you have time to think. A message promises money, a phone, a gift card or a luxury prize — then asks for your money or personal information.":"इनाम वाले घोटाले आपको सोचने का मौका मिलने से पहले ही उत्साहित करने के लिए बनाए जाते हैं। एक मैसेज पैसे, फ़ोन, गिफ़्ट कार्ड या शानदार इनाम का वादा करता है — और फिर आपसे पैसे या निजी जानकारी माँगता है।",

    "Protect Your Digital Life. Secure What Matters.":"अपनी डिजिटल ज़िंदगी सुरक्षित रखें। जो मायने रखता है उसे बचाएँ।",
    "Your personal information is valuable. Build smarter online habits, strengthen your accounts and reduce the risks that come with everyday digital life.":"आपकी निजी जानकारी कीमती है। समझदार ऑनलाइन आदतें अपनाएँ, अपने खातों को मज़बूत करें और रोज़मर्रा की डिजिटल ज़िंदगी के खतरों को कम करें।",

    "Don't Wait. Report It.":"इंतज़ार न करें। शिकायत दर्ज करें।",
    "If you have been targeted by a cyber scam or lost money through an online fraud, reporting quickly can help authorities and financial institutions respond sooner. Learn what to do, what information to keep, and where to report.":"अगर आप किसी साइबर घोटाले के शिकार हुए हैं या ऑनलाइन धोखाधड़ी में पैसे गँवाए हैं, तो जल्दी शिकायत करने से अधिकारी और वित्तीय संस्थान तेज़ी से कार्रवाई कर सकते हैं। जानें क्या करना है, कौन-सी जानकारी रखनी है और कहाँ शिकायत करनी है।",

    "When Trust Becomes the Trap.":"जब भरोसा ही जाल बन जाए।",
    "Romance scammers can build emotional connections and use that trust to manipulate people into sending money or sharing sensitive information.":"रोमांस स्कैमर भावनात्मक रिश्ता बनाते हैं और उस भरोसे का फ़ायदा उठाकर लोगों से पैसे भेजवाते हैं या संवेदनशील जानकारी लेते हैं।",

    "Don't let a scammer fool you. Learn the warning signs.":"किसी ठग को आपको बेवकूफ़ न बनाने दें। चेतावनी के संकेत पहचानें।",
    "Scammers use urgency, fear, fake identities and convincing messages to manipulate people. SafeShield helps you recognize the patterns before you click, pay or share sensitive information.":"ठग जल्दबाज़ी, डर, नकली पहचान और भरोसेमंद मैसेज का इस्तेमाल कर लोगों को बहकाते हैं। SafeShield आपको क्लिक करने, भुगतान करने या जानकारी साझा करने से पहले इन तरीकों को पहचानने में मदद करता है।",

    "Don't Take the Bait. Spot Phishing. Stop the Threat.":"जाल में मत फँसिए। फ़िशिंग पहचानें। खतरे को रोकें।",
    "Phishing attacks are designed to trick you into revealing passwords, financial details, verification codes or other sensitive information. Learn how to recognize the warning signs before you click.":"फ़िशिंग हमले आपको पासवर्ड, वित्तीय जानकारी, सत्यापन कोड या अन्य संवेदनशील जानकारी बताने के लिए धोखा देने के लिए बनाए जाते हैं। क्लिक करने से पहले चेतावनी के संकेत पहचानना सीखें।",

    "Your Computer Has a Virus!":"आपके कंप्यूटर में वायरस है!",
    "Or does it? Fake technical-support scams use frightening pop-ups, phone calls and messages to convince you that your device is infected. Their real goal may be to make you install remote-access software, reveal sensitive information or pay for unnecessary services.":"क्या सच में? नकली टेक-सपोर्ट घोटाले डरावने पॉप-अप, फ़ोन कॉल और मैसेज का इस्तेमाल कर आपको यक़ीन दिलाते हैं कि आपका डिवाइस संक्रमित है। उनका असली मकसद हो सकता है कि आप रिमोट-एक्सेस सॉफ़्टवेयर इंस्टॉल करें, संवेदनशील जानकारी दें या बेकार सेवाओं के लिए भुगतान करें।",

    "Test Your Digital Security.":"अपनी डिजिटल सुरक्षा को परखें।",
    "Don't just learn about cybersecurity. Test your security habits, analyze suspicious links, practice identifying scams and discover practical ways to protect your digital life.":"सिर्फ़ साइबर सुरक्षा के बारे में पढ़ें नहीं। अपनी सुरक्षा आदतों को परखें, संदिग्ध लिंक की जाँच करें, घोटाले पहचानने का अभ्यास करें और अपनी डिजिटल ज़िंदगी सुरक्षित रखने के व्यावहारिक तरीके जानें।",

    "Don't Let a Fake Payment Fool You.":"नकली भुगतान से धोखा न खाएँ।",
    "UPI has made digital payments incredibly convenient — and scammers know it. Learn how fake payment requests, QR-code tricks and \"refund\" scams can turn a simple transaction into a financial loss.":"यूपीआई ने डिजिटल भुगतान बेहद आसान बना दिया है — और ठग यह जानते हैं। जानें कि नकली भुगतान अनुरोध, क्यूआर-कोड ट्रिक्स और \"रिफंड\" घोटाले कैसे एक साधारण लेन-देन को आर्थिक नुकसान में बदल सकते हैं।",

    "Verify Before You Trust. Browse With Confidence.":"भरोसा करने से पहले जाँच लें। आत्मविश्वास से ब्राउज़ करें।",
    "Fake websites can look almost identical to legitimate ones. Learn how to inspect URLs, recognize warning signs and verify a website before entering sensitive information.":"नकली वेबसाइटें असली वेबसाइटों जैसी ही दिख सकती हैं। जानें कि यूआरएल कैसे जाँचें, चेतावनी के संकेत कैसे पहचानें और संवेदनशील जानकारी डालने से पहले किसी वेबसाइट को कैसे सत्यापित करें।"
};

/* Pages that already have their own fully-working mobile
   nav toggle — never double up on those. */
var SKIP_TOGGLE_PATCH = ["home.html","bank.html","register.html","tool.html"];

/* Pages that already have their own working sign-in UI
   (and, for tool.html / checklist.html, have been patched
   separately to share the same site-wide session). */
var SKIP_SIGNIN_PATCH = ["home.html","protect.html","tool.html","checklist.html"];

var CANONICAL_NAV = [
    { href:"home.html",     icon:"🏠", label:"Home" },
    { href:"protect.html",  icon:"🛡️", label:"Protect" },
    { href:"scam.html",     icon:"🚨", label:"Scams" },
    { href:"play.html",     icon:"🎮", label:"Play & Learn" },
    { href:"tool.html",     icon:"🔧", label:"Tools" },
    { href:"checklist.html",icon:"📋", label:"Checklist" },
    { href:"register.html", icon:"🖊️", label:"Register Complaint" },
    { href:"contact.pdf",   icon:"📄", label:"Contact", newTab:true }
];


/* =========================================================
   1) NAV LINK FIX — every page gets the same complete,
      correct set of links, with the current page marked active.
========================================================= */

function findNavList(){

    var lists = document.querySelectorAll("nav ul");

    for (var i=0;i<lists.length;i++){

        if (lists[i].querySelector('a[href="home.html"], a[href$="/home.html"]')){
            return lists[i];
        }
    }

    return null;
}

function fixNavLinks(){

    var navList = findNavList();

    if(!navList) return;

    var html = "";

    CANONICAL_NAV.forEach(function(item){

        var isActive = currentFile === item.href.toLowerCase();
        var extra = item.newTab ? ' target="_blank" rel="noopener noreferrer"' : "";
        var activeAttrs = isActive ? ' class="active" aria-current="page"' : "";

        html += "<li><a href=\"" + item.href + "\"" + extra + activeAttrs + ">" +
                item.icon + " " + item.label + "</a></li>";
    });

    html += '<li><a href="protect.html" class="ss-nav-cta">Get Protected</a></li>';

    navList.innerHTML = html;
}


/* =========================================================
   2) MOBILE MENU TOGGLE — guaranteed to work, injected only
      on pages that don't already have a working one.
========================================================= */

function ensureMobileToggle(){

    if (SKIP_TOGGLE_PATCH.indexOf(currentFile) !== -1) return;

    var navList = findNavList();

    if(!navList || !navList.parentElement) return;

    if (document.getElementById("ssMenuToggle")) return;

    var container = navList.parentElement;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "ssMenuToggle";
    btn.className = "ss-menu-toggle";
    btn.setAttribute("aria-label","Open navigation menu");
    btn.setAttribute("aria-expanded","false");
    btn.textContent = "☰";

    container.appendChild(btn);

    var open = false;

    function applyOpenStyles(){

        navList.style.setProperty("display","flex","important");
        navList.style.setProperty("position","fixed","important");
        navList.style.setProperty("top","66px","important");
        navList.style.setProperty("left","12px","important");
        navList.style.setProperty("right","12px","important");
        navList.style.setProperty("width","auto","important");
        navList.style.setProperty("flex-direction","column","important");
        navList.style.setProperty("align-items","stretch","important");
        navList.style.setProperty("gap","4px","important");
        navList.style.setProperty("background","rgba(6,14,26,.98)","important");
        navList.style.setProperty("border","1px solid rgba(148,163,184,.18)","important");
        navList.style.setProperty("border-radius","14px","important");
        navList.style.setProperty("padding","14px","important");
        navList.style.setProperty("box-shadow","0 20px 50px rgba(0,0,0,.45)","important");
        navList.style.setProperty("z-index","10050","important");
        navList.style.setProperty("list-style","none","important");
    }

    function clearOpenStyles(){

        [
            "display","position","top","left","right","width",
            "flex-direction","align-items","gap","background",
            "border","border-radius","padding","box-shadow",
            "z-index","list-style"
        ].forEach(function(prop){
            navList.style.removeProperty(prop);
        });
    }

    btn.addEventListener("click",function(){

        open = !open;

        if(open){
            applyOpenStyles();
            btn.textContent = "✕";
            btn.setAttribute("aria-expanded","true");
        }else{
            clearOpenStyles();
            btn.textContent = "☰";
            btn.setAttribute("aria-expanded","false");
        }
    });

    navList.addEventListener("click",function(event){

        if(open && event.target && event.target.tagName === "A"){
            open = false;
            clearOpenStyles();
            btn.textContent = "☰";
            btn.setAttribute("aria-expanded","false");
        }
    });

    document.addEventListener("keydown",function(event){

        if(event.key === "Escape" && open){
            open = false;
            clearOpenStyles();
            btn.textContent = "☰";
            btn.setAttribute("aria-expanded","false");
        }
    });
}


/* =========================================================
   3) SIGN-IN — inject a working, site-wide-synced sign-in UI
      on pages that don't already have one.
========================================================= */

function escapeHtml(value){

    return String(value)
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
}

function ensureSignIn(){

    if (SKIP_SIGNIN_PATCH.indexOf(currentFile) !== -1) return;
    if (document.getElementById("ssAccountBadge")) return;

    var badge = document.createElement("button");
    badge.type = "button";
    badge.id = "ssAccountBadge";
    badge.setAttribute("aria-label","Open SafeShield account");
    badge.innerHTML =
        '<span class="ss-avatar" id="ssAvatar">👤</span>' +
        '<span class="ss-account-name" id="ssAccountName">Sign In</span>';
    document.body.appendChild(badge);

    var menu = document.createElement("div");
    menu.id = "ssAccountMenu";
    menu.innerHTML =
        '<div class="ss-menu-title">SafeShield Account</div>' +
        '<button class="ss-menu-item" id="ssAccountStatus" type="button">👤 <span id="ssAccountStatusLabel">Guest Account</span></button>' +
        '<button class="ss-menu-item ss-logout" id="ssLogout" type="button">🚪 <span>Log Out</span></button>';
    document.body.appendChild(menu);

    var overlay = document.createElement("div");
    overlay.id = "ssAuthOverlay";
    overlay.className = "ss-hidden";
    overlay.setAttribute("role","dialog");
    overlay.setAttribute("aria-modal","true");
    overlay.setAttribute("aria-label","SafeShield sign in");
    overlay.innerHTML =
        '<div class="ss-auth-card">' +
            '<button class="ss-auth-close" id="ssAuthClose" type="button" aria-label="Close">✕</button>' +
            '<div class="ss-auth-logo">🛡️</div>' +
            '<h2>Welcome to SafeShield</h2>' +
            '<p class="ss-auth-subtitle">Sign in to sync your account across the site.</p>' +
            '<button class="ss-google-btn" id="ssGoogleSignIn" type="button">' +
                '<span class="ss-google-g">G</span> Continue with Google' +
            '</button>' +
            '<div class="ss-auth-divider"><span>OR</span></div>' +
            '<form id="ssAuthForm">' +
                '<div class="ss-auth-field"><label for="ssAuthEmail">Email</label>' +
                '<input id="ssAuthEmail" type="email" placeholder="you@example.com" required></div>' +
                '<div class="ss-auth-field"><label for="ssAuthPassword">Password</label>' +
                '<input id="ssAuthPassword" type="password" placeholder="Enter your password" required></div>' +
                '<button class="ss-auth-submit" type="submit">Sign In</button>' +
            '</form>' +
            '<div class="ss-auth-message" id="ssAuthMessage"></div>' +
            '<button class="ss-auth-later" id="ssAuthLater" type="button">Later</button>' +
            '<p class="ss-auth-note">This demonstration sign-in is stored only in this browser and syncs across SafeShield pages. No real Google account or password is transmitted.</p>' +
        '</div>';
    document.body.appendChild(overlay);

    var accountName = document.getElementById("ssAccountName");
    var accountStatusLabel = document.getElementById("ssAccountStatusLabel");
    var authMessage = document.getElementById("ssAuthMessage");
    var authForm = document.getElementById("ssAuthForm");

    function refreshUI(){

        var signed = localStorage.getItem("safeshieldSignedIn") === "1";
        var user = localStorage.getItem("safeshieldUser") || "SafeShield User";

        if(signed){
            accountName.textContent = user;
            accountStatusLabel.textContent = escapeHtml(user);
        }else{
            accountName.textContent = "Sign In";
            accountStatusLabel.textContent = "Guest Account";
        }
    }

    function openOverlay(){
        overlay.classList.remove("ss-hidden");
        authMessage.textContent = "";
    }

    function closeOverlay(){
        overlay.classList.add("ss-hidden");
    }

    function completeLogin(name){

        localStorage.setItem("safeshieldSignedIn","1");
        localStorage.setItem("safeshieldUser", name || "SafeShield User");

        refreshUI();
        closeOverlay();
    }

    badge.addEventListener("click",function(event){

        event.stopPropagation();

        if(localStorage.getItem("safeshieldSignedIn") === "1"){
            menu.classList.toggle("open");
        }else{
            menu.classList.remove("open");
            openOverlay();
        }
    });

    document.getElementById("ssAuthClose").addEventListener("click",closeOverlay);
    document.getElementById("ssAuthLater").addEventListener("click",closeOverlay);

    document.getElementById("ssGoogleSignIn").addEventListener("click",function(){
        completeLogin("Google User");
    });

    authForm.addEventListener("submit",function(event){

        event.preventDefault();

        var emailField = document.getElementById("ssAuthEmail");
        var email = emailField ? emailField.value.trim() : "";

        if(!email){
            authMessage.textContent = "Please enter your email.";
            return;
        }

        completeLogin(email.split("@")[0] || "SafeShield User");
    });

    document.getElementById("ssLogout").addEventListener("click",function(event){

        event.stopPropagation();

        localStorage.removeItem("safeshieldSignedIn");
        localStorage.removeItem("safeshieldUser");

        menu.classList.remove("open");
        refreshUI();
    });

    document.getElementById("ssAccountStatus").addEventListener("click",function(event){
        event.stopPropagation();
    });

    document.addEventListener("click",function(event){

        if(!menu.contains(event.target) && event.target !== badge){
            menu.classList.remove("open");
        }
    });

    window.addEventListener("storage",function(event){

        if(event.key === "safeshieldSignedIn" || event.key === "safeshieldUser"){
            refreshUI();
        }
    });

    refreshUI();
}


/* =========================================================
   4) COMMON BOTTOM NAVIGATION — the scam/protection detail
      pages each built their own "previous / home / next"
      bar, with different classes, labels and (in one case,
      media.html) a mislabeled link. Replace all of them with
      one consistent component, in one consistent order.
========================================================= */

/* This preserves the original prev/next chain wherever pages
   already agreed with each other (bank→prize→job→romance,
   delivery→investment→tech→media→QR→upi→impersonation→phishing),
   and appends the six "how-to" protection pages afterward. */
var SCAM_SEQUENCE = [
    { file:"bank.html",          label:"Bank Scam" },
    { file:"prize.html",         label:"Prize Scam" },
    { file:"job.html",           label:"Job Scam" },
    { file:"romance.html",       label:"Romance Scam" },
    { file:"delivery.html",      label:"Delivery Scam" },
    { file:"investment.html",    label:"Investment Scam" },
    { file:"tech.html",          label:"Tech Support Scam" },
    { file:"media.html",         label:"Social Media Scam" },
    { file:"QR.html",            label:"QR Code Scam" },
    { file:"upi.html",           label:"UPI Payment Scam" },
    { file:"impersonation.html", label:"Impersonation Scam" },
    { file:"phishing.html",      label:"Phishing Scam" },
    { file:"password.html",      label:"Password Protection" },
    { file:"2FA.html",           label:"Two-Factor Authentication" },
    { file:"devices.html",       label:"Device Security" },
    { file:"backupdata.html",    label:"Backup Your Data" },
    { file:"verify_website.html",label:"Verify Websites" },
    { file:"stop_phishing.html", label:"Stop Phishing" }
];

var SCAM_TYPE_COUNT = 12; /* first 12 entries are scam pages, rest are protection guides */

/* Each page's own bespoke bottom-nav wrapper — hidden in favor
   of the single common one. Scoped narrowly (e.g. investment.html's
   .button-group is reused elsewhere on that page for other buttons,
   so only its .final-box instance is targeted). */
var OLD_BOTTOM_NAV_SELECTORS = [
    ".final-navigation",
    ".next-area",
    ".button-row",
    ".page-navigation",
    ".bottom-navigation",
    ".final-box .button-group"
];

function findSequenceIndex(){

    for (var i=0;i<SCAM_SEQUENCE.length;i++){
        if (SCAM_SEQUENCE[i].file.toLowerCase() === currentFile) return i;
    }

    return -1;
}

function ensureCommonBottomNav(){

    var index = findSequenceIndex();

    if (index === -1) return;

    OLD_BOTTOM_NAV_SELECTORS.forEach(function(selector){

        document.querySelectorAll(selector).forEach(function(el){
            el.style.display = "none";
        });
    });

    if (document.getElementById("ssBottomNav")) return;

    var prevItem = index > 0 ? SCAM_SEQUENCE[index-1] : null;
    var nextItem = index < SCAM_SEQUENCE.length-1 ? SCAM_SEQUENCE[index+1] : null;

    var middleHref  = index < SCAM_TYPE_COUNT ? "scam.html" : "protect.html";
    var middleLabel = index < SCAM_TYPE_COUNT ? "🚨 All Scams" : "🛡️ Protection Guide";

    var nav = document.createElement("div");
    nav.id = "ssBottomNav";
    nav.className = "ss-bottom-nav";

    var html = "";

    html += prevItem
        ? '<a href="' + prevItem.file + '" class="ss-bottom-nav-btn ss-prev">← ' + prevItem.label + '</a>'
        : '<span class="ss-bottom-nav-btn ss-disabled">← Start</span>';

    html += '<a href="home.html" class="ss-bottom-nav-btn ss-home">🏠 Home</a>';
    html += '<a href="' + middleHref + '" class="ss-bottom-nav-btn ss-middle">' + middleLabel + '</a>';

    html += nextItem
        ? '<a href="' + nextItem.file + '" class="ss-bottom-nav-btn ss-next">' + nextItem.label + ' →</a>'
        : '<span class="ss-bottom-nav-btn ss-disabled">End →</span>';

    nav.innerHTML = html;

    var footer = document.querySelector("footer");
    var main = document.querySelector("main");

    if (footer && footer.parentElement){
        footer.parentElement.insertBefore(nav, footer);
    }else if (main){
        main.appendChild(nav);
    }else{
        document.body.appendChild(nav);
    }
}


/* =========================================================
   5) SCROLL-REVEAL ANIMATION — only for pages that had
      no scroll-triggered animation of their own at all.
========================================================= */

var NO_ANIMATION_PAGES = ["checklist.html","investment.html","media.html","tech.html"];

function ensureScrollReveal(){

    if (NO_ANIMATION_PAGES.indexOf(currentFile) === -1) return;

    var candidates = document.querySelectorAll(
        "main > section, section > .container > *, section > *"
    );

    if(!candidates.length) return;

    var seen = [];

    candidates.forEach(function(el){

        if (seen.indexOf(el) !== -1) return;
        if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return;

        seen.push(el);
        el.classList.add("ss-reveal");
    });

    if(!("IntersectionObserver" in window)){
        seen.forEach(function(el){ el.classList.add("ss-visible"); });
        return;
    }

    var observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){
                entry.target.classList.add("ss-visible");
                observer.unobserve(entry.target);
            }
        });

    },{ threshold:0.12 });

    seen.forEach(function(el){ observer.observe(el); });
}


/* =========================================================
   6) HERO STORY BADGE — a small animated scene in the corner
      of every hero, themed to that page's specific threat.
      "deflect": a shield/blocker knocks an incoming threat away
      "scan": a radar sweep exposes threats around the core
      "alert": the core shakes/flashes to signal danger
      "lock": the core locks itself shut
      "orbit": protective elements calmly circle the core
      "expose": the core flips to reveal what's underneath
========================================================= */

var HERO_THEMES = {
    "home.html":            { mode:"orbit",   core:"🛡️", threats:[{icon:"🔒",delay:"0s"},{icon:"✅",delay:"1.8s"}] },
    "play.html":            { mode:"orbit",   core:"🎮", threats:[{icon:"🏅",delay:"0s"},{icon:"✅",delay:"1.8s"}] },
    "protect.html":         { mode:"deflect", core:"🛡️", threats:[{icon:"🎣",delay:"0s"},{icon:"💳",delay:"1.6s"}] },
    "scam.html":            { mode:"scan",    core:"🚨", threats:[{icon:"🎭",delay:"0s"},{icon:"💰",delay:"1.5s"}] },
    "phishing.html":        { mode:"deflect", core:"🛡️", threats:[{icon:"🎣",delay:"0s"},{icon:"✉️",delay:"1.6s"}] },
    "investment.html":      { mode:"alert",   core:"📈", threats:[{icon:"⚠️",delay:"0s"}] },
    "checklist.html":       { mode:"orbit",   core:"📋", threats:[{icon:"✅",delay:"0s"},{icon:"✅",delay:"1.8s"}] },
    "backupdata.html":      { mode:"deflect", core:"☁️", threats:[{icon:"💥",delay:"0s"},{icon:"🗑️",delay:"1.6s"}] },
    "delivery.html":        { mode:"deflect", core:"📦", threats:[{icon:"🔗",delay:"0s"},{icon:"⚠️",delay:"1.6s"}] },
    "media.html":           { mode:"scan",    core:"📱", threats:[{icon:"🚩",delay:"0s"},{icon:"👤",delay:"1.5s"}] },
    "qr.html":              { mode:"scan",    core:"🔲", threats:[{icon:"⚠️",delay:"0s"}] },
    "password.html":        { mode:"lock",    core:"🔑", threats:[{icon:"👁️",delay:"0s"}] },
    "2fa.html":             { mode:"orbit",   core:"📱", threats:[{icon:"🔐",delay:"0s"},{icon:"✅",delay:"1.8s"}] },
    "devices.html":         { mode:"orbit",   core:"🛡️", threats:[{icon:"💻",delay:"0s"},{icon:"📱",delay:"1.8s"}] },
    "prize.html":           { mode:"alert",   core:"🎁", threats:[{icon:"🚩",delay:"0s"}] },
    "stop_phishing.html":   { mode:"deflect", core:"✋", threats:[{icon:"🎣",delay:"0s"}] },
    "bank.html":            { mode:"deflect", core:"🏦", threats:[{icon:"📞",delay:"0s"},{icon:"💳",delay:"1.6s"}] },
    "job.html":             { mode:"alert",   core:"💼", threats:[{icon:"🚩",delay:"0s"}] },
    "verify_website.html":  { mode:"scan",    core:"🌐", threats:[{icon:"🔒",delay:"0s"},{icon:"✅",delay:"1.6s"}] },
    "tool.html":             { mode:"orbit",   core:"🧰", threats:[{icon:"🔧",delay:"0s"},{icon:"⚙️",delay:"1.8s"}] },
    "register.html":        { mode:"orbit",   core:"📝", threats:[{icon:"✅",delay:"0s"},{icon:"🖊️",delay:"1.8s"}] },
    "impersonation.html":   { mode:"expose",  core:"🎭", threats:[{icon:"🚩",delay:"0s"}] },
    "tech.html":             { mode:"deflect", core:"🖥️", threats:[{icon:"🎧",delay:"0s"},{icon:"⚠️",delay:"1.6s"}] },
    "upi.html":              { mode:"deflect", core:"💳", threats:[{icon:"🔗",delay:"0s"},{icon:"⚠️",delay:"1.6s"}] },
    "romance.html":         { mode:"expose",  core:"❤️", threats:[{icon:"🎭",delay:"0s"}] }
};

var DEFAULT_HERO_THEME = { mode:"orbit", core:"🛡️", threats:[{icon:"✅",delay:"0s"}] };

function findHero(){
    return document.querySelector(".hero") || document.querySelector(".pl-hero");
}

function injectHeroBadge(){

    if(currentFile === "home.html") return;
    if(document.querySelector(".ss-hero-badge")) return;

    var theme = HERO_THEMES[currentFile] || DEFAULT_HERO_THEME;

    var badge = document.createElement("div");
    badge.className = "ss-hero-badge ss-mode-" + theme.mode;
    badge.setAttribute("aria-hidden","true");

    var ringHtml = theme.mode === "scan"
        ? '<div class="ss-badge-ring ss-sweep"></div><div class="ss-badge-ring"></div>'
        : '<div class="ss-badge-ring"></div><div class="ss-badge-ring ss-ring2"></div>';

    var threatsHtml = "";

    (theme.threats || []).forEach(function(t,i){

        var extra = "";

        if(theme.mode === "orbit"){
            var radius = 30 + (i * 9);
            extra = ' style="--orbit-r:' + radius + 'px;animation-delay:' + t.delay + '"';
        }else if(theme.mode === "alert" || theme.mode === "lock"){
            var pos = i === 0 ? "top:-2px;right:-2px;" : "bottom:-2px;left:-2px;";
            extra = ' style="' + pos + 'animation-delay:' + t.delay + '"';
        }else{
            extra = ' style="animation-delay:' + t.delay + '"';
        }

        threatsHtml += '<div class="ss-threat"' + extra + '>' + t.icon + '</div>';
    });

    badge.innerHTML = ringHtml + '<div class="ss-core">' + theme.core + '</div>' + threatsHtml;

    /* Opening state: big and centered on the viewport, so it
       actually reads as an intro rather than a quiet corner
       decoration. It then glides and shrinks into its resting
       corner spot, where it stays as the ambient badge. */

    var narrow = window.innerWidth < 480;
    var mid = window.innerWidth < 760;

    var introSize = narrow ? 130 : (mid ? 170 : 220);
    var restSize  = narrow ? 48  : (mid ? 62  : 84);
    var restTop   = narrow ? 10  : (mid ? 12  : 16);
    var restRight = narrow ? 10  : (mid ? 12  : 18);

    var introTop   = Math.max(20,Math.round(window.innerHeight/2 - introSize/2));
    var introRight = Math.max(20,Math.round(window.innerWidth/2 - introSize/2));

    badge.style.width  = introSize + "px";
    badge.style.height = introSize + "px";
    badge.style.top    = introTop + "px";
    badge.style.right  = introRight + "px";
    badge.classList.add("ss-badge-intro");

    document.body.appendChild(badge);

    /* force layout so the later style change transitions
       from this starting state instead of jumping straight
       to the resting state */
    void badge.offsetWidth;

    setTimeout(function(){

        var hero = findHero();
        var heroRect = hero ? hero.getBoundingClientRect() : null;

        var targetTop, targetRight;

        if(heroRect){
            targetTop = Math.round(heroRect.top + restTop);
            targetRight = Math.round(window.innerWidth - heroRect.right + restRight);
        }else{
            targetTop = restTop;
            targetRight = restRight;
        }

        badge.classList.remove("ss-badge-intro");
        badge.style.width  = restSize + "px";
        badge.style.height = restSize + "px";
        badge.style.top    = targetTop + "px";
        badge.style.right  = targetRight + "px";

        /* once the shrink/glide-to-corner transition finishes,
           hand the badge over to the hero itself (position:absolute,
           same visual spot) so it scrolls naturally with the page
           from here on, instead of staying glued to the viewport */
        setTimeout(function(){

            if(!hero) return;

            badge.style.transition = "none";
            badge.style.position = "absolute";
            badge.style.top = restTop + "px";
            badge.style.right = restRight + "px";

            hero.appendChild(badge);

            requestAnimationFrame(function(){
                requestAnimationFrame(function(){
                    badge.style.transition = "";
                });
            });

        },950);

    },1700);
}

function animateHeroEntrance(){

    if(currentFile === "home.html") return;

    var hero = findHero();
    if(!hero) return;

    function meaningfulChildren(el){
        return Array.prototype.filter.call(el.children,function(child){
            return child.tagName !== "STYLE" &&
                   child.tagName !== "SCRIPT";
        });
    }

    var wrap = hero.querySelector(".hero-content") ||
               hero.querySelector(".hero-container") ||
               hero.querySelector(".hero-grid") ||
               hero;

    var kids = meaningfulChildren(wrap);

    if(kids.length === 1 && meaningfulChildren(kids[0]).length > 1){
        wrap = kids[0];
    }

    wrap.classList.add("ss-hero-animate");
}


/* =========================================================
   7) CARD ANIMATION — entrance + hover polish for every
      element that is actually a card (class exactly "card"
      or ending in "-card"), on every page. Pages that already
      run their own reveal-on-scroll system for a card are left
      to that system for the entrance timing, but still get the
      shared hover polish so every card feels consistent.
========================================================= */

var OWN_REVEAL_MARKERS = ["reveal","reveal-card","reveal-on-scroll"];

function isRealCardToken(token){
    return token === "card" || (/-card$/.test(token));
}

function cardIsScamThemed(el,tokens){

    for(var i=0;i<tokens.length;i++){
        var t = tokens[i].toLowerCase();
        if(t.indexOf("scam") !== -1) return true;
        if(t.indexOf("danger") !== -1) return true;
        if(t === "warning-card") return true;
    }

    var links = el.querySelectorAll ? el.querySelectorAll("a[href]") : [];

    for(var j=0;j<links.length;j++){
        var h = (links[j].getAttribute("href") || "").toLowerCase().split("/").pop().split("?")[0].split("#")[0];
        for(var k=0;k<SCAM_TYPE_COUNT;k++){
            if(SCAM_SEQUENCE[k].file.toLowerCase() === h) return true;
        }
    }

    return false;
}

function enhanceCards(){

    var pageTone = getPageTone();

    var all = document.querySelectorAll('[class*="card"]');
    var toObserve = [];
    var idx = 0;

    all.forEach(function(el){

        var tokens = (el.className && typeof el.className === "string") ?
                     el.className.split(/\s+/) : [];

        if(!tokens.some(isRealCardToken)) return;
        if(el.classList.contains("ss-card-fx")) return;

        /* the Play & Learn game has its own purpose-built card
           styling and hover states (pl-* classes) — leave those
           alone rather than layering generic effects on top */
        if(tokens.some(function(t){ return t.indexOf("pl-") === 0; })) return;

        var tone = cardIsScamThemed(el,tokens) ? "alert" : pageTone;
        var badgeGlyph = tone === "alert" ? "\u26A0" : "\u2713";

        el.classList.add("ss-card-fx","ss-card-tone-" + tone);

        if(!el.querySelector(".ss-card-badge")){
            var badge = document.createElement("span");
            badge.className = "ss-card-badge";
            badge.setAttribute("aria-hidden","true");
            badge.textContent = badgeGlyph;
            el.appendChild(badge);
        }

        var hasOwnReveal = tokens.some(function(t){
            return OWN_REVEAL_MARKERS.indexOf(t) !== -1;
        });

        if(!hasOwnReveal){
            el.classList.add("ss-card-reveal");
            el.style.transitionDelay = ((idx % 6) * 70) + "ms";
            idx++;
            toObserve.push(el);
        }
    });

    if(!toObserve.length) return;

    if(!("IntersectionObserver" in window)){
        toObserve.forEach(function(el){ el.classList.add("ss-card-visible"); });
        return;
    }

    var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("ss-card-visible");
                obs.unobserve(entry.target);
            }
        });
    },{ threshold:0.12 });

    toObserve.forEach(function(el){ obs.observe(el); });
}


/* =========================================================
   8) SCAN-RETICLE CURSOR — replaces the native pointer with a
      small, steadily rotating scanner reticle (fits a "verify
      before you trust" security site — a constant background
      scan — better than a shield, since the shield motif is
      already used in the nav logo and the hero badges). It's
      the same on every page and doesn't change color or shape;
      the only feedback is the brackets pulling in when you're
      over something clickable, so it still reads as "scanning"
      rather than a static icon. Fine-pointer, motion-OK devices
      only; native cursor is left untouched everywhere else.
========================================================= */

function initScanCursor(){

    if(!window.matchMedia) return;
    if(!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var cursor = document.createElement("div");
    cursor.className = "ss-scan-cursor";
    cursor.innerHTML =
        '<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">' +
            '<circle class="ss-scan-dot" cx="20" cy="20" r="2"></circle>' +
            '<circle class="ss-scan-ring" cx="20" cy="20" r="14"></circle>' +
            '<path class="ss-scan-bracket" d="M6 13 V6 H13"></path>' +
            '<path class="ss-scan-bracket" d="M27 6 H34 V13"></path>' +
            '<path class="ss-scan-bracket" d="M6 27 V34 H13"></path>' +
            '<path class="ss-scan-bracket" d="M34 27 V34 H27"></path>' +
        '</svg>';

    document.body.appendChild(cursor);

    var started = false;

    function isInteractive(el){
        return el && el.closest && el.closest('a,button,input,textarea,select,.ss-menu-toggle,label,[class*="card"]');
    }

    document.addEventListener("mousemove",function(e){

        if(!started){
            started = true;
            document.body.classList.add("ss-cursor-on");
        }

        cursor.style.opacity = "1";
        cursor.style.transform = "translate3d(" + (e.clientX - 20) + "px," + (e.clientY - 20) + "px,0)";

    },{ passive:true });

    document.addEventListener("mouseover",function(e){
        if(isInteractive(e.target)){
            cursor.classList.add("ss-scan-lock");
        }
    },{ passive:true });

    document.addEventListener("mouseout",function(e){
        if(isInteractive(e.target) && !isInteractive(e.relatedTarget)){
            cursor.classList.remove("ss-scan-lock");
        }
    },{ passive:true });

    document.addEventListener("mouseleave",function(){
        cursor.style.opacity = "0";
    });
}


/* =========================================================
   9) PAGE TONE — used to color every card on a page: "alert"
      (red, urgent) on pages that describe a scam, "protect"
      (green, reassuring) on pages that teach how to stay safe.
      Reuses the site's own existing scam/protection split
      (SCAM_SEQUENCE / SCAM_TYPE_COUNT) rather than a separate
      list, so it always matches the rest of the site. The
      per-page corner badge (built above) is each page's opening
      animation — home.html keeps its own separate one.
========================================================= */

function getPageTone(){
    if(currentFile === "scam.html") return "alert";
    var idx = findSequenceIndex();
    if(idx !== -1 && idx < SCAM_TYPE_COUNT) return "alert";
    return "protect";
}


/* =========================================================
   10) KEYBOARD ACCESS FOR CLICK-ONLY CARDS — several cards
   across the site (e.g. the scam-type tiles on home.html) are
   `<div onclick=... role="button" tabindex="0">` with no
   keydown handling, so a keyboard user who tabs to one can't
   actually activate it. This adds Enter/Space support to any
   such element, site-wide, without touching the page files.
========================================================= */

function initCardKeyboardAccess(){
    document.querySelectorAll('[onclick][role="button"]').forEach(function(el){
        if(el.getAttribute("data-ss-kbd")) return;
        el.setAttribute("data-ss-kbd","1");
        el.addEventListener("keydown",function(e){
            if(e.key === "Enter" || e.key === " " || e.key === "Spacebar"){
                e.preventDefault();
                el.click();
            }
        });
    });
}


/* =========================================================
   11) AEGIS — a small draggable security-bot companion that
   wanders every page (including home), reacting to clicks by
   opening a simple chat panel. It's a rule-based keyword
   matcher against the site's own scam/protection topics —
   fully client-side, no network calls, no backend, and it
   openly says so when it can't find a match.
========================================================= */

var BUDDY_ACK = [
    "Good choice \u2014 awareness is the key to staying safe.",
    "Smart thing to check.",
    "Glad you're looking into that one.",
    "That's a common one to know about."
];

var BUDDY_ACK_HI = [
    "अच्छा सवाल \u2014 जागरूकता ही सुरक्षित रहने की कुंजी है।",
    "जाँचना समझदारी है।",
    "अच्छा है कि आप इसके बारे में जान रहे हैं।",
    "यह एक आम घोटाला है, जिसके बारे में जानना ज़रूरी है।"
];

var BUDDY_KB = [
    { keywords:["bank","banking","debit card","credit card","account frozen","kyc"],
      file:"bank.html", label:"Bank Scam",
      def:"A bank scam is a fake call, SMS or email posing as your bank, usually claiming your account is frozen or needs urgent verification, to trick you into sharing your PIN, OTP or card details.",
      def_hi:"बैंक घोटाला एक नकली कॉल, एसएमएस या ईमेल होता है जो आपके बैंक जैसा दिखता है, आमतौर पर यह कहते हुए कि आपका खाता ब्लॉक है या तुरंत सत्यापन चाहिए, ताकि आप अपना पिन, ओटीपी या कार्ड की जानकारी बता दें।" },
    { keywords:["prize","lottery","winner","won a","giveaway","claim your prize"],
      file:"prize.html", label:"Prize Scam",
      def:"A prize scam tells you that you've won a lottery or gift you never entered, then asks for a \u201cfee\u201d or \u201ctax\u201d payment before the (nonexistent) prize can be released.",
      def_hi:"इनाम घोटाला आपको बताता है कि आपने एक लॉटरी या गिफ़्ट जीता है जिसमें आपने भाग ही नहीं लिया, और फिर (न मिलने वाले) इनाम को पाने के लिए \u201cफ़ीस\u201d या \u201cटैक्स\u201d माँगता है।" },
    { keywords:["job scam","work from home","hiring","part time job","job offer","easy money"],
      file:"job.html", label:"Job Scam",
      def:"A job scam is a fake work offer \u2014 often \u201cwork from home\u201d or huge pay for little effort \u2014 designed to get you to pay upfront fees or hand over personal/banking details.",
      def_hi:"नौकरी घोटाला एक नकली काम का ऑफ़र होता है \u2014 अक्सर \u201cवर्क फ्रॉम होम\u201d या बहुत कम मेहनत में बड़ी कमाई का \u2014 जो आपसे पहले फ़ीस भरवाने या निजी/बैंकिंग जानकारी लेने के लिए बनाया जाता है।" },
    { keywords:["romance","dating","boyfriend","girlfriend","online love"],
      file:"romance.html", label:"Romance Scam",
      def:"A romance scam is when someone builds a fake relationship with you online, over weeks or months, then eventually asks for money, gifts or financial help.",
      def_hi:"रोमांस घोटाला तब होता है जब कोई हफ़्तों या महीनों तक ऑनलाइन आपके साथ एक नकली रिश्ता बनाता है, और फिर पैसे, गिफ़्ट या आर्थिक मदद माँगता है।" },
    { keywords:["delivery","courier","package","parcel","shipping fee","redelivery","customs fee"],
      file:"delivery.html", label:"Delivery Scam",
      def:"A delivery scam is a fake courier text or email claiming a package is stuck or needs a small \u201credelivery fee\u201d, with a link designed to steal your payment details.",
      def_hi:"डिलीवरी घोटाला एक नकली कूरियर मैसेज या ईमेल होता है, जो कहता है कि पार्सल अटका है या \u201cरीडिलीवरी फ़ीस\u201d चाहिए, और एक लिंक के ज़रिए आपकी भुगतान जानकारी चुराने की कोशिश करता है।" },
    { keywords:["investment","crypto","trading","double your money","stock tip","forex"],
      file:"investment.html", label:"Investment Scam",
      def:"An investment scam promises guaranteed, unusually high returns \u2014 often in crypto or trading \u2014 with little to no real risk, and disappears once you've put money in.",
      def_hi:"निवेश घोटाला \u2014 अक्सर क्रिप्टो या ट्रेडिंग में \u2014 बहुत ज़्यादा और गारंटीड रिटर्न का वादा करता है, बिना किसी असली जोखिम के, और पैसे लगाते ही गायब हो जाता है।" },
    { keywords:["tech support","virus","computer infected","microsoft calling","remote access","pop up warning"],
      file:"tech.html", label:"Tech Support Scam",
      def:"A tech support scam is a fake pop-up, call or email claiming your device is infected, pushing you to install remote-access software or pay for \u201crepairs\u201d you don't need.",
      def_hi:"टेक सपोर्ट घोटाला एक नकली पॉप-अप, कॉल या ईमेल होता है जो दावा करता है कि आपका डिवाइस संक्रमित है, और आपको रिमोट-एक्सेस सॉफ़्टवेयर इंस्टॉल करने या न ज़रूरी \u201cमरम्मत\u201d के लिए भुगतान करने पर मजबूर करता है।" },
    { keywords:["social media","instagram","facebook","whatsapp","fake profile"],
      file:"media.html", label:"Social Media Scam",
      def:"A social media scam usually comes from a hacked or fake account \u2014 sometimes pretending to be a friend \u2014 asking for money, a \u201cfavor\u201d, or your login details.",
      def_hi:"सोशल मीडिया घोटाला आमतौर पर किसी हैक हुए या नकली अकाउंट से आता है \u2014 कभी-कभी किसी दोस्त जैसा दिखते हुए \u2014 जो पैसे, कोई \u201cमदद\u201d या आपकी लॉगिन जानकारी माँगता है।" },
    { keywords:["qr code","qr scam","scan this code","fake qr"],
      file:"QR.html", label:"QR Code Scam",
      def:"A QR code scam involves a fake sticker or printed code placed over a real one \u2014 on parking meters, menus or posters \u2014 that redirects your payment or opens a malicious link.",
      def_hi:"क्यूआर कोड घोटाला असली कोड पर लगाया गया एक नकली स्टिकर या प्रिंट होता है \u2014 पार्किंग मीटर, मेन्यू या पोस्टर पर \u2014 जो आपका भुगतान किसी और जगह भेज देता है या नुकसानदायक लिंक खोल देता है।" },
    { keywords:["upi","gpay","phonepe","paytm","collect request"],
      file:"upi.html", label:"UPI Payment Scam",
      def:"A UPI scam usually sends a fake \u201ccollect request\u201d or refund message that tricks you into entering your PIN \u2014 which you only ever need to SEND money, never to receive it.",
      def_hi:"यूपीआई घोटाला आमतौर पर एक नकली \u201cकलेक्ट रिक्वेस्ट\u201d या रिफंड मैसेज भेजता है, जो आपसे पिन डलवाने की कोशिश करता है \u2014 जबकि पिन सिर्फ़ पैसे भेजने के लिए चाहिए होता है, पैसे पाने के लिए नहीं।" },
    { keywords:["impersonation","pretending to be","fake officer","fake police","government official calling"],
      file:"impersonation.html", label:"Impersonation Scam",
      def:"An impersonation scam is someone posing as a police officer, government official or company representative, using fear or urgency to demand money or personal details.",
      def_hi:"इम्पर्सनेशन घोटाला तब होता है जब कोई पुलिस अधिकारी, सरकारी अधिकारी या कंपनी प्रतिनिधि बनकर डर या जल्दबाज़ी का फ़ायदा उठाते हुए पैसे या निजी जानकारी माँगता है।" },
    { keywords:["phishing","fake email","suspicious link","fake website link"],
      file:"phishing.html", label:"Phishing Scam",
      def:"Phishing is a fake email, text or website designed to look like a real company, aiming to trick you into entering your password or payment details.",
      def_hi:"फ़िशिंग एक नकली ईमेल, मैसेज या वेबसाइट होती है जो किसी असली कंपनी जैसी दिखती है, ताकि आप अपना पासवर्ड या भुगतान जानकारी वहाँ डाल दें।" },
    { keywords:["password","strong password","password manager","reuse password"],
      file:"password.html", label:"Password Protection",
      def:"Password protection means using a strong, unique password for every important account \u2014 ideally from a password manager \u2014 so one leaked password can't unlock everything else.",
      def_hi:"पासवर्ड सुरक्षा का मतलब है हर ज़रूरी खाते के लिए एक मज़बूत, अलग पासवर्ड रखना \u2014 बेहतर होगा किसी पासवर्ड मैनेजर से \u2014 ताकि एक जगह लीक होने पर बाकी सब सुरक्षित रहें।" },
    { keywords:["2fa","two factor","authenticator app","otp verification"],
      file:"2FA.html", label:"Two-Factor Authentication",
      def:"Two-factor authentication (2FA) adds a second check \u2014 like a code from your phone \u2014 so a stolen password alone still isn't enough to get into your account.",
      def_hi:"टू-फैक्टर ऑथेंटिकेशन (2FA) एक और सुरक्षा चरण जोड़ता है \u2014 जैसे आपके फ़ोन पर आया कोड \u2014 ताकि सिर्फ़ पासवर्ड चोरी होने से खाता न खुल सके।" },
    { keywords:["device security","phone security","lock screen","update software"],
      file:"devices.html", label:"Device Security",
      def:"Device security is keeping your phone and laptop updated and locked with a PIN or biometric, since most break-ins exploit software that simply hasn't been updated.",
      def_hi:"डिवाइस सुरक्षा का मतलब है अपने फ़ोन और लैपटॉप को अपडेटेड रखना और पिन या बायोमेट्रिक से लॉक रखना, क्योंकि ज़्यादातर सेंधमारी अपडेट न हुए सॉफ़्टवेयर का फ़ायदा उठाकर होती है।" },
    { keywords:["backup","lost data","ransomware","restore files"],
      file:"backupdata.html", label:"Backup Your Data",
      def:"Backing up your data means keeping a separate copy of your files, so a lost device, ransomware attack, or accidental deletion doesn't mean losing everything for good.",
      def_hi:"डेटा बैकअप का मतलब है अपनी फ़ाइलों की एक अलग कॉपी रखना, ताकि डिवाइस खोने, रैनसमवेयर हमले या गलती से डिलीट होने पर भी सब कुछ हमेशा के लिए न खोए।" },
    { keywords:["verify website","fake website","is this site safe","check url"],
      file:"verify_website.html", label:"Verify Websites",
      def:"Verifying a website means checking the URL for misspellings, confirming it's https, and searching the company separately rather than trusting a link you were sent.",
      def_hi:"वेबसाइट सत्यापन का मतलब है यूआरएल में गलतियाँ जाँचना, यह पक्का करना कि वह https है, और भेजे गए लिंक पर भरोसा करने के बजाय कंपनी को अलग से सर्च करना।" },
    { keywords:["stop phishing","avoid phishing"],
      file:"stop_phishing.html", label:"Stop Phishing",
      def:"Stopping phishing comes down to slowing down, verifying the sender independently, and never entering a password on a page you reached via a link in a message.",
      def_hi:"फ़िशिंग रोकने का मतलब है धीरज रखना, भेजने वाले को अलग से जाँचना, और मैसेज में मिले लिंक से खुले पेज पर कभी पासवर्ड न डालना।" },
    { keywords:["checklist","steps","safety checklist","what should i do"],
      file:"checklist.html", label:"Safety Checklist",
      def:"There's a full step-by-step safety checklist here that walks through the everyday habits that keep your accounts and money safe.",
      def_hi:"यहाँ एक पूरी चरण-दर-चरण सुरक्षा चेकलिस्ट है, जो आपके खातों और पैसों को सुरक्षित रखने वाली रोज़मर्रा की आदतें बताती है।" },
    { keywords:["report","complaint","i got scammed","file a report"],
      file:"register.html", label:"Report a Scam",
      def:"If you've been targeted or already scammed, this page walks through how to report it properly.",
      def_hi:"अगर आप किसी घोटाले के शिकार हुए हैं या निशाना बनाए गए हैं, तो यह पेज बताता है कि सही तरीके से शिकायत कैसे करें।" },
    { keywords:["tool","tools","checker"],
      file:"tool.html", label:"Tools",
      def:"There are a few hands-on tools here that can help you check something concrete, rather than just reading about it.",
      def_hi:"यहाँ कुछ काम के टूल्स हैं जो सिर्फ़ पढ़ने के बजाय किसी चीज़ को सीधे जाँचने में मदद कर सकते हैं।" },
    { keywords:["protect myself","stay safe","general safety","how do i protect"],
      file:"protect.html", label:"Protect Yourself",
      def:"This is the general guide covering the core habits \u2014 passwords, verification, awareness \u2014 that protect you across every kind of scam.",
      def_hi:"यह सामान्य गाइड है जो पासवर्ड, सत्यापन और जागरूकता जैसी आदतें बताती है, जो हर तरह के घोटाले से आपकी रक्षा करती हैं।" },
    { keywords:["types of scam","common scams","scam overview","what scams"],
      file:"scam.html", label:"Scam Overview",
      def:"This page covers the full overview of common scam types, so you can see which ones are most relevant to you.",
      def_hi:"यह पेज सभी आम घोटालों का पूरा विवरण देता है, ताकि आप देख सकें कि कौन-सा आपके लिए ज़्यादा ज़रूरी है।" },
    { keywords:["home page","start over","main page"],
      file:"home.html", label:"Home",
      def:"That'll take you back to the SafeShield home page.",
      def_hi:"यह आपको SafeShield के होम पेज पर ले जाएगा।" },
    { keywords:["game","quiz","play","learn by doing","practice","level up","simulation"],
      file:"play.html", label:"Play & Learn",
      def:"Play & Learn turns each topic into short lessons, a hands-on simulation, and a quiz — you level up as you pass each one.",
      def_hi:"खेलें और सीखें में हर विषय को छोटे पाठों, एक व्यावहारिक अभ्यास और एक क्विज़ में बदला गया है — हर एक पास करने पर आप अगले स्तर पर पहुँचते हैं।" }
];

var BUDDY_SMALLTALK = [
    { keywords:["hi","hello","hey"],
      reply:"Hey \u2014 I\u2019m Aegis. Ask me about a scam type (try \u201cromance scam\u201d or \u201cUPI\u201d) or say \u201cchecklist\u201d.",
      reply_hi:"नमस्ते \u2014 मैं Aegis हूँ। मुझसे किसी घोटाले के बारे में पूछें (जैसे \u201cरोमांस स्कैम\u201d या \u201cयूपीआई\u201d) या \u201cचेकलिस्ट\u201d कहें।" },
    { keywords:["thanks","thank you"],
      reply:"Anytime \u2014 stay sharp out there.",
      reply_hi:"कभी भी पूछ सकते हैं \u2014 सतर्क रहिए।" },
    { keywords:["who are you","what are you"],
      reply:"I\u2019m Aegis, SafeShield\u2019s little guide-bot. I match keywords to the right page \u2014 I\u2019m not a real AI, so keep it simple.",
      reply_hi:"मैं Aegis हूँ, SafeShield का छोटा गाइड-बॉट। मैं कीवर्ड के आधार पर सही पेज बताता हूँ \u2014 मैं असली एआई नहीं हूँ, इसलिए सवाल सीधा रखें।" },
    { keywords:["help"],
      reply:"Try naming a scam type, or a topic like \u201cpassword\u201d, \u201c2FA\u201d or \u201cchecklist\u201d and I\u2019ll point you to the right page.",
      reply_hi:"किसी घोटाले का नाम बताएँ, या \u201cपासवर्ड\u201d, \u201c2FA\u201d या \u201cचेकलिस्ट\u201d जैसा विषय बताएँ, मैं सही पेज दिखा दूँगा।" }
];

function matchBuddyKB(raw){

    var hi = currentLang === "hi";
    var q = raw.toLowerCase();
    var best = null, bestScore = 0;

    BUDDY_KB.forEach(function(entry){
        var score = 0;
        entry.keywords.forEach(function(kw){
            if(q.indexOf(kw) !== -1) score += kw.length;
        });
        if(score > bestScore){ bestScore = score; best = entry; }
    });

    if(best){
        var ackList = hi ? BUDDY_ACK_HI : BUDDY_ACK;
        return {
            type:"topic",
            ack:ackList[Math.floor(Math.random() * ackList.length)],
            def:hi ? best.def_hi : best.def,
            file:best.file,
            label:best.label
        };
    }

    var talk = null;

    BUDDY_SMALLTALK.forEach(function(entry){
        if(talk) return;
        entry.keywords.forEach(function(kw){
            if(!talk && q.indexOf(kw) !== -1) talk = entry;
        });
    });

    if(talk) return { type:"smalltalk", text:hi ? talk.reply_hi : talk.reply };

    return {
        type:"fallback",
        text:hi ?
            "मेरे पास इस बारे में कोई खास जानकारी नहीं है \u2014 सबसे आम घोटालों के लिए यह पेज देखें।" :
            "I don\u2019t have anything specific on that on my end \u2014 refer to this page for the most common scams.",
        file:"scam.html", label:"Scam Overview"
    };
}

function initBuddy(){

    if(!document.body) return;
    if(document.getElementById("ssBuddy")) return;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var buddy = document.createElement("div");
    buddy.className = "ss-buddy";
    buddy.id = "ssBuddy";
    buddy.setAttribute("role","button");
    buddy.setAttribute("tabindex","0");
    buddy.setAttribute("aria-label","Open Aegis, SafeShield's helper");

    buddy.innerHTML =
        '<div class="ss-buddy-figure">' +
            '<svg viewBox="0 0 60 100" class="ss-buddy-svg" aria-hidden="true">' +
                '<ellipse class="ss-buddy-shadow" cx="30" cy="96" rx="17" ry="3.4"></ellipse>' +

                '<path class="ss-buddy-cape" d="M19 33 L41 33 L37 55 Q30 60 23 55 Z"></path>' +

                '<g class="ss-buddy-arm ss-arm-back">' +
                    '<rect class="ss-buddy-sleeve" x="9" y="33" width="8" height="22" rx="4"></rect>' +
                    '<circle class="ss-buddy-hand" cx="13" cy="57" r="4.3"></circle>' +
                '</g>' +

                '<g class="ss-buddy-leg ss-leg-back">' +
                    '<rect class="ss-buddy-thigh" x="22" y="63" width="8" height="16" rx="4"></rect>' +
                    '<rect class="ss-buddy-boot" x="20" y="78" width="12" height="9" rx="3.5"></rect>' +
                '</g>' +
                '<g class="ss-buddy-leg ss-leg-front">' +
                    '<rect class="ss-buddy-thigh" x="31" y="63" width="8" height="16" rx="4"></rect>' +
                    '<rect class="ss-buddy-boot" x="29" y="78" width="12" height="9" rx="3.5"></rect>' +
                '</g>' +

                '<path class="ss-buddy-body" d="M17 32 Q30 26 43 32 L46 58 Q46 63 41 65 Q30 69 19 65 Q14 63 14 58 Z"></path>' +
                '<path class="ss-buddy-collar" d="M22 32 L30 40 L38 32 Q30 36 22 32 Z"></path>' +
                '<path class="ss-buddy-emblem" d="M30 42 L36 44.4 V49.6 C36 53.3 33.4 56 30 57.1 C26.6 56 24 53.3 24 49.6 V44.4 Z"></path>' +

                '<g class="ss-buddy-arm ss-arm-front">' +
                    '<rect class="ss-buddy-sleeve" x="43" y="33" width="8" height="22" rx="4"></rect>' +
                    '<circle class="ss-buddy-hand" cx="47" cy="57" r="4.3"></circle>' +
                '</g>' +

                '<circle class="ss-buddy-head" cx="30" cy="21" r="16"></circle>' +

                '<path class="ss-buddy-hair-back ss-hair-left" d="M15 15 C6 22 6 44 11 58 C13 62 19 60 17 54 C13 42 13 26 20 17 Z"></path>' +
                '<path class="ss-buddy-hair-back ss-hair-right" d="M45 15 C54 22 54 44 49 58 C47 62 41 60 43 54 C47 42 47 26 40 17 Z"></path>' +

                '<ellipse class="ss-buddy-blush" cx="20.5" cy="26" rx="2.6" ry="1.6"></ellipse>' +
                '<ellipse class="ss-buddy-blush" cx="39.5" cy="26" rx="2.6" ry="1.6"></ellipse>' +

                '<ellipse class="ss-buddy-eye" cx="23.5" cy="21" rx="4" ry="5.2"></ellipse>' +
                '<ellipse class="ss-buddy-eye" cx="36.5" cy="21" rx="4" ry="5.2"></ellipse>' +
                '<circle class="ss-buddy-eye-shine" cx="22.2" cy="18.4" r="1.3"></circle>' +
                '<circle class="ss-buddy-eye-shine" cx="35.2" cy="18.4" r="1.3"></circle>' +

                '<path class="ss-buddy-mouth" d="M27 27.5 Q30 30.5 33 27.5"></path>' +

                '<path class="ss-buddy-bangs" d="M13 17 Q30 1 47 17 Q45 8 30 6 Q15 8 13 17 Z"></path>' +

                '<path class="ss-buddy-bow" d="M23 6 L29 9 L23 12 Z"></path>' +
                '<path class="ss-buddy-bow" d="M37 6 L31 9 L37 12 Z"></path>' +
                '<circle class="ss-buddy-visor" cx="30" cy="9" r="2.4"></circle>' +
                '<circle class="ss-buddy-antenna-tip" cx="30" cy="9" r="1"></circle>' +
            '</svg>' +
        '</div>';

    document.body.appendChild(buddy);

    var chat = document.createElement("div");
    chat.className = "ss-buddy-chat";
    chat.id = "ssBuddyChat";
    chat.setAttribute("role","dialog");
    chat.setAttribute("aria-label","Chat with Aegis");

    var placeholderTxt = currentLang === "hi" ?
        "किसी घोटाले या सुरक्षा टिप के बारे में पूछें\u2026" :
        "Ask about a scam or safety tip\u2026";
    var closeLabel = currentLang === "hi" ? "चैट बंद करें" : "Close chat";
    var sendLabel = currentLang === "hi" ? "भेजें" : "Send";

    chat.innerHTML =
        '<div class="ss-buddy-chat-head">' +
            '<span class="ss-buddy-chat-dot"></span>' +
            '<span class="ss-buddy-chat-name">Aegis</span>' +
            '<button type="button" class="ss-buddy-chat-close" id="ssBuddyClose" aria-label="' + closeLabel + '">\u00D7</button>' +
        '</div>' +
        '<div class="ss-buddy-chat-log" id="ssBuddyLog"></div>' +
        '<form class="ss-buddy-chat-form" id="ssBuddyForm">' +
            '<input type="text" id="ssBuddyInput" placeholder="' + placeholderTxt + '" autocomplete="off" maxlength="140">' +
            '<button type="submit" class="ss-buddy-send" aria-label="' + sendLabel + '">\u27A4</button>' +
        '</form>';

    document.body.appendChild(chat);

    var log = document.getElementById("ssBuddyLog");
    var form = document.getElementById("ssBuddyForm");
    var input = document.getElementById("ssBuddyInput");
    var closeBtn = document.getElementById("ssBuddyClose");

    var open = false;
    var greeted = false;

    function addMsg(text,who,linkFile,linkLabel){
        var row = document.createElement("div");
        row.className = "ss-buddy-msg ss-buddy-msg-" + who;
        var p = document.createElement("p");
        p.textContent = text;
        row.appendChild(p);
        if(linkFile){
            var a = document.createElement("a");
            a.href = linkFile;
            a.className = "ss-buddy-msg-link";
            a.textContent = (linkLabel || "Open page") + " \u2192";
            row.appendChild(a);
        }
        log.appendChild(row);
        log.scrollTop = log.scrollHeight;
    }

    var wandering = true;
    var wanderTimer = null;
    var dragging = false;

    function pauseWander(){
        wandering = false;
        scrollState = null;
        if(wanderTimer){ clearTimeout(wanderTimer); wanderTimer = null; }
        if(scrollStopTimer){ clearTimeout(scrollStopTimer); scrollStopTimer = null; }
        buddy.classList.remove(
            "ss-buddy-walking","ss-buddy-sitting","ss-buddy-climbing",
            "ss-buddy-falling","ss-buddy-flying","ss-buddy-impact","ss-buddy-bump"
        );
    }

    function resumeWander(){
        if(open || dragging) return;
        wandering = true;
        scheduleNext(700);
    }

    function scheduleNext(delay){
        if(wanderTimer) clearTimeout(wanderTimer);
        wanderTimer = setTimeout(function(){ if(wandering) doNextAction(); },delay);
    }

    function openChat(){
        if(open) return;
        open = true;
        chat.classList.add("ss-buddy-chat-open");
        buddy.classList.add("ss-buddy-alert-mode");
        pauseWander();
        if(!greeted){
            greeted = true;
            addMsg(currentLang === "hi" ?
                "नमस्ते, मैं Aegis हूँ \u2014 SafeShield की सहायक। किसी घोटाले के बारे में पूछें, या \u201cचेकलिस्ट\u201d कहें।" :
                "Hi, I\u2019m Aegis \u2014 SafeShield\u2019s helper. Ask about a scam type, or say \u201cchecklist\u201d.","bot");
        }
        setTimeout(function(){ input.focus(); },250);
    }

    function closeChat(){
        open = false;
        chat.classList.remove("ss-buddy-chat-open");
        buddy.classList.remove("ss-buddy-alert-mode");
        resumeWander();
    }

    closeBtn.addEventListener("click",closeChat);

    function showTyping(){
        var typing = document.createElement("div");
        typing.className = "ss-buddy-msg ss-buddy-msg-bot ss-buddy-typing";
        typing.innerHTML = "<p><span></span><span></span><span></span></p>";
        log.appendChild(typing);
        log.scrollTop = log.scrollHeight;
        return typing;
    }

    form.addEventListener("submit",function(e){
        e.preventDefault();
        var text = input.value.trim();
        if(!text) return;

        addMsg(text,"user");
        input.value = "";
        form.classList.add("ss-buddy-form-hidden");

        var result = matchBuddyKB(text);
        var typing1 = showTyping();

        if(result.type === "topic"){

            setTimeout(function(){
                typing1.remove();
                addMsg(result.ack,"bot");

                var typing2 = showTyping();

                setTimeout(function(){
                    typing2.remove();
                    addMsg(result.def,"bot",result.file,result.label);
                    form.classList.remove("ss-buddy-form-hidden");
                    input.focus();
                },650 + Math.random() * 400);

            },450 + Math.random() * 300);

        }else{

            setTimeout(function(){
                typing1.remove();
                addMsg(result.text,"bot",result.file,result.label);
                form.classList.remove("ss-buddy-form-hidden");
                input.focus();
            },500 + Math.random() * 400);
        }
    });

    var moved = false, sx = 0, sy = 0, ox = 0, oy = 0;
    var curX = 0, curY = 0;

    function groundY(){ return window.innerHeight - (buddy.offsetHeight || 110) - 18; }

    function setPos(x,y,animate){
        var w = buddy.offsetWidth || 74;
        var h = buddy.offsetHeight || 118;
        x = Math.max(6,Math.min(window.innerWidth - w - 6,x));
        y = Math.max(6,Math.min(window.innerHeight - h - 6,y));
        curX = x; curY = y;
        buddy.style.transition = animate ? "" : "none";
        buddy.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    }

    buddy.addEventListener("pointerdown",function(e){
        dragging = true; moved = false;
        sx = e.clientX; sy = e.clientY;
        ox = curX; oy = curY;
        if(buddy.setPointerCapture){
            try{ buddy.setPointerCapture(e.pointerId); }catch(err){}
        }
        buddy.classList.add("ss-buddy-dragging");
        pauseWander();
    });

    buddy.addEventListener("pointermove",function(e){
        if(!dragging) return;
        var dx = e.clientX - sx, dy = e.clientY - sy;
        if(Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
        if(moved) setPos(ox + dx,oy + dy,false);
    });

    function endDrag(){
        if(!dragging) return;
        dragging = false;
        buddy.classList.remove("ss-buddy-dragging");
        if(!moved){
            if(open) closeChat(); else openChat();
        }else{
            setTimeout(resumeWander,900);
        }
    }

    buddy.addEventListener("pointerup",endDrag);
    buddy.addEventListener("pointercancel",endDrag);

    buddy.addEventListener("keydown",function(e){
        if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            if(open) closeChat(); else openChat();
        }
    });

    function visibleCards(){
        var all = document.querySelectorAll('[class*="card"]');
        var out = [];
        all.forEach(function(el){
            var tokens = (el.className && typeof el.className === "string") ? el.className.split(/\s+/) : [];
            if(!tokens.some(isRealCardToken)) return;
            var r = el.getBoundingClientRect();
            if(r.top > 70 && r.bottom < window.innerHeight - 20 && r.width > 80 && r.height > 80){
                out.push(r);
            }
        });
        return out;
    }

    function walkTo(x,cb){
        var dist = Math.abs(x - curX);
        var dur = Math.max(700,Math.min(3200,dist * 9));
        buddy.classList.add("ss-buddy-walking");
        buddy.classList.toggle("ss-buddy-face-left",x < curX);
        buddy.style.transition = "transform " + dur + "ms linear";
        buddy.style.transform = "translate3d(" + x + "px," + curY + "px,0)";
        curX = x;
        wanderTimer = setTimeout(function(){
            buddy.classList.remove("ss-buddy-walking");
            cb && cb();
        },dur);
    }

    function doIdleStand(){
        buddy.classList.remove("ss-buddy-walking","ss-buddy-sitting","ss-buddy-climbing");
        scheduleNext(2200 + Math.random() * 2600);
    }

    function doSit(){
        buddy.classList.remove("ss-buddy-walking","ss-buddy-climbing");
        buddy.classList.add("ss-buddy-sitting");
        scheduleNext(3000 + Math.random() * 3000);
    }

    function doWalkRandom(){
        var w = buddy.offsetWidth || 74;
        var targetX = 10 + Math.random() * (window.innerWidth - w - 20);
        setPos(curX,groundY(),true);
        walkTo(targetX,doNextAction);
    }

    function doClimb(){
        var cards = visibleCards();
        if(!cards.length){ doNextAction(); return; }

        var r = cards[Math.floor(Math.random() * cards.length)];
        var w = buddy.offsetWidth || 74, h = buddy.offsetHeight || 118;
        var left = Math.random() > 0.5;
        var targetX = left ? Math.max(6,r.left - w * 0.5) : Math.min(window.innerWidth - w - 6,r.right - w * 0.5);

        setPos(curX,groundY(),true);

        walkTo(targetX,function(){

            var topY = Math.max(10,r.top - h * 0.3);
            var botY = curY;

            buddy.classList.add("ss-buddy-climbing");
            buddy.style.transition = "transform 1100ms ease-in-out";
            buddy.style.transform = "translate3d(" + targetX + "px," + topY + "px,0)";
            curY = topY;

            wanderTimer = setTimeout(function(){
                buddy.style.transition = "transform 1000ms ease-in-out";
                buddy.style.transform = "translate3d(" + targetX + "px," + botY + "px,0)";
                curY = botY;

                wanderTimer = setTimeout(function(){
                    buddy.classList.remove("ss-buddy-climbing");
                    doNextAction();
                },1050);

            },1600);
        });
    }

    function doNextAction(){
        if(!wandering || open || dragging) return;
        var roll = Math.random();
        if(roll < 0.4) doWalkRandom();
        else if(roll < 0.62) doClimb();
        else if(roll < 0.82) doSit();
        else doIdleStand();
    }

    function clearPose(){
        buddy.classList.remove(
            "ss-buddy-walking","ss-buddy-sitting","ss-buddy-climbing",
            "ss-buddy-falling","ss-buddy-flying","ss-buddy-impact","ss-buddy-bump"
        );
    }

    function landAndStand(x,cb){
        var y = groundY();
        buddy.style.transition = "transform 260ms cubic-bezier(.4,0,.6,1)";
        buddy.style.transform = "translate3d(" + x + "px," + y + "px,0)";
        curX = x; curY = y;

        wanderTimer = setTimeout(function(){
            clearPose();
            buddy.classList.add("ss-buddy-impact");
            wanderTimer = setTimeout(function(){
                buddy.classList.remove("ss-buddy-impact");
                cb && cb();
            },320);
        },270);
    }

    function playEntrance(){
        var x = Math.max(20,window.innerWidth * 0.18);
        var startY = -160;
        curX = x; curY = startY;
        buddy.style.transition = "none";
        buddy.style.transform = "translate3d(" + x + "px," + startY + "px,0)";
        buddy.classList.add("ss-buddy-falling");
        void buddy.offsetWidth;

        setTimeout(function(){
            var y = groundY();
            buddy.style.transition = "transform 700ms cubic-bezier(.5,0,.85,.4)";
            buddy.style.transform = "translate3d(" + x + "px," + y + "px,0)";
            curY = y;
            setTimeout(function(){
                landAndStand(x,resumeWander);
            },720);
        },150);
    }

    /* ---------- scroll reactions ---------- */

    var scrollState = null;
    var scrollStopTimer = null;
    var lastScrollY = window.scrollY || window.pageYOffset || 0;

    function restartScrollStopTimer(){
        if(scrollStopTimer) clearTimeout(scrollStopTimer);
        scrollStopTimer = setTimeout(onScrollStop,220);
    }

    function onScrollStop(){
        if(scrollState === "falling"){
            landAndStand(curX,function(){
                scrollState = null;
                resumeWander();
            });
        }
    }

    function reactScrollDown(){
        if(dragging || open) return;
        if(scrollState === "falling"){ restartScrollStopTimer(); return; }
        if(scrollState) return;
        pauseWander();
        scrollState = "falling";
        clearPose();
        buddy.classList.add("ss-buddy-falling");
        buddy.style.transition = "transform 500ms ease-in";
        buddy.style.transform = "translate3d(" + curX + "px," + groundY() + "px,0)";
        curY = groundY();
        restartScrollStopTimer();
    }

    function reactScrollUp(){
        if(dragging || open || scrollState) return;
        pauseWander();
        scrollState = "flying";
        clearPose();
        buddy.classList.add("ss-buddy-flying");

        var topY = 14;
        buddy.style.transition = "transform 380ms ease-out";
        buddy.style.transform = "translate3d(" + curX + "px," + topY + "px,0)";
        curY = topY;

        wanderTimer = setTimeout(function(){
            clearPose();
            buddy.classList.add("ss-buddy-bump");

            wanderTimer = setTimeout(function(){
                clearPose();
                buddy.classList.add("ss-buddy-falling");
                var gy = groundY();
                buddy.style.transition = "transform 520ms cubic-bezier(.5,0,.85,.4)";
                buddy.style.transform = "translate3d(" + curX + "px," + gy + "px,0)";
                curY = gy;

                wanderTimer = setTimeout(function(){
                    landAndStand(curX,function(){
                        scrollState = null;
                        resumeWander();
                    });
                },530);

            },190);
        },390);
    }

    if(!reduceMotion){
        window.addEventListener("scroll",function(){
            var y = window.scrollY || window.pageYOffset || 0;
            var dy = y - lastScrollY;
            lastScrollY = y;
            if(Math.abs(dy) < 2) return;
            if(dy > 0) reactScrollDown();
            else reactScrollUp();
        },{ passive:true });
    }

    if(reduceMotion){
        setPos(Math.max(20,window.innerWidth * 0.18),groundY(),false);
    }else{
        setTimeout(playEntrance,900);
    }

    window.addEventListener("resize",function(){
        if(!dragging && !open) setPos(Math.min(curX,window.innerWidth - 90),Math.min(curY,window.innerHeight - 90),false);
    });
}


/* =========================================================
   12) LANGUAGE SWITCH — a clean EN / \u0939\u093F\u0902 pill that translates
   directly, with no external service. It swaps nav labels,
   every page's hero heading + intro, common UI chrome, and the
   Aegis assistant. Full paragraph-level page content (the
   detailed scam writeups) isn't translated \u2014 doing that
   accurately for all 24 pages by hand is a much bigger job;
   this covers what can be translated reliably right now. The
   choice is remembered (localStorage) and re-applied on every
   page load, including home.html.
========================================================= */

function splitIconLabel(text){

    text = text.replace(/\s+/g," ").trim();
    if(!text) return { lead:"", trail:"", label:"" };

    var lead = "", trail = "", label = text;

    if(label.codePointAt(0) > 127){
        var sp = label.indexOf(" ");
        if(sp !== -1){ lead = label.slice(0,sp); label = label.slice(sp + 1); }
    }

    label = label.trim();
    var lastSpace = label.lastIndexOf(" ");

    if(lastSpace !== -1){
        var lastWord = label.slice(lastSpace + 1);
        if(lastWord && lastWord.codePointAt(0) > 127){
            trail = lastWord;
            label = label.slice(0,lastSpace).trim();
        }
    }

    return { lead:lead, trail:trail, label:label };
}

function translateNav(lang){

    var selector = ".nav-links a, .nav-button, #ssBottomNav a, #ssBottomNav span, .mobile-nav a, .bottom-nav a";

    document.querySelectorAll(selector).forEach(function(el){

        if(!el.hasAttribute("data-ss-orig")){
            el.setAttribute("data-ss-orig",el.textContent);
        }

        var orig = el.getAttribute("data-ss-orig");

        if(lang === "en"){
            el.textContent = orig;
            return;
        }

        var parts = splitIconLabel(orig);
        var hiLabel = NAV_HI[parts.label];

        if(hiLabel){
            var out = hiLabel;
            if(parts.lead) out = parts.lead + " " + out;
            if(parts.trail) out = out + " " + parts.trail;
            el.textContent = out;
        }
    });
}

function translateHero(lang){

    var hero = findHero();
    if(!hero) return;

    var h1 = hero.querySelector("h1");
    var p = hero.querySelector(".hero-description") || hero.querySelector("p");

    [h1,p].forEach(function(el){

        if(!el) return;

        if(!el.hasAttribute("data-ss-orig")){
            el.setAttribute("data-ss-orig",el.textContent);
        }

        var orig = el.getAttribute("data-ss-orig");

        if(lang === "en"){
            el.textContent = orig;
            return;
        }

        var norm = orig.replace(/\s+/g," ").trim();
        var hiText = HERO_HI[norm];

        if(hiText) el.textContent = hiText;
    });
}

/* ---------- generic static-text translation (extensible page by page) ---------- */

var PAGE_TEXT_HI = {

    /* Play & Learn chrome (static shell around the game) */
    "🎮 Play & Learn":"🎮 खेलें और सीखें",
    "🏅 Your Badges":"🏅 आपके बैज",
    "Choose a Topic":"एक विषय चुनें",
    "Learn to protect yourself — one level at a time.":"खुद को सुरक्षित रखना सीखें — एक बार में एक कदम।",

    "Topic not found":"विषय नहीं मिला",
    "We couldn't find that learning path.":"हमें वह लर्निंग पाथ नहीं मिला।",
    "← Back to Play & Learn":"← खेलें और सीखें पर वापस जाएँ",
    "This learning path is still being built — check back soon!":"यह लर्निंग पाथ अभी बन रहा है — जल्द ही वापस देखें!",
    "← Back to Roadmap":"← रोडमैप पर वापस जाएँ",
    "📌 Quick refresher before you try the next level again — let's make sure this one's solid first.":"📌 अगला स्तर दोबारा आज़माने से पहले एक छोटा रिवीज़न — पहले इसे अच्छी तरह समझ लेते हैं।",
    "🧪 Try It Yourself":"🧪 खुद आज़माएँ",
    "I'm Ready — Take the Quiz →":"मैं तैयार हूँ — क्विज़ लें →",
    "Nice! →":"बढ़िया! →",

    /* checklist.html static shell (its own quiz question bank is
       rendered by that page's own script and isn't covered here) */
    "You're signed in ✓":"आप साइन इन हैं ✓",
    "Best Streak":"सर्वश्रेष्ठ स्ट्रीक",
    "Correct":"सही",
    "Current Score":"मौजूदा स्कोर",
    "Loading question...":"प्रश्न लोड हो रहा है...",
    "Next Question →":"अगला प्रश्न →",
    "OR":"या",
    "PERSONAL DIGITAL SECURITY CHECKUP":"व्यक्तिगत डिजिटल सुरक्षा जाँच",
    "Questions Answered":"उत्तर दिए गए प्रश्न",
    "Secure":"सुरक्षित",
    "Security Score":"सुरक्षा स्कोर",
    "Sign In":"साइन इन",
    "Sign Out":"साइन आउट",
    "Sign in to save your SafeShield account information.":"अपनी SafeShield खाता जानकारी सहेजने के लिए साइन इन करें।",
    "Stay alert. Protect your information. Think before you click.":"सतर्क रहें। अपनी जानकारी सुरक्षित रखें। क्लिक करने से पहले सोचें।",
    "Strong security starts with small habits.":"मज़बूत सुरक्षा छोटी आदतों से शुरू होती है।",
    "Test your cybersecurity instincts against realistic situations, spot common scam patterns and discover exactly where your digital security habits can improve.":"वास्तविक परिस्थितियों में अपनी साइबर सुरक्षा समझ को परखें, आम घोटाले के तरीके पहचानें और जानें कि आपकी डिजिटल सुरक्षा आदतों में कहाँ सुधार हो सकता है।",
    "Welcome to SafeShield":"SafeShield में आपका स्वागत है",
    "Wrong":"गलत",
    "Your SafeShield sign-in information is saved on this browser.":"आपकी SafeShield साइन-इन जानकारी इस ब्राउज़र पर सहेजी गई है।",
    "Your Security Level":"आपका सुरक्षा स्तर",
    "Your Security Score":"आपका सुरक्षा स्कोर",
    "© 2026 SafeShield | Educational Privacy & Scam Awareness Website":"© 2026 SafeShield | शैक्षिक प्राइवेसी और घोटाला जागरूकता वेबसाइट",
    "⚠️ Review Your Mistakes":"⚠️ अपनी गलतियाँ देखें",
    "📋 Review Mistakes":"📋 गलतियाँ देखें",
    "🔀 New Random Checkup":"🔀 नई रैंडम जाँच",
    "🔐 Sign In":"🔐 साइन इन",
    "🛡️ Your Security Upgrade Plan":"🛡️ आपकी सुरक्षा अपग्रेड योजना",

    /* home.html — full page content */
    "Security Status":"सुरक्षा स्थिति",
    "● PROTECTED":"● सुरक्षित",
    "Privacy":"प्राइवेसी",
    "Threat Awareness":"खतरे की जागरूकता",
    "Scam Protection":"घोटाला सुरक्षा",
    "Security Habits":"सुरक्षा आदतें",
    "Security knowledge made simple.":"सुरक्षा ज्ञान को आसान बनाया गया।",
    "Cybersecurity can feel complicated. SafeShield breaks important concepts into practical information that anyone can understand.":"साइबर सुरक्षा जटिल लग सकती है। SafeShield अहम अवधारणाओं को ऐसी व्यावहारिक जानकारी में बदलता है जिसे कोई भी समझ सके।",
    "Protect Your Privacy":"अपनी प्राइवेसी सुरक्षित रखें",
    "Learn practical ways to protect passwords, personal information, accounts, devices and digital identity.":"पासवर्ड, निजी जानकारी, खाते, डिवाइस और डिजिटल पहचान को सुरक्षित रखने के व्यावहारिक तरीके जानें।",
    "Recognize Threats":"खतरों को पहचानें",
    "Understand common scam and phishing techniques before they trick you into making a dangerous decision.":"आम घोटाले और फ़िशिंग तरीकों को समझें, इससे पहले कि वे आपसे कोई खतरनाक फ़ैसला करवा दें।",
    "Make Safer Decisions":"सुरक्षित फ़ैसले लें",
    "Use simple security tools, checklists and awareness techniques to build stronger everyday digital habits.":"रोज़मर्रा की मज़बूत डिजिटल आदतें बनाने के लिए आसान सुरक्षा टूल्स, चेकलिस्ट और जागरूकता तकनीकों का इस्तेमाल करें।",
    "One place for your digital safety.":"आपकी डिजिटल सुरक्षा के लिए एक जगह।",
    "Explore the major areas of cybersecurity awareness covered by SafeShield.":"SafeShield द्वारा कवर किए गए साइबर सुरक्षा जागरूकता के प्रमुख क्षेत्रों को देखें।",
    "Password Security":"पासवर्ड सुरक्षा",
    "Build stronger account protection.":"अपने खाते की सुरक्षा मज़बूत करें।",
    "Digital Privacy":"डिजिटल प्राइवेसी",
    "Control the information you share.":"आप जो जानकारी साझा करते हैं, उस पर नियंत्रण रखें।",
    "Phishing Awareness":"फ़िशिंग जागरूकता",
    "Spot suspicious messages and links.":"संदिग्ध मैसेज और लिंक पहचानें।",
    "Device Safety":"डिवाइस सुरक्षा",
    "Keep phones and computers safer.":"फ़ोन और कंप्यूटर को सुरक्षित रखें।",
    "Payment Safety":"भुगतान सुरक्षा",
    "Reduce financial security risks.":"वित्तीय सुरक्षा जोखिम कम करें।",
    "Online Safety":"ऑनलाइन सुरक्षा",
    "Browse and communicate more safely.":"ज़्यादा सुरक्षित तरीके से ब्राउज़ करें और बातचीत करें।",
    "Account Security":"खाता सुरक्षा",
    "Strengthen your important accounts.":"अपने ज़रूरी खातों को मज़बूत करें।",
    "Security Awareness":"सुरक्षा जागरूकता",
    "Think before you click or share.":"क्लिक करने या साझा करने से पहले सोचें।",
    "Don't let a scam catch you off guard.":"किसी घोटाले को आपको बेखबर न पकड़ने दें।",
    "Hover over the alerts to see how SafeShield highlights potential threats. Visit the Scams page to explore them in detail.":"SafeShield संभावित खतरों को कैसे दिखाता है, यह देखने के लिए अलर्ट पर होवर करें। विस्तार से जानने के लिए स्कैम पेज पर जाएँ।",
    "Phishing Attempts":"फ़िशिंग प्रयास",
    "Fake messages and websites may try to steal passwords, payment details or personal information.":"नकली मैसेज और वेबसाइटें पासवर्ड, भुगतान जानकारी या निजी जानकारी चुराने की कोशिश कर सकती हैं।",
    "⚠ Verify before clicking":"⚠ क्लिक करने से पहले जाँच लें",
    "Payment Scams":"भुगतान घोटाले",
    "Fraudsters can use fake payment requests, impersonation and urgency to manipulate victims.":"ठग नकली भुगतान अनुरोध, नकली पहचान और जल्दबाज़ी का इस्तेमाल कर लोगों को बहका सकते हैं।",
    "⚠ Verify every payment request":"⚠ हर भुगतान अनुरोध की जाँच करें",
    "Impersonation":"इम्पर्सनेशन",
    "Scammers may pretend to be banks, companies, officials, friends or family members.":"ठग बैंक, कंपनी, अधिकारी, दोस्त या परिवार के सदस्य होने का नाटक कर सकते हैं।",
    "⚠ Confirm their identity":"⚠ उनकी पहचान की पुष्टि करें",
    "Fake Job Offers":"नकली नौकरी ऑफ़र",
    "Fraudulent recruiters can use attractive job offers to request money or sensitive information.":"धोखेबाज़ भर्तीकर्ता आकर्षक नौकरी ऑफ़र देकर पैसे या संवेदनशील जानकारी माँग सकते हैं।",
    "⚠ Research first":"⚠ पहले जाँच-पड़ताल करें",
    "Prize Scams":"इनाम घोटाले",
    "Unexpected prize messages may ask for fees, account information or payment details.":"अचानक आए इनाम वाले मैसेज फ़ीस, खाता जानकारी या भुगतान जानकारी माँग सकते हैं।",
    "Don't pay to claim a prize":"इनाम पाने के लिए भुगतान न करें",
    "⚠ Don't pay to claim a prize":"⚠ इनाम पाने के लिए भुगतान न करें",
    "Social Engineering":"सोशल इंजीनियरिंग",
    "Attackers may exploit trust, fear, curiosity or urgency to convince you to take unsafe actions.":"हमलावर भरोसे, डर, जिज्ञासा या जल्दबाज़ी का फ़ायदा उठाकर आपसे असुरक्षित कदम उठवा सकते हैं।",
    "⚠ Stop and think":"⚠ रुकें और सोचें",
    "How SafeShield works.":"SafeShield कैसे काम करता है।",
    "Build better cybersecurity habits through four simple steps.":"चार आसान चरणों से बेहतर साइबर सुरक्षा आदतें बनाएँ।",
    "Learn":"सीखें",
    "Understand common cybersecurity and privacy risks.":"आम साइबर सुरक्षा और प्राइवेसी जोखिमों को समझें।",
    "Identify":"पहचानें",
    "Recognize suspicious behavior, messages and security warning signs.":"संदिग्ध व्यवहार, मैसेज और सुरक्षा चेतावनी के संकेत पहचानें।",
    "Protect":"सुरक्षा",
    "Stay Alert":"सतर्क रहें",
    "Continue improving your digital safety habits over time.":"समय के साथ अपनी डिजिटल सुरक्षा आदतों में सुधार करते रहें।",
    "Core Safety Areas":"मुख्य सुरक्षा क्षेत्र",
    "Security Categories":"सुरक्षा श्रेणियाँ",
    "/7 Awareness Mindset":"/7 जागरूकता मानसिकता",
    "Focus on Safer Decisions":"सुरक्षित फ़ैसलों पर ध्यान दें",
    "Make cybersecurity part of your everyday life.":"साइबर सुरक्षा को अपनी रोज़मर्रा की ज़िंदगी का हिस्सा बनाएँ।",
    "Explore SafeShield's protection guides, scam awareness resources, security tools and privacy checklist to strengthen your digital habits.":"अपनी डिजिटल आदतों को मज़बूत करने के लिए SafeShield की सुरक्षा गाइड, घोटाला जागरूकता संसाधन, सुरक्षा टूल्स और प्राइवेसी चेकलिस्ट देखें।",

    /* shared sign-in overlay + footer variants (appear on many pages) */
    "Welcome to SafeShield":"SafeShield में आपका स्वागत है",
    "Sign in to continue to your digital safety center.":"अपने डिजिटल सुरक्षा केंद्र तक पहुँचने के लिए साइन इन करें।",
    "Email":"ईमेल",
    "Password":"पासवर्ड",
    "Later":"बाद में",
    "Your SafeShield session is stored in this browser.":"आपका SafeShield सेशन इस ब्राउज़र में सहेजा गया है।",
    "↪ Log Out":"↪ लॉग आउट",
    "👤 Sign In":"👤 साइन इन",
    "Shield":"शील्ड",
    "Security Tip":"सुरक्षा टिप",
    "Security information.":"सुरक्षा जानकारी।",
    "Home":"होम",

    /* protect.html — full page content */
    "🛡️ Explore Protection":"🛡️ सुरक्षा देखें",
    "✓ Check My Security":"✓ मेरी सुरक्षा जाँचें",
    "Build Your Personal Security Shield":"अपनी निजी सुरक्षा शील्ड बनाएँ",
    "A few simple habits can dramatically improve the security of your accounts, devices and personal information.":"कुछ आसान आदतें आपके खातों, डिवाइस और निजी जानकारी की सुरक्षा में बड़ा फ़र्क ला सकती हैं।",
    "🛡️ Security Protection Score":"🛡️ सुरक्षा स्कोर",
    "Explore the protection cards to increase your awareness score.":"अपना जागरूकता स्कोर बढ़ाने के लिए सुरक्षा कार्ड देखें।",
    "Strong Passwords":"मज़बूत पासवर्ड",
    "Create long, unique passwords and avoid using the same password across multiple accounts.":"लंबे, अलग-अलग पासवर्ड बनाएँ और एक ही पासवर्ड कई खातों में इस्तेमाल करने से बचें।",
    "Learn More →":"और जानें →",
    "Stop Phishing":"फ़िशिंग रोकें",
    "Be cautious with unexpected emails, messages, attachments and links requesting sensitive information.":"अनपेक्षित ईमेल, मैसेज, अटैचमेंट और संवेदनशील जानकारी माँगने वाले लिंक से सावधान रहें।",
    "Secure Your Devices":"अपने डिवाइस सुरक्षित करें",
    "Keep your operating system, browser and applications updated with the latest security fixes.":"अपने ऑपरेटिंग सिस्टम, ब्राउज़र और ऐप्स को नवीनतम सुरक्षा अपडेट के साथ अपडेटेड रखें।",
    "Enable 2FA":"2FA चालू करें",
    "Add another verification step to your important accounts for stronger protection.":"बेहतर सुरक्षा के लिए अपने ज़रूरी खातों में एक और सत्यापन चरण जोड़ें।",
    "Verify Websites":"वेबसाइट सत्यापन",
    "Check website addresses carefully before entering passwords, payment details or personal information.":"पासवर्ड, भुगतान जानकारी या निजी जानकारी डालने से पहले वेबसाइट का पता ध्यान से जाँचें।",
    "Backup Important Data":"ज़रूरी डेटा का बैकअप लें",
    "Keep copies of important files so you can recover them after loss, damage or a security incident.":"ज़रूरी फ़ाइलों की कॉपी रखें ताकि नुकसान, खराबी या सुरक्षा घटना के बाद आप उन्हें वापस पा सकें।",
    "How Strong Is Your Security?":"आपकी सुरक्षा कितनी मज़बूत है?",
    "Complete this quick checklist to identify simple security habits you can improve today.":"आज ही सुधारी जा सकने वाली आसान सुरक्षा आदतें जानने के लिए यह छोटी चेकलिस्ट पूरी करें।",
    "Start your security check":"अपनी सुरक्षा जाँच शुरू करें",
    "Think Before You Trust":"भरोसा करने से पहले सोचें",
    "Good cybersecurity is often about slowing down and checking before acting.":"अच्छी साइबर सुरक्षा का मतलब अक्सर धीमे चलना और कार्रवाई से पहले जाँचना होता है।",
    "Don't Rush":"जल्दबाज़ी न करें",
    "Urgency is one of the most common tactics used to pressure people into making unsafe decisions.":"जल्दबाज़ी उन सबसे आम तरीकों में से एक है, जिनसे लोगों पर असुरक्षित फ़ैसले लेने का दबाव डाला जाता है।",
    "Check Independently":"खुद से जाँचें",
    "Contact organizations through official channels instead of relying on unexpected messages.":"अनपेक्षित मैसेज पर भरोसा करने के बजाय संस्थाओं से आधिकारिक माध्यम से संपर्क करें।",
    "Share Less":"कम जानकारी साझा करें",
    "Only provide sensitive information when you understand who is requesting it and why it is needed.":"संवेदनशील जानकारी तभी दें जब आपको पता हो कि कौन माँग रहा है और क्यों ज़रूरी है।",
    "Your Data Deserves a Strong Defense.":"आपके डेटा को एक मज़बूत सुरक्षा चाहिए।",
    "Build better digital habits today. Small actions can make a major difference to your online security.":"आज ही बेहतर डिजिटल आदतें अपनाएँ। छोटे कदम आपकी ऑनलाइन सुरक्षा में बड़ा फ़र्क ला सकते हैं।",
    "🛡️ Check My Security":"🛡️ मेरी सुरक्षा जाँचें",
    "Stay aware. Protect your information. Think before you click.":"जागरूक रहें। अपनी जानकारी सुरक्षित रखें। क्लिक करने से पहले सोचें।",
    "© 2026 SafeShield · Educational Digital Privacy & Security Website":"© 2026 SafeShield · शैक्षिक डिजिटल प्राइवेसी और सुरक्षा वेबसाइट",

    /* scam.html — full page content, including all 12 scam-type cards */
    "🔎 Explore Scam Types":"🔎 घोटालों के प्रकार देखें",
    "🛡️ Learn to Stay Safe":"🛡️ सुरक्षित रहना सीखें",
    "SafeShield Monitor":"SafeShield मॉनिटर",
    "● ACTIVE":"● सक्रिय",
    "Protection awareness":"सुरक्षा जागरूकता",
    "Scam categories":"घोटाला श्रेणियाँ",
    "Safety steps":"सुरक्षा कदम",
    "Pause before acting":"कार्रवाई से पहले रुकें",
    "Verify suspicious requests":"संदिग्ध अनुरोधों की जाँच करें",
    "Threat Library":"खतरा लाइब्रेरी",
    "Explore Common Scam Attacks":"आम घोटाला हमलों को देखें",
    "Learn how common scams operate and identify the warning signs that should make you stop.":"जानें कि आम घोटाले कैसे काम करते हैं और उन चेतावनी संकेतों को पहचानें जिन पर आपको रुक जाना चाहिए।",
    "Bank Account Scam":"बैंक खाता घोटाला",
    "A message claims your account is blocked, suspended or compromised and asks you to verify sensitive information.":"एक मैसेज दावा करता है कि आपका खाता ब्लॉक, सस्पेंड या हैक हो गया है और संवेदनशील जानकारी सत्यापित करने को कहता है।",
    "Analyze threat →":"खतरे का विश्लेषण करें →",
    "Prize & Lottery Scam":"इनाम और लॉटरी घोटाला",
    "You are told that you have won money, a prize or a reward despite never entering the competition.":"आपको बताया जाता है कि आपने पैसा, इनाम या पुरस्कार जीता है, जबकि आपने कभी प्रतियोगिता में भाग ही नहीं लिया।",
    "Fake Job Scam":"नकली नौकरी घोटाला",
    "A fake recruiter offers an attractive job, often requesting fees, personal documents or financial information.":"एक नकली भर्तीकर्ता आकर्षक नौकरी का ऑफ़र देता है, और अक्सर फ़ीस, निजी दस्तावेज़ या वित्तीय जानकारी माँगता है।",
    "Romance Scam":"रोमांस घोटाला",
    "A person builds emotional trust online and eventually asks for money, gifts or financial assistance.":"एक व्यक्ति ऑनलाइन भावनात्मक भरोसा बनाता है और आख़िर में पैसे, गिफ़्ट या आर्थिक मदद माँगता है।",
    "Delivery Scam":"डिलीवरी घोटाला",
    "A fake delivery notification claims your parcel is delayed, stuck or requires a small payment.":"एक नकली डिलीवरी सूचना दावा करती है कि आपका पार्सल देर से आ रहा है, अटका है या इसके लिए छोटा भुगतान चाहिए।",
    "Investment Scam":"निवेश घोटाला",
    "Someone promises unusually high returns with little or no risk and pressures you to invest quickly.":"कोई बिना जोखिम के असामान्य रूप से ज़्यादा रिटर्न का वादा करता है और आप पर जल्दी निवेश करने का दबाव डालता है।",
    "Tech Support Scam":"टेक सपोर्ट घोटाला",
    "A fake warning claims your device has a dangerous virus and asks you to install software or provide remote access.":"एक नकली चेतावनी दावा करती है कि आपके डिवाइस में खतरनाक वायरस है और सॉफ़्टवेयर इंस्टॉल करने या रिमोट एक्सेस देने को कहती है।",
    "Social Media Impersonation":"सोशल मीडिया इम्पर्सनेशन",
    "A fake profile pretends to be a friend, family member, celebrity or business and requests money.":"एक नकली प्रोफ़ाइल दोस्त, परिवार के सदस्य, सेलिब्रिटी या बिज़नेस होने का नाटक कर पैसे माँगती है।",
    "QR Code Scam":"क्यूआर कोड घोटाला",
    "A malicious or misleading QR code sends you to a fake website or initiates an unwanted payment.":"एक नुकसानदायक या गुमराह करने वाला क्यूआर कोड आपको नकली वेबसाइट पर भेजता है या अनचाहा भुगतान शुरू कर देता है।",
    "UPI Payment Scam":"यूपीआई भुगतान घोटाला",
    "A scammer tricks you into approving a payment, often pretending that you need to enter your PIN to receive money.":"एक ठग आपसे भुगतान मंज़ूर करवाता है, अक्सर यह कहकर कि पैसे पाने के लिए पिन डालना ज़रूरी है।",
    "Impersonation Scam":"इम्पर्सनेशन घोटाला",
    "Someone pretends to be a government official, police officer, employer or family member to pressure you into acting.":"कोई सरकारी अधिकारी, पुलिस अफ़सर, नियोक्ता या परिवार के सदस्य होने का नाटक कर आप पर कार्रवाई का दबाव डालता है।",
    "Phishing Scam":"फ़िशिंग घोटाला",
    "A fake email, message or website attempts to steal your passwords, financial details or personal information.":"एक नकली ईमेल, मैसेज या वेबसाइट आपके पासवर्ड, वित्तीय जानकारी या निजी जानकारी चुराने की कोशिश करती है।",
    "Stop When You See These Signs":"इन संकेतों को देखकर रुक जाएँ",
    "These signals deserve your attention.":"इन संकेतों पर आपका ध्यान ज़रूरी है।",
    "SafeShield Protocol":"SafeShield प्रोटोकॉल",
    "10 seconds.":"10 सेकंड।",
    "Scammers rely on emotional reactions. A short pause gives you time to question the request and verify it independently.":"ठग भावनात्मक प्रतिक्रियाओं पर भरोसा करते हैं। थोड़ा रुकने से आपको अनुरोध पर सवाल उठाने और खुद जाँचने का समय मिलता है।",
    "STOP":"रुकें",
    "Don't react immediately to pressure, threats or exciting offers.":"दबाव, धमकी या लुभावने ऑफ़र पर तुरंत प्रतिक्रिया न दें।",
    "THINK":"सोचें",
    "Ask yourself whether the request actually makes sense.":"खुद से पूछें कि क्या यह अनुरोध सच में तर्कसंगत है।",
    "VERIFY":"जाँचें",
    "Contact the organization or person using an independent official channel.":"संस्था या व्यक्ति से किसी स्वतंत्र आधिकारिक माध्यम से संपर्क करें।",
    "ACT":"कार्रवाई करें",
    "Only continue once you are confident the request is legitimate.":"तभी आगे बढ़ें जब आपको यक़ीन हो कि अनुरोध असली है।",
    "Stay one step ahead of scammers.":"ठगों से हमेशा एक कदम आगे रहें।",
    "Explore SafeShield's protection guides, security tools and checklist to build safer digital habits.":"सुरक्षित डिजिटल आदतें बनाने के लिए SafeShield की सुरक्षा गाइड, सुरक्षा टूल्स और चेकलिस्ट देखें।",
    "🛡️ Protect Yourself":"🛡️ खुद को सुरक्षित रखें",
    "🔧 Explore Security Tools":"🔧 सुरक्षा टूल्स देखें",
    "A cybersecurity and digital privacy awareness platform designed to help people recognize threats before they become victims.":"एक साइबर सुरक्षा और डिजिटल प्राइवेसी जागरूकता मंच, जो लोगों को शिकार बनने से पहले खतरों को पहचानने में मदद करता है।",
    "Scam Center":"स्कैम सेंटर",
    "Security Tools":"सुरक्षा टूल्स",
    "Safety Checklist":"सुरक्षा चेकलिस्ट",
    "Safety Protocol":"सुरक्षा प्रोटोकॉल",
    "Remember":"याद रखें",
    "Recognize":"पहचानें",
    "Think Before Acting":"कार्रवाई से पहले सोचें",
    "Educational Cybersecurity & Scam Awareness Platform":"शैक्षिक साइबर सुरक्षा और घोटाला जागरूकता मंच",

    /* shared UI strings across the 12 individual scam-type pages
       (bank/prize/job/romance/delivery/investment/tech/media/qr/upi/impersonation/phishing) */
    "Just now":"अभी-अभी",
    "🚨 Hunt For The Red Flags":"🚨 चेतावनी संकेत ढूँढें",
    "Hover over each warning sign, then click it to reveal why scammers use it.":"हर चेतावनी संकेत पर होवर करें, फिर यह जानने के लिए क्लिक करें कि ठग इसका इस्तेमाल क्यों करते हैं।",
    "🚨 Scam Risk":"🚨 घोटाला जोखिम",
    "🛡️ How To Protect Yourself":"🛡️ खुद को कैसे सुरक्षित रखें",
    "Tap each safety rule after you've checked it. These green safety tips are designed to help you build safer banking habits.":"जाँचने के बाद हर सुरक्षा नियम पर टैप करें। ये हरे सुरक्षा टिप्स आपको सुरक्षित आदतें बनाने में मदद करने के लिए बनाए गए हैं।",
    "🔐 What Should You Do?":"🔐 आपको क्या करना चाहिए?",
    "🎯 Can You Beat The Scam?":"🎯 क्या आप घोटाले को मात दे सकते हैं?",
    "You receive this message:":"आपको यह मैसेज मिलता है:",
    "What's the safest response?":"सबसे सुरक्षित जवाब क्या है?",
    "🔄 Try Again":"🔄 फिर कोशिश करें",
    "🧠 Remember This":"🧠 यह याद रखें",
    "Home Page":"होम पेज",
    "All Scams":"सभी घोटाले",

    /* bank.html — unique content */
    "🏦 How Does a Bank Scam Work?":"🏦 बैंक घोटाला कैसे काम करता है?",
    "A bank scam usually begins with an unexpected SMS, email, phone call or social media message. The scammer pretends to represent your bank and claims there is a problem with your account.":"बैंक घोटाला आमतौर पर एक अनपेक्षित एसएमएस, ईमेल, फ़ोन कॉल या सोशल मीडिया मैसेज से शुरू होता है। ठग आपके बैंक की तरफ़ से होने का नाटक करता है और दावा करता है कि आपके खाते में कोई समस्या है।",
    "The goal is to make you panic so that you click a fake link or provide sensitive information such as your password, card details or OTP.":"मकसद आपको घबराना है, ताकि आप एक नकली लिंक पर क्लिक कर दें या पासवर्ड, कार्ड जानकारी या ओटीपी जैसी संवेदनशील जानकारी दे दें।",
    "📩 UNKNOWN BANK MESSAGE":"📩 अज्ञात बैंक मैसेज",
    "⚠️ URGENT: ACCOUNT SECURITY ALERT":"⚠️ तुरंत ध्यान दें: खाता सुरक्षा चेतावनी",
    "Your bank account has been temporarily restricted because suspicious activity was detected.":"संदिग्ध गतिविधि मिलने के कारण आपका बैंक खाता अस्थायी रूप से प्रतिबंधित कर दिया गया है।",
    "Your account may be permanently blocked. Verify your account immediately.":"आपका खाता हमेशा के लिए ब्लॉक हो सकता है। तुरंत अपना खाता सत्यापित करें।",
    "🔗 Verify Account":"🔗 खाता सत्यापित करें",
    "⏰ Urgent Deadline":"⏰ तुरंत की समय सीमा",
    "Scammers create a short deadline to stop you from thinking carefully or checking with your bank.":"ठग एक छोटी समय सीमा बनाते हैं ताकि आप ध्यान से न सोचें या अपने बैंक से जाँच न करें।",
    "🔢 OTP Request":"🔢 ओटीपी माँग",
    "Never share an OTP with someone who contacts you unexpectedly. An OTP can be used to authorize transactions or access accounts.":"अचानक संपर्क करने वाले किसी व्यक्ति के साथ कभी भी ओटीपी साझा न करें। ओटीपी से लेन-देन को मंज़ूरी दी जा सकती है या खाते में पहुँचा जा सकता है।",
    "🔗 Unexpected Link":"🔗 अनपेक्षित लिंक",
    "The link may lead to a fake banking website designed to steal your login details or card information.":"यह लिंक एक नकली बैंकिंग वेबसाइट पर ले जा सकता है, जो आपकी लॉगिन जानकारी या कार्ड जानकारी चुराने के लिए बनाई गई है।",
    "🔑 Password Request":"🔑 पासवर्ड माँग",
    "Your password should remain private. Never provide your banking password through a message or unexpected call.":"आपका पासवर्ड निजी रहना चाहिए। किसी मैसेज या अनपेक्षित कॉल के ज़रिए कभी भी अपना बैंकिंग पासवर्ड न दें।",
    "📱 Fake Customer Support":"📱 नकली ग्राहक सहायता",
    "Scammers may pretend to be bank employees and ask you to install software or share sensitive information.":"ठग बैंक कर्मचारी होने का नाटक कर सकते हैं और आपसे सॉफ़्टवेयर इंस्टॉल करने या संवेदनशील जानकारी साझा करने को कह सकते हैं।",
    "😨 Fear & Panic":"😨 डर और घबराहट",
    "Threats such as \"your account will be closed\" are designed to make you react emotionally instead of verifying the message.":"\"आपका खाता बंद हो जाएगा\" जैसी धमकियाँ आपको मैसेज की जाँच करने के बजाय भावनात्मक रूप से प्रतिक्रिया करवाने के लिए बनाई जाती हैं।",
    "95% Suspicious":"95% संदिग्ध",
    "⬜ Never share your OTP.":"⬜ अपना ओटीपी कभी साझा न करें।",
    "⬜ Never share your banking password.":"⬜ अपना बैंकिंग पासवर्ड कभी साझा न करें।",
    "⬜ Don't use unexpected banking links.":"⬜ अनपेक्षित बैंकिंग लिंक का इस्तेमाल न करें।",
    "⬜ Open your banking app yourself.":"⬜ खुद अपना बैंकिंग ऐप खोलें।",
    "⬜ Contact your bank through a trusted method.":"⬜ भरोसेमंद तरीके से अपने बैंक से संपर्क करें।",
    "🔗 Click the link immediately":"🔗 तुरंत लिंक पर क्लिक करें",
    "🏦 Open your official banking app yourself":"🏦 खुद अपना आधिकारिक बैंकिंग ऐप खोलें",
    "🔢 Reply with your OTP":"🔢 अपने ओटीपी के साथ जवाब दें",
    "📞 Call the number in the message":"📞 मैसेज में दिए नंबर पर कॉल करें",
    "Next Scam → 🎁 Prize Scam":"अगला घोटाला → 🎁 इनाम घोटाला",

    /* register.html — full page content */
    "🚨 Report Cyber Crime":"🚨 साइबर क्राइम की शिकायत करें",
    "↓ How It Works":"↓ यह कैसे काम करता है",
    "INDIA • CYBER FINANCIAL FRAUD":"भारत • साइबर वित्तीय धोखाधड़ी",
    "Cyber Crime Helpline":"साइबर क्राइम हेल्पलाइन",
    "For immediate reporting of cyber financial fraud, call the National Cyber Crime Helpline.":"साइबर वित्तीय धोखाधड़ी की तुरंत शिकायत के लिए नेशनल साइबर क्राइम हेल्पलाइन पर कॉल करें।",
    "📞 Call 1930":"📞 1930 पर कॉल करें",
    "🌐 Portal":"🌐 पोर्टल",
    "The official portal currently identifies 1930 as a 24×7 number for immediate reporting of cyber financial fraud.":"आधिकारिक पोर्टल के अनुसार, 1930 साइबर वित्तीय धोखाधड़ी की तुरंत शिकायत के लिए एक 24×7 नंबर है।",
    "THE RESPONSE PLAN":"प्रतिक्रिया योजना",
    "What should you do after a cyber scam?":"साइबर घोटाले के बाद आपको क्या करना चाहिए?",
    "Don't panic and don't delete evidence. Follow these steps in order and report the incident as soon as possible.":"घबराएँ नहीं और सबूत न मिटाएँ। इन चरणों को क्रम से पूरा करें और जल्द से जल्द घटना की शिकायत करें।",
    "Stop the damage":"नुकसान रोकें",
    "Stop communicating with the scammer. Do not send additional money, OTPs, passwords, card details or remote-access permissions.":"ठग से बात करना बंद करें। और पैसे, ओटीपी, पासवर्ड, कार्ड जानकारी या रिमोट-एक्सेस अनुमति न भेजें।",
    "Call 1930":"1930 पर कॉल करें",
    "If money has been lost through a cyber financial fraud, report it immediately through the National Cyber Crime Helpline.":"अगर साइबर वित्तीय धोखाधड़ी से पैसे गँवाए हैं, तो तुरंत नेशनल साइबर क्राइम हेल्पलाइन के ज़रिए शिकायत करें।",
    "File online":"ऑनलाइन शिकायत दर्ज करें",
    "Use the official National Cyber Crime Reporting Portal to submit the relevant complaint and provide accurate incident details.":"सही शिकायत दर्ज करने और घटना की सही जानकारी देने के लिए आधिकारिक नेशनल साइबर क्राइम रिपोर्टिंग पोर्टल का इस्तेमाल करें।",
    "Save everything":"सब कुछ सहेजें",
    "Keep transaction details, screenshots, phone numbers, URLs, emails, messages and other evidence connected with the incident.":"लेन-देन का विवरण, स्क्रीनशॉट, फ़ोन नंबर, यूआरएल, ईमेल, मैसेज और घटना से जुड़े अन्य सबूत रखें।",
    "TIME MATTERS":"समय मायने रखता है",
    "How quickly should you report?":"आपको कितनी जल्दी शिकायत करनी चाहिए?",
    "⚡ Financial fraud":"⚡ वित्तीय धोखाधड़ी",
    "If money has been transferred or debited because of a cyber scam, act immediately. The official system is designed for rapid reporting of financial cyber fraud.":"अगर किसी साइबर घोटाले की वजह से पैसे ट्रांसफ़र या डेबिट हुए हैं, तो तुरंत कार्रवाई करें। आधिकारिक सिस्टम वित्तीय साइबर धोखाधड़ी की तेज़ शिकायत के लिए बनाया गया है।",
    "Why waiting can hurt":"इंतज़ार करना नुकसानदायक क्यों है",
    "Digital payments can move quickly between accounts. Early reporting gives the relevant authorities, banks and financial intermediaries more opportunity to act on the transaction.":"डिजिटल भुगतान खातों के बीच तेज़ी से आगे बढ़ सकते हैं। जल्दी शिकायत करने से संबंधित अधिकारियों, बैंकों और वित्तीय संस्थानों को लेन-देन पर कार्रवाई करने का बेहतर मौका मिलता है।",
    "KEEP YOUR EVIDENCE":"अपने सबूत रखें",
    "What information should you have ready?":"आपके पास कौन-सी जानकारी तैयार होनी चाहिए?",
    "Accurate information makes your complaint easier to understand. Keep whatever is available — don't delay reporting simply because something is missing.":"सही जानकारी आपकी शिकायत को समझना आसान बनाती है। जो भी उपलब्ध हो उसे रखें — कुछ जानकारी न होने की वजह से शिकायत करने में देर न करें।",
    "Transaction ID, date, amount and relevant payment details.":"ट्रांज़ैक्शन आईडी, तारीख़, राशि और संबंधित भुगतान जानकारी।",
    "Numbers used by the scammer, including WhatsApp or other messaging accounts.":"ठग द्वारा इस्तेमाल किए गए नंबर, जिसमें व्हाट्सऐप या अन्य मैसेजिंग अकाउंट शामिल हैं।",
    "Website URLs, payment links or suspicious pages involved in the scam.":"घोटाले से जुड़ी वेबसाइट यूआरएल, भुगतान लिंक या संदिग्ध पेज।",
    "Keep screenshots, emails, chat messages and other communication.":"स्क्रीनशॉट, ईमेल, चैट मैसेज और अन्य बातचीत सहेजें।",
    "Relevant bank, wallet, merchant or UPI information connected to the transaction.":"लेन-देन से जुड़ी संबंधित बैंक, वॉलेट, मर्चेंट या यूपीआई जानकारी।",
    "Note approximately when the scam started, when you interacted and when the transaction occurred.":"यह नोट करें कि घोटाला लगभग कब शुरू हुआ, आपने कब बातचीत की और लेन-देन कब हुआ।",
    "QUICK CHECK":"त्वरित जाँच",
    "What should you do right now?":"आपको अभी क्या करना चाहिए?",
    "Answer two quick questions to get a simple action recommendation.":"एक आसान कार्रवाई सुझाव पाने के लिए दो त्वरित सवालों के जवाब दें।",
    "Incident Response Checker":"घटना प्रतिक्रिया जाँचकर्ता",
    "This is an educational guide, not an official complaint submission.":"यह एक शैक्षिक गाइड है, आधिकारिक शिकायत दर्ज करने का माध्यम नहीं।",
    "1. Did money leave your bank account, card, wallet or UPI account?":"1. क्या आपके बैंक खाते, कार्ड, वॉलेट या यूपीआई खाते से पैसे निकले?",
    "Yes":"हाँ",
    "No":"नहीं",
    "2. Is the incident happening right now or very recently?":"2. क्या यह घटना अभी हो रही है या बहुत हाल ही में हुई?",
    "🔎 Check My Next Step":"🔎 मेरा अगला कदम जाँचें",
    "Ready to report?":"शिकायत करने के लिए तैयार हैं?",
    "Use the official National Cyber Crime Reporting Portal to report a cybercrime. For cyber financial fraud, you can also call 1930 for immediate reporting.":"साइबर क्राइम की शिकायत करने के लिए आधिकारिक नेशनल साइबर क्राइम रिपोर्टिंग पोर्टल का इस्तेमाल करें। साइबर वित्तीय धोखाधड़ी के लिए, आप तुरंत शिकायत के लिए 1930 पर भी कॉल कर सकते हैं।",
    "🚨 Open Cyber Crime Portal":"🚨 साइबर क्राइम पोर्टल खोलें"
};

var PAGE_TEXT_SKIP_IDS = [
    "topicGrid","badgeShelf","statsRow","roadmapNodes","lessonPoints","simBody",
    "quizCard","resultCard","topicIcon","topicTitle","topicProgressLabel",
    "lessonEyebrow","lessonTitle","soonIcon","soonTitle",
    "badgeModalIcon","badgeModalTitle","badgeModalDesc"
];

function translatePageText(lang){

    var selector = "h1,h2,h3,h4,p,li,button,a,label,span,div";

    document.querySelectorAll(selector).forEach(function(el){

        if(el.children.length > 0) return;

        if(el.closest(".ss-buddy,.ss-buddy-chat,.ss-lang-switch,nav,.hero,.pl-hero")) return;

        for(var i=0;i<PAGE_TEXT_SKIP_IDS.length;i++){
            if(el.id === PAGE_TEXT_SKIP_IDS[i] || el.closest("#" + PAGE_TEXT_SKIP_IDS[i])){
                return;
            }
        }

        var live = el.textContent;
        var liveNorm = live.replace(/\s+/g," ").trim();
        if(!liveNorm) return;

        if(!el.hasAttribute("data-ss-orig")){
            el.setAttribute("data-ss-orig",live);
        }

        var orig = el.getAttribute("data-ss-orig");
        var origNorm = orig.replace(/\s+/g," ").trim();

        if(lang === "en"){
            el.textContent = orig;
            return;
        }

        var hi = PAGE_TEXT_HI[origNorm];
        if(hi) el.textContent = hi;
    });
}

function translateChrome(lang){

    var accountName = document.getElementById("ssAccountName");
    if(accountName){
        var live = accountName.textContent.trim();
        if(lang === "hi"){
            if(NAV_HI[live]) accountName.textContent = NAV_HI[live];
        }else{
            if(live === NAV_HI["Sign In"]) accountName.textContent = "Sign In";
            else if(live === NAV_HI["Guest Account"]) accountName.textContent = "Guest Account";
        }
    }

    document.querySelectorAll(".ss-menu-toggle,#ssMobileToggle").forEach(function(el){
        el.setAttribute("aria-label",lang === "hi" ? "नेविगेशन मेनू खोलें" : "Open navigation menu");
    });

    var input = document.getElementById("ssBuddyInput");
    if(input){
        input.setAttribute("placeholder",lang === "hi" ?
            "किसी घोटाले या सुरक्षा टिप के बारे में पूछें\u2026" :
            "Ask about a scam or safety tip\u2026");
    }

    var closeBtn = document.getElementById("ssBuddyClose");
    if(closeBtn) closeBtn.setAttribute("aria-label",lang === "hi" ? "चैट बंद करें" : "Close chat");

    var sendBtn = document.querySelector(".ss-buddy-send");
    if(sendBtn) sendBtn.setAttribute("aria-label",lang === "hi" ? "भेजें" : "Send");
}

function initLanguageSwitch(){

    if(document.getElementById("ssLangSwitch")) return;

    var wrap = document.createElement("div");
    wrap.className = "ss-lang-switch";
    wrap.id = "ssLangSwitch";
    wrap.setAttribute("aria-label","Language");

    wrap.innerHTML =
        '<button type="button" class="ss-lang-btn" data-lang="en">EN</button>' +
        '<button type="button" class="ss-lang-btn" data-lang="hi">\u0939\u093F\u0902</button>';

    document.body.appendChild(wrap);

    var buttons = wrap.querySelectorAll(".ss-lang-btn");

    function setActive(lang){
        buttons.forEach(function(b){
            b.classList.toggle("ss-lang-active",b.getAttribute("data-lang") === lang);
        });
    }

    function applyLang(lang,fromUser){

        currentLang = lang;
        window.ssLang = lang;

        if(fromUser){
            try{ localStorage.setItem(LANG_KEY,lang); }catch(e){}
        }

        setActive(lang);
        translateNav(lang);
        translateHero(lang);
        translateChrome(lang);
        translatePageText(lang);

        try{
            document.dispatchEvent(new CustomEvent("ssLangChange",{ detail:{ lang:lang } }));
        }catch(e){}
    }

    buttons.forEach(function(b){
        b.addEventListener("click",function(){
            applyLang(b.getAttribute("data-lang"),true);
        });
    });

    applyLang(currentLang,false);
}


/* =========================================================
   INIT
========================================================= */

function init(){
    fixNavLinks();
    ensureMobileToggle();
    ensureSignIn();
    ensureCommonBottomNav();
    ensureScrollReveal();
    document.body.classList.add("ss-tone-" + getPageTone());
    injectHeroBadge();
    animateHeroEntrance();
    enhanceCards();
    initScanCursor();
    initCardKeyboardAccess();
    initBuddy();
    initLanguageSwitch();
}

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded",init);
}else{
    init();
}

})();
