const videoArray = [
    "funky.mp4",
    "pan.mp4",
    "pan2.mp4",
    "fish-soccer.mp4",
    "eat-eat-eat.mp4",
];
var videoNumber = 0;
var video = document.getElementById("video");

function nextVideo() {
    videoNumber++;
    video.setAttribute("src", "assets/videos/" + videoArray[videoNumber]);
    if (videoNumber == 4) {
        videoNumber = -1;
    }
}
