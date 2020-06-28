<template>
  <div class="row items-center container">
    <div class="offset-6 col-3">
      <q-btn flat dense round icon="fas fa-list"></q-btn>
      <q-btn flat dense round icon="fas fa-headphones"></q-btn>
      <q-btn flat dense round icon="fas fa-volume-up"></q-btn>
    </div>
    <div class="col-3">
      <q-linear-progress dark :value="0.3" color="black" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VolumeControls',
};
</script>

<style scoped></style>
