// Получаем элементы видео и кнопки управления
var video = document.getElementById("my-video");
var playButton = document.getElementById("playButton");

// Функция для включения/выключения видео при нажатии на кнопку
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Привязываем обработчик события к кнопке управления
playButton.addEventListener("click", togglePlay);
