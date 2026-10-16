/* =========================================================
   SAFESHIELD — PLAY & LEARN ENGINE
   Handles: progress storage (scoped to the signed-in account),
   badge logic, roadmap rendering, and the lesson → simulation →
   quiz flow for a single topic on learn.html. The hub page
   (play.html) uses the storage/badge helpers directly too.
========================================================= */

var SSGame = (function(){
"use strict";

var STORAGE_KEY = "safeshieldGameProgress";


/* =========================================================
   IDENTITY + STORAGE
========================================================= */

function getIdentity(){

    var signed = localStorage.getItem("safeshieldSignedIn") === "1";
    var user = localStorage.getItem("safeshieldUser");

    return signed && user ? user : "guest";
}

function isSignedIn(){
    return localStorage.getItem("safeshieldSignedIn") === "1";
}

function loadAll(){

    try{
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    }catch(e){
        return {};
    }
}

function saveAll(all){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function getTopicProgress(topicKey){

    var all = loadAll();
    var identity = getIdentity();

    if(!all[identity]) all[identity] = {};
    if(!all[identity][topicKey]){
        all[identity][topicKey] = { passedLevels: [], scores: {}, reviewFor: null };
    }

    return all[identity][topicKey];
}

function saveTopicProgress(topicKey, progress){

    var all = loadAll();
    var identity = getIdentity();

    if(!all[identity]) all[identity] = {};
    all[identity][topicKey] = progress;

    saveAll(all);
}


/* =========================================================
   LEVEL STATE
========================================================= */

function isLevelUnlocked(topicKey, levelIndex){

    if(levelIndex === 0) return true;

    var topic = GAME_TOPICS[topicKey];
    var progress = getTopicProgress(topicKey);
    var prevLevel = topic.levels[levelIndex - 1];

    return prevLevel ? progress.passedLevels.indexOf(prevLevel.id) !== -1 : false;
}

function isLevelPassed(topicKey, levelIndex){

    var topic = GAME_TOPICS[topicKey];
    var progress = getTopicProgress(topicKey);
    var level = topic.levels[levelIndex];

    return level ? progress.passedLevels.indexOf(level.id) !== -1 : false;
}


/* =========================================================
   BADGES
========================================================= */

function computeTopicBadges(topicKey){

    var topic = GAME_TOPICS[topicKey];
    var progress = getTopicProgress(topicKey);
    var total = topic.levels.length;
    var passed = progress.passedLevels.length;

    if(total === 0){
        return { started:false, halfway:false, master:false };
    }

    return {
        started: passed >= 1,
        halfway: passed >= Math.ceil(total / 2),
        master: passed === total
    };
}

function isChampion(){

    var playableTopics = GAME_TOPIC_ORDER.filter(function(key){
        return GAME_TOPICS[key].levels.length > 0;
    });

    if(!playableTopics.length) return false;

    return playableTopics.every(function(key){
        return computeTopicBadges(key).master;
    });
}

/* Diffs badge state before/after an action to report what's newly earned */
function diffNewBadges(beforeBadges, afterBadges){

    var justEarned = [];

    ["started","halfway","master"].forEach(function(key){
        if(!beforeBadges[key] && afterBadges[key]) justEarned.push(key);
    });

    return justEarned;
}


/* =========================================================
   PASS / FAIL A LEVEL
========================================================= */

function passLevel(topicKey, levelIndex, scorePercent){

    var topic = GAME_TOPICS[topicKey];
    var level = topic.levels[levelIndex];
    var progress = getTopicProgress(topicKey);

    var beforeBadges = computeTopicBadges(topicKey);
    var wasChampion = isChampion();

    if(progress.passedLevels.indexOf(level.id) === -1){
        progress.passedLevels.push(level.id);
    }
    progress.scores[level.id] = scorePercent;

    /* reviewFor stores the level index the learner originally
       failed. A pass "counts as the review" when it's the level
       immediately before that target — i.e. levelIndex + 1. */
    var wasReviewing = progress.reviewFor === levelIndex + 1;
    var reviewTarget = progress.reviewFor;
    progress.reviewFor = null;

    saveTopicProgress(topicKey, progress);

    var afterBadges = computeTopicBadges(topicKey);
    var newBadges = diffNewBadges(beforeBadges, afterBadges);
    var newChampion = !wasChampion && isChampion();

    var isLastLevel = levelIndex === topic.levels.length - 1;

    /* If this pass was a "review" pass triggered by an earlier
       failure further ahead, send the learner back to the level
       they originally failed instead of just the next one. */
    var resumeIndex = wasReviewing ? reviewTarget : null;

    return {
        newBadges: newBadges,
        newChampion: newChampion,
        isLastLevel: isLastLevel,
        resumeIndex: resumeIndex
    };
}

function failLevel(topicKey, levelIndex, scorePercent){

    var progress = getTopicProgress(topicKey);
    var topic = GAME_TOPICS[topicKey];
    var level = topic.levels[levelIndex];

    progress.scores[level.id] = scorePercent;

    var targetIndex;

    if(levelIndex > 0){
        progress.reviewFor = levelIndex;
        targetIndex = levelIndex - 1;
    }else{
        progress.reviewFor = null;
        targetIndex = 0;
    }

    saveTopicProgress(topicKey, progress);

    return { targetIndex: targetIndex, isReview: levelIndex > 0 };
}


/* =========================================================
   PUBLIC API
========================================================= */

return {
    getIdentity: getIdentity,
    isSignedIn: isSignedIn,
    getTopicProgress: getTopicProgress,
    isLevelUnlocked: isLevelUnlocked,
    isLevelPassed: isLevelPassed,
    computeTopicBadges: computeTopicBadges,
    isChampion: isChampion,
    passLevel: passLevel,
    failLevel: failLevel
};

})();
