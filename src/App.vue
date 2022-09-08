<template>
  <div id="app">
    <!-- #TODO modal com falas tipo 'ai isso n eh meu eh so fan made bla bla bla ok' -->
    <!-- #TODO fazer as lutas baseadas no ep em que eles entram nos quadros -->
    <div id="modal">
      <div>
        <h1>ATENÇÃO</h1>
        <h2>ESTE JOGO NÃO É UMA OBRA OFICIAL</h2>
        <p>
          é apenas uma pequena versão feita por fã(eu)
          de uma das cenas do RPG: Ordem Paranormal - O segredo na ilha
          <br>
          O projeto não está 100% condizente com o RPG, podem haver alguns erros na gameplay
          <br>
          Tudo certo?
          <br>
          Aproveite o jogo e divirta-se
        </p>
      </div>
      <br><br>
      <button @click="playMusic()">Ok vou me divertir, eu prometo</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import sound from './assets/audios/theme_osni.mp3';

export default {
  data() {
    return {

    };
  },
  methods: {
    playMusic() {
      document.getElementById('modal').style.display = 'none';
      const audio = new Audio(sound);
      audio.play();
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&display=swap');

#app {
  overflow: hidden;
  font-family: 'Tiro Bangla', serif;
  width: 100%;
  height: 98vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#modal{
  padding: 120px;
  background-color: red;
  position: absolute;
  button{
    border: 3px solid black;
    background-color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 40px;
    cursor: pointer;
  }
}
</style>
