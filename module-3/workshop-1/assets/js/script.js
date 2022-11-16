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

// sets slides next to eachother
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);

// change slide function
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

// next audio
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide)

    currentAudio++;
    if (currentAudio == 5) {
        currentAudio = 0;
    }
    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
});

// previous audio
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide)

    currentAudio--;
    if (currentAudio == -1) {
        currentAudio = 4;
    }
    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
});

function previousAudio() {

}

function setAudio(a) {
    currentAudio = a;
    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
}
