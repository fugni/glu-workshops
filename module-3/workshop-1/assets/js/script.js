var audio1 = document.getElementById("buttercup-audio");
var audio2 = document.getElementById("soft-boy-audio");
var audio3 = document.getElementById("violet-audio");
var audio4 = document.getElementById("sorting-algorithms-audio");
var audio5 = document.getElementById("little-dark-age-audio");

function toggleAudio1() {
    if (audio1.paused) { 
        audio1.play()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
    }
    else audio1.pause();
}

function toggleAudio2() {
    if (audio2.paused) { 
        audio1.pause()
        audio2.play()
        audio3.pause()
        audio4.pause()
        audio5.pause()
    }
    else audio2.pause();
}

function toggleAudio3() {
    if (audio3.paused) { 
        audio1.pause()
        audio2.pause()
        audio3.play()
        audio4.pause()
        audio5.pause()
    }
    else audio3.pause();
}

function toggleAudio4() {
    if (audio4.paused) { 
        audio1.pause()
        audio2.pause()
        audio3.pause()
        audio4.play()
        audio5.pause()
    }
    else audio4.pause();
}

function toggleAudio5() {
    if (audio5.paused) { 
        audio1.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.play()
    }
    else audio5.pause();
}
