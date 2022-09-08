<template>
  <div class="container-start">
    <nav>
      <router-link to="/gameplay">Jogar</router-link>
      <router-link to="/about">Tutorial</router-link>
      <router-link to="/about">Créditos</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.container-start{
  nav{
    flex-direction: column;
    display: flex;
  }
  a{
    margin: 2%;
    padding: 20px 160px;;
    color: #182b26;
    background-color: #a8afa7db;
    border: 5px solid #1f4a47;
    text-decoration: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    &:hover{
      background-color: #a8afa7;
    }
  }

}
</style>
