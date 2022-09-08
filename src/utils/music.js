import sound from '../assets/audios/theme_osni.mp3';

const music = {

  playTheme(can) {
    const audio = new Audio(sound);
    if (can) {
      audio.volume = 0.20;
      audio.play();
      return;
    }
    audio.volume = 0.00;
    audio.pause();
  },

};

export default music;
