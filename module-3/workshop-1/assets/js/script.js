const audioSrcArray = [
    "buttercup.mp3",
    "soft-boy.mp3",
    "violet.mp3",
    "sorting-algorithms.mp3",
    "little-dark-age.mp3",
];

const audioNameArray = [
    "Buttercup - Jack Stauber",
    "Soft Boy - Wilbur Soot",
    "violet - vylt",
    "sorting algorithms - AlphaGX",
    "Little Dark Age - MGMT",
];

var currentAudio = 0;
var audio = document.getElementById("audio");
var nowPlaying = document.getElementById("now-playing");

function nextAudio() {
    currentAudio++;
    if (currentAudio == 5) {
        currentAudio = 0;
    }
    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
}

function previousAudio() {
    currentAudio--;
    if (currentAudio == -1) {
        currentAudio = 4;
    }
    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
}

function setAudio(a) {
    currentAudio = a;
    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
}
