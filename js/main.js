let fillbar = document.querySelector('.fill');
var audios =["Boss.mp3","Same Beef.mp3","Ik Tera.mp3","Sheh.mp3","Gal Karke.mp3"];
let covers=['js/1.jpg','js/2.jpg','js/3.jpg ','js/4.jpg','js/5.jpg'];
let currentTime=document.querySelector('.time');
var songTitle = document.getElementById('text');
//object of audio
var song = new Audio();
var currentSong = 0;
//AUTO  
window.onload = playSong;

function playSong()
{
    song.src = audios[currentSong];
    songTitle.textContent = audios[currentSong];
    song.play();
}

function togglePlayPause()
{
    if(song.paused)
    {
        song.play();
        let playBtn = document.querySelector('.play-btn');
        playBtn.innerHTML='<i class="fa fa-pause"></i>';
    }
    else
    {
        song.pause();
         playBtn = document.querySelector('.play-btn');
        playBtn.innerHTML='<i class="fa fa-play"></i>';
    }
}
song.addEventListener('timeupdate',function()
{
    var position = song.currentTime/song.duration;
    fillbar.style.width = position*100 + '%';
  
    convertTime(Math.round(song.currentTime));
})
function convertTime(seconds)
{
    let min=Math.floor(seconds/60);
    let sec=seconds%60;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    currentTime.textContent=min+":"+sec;
    totalTime(Math.round(song.duration));
}
function totalTime(seconds){

    let min=Math.floor(seconds/60);
    let sec=seconds%60;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    currentTime.textContent+=" & "+min+":"+sec;
}
function nextAudio()
{
currentSong++;
if(currentSong>4){
currentSong=0;
}
playSong();
let playBtn = document.querySelector('.play-btn');
playBtn.innerHTML='<i class="fa fa-pause"></i>';
//jquery
$(".img img").attr("src",covers[currentSong]);
}

function prevAudio()
{
currentSong--;
if(currentSong<0){
currentSong=4;
}
playSong();
let playBtn = document.querySelector('.play-btn');
playBtn.innerHTML='<i class="fa fa-pause"></i>';
//jquery
$(".img img").attr("src",covers[currentSong]);
}
