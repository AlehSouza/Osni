<template>
  <div class="home">
    <StartGame/>
  </div>
</template>

<script>
import StartGame from '@/components/StartGame.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { StartGame },
};
</script>

<style lang="scss" scoped>

.home {
  width: 95vw;
  height: 90vh;
  background-color: rgba(50, 50, 50, 0.1);
  justify-content: center;
  align-items: center;
  display: flex;
}

</style>
