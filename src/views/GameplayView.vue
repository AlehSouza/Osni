<template>
  <div class="container">
    <div v-if="selectChamp">
      <h1>Selecione um personagem</h1>
      <p class="character-message">
        <q>A verdadeira arte é só um reflexo dos sentimentos de quem a contempla</q>
      </p>
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
    <div>
      <img :src="charPicked?.image" alt="">
    </div>
  </div>
</template>

<script>
import Character from '@/components/Character.vue';

export default {
  components: { Character },
  data() {
    return {
      // #TODO Encontrar um lugar novo pra upar, deixar no discord n da KKKKK
      selectChamp: true,
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
    };
  },
  beforeMount() {
  },
  methods: {
    getCharacter(obj) {
      this.charPicked = obj;
      this.selectChamp = false;
      console.log(this.charPicked);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  color: white;
}

h1{
  letter-spacing: 2px;
}

.character-message{
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  opacity: 0.6;
  font-size: 24px;
  q{
    color: #ab553d;
  }
}

.container{
  width: 90vw;
  height: 90vh;
  margin: auto;
  background-color: rgba(50, 50, 50, 0.90);
  justify-content: center;
  align-items: center;
  display: flex;
}

.select-champ{
  margin-bottom: 120px;
  flex-direction: row;
  display: flex;
  .character {
    margin: 8px;
  }
}
</style>
