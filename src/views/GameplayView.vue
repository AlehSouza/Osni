<template>
  <div class="container">
    <FloatButton class="absolute"/>
    <div v-if="selectChamp">
      <h1>Selecione um personagem</h1>
      <button class="character-message" @click="actSecret()" >
        <q>A verdadeira arte é só um reflexo dos sentimentos de quem a contempla</q>
      </button>
      <div class="select-champ">
        <div
          class="character-container"
          v-for="(item, i) in characters"
          :key="i"
        >
          <Character :character="item" class="character" v-on:click.native="getCharacter(item)" />
        </div>
      </div>
    </div>
    <div class="cutscene" v-if="cutscene">
      <video
       src="../assets/videos/imaginary_friend.mp4" autoplay id="sceneDOMVid">
          <track default kind="captions"/>
          Sorry, your browser doesn't support embedded videos.
      </video>
      <button @click="skipVideo">skip 🠺 </button>
    </div>
    <div v-if="gameplay" id="gameplay">
      <h1>?</h1>
    </div>
  </div>
</template>

<script>
import Character from '@/components/Character.vue';
import FloatButton from '@/components/FloatButton.vue';
import music from '@/utils/music';

export default {
  components: { Character, FloatButton },
  data() {
    return {
      // #TODO Encontrar um lugar novo pra upar, deixar no discord n da KKKKK
      selectChamp: true,
      cutscene: false,
      gameplay: false,
      charPicked: {},
      characters: [
        {
          id: 0,
          name: 'Milo Casttelo',
          image: 'https://media.discordapp.net/attachments/512809986699690004/1017291223528112198/milo.webp?width=304&height=702',
          gender: 'Male',
        },
        {
          id: 1,
          name: 'Olivier Florence',
          image: 'https://media.discordapp.net/attachments/512809986699690004/1017291222374686821/olivier.webp?width=200&height=702',
          gender: 'Male',
        },
        {
          id: 2,
          name: 'Barbara Lima',
          image: 'https://media.discordapp.net/attachments/512809986699690004/1017291223263879178/barbara.webp?width=285&height=702',
          gender: 'Woman',
        },
        {
          id: 3,
          name: 'Amelie Florence',
          image: 'https://media.discordapp.net/attachments/512809986699690004/1017291223008038912/amelie.webp?width=186&height=702',
          gender: 'Woman',
        },
        {
          id: 4,
          name: 'Wanderley Nascimento',
          image: 'https://media.discordapp.net/attachments/512809986699690004/1017291222647320596/wanderley.webp?width=243&height=702',
          gender: 'Male',
        },
      ],
      secretChar: {
        id: 5,
        name: 'Bisteca Supremacy',
        image: 'https://cdn.discordapp.com/attachments/512809986699690004/1017511483325825095/Miniatura_Bisteca_em_O_Segredo_na_Ilha.webp',
        gender: 'Male',
      },
      secretKey: 0,
      music,
    };
  },
  beforeMount() {
  },
  methods: {
    getCharacter(obj) {
      this.charPicked = obj;
      this.selectChamp = false;
      music.playTheme(false);
      this.cutscene = true;
      setTimeout(() => {
        this.cutscene = false;
        this.gameplay = true;
      }, 31700);
    },
    skipVideo() {
      this.cutscene = false;
      this.gameplay = true;
    },
    // Action Secret
    actSecret() {
      if (this.secretKey === 5 && this.characters.length <= 5) {
        this.characters.push(this.secretChar);
        return;
      }
      if (this.secretKey >= 6) {
        return;
      }
      this.secretKey += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  color: white;
}

h1 {
  letter-spacing: 2px;
}

/* back arrow */
.absolute{
  position: absolute;
  left: 0px;
  top: 0px;
}

.character-message {
  background-color: transparent;
  border: 0px;
  margin-bottom: 35px;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  opacity: 0.6;
  font-size: 24px;
  q{
    color: #c55334;
    font-weight: 500;
  }
}

.container {
  width: auto;
  height: 720px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  display: flex;
}

.select-champ {
  margin-bottom: 120px;
  flex-direction: row;
  display: flex;
  .character {
    margin: 8px;
  }
}

/* Cutscene */
.cutscene {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  button{
    width: 320px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: transparent;
    font-weight: 500;
    border: 0px;
    padding: 20px;
    cursor: pointer;
  }
}

/* Gameplay de fato */

#gameplay {
  width: 1280px;
  height: 720px;
  background-color: rgba(22, 21, 21, 0.895);
}

</style>
