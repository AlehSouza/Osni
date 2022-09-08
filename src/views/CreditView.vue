<template>
  <div class="about">
    <FloatButton class="absolute"/>
    <h1>¿</h1>
  </div>
</template>

<script>
import FloatButton from '@/components/FloatButton.vue';

export default {
  components: {
    FloatButton,
  },
  data() {
    return {

    };
  },
};
</script>
<style scoped>
* {
  color: white;
}
.absolute{
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
