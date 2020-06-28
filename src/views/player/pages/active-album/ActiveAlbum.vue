<template>
  <div class="row">
    <q-card class="card-active-music col-12">
      <q-card-section horizontal>
        <q-avatar size="70px">
          <q-img class="col" src="https://picsum.photos/50/50" :ratio="1"></q-img>
        </q-avatar>

        <div horizontal class="card-action q-px-md">
          <div class="title">
            <span class="text-white">{{ title }}</span>
            <span class="text-white artist-card-active">{{ artist }}</span>
          </div>
          <div class="q-px-md">
            <q-btn flat round icon="far fa-heart"></q-btn>
            <q-btn flat round icon="fas fa-expand-arrows-alt"></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import discDefault from '@/assets/images/disc/disc-default.jpg';

export default {
  name: 'ActiveAlbum',
  props: {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      discDefault,
    };
  },
};
</script>

<style scoped>
.card-active-music {
  width: 100%;
  background-color: transparent !important;
  border: 0;
  box-shadow: none;
}
.card-active-music .card-action {
  height: 70px;
  display: flex !important;
  flex-direction: row !important;
  align-content: center;
  justify-content: center;
}
.card-active-music .card-action div {
  margin: auto;
}
.card-active-music .card-action .title {
  display: flex;
  flex-direction: column;
}
.artist-card-active {
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: normal !important;
}
</style>
