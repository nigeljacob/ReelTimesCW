let Introduction = document.getElementById("Introduction");
let history = document.getElementById("HistoryHollyWood");
let Today = document.getElementById("HollywoodToday");
let Explore = document.getElementById("ExploreNow");

let IntroductionButton = document.getElementById("IntroButton");
let historyButton = document.getElementById("HistoryButton");
let TodayButton = document.getElementById("TodayButton");
let ExploreButton = document.getElementById("ExploreButton");

let prevoius = Introduction;
Introduction.classList.add("aciveAnchor");

IntroductionButton.addEventListener('click', () => {
    prevoius.classList.remove("aciveAnchor");
    Introduction.classList.add("aciveAnchor");
    prevoius = Introduction;
})

historyButton.addEventListener('click', () => {
    prevoius.classList.remove("aciveAnchor");
    history.classList.add("aciveAnchor");
    prevoius = history;
})

TodayButton.addEventListener('click', () => {
    prevoius.classList.remove("aciveAnchor");
    Today.classList.add("aciveAnchor");
    prevoius = Today;
})

ExploreButton.addEventListener('click', () => {
    prevoius.classList.remove("aciveAnchor");
    Explore.classList.add("aciveAnchor");
    prevoius = Explore;
})