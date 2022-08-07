import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
const player = new Player(iframe);

 player.on('timeupdate', throttle(onPlay, 1000)); /* отслеживаем события через on и обновление времени воспроизведения*/

 function onPlay(timer) {

//   const currentTime = JSON.stringify(timer);
localStorage.setItem("videoplayer-current-time", timer.seconds); /* первым примимает ключ по которым будем сохранять данные, 
// // вторым значение нужно передать строку которую хотим сохранитьv (хранение только строк)*/
};
const timeOfVideo = localStorage.getItem("videoplayer-current-time");

// const lastTimeWatch = JSON.parse(timeOfVideo);

player.setCurrentTime(timeOfVideo); /* через localStorage сохраняем данные в строку в секундах и 
// для того чтобы возобновить воспроизведение с сохраненной позиции.*/

















// player.on('timeupdate',  throttle( onPlay => {
//     localStorage.setItem('videoplayer-current-time', onPlay.seconds);
//     }, 1000)
//     );

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));



