 import Player from '@vimeo/player';
 import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);

 player.on('timeupdate', throttle(onPlay, 1000));                               

 function onPlay(timer) {
 localStorage.setItem("videoplayer-current-time", timer.seconds);             
                                                                               
};
 const timeOfVideo = localStorage.getItem("videoplayer-current-time");
 player.setCurrentTime(timeOfVideo);                                              
                                                                                                         

















