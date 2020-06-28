<template>
  <div class="card-container">
    <q-card style="padding: 15px;" dark class="card-music bg-SpotifyTertiary">
      <img height="125" :src="discDefault" />
      <q-card-section>
        <div class="text-h6 color-SpotifyLight text-title">Musica {{ title }}</div>
        <div class="text-h10 color-SpotifyDarkLight text-artist">Artista {{ artist }}</div>
      </q-card-section>
      <q-btn
        round
        class="btn-play"
        @click="btnPlay.play = btnPlay.play === 0 ? 1 : 0"
        color="green"
        :icon="btnPlay.data[btnPlay.play]"
      />
    </q-card>
  </div>
</template>

<script>
import discDefault from '@/assets/images/disc/disc-default.jpg';

export default {
  name: 'CardMusic',
  props: {
    cdCover: {
      type: String,
      required: true,
    },
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
      btnPlay: {
        play: 0,
        data: ['fas fa-play', 'fas fa-pause'],
      },
    };
  },
  mounted() {
    const { cdCover } = this.$props;
    if (!cdCover) return;
    setTimeout(() => {
      this.discDefault = cdCover;
    }, 100);
  },
};
</script>
<style lang="scss" scoped>
.text-artist {
  font-weight: normal;
}
.card-music .q-btn {
  position: absolute !important;
  font-size: 8px;
  padding: 8px;
  bottom: 15px;
  right: 15px;
  display: none;
}
.card-music:hover {
  .q-btn {
    display: block;
  }
}
</style>
