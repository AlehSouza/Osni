<template>
  <div class="character-container">
    <div class="characters-bg">
      <div
        class="character-image"
        v-bind:style="{ backgroundImage: 'url(' + character.image + ')' }"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterModel',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.character-container{
  width: 240px;
  flex-direction: column;
  display: flex;
  cursor: pointer;
}
.characters-bg{
  height: 240px;
  transition: 0.3s;
  border: 4mm ridge rgba(237, 136, 20, 0.8);
  background-image: url('https://cdn.discordapp.com/attachments/512809986699690004/1017292686719455233/OSNI_Ep_7.webp');
  background-size: 300%;
  background-position: right;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover{
    border: 4mm ridge rgba(156, 53, 25, 0.8);
  }
}
.character-image{
  width: 90%;
  height: 85%;
  padding: 18px 0px;
  background-position: 0px 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.character-name{
  background-color: white;
  text-align: center;
  padding: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
