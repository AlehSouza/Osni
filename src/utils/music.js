import sound from '../assets/audios/theme_osni.mp3';

const music = {

  playTheme(can) {
    const audio = new Audio(sound);
    if (can) {
      audio.volume = 0.40;
      audio.play();
      console.log(can);
      return;
    }
    audio.volume = 0.0;
    audio.pause();
    console.log(can);
  },

};

export default music;
