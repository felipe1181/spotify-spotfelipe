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
              Player
            </div>
          </div>
          <div class="col-4">
            <div class="float-right">
              Volume
            </div>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import ActiveAlbum from '@/views/player/pages/active-album/ActiveAlbum.vue';

export default {
  name: 'Footer',
  components: {
    ActiveAlbum,
  },
};
</script>

<style scoped>
.footer-container {
  height: 100px;
}
</style>
