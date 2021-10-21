var menuElem = document.getElementById("sweeties");
var titleElem = menuElem.querySelector(".open");
titleElem.onclick = function(){
	menuElem.classList.toggle("clickedforv");	
}
var titleBack = menuElem.querySelector(".close");
titleBack.onclick = function(){
	menuElem.classList.toggle("clickedforv");
}
var modal = document.getElementById('myModal');
btn = document.getElementById("openNav");
btn2 = document.getElementById("openNav2");
var span = document.getElementsByClassName("vector-menu")[0];
btn.onclick = function(){
	modal.style.display = "flex";
}
btn2.onclick = function(){
	modal.style.display = "flex";
}
span.onclick = function(){
	modal.style.display = "none";
}
window.onclick = function(event){
	if(event.target == modal){
		modal.style.display= "none";
	}
}
var krest = document.getElementById('krest');
//Получаем объекты
//Плеер
var videoHolder = document.getElementById('videos2');
var videoContainer = document.getElementById('videoCont');
var videoPlayer = document.getElementById('video-player');
//Время
var progressBar = document.getElementById('video-hud__progress-bar');
var currTime = document.getElementById('video-hud__curr-time');
var durationTime = document.getElementById('video-hud__duration');
//Кнопки
var actionButton = document.getElementById('video-hud__action');
var muteButton = document.getElementById('video-hud__mute');
var volumeScale = document.getElementById('video-hud__volume');
var speedSelect = document.getElementById('video-hud__speed');
var playImg = document.getElementById('PlayImg');
var soundImg = document.getElementById('soundImg');
function videoAct() { //Запускаем или ставим на паузу
if(videoPlayer.paused) {
videoPlayer.play();
videoContainer.style.width = "75%";
videoContainer.style.height = "600px";
videoContainer.style.marginLeft = "10%";
videoHolder.style.display = "block";
videoPlayer.style.height = "auto";
videoPlayer.style.width = "1000px";
playImg.src = "images/pause.png";
actionButton.setAttribute('class','video-hud__element video-hud__action video-hud__action_play');
} else {
videoPlayer.pause();
playImg.src = "images/play-btn.png"
actionButton.setAttribute('class','video-hud__element video-hud__action video-hud__action_pause');
}
if(durationTime.innerHTML == '00:00') {
durationTime.innerHTML = videoTime(videoPlayer.duration); //Об этой функции чуть ниже
}
}
krest.onclick = function(){
videoContainer.style.width = "558px";
// videoContainer.style.left = "54px";
videoContainer.style.height = "400px"
videoPlayer.style.width = "556px";
videoPlayer.style.height = "356px"
videoHolder.style.display = "none";
videoContainer.style.marginLeft = "0";
}
//Запуск, пауза
actionButton.addEventListener('click',videoAct);
videoPlayer.addEventListener('click',videoAct);
function videoTime(time) { //Рассчитываем время в секундах и минутах
time = Math.floor(time);
var minutes = Math.floor(time / 60);
var seconds = Math.floor(time - minutes * 60);
var minutesVal = minutes;
var secondsVal = seconds;
if(minutes < 10) {
minutesVal = '0' + minutes;
}
if(seconds < 10) {
secondsVal = '0' + seconds;
}
return minutesVal + ':' + secondsVal;
}
function videoProgress() { //Отображаем время воспроизведения
progress = (Math.floor(videoPlayer.currentTime) / (Math.floor(videoPlayer.duration) / 100));
progressBar.value = progress;
currTime.innerHTML = videoTime(videoPlayer.currentTime);
}
function videoChangeTime(e) { //Перематываем
var mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
var progress = mouseX / (progressBar.offsetWidth / 100);
videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
}
//Отображение времени
videoPlayer.addEventListener('timeupdate',videoProgress);
//Перемотка
progressBar.addEventListener('click',videoChangeTime);
function videoChangeVolume() { //Меняем громкость
var volume = volumeScale.value / 100;
videoPlayer.volume = volume;
if(videoPlayer.volume == 0) {
soundImg.src = "images/muted.png";
} else {
soundImg.src = "images/sound.png";
}
}
function videoMute() { //Убираем звук
if(videoPlayer.volume == 0) {
videoPlayer.volume = volumeScale.value / 100;
soundImg.src = "images/sound.png";
} else {
videoPlayer.volume = 0;
soundImg.src = "images/muted.png";
}
}
function videoChangeSpeed() { //Меняем скорость
var speed = speedSelect.value / 100;
videoPlayer.playbackRate = speed;
}
//Звук
muteButton.addEventListener('click',videoMute);
volumeScale.addEventListener('change',videoChangeVolume);
//Работа со скоростью
speedSelect.addEventListener('change',videoChangeSpeed);
var buttonA = document.getElementById('button');
var clickSound = document.getElementById('click-sound');
function buttonClick() {
clickSound.currTime = 0;
clickSound.play();
}
buttonA.addEventListener('click',buttonClick);