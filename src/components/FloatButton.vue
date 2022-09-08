<template>
  <div class="float-button">
    <nav>
      <router-link to="/"> 🠸 Voltar ao início</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped>
.float-button{
  padding: 28px;
  a {
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
  }
}
</style>
