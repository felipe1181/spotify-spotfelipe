<template>
  <q-footer elevated class="bg-SpotifyTertiary footer-container text-white">
    <q-toolbar>
      <q-toolbar-title>
        <div class="row">
          <div class="col-4 q-pa-md">
            <ActiveAlbum title="Título música" artist="artista" />
          </div>
          <div class="col-4">
            <div class="absolute-center">
              <Player />
            </div>
          </div>
          <div class="col-4">
            <VolumeControls />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import ActiveAlbum from '@/views/player/pages/active-album/ActiveAlbum.vue';
import Player from '@/views/player/pages/player/Player.vue';
import VolumeControls from '@/views/player/pages/volume-controls/VolumeControls.vue';

export default {
  name: 'Footer',
  components: {
    ActiveAlbum,
    Player,
    VolumeControls,
  },
};
</script>

<style scoped>
.footer-container {
  height: 100px;
}
</style>
