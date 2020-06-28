<template>
  <div class="row">
    <div class="col-12 q-gutter-md player-control">
      <q-btn flat dense round icon="fas fa-random"></q-btn>
      <q-btn flat dense round icon="fas fa-step-backward"></q-btn>
      <q-btn outline round icon="fas fa-play"></q-btn>
      <q-btn flat dense round icon="fas fa-step-forward"></q-btn>
      <q-btn flat dense round icon="fas fa-redo-alt"></q-btn>
    </div>
    <div class="col-12">
      <div class="row q-gutter-xs items-center">
        <div class="col-1">
          <span class="text-time">1:35</span>
        </div>
        <div class="col-9">
          <q-linear-progress class="full-width" dark :value="0.3" color="black" />
        </div>
        <div class="col-1">
          <span class="text-time">4:35</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
};
</script>

<style scoped>
.player-control {
  display: flex;
  justify-content: center;
  align-content: center;
}
.text-time {
  font-size: 12px;
}
</style>
