var vid = document.getElementById("vid")
var duration
vid.onloadedmetadata = function() {
    duration = this.duration;
    var minutes = Math.floor(duration / 60);
    if(minutes<10){
        minutes = "0"+minutes
    }
    var sec = Math.trunc(duration - (minutes) * 60);
    if(sec<10){
        sec = "0"+sec
    }
    document.getElementById("time").innerHTML = `${minutes}:${sec}`;
    document.getElementById("current").innerHTML= `00:00`
};
var volumebar = document.getElementById("volume")
var speedbar = document.getElementById("speed")
var progressbar = document.getElementById("progress")
vid.addEventListener('timeupdate', (event) => {
    progressbar.value = vid.currentTime
    var minutes = Math.floor(vid.currentTime / 60);
    if(minutes<10){
        minutes = "0"+minutes
    }
    var sec = Math.trunc(vid.currentTime - (minutes) * 60);
    if(sec<10){
        sec = "0"+sec
    }
    document.getElementById("current").innerHTML= `${minutes}:${sec}`
});
vid.volume =  parseFloat(volumebar.value)
volumebar.addEventListener("input", (event) => {
    vid.volume = event.target.value
})
vid.playbackRate  = parseFloat(speedbar.value)
speedbar.addEventListener("input", (event) => {
    vid.playbackRate = parseFloat(event.target.value)
})
console.log(vid.duration)
function play(){
    vid.play();
}
function pause(){
    vid.pause();
}
function plus_skip(){
    vid.currentTime = duration;
}
function plus(){
    var currentTime = vid.currentTime;
    vid.currentTime = currentTime+5;
}
function minus_skip(){
    var currentTime = vid.currentTime;
    vid.currentTime = currentTime-currentTime;
}
function minus(){
    var currentTime = vid.currentTime;
    vid.currentTime = currentTime-5;
}
function mute(){
    var flag = vid.muted;
    if(flag){
        vid.muted = false;
    }else{
        vid.muted = true;
    }
}
