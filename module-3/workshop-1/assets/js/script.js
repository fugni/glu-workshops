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

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

// sets slides next to eachother when page is loaded
window.addEventListener("load", () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + "px";
    };

    slides.forEach(setSlidePosition);
});

// slide changer
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};

// next slide & audio
const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);

    currentAudio++;
    if (currentAudio == 5) {
        currentAudio = 0;
    }

    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
});

// previous slide & audio
const prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    
    currentAudio--;
    if (currentAudio == -1) {
        currentAudio = 4;
    }

    audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
    nowPlaying.textContent = audioNameArray[currentAudio];
});

// change slide & audio on list click
const audioList = document.querySelector(".audio-list");
const audioListItem = Array.from(audioList.children);

audioList.addEventListener("click", e => {
    const targetAudio = e.target.closest("button");

    console.log(targetAudio);
})

// function setAudio(a) {
//     currentAudio = a;
//     audio.setAttribute("src", "assets/audio/" + audioSrcArray[currentAudio]);
//     nowPlaying.textContent = audioNameArray[currentAudio];
// }
