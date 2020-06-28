<template>
  <div class="container">
    <div>
      <q-btn flat dense round icon="fas fa-random"></q-btn>
    </div>
    <div>
      <q-linear-progress dark :value="0.3" color="black" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VolumeControls',
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  background-color: blue;
}
.container .content {
}
</style>
