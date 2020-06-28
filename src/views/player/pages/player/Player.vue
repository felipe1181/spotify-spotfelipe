<template>
  <div class="row q-gutter-md">
    <div class="col-12 q-gutter-md">
      <q-btn flat dense round icon="fas fa-random"></q-btn>
      <q-btn flat dense round icon="fas fa-step-backward"></q-btn>
      <q-btn outline round icon="fas fa-play"></q-btn>
      <q-btn flat dense round icon="fas fa-step-forward"></q-btn>
      <q-btn flat dense round icon="fas fa-redo-alt"></q-btn>
    </div>
    <div class="col-12">
      <q-linear-progress dark :value="0.3" color="black" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
};
</script>

<style></style>
