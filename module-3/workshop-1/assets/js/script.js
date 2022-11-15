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

let currentAudio = 0;
const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("now-playing");

const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".previous-button");

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

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