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
      <button @click="hideModal()">Ok vou me divertir, eu prometo</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import music from '@/utils/music';

export default {
  data() {
    return {
      music,
    };
  },
  methods: {
    hideModal() {
      document.getElementById('modal').style.display = 'none';
      music.playTheme(true);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&display=swap');

#app {
  overflow: hidden;
  font-family: 'Tiro Bangla', serif;
  background-color: rgba(12, 12, 12, 0.7);;
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}

*{
  font-family: 'Tiro Bangla', serif;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #000000;
    }
  }
}
#modal{
  border: 4mm ridge rgba(237, 136, 20, 0.8);
  color: white;
  padding: 6vw;
  background-color: #233531;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  position: absolute;
  h1,
  h2{
    letter-spacing: 3px;
  }
  h1{
    color: red;
  }
  button{
    color: #a5d6cc;
    border: 3px solid #308774;
    background-color: #233531;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 40px;
    cursor: pointer;
  }
}
</style>
