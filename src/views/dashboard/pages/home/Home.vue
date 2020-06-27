<template>
  <div class="container">
    <div class="scroll-container">
      <div class="container-list-card scroll items-center q-gutter-xl">
        <ListCardMusic title="Tocado recentemente" />
        <ListCardMusic title="Não sai dos seus ouvidos" />
        <ListCardMusic title="Favoritas" />
        <q-space v-for="index in 6" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import ListCardMusic from './components/list-card-music/ListCardMusic.vue';

export default {
  name: 'Home',
  components: {
    ListCardMusic,
  },
};
</script>

<style scoped>
.container-list-card {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  height: 120vh;
}
</style>
