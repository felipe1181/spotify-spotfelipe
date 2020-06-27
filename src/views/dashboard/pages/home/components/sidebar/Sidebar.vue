<template>
  <div class="container q-gutter-md bg-SpotifyPrimary">
    <div class="row">
      <img class="col-6 offset-2" :src="fullLogo" />
    </div>
    <q-list class="list-menu">
      <q-item clickable :active="true" active-class="bg-SpotifySecondary" v-ripple>
        <q-item-section avatar>
          <q-icon class="color-SpotifyLight" name="fas fa-home" />
        </q-item-section>

        <q-item-section class="color-SpotifyLight">Início</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon class="color-SpotifyLight" name="fas fa-search" />
        </q-item-section>

        <q-item-section class="color-SpotifyLight">Buscar</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon class="color-SpotifyLight" name="fas fa-record-vinyl" />
        </q-item-section>

        <q-item-section class="color-SpotifyLight">Sua biblioteca</q-item-section>
      </q-item>
      <q-item v-ripple>
        <q-item-section class="color-SpotifyLight">PLAYLISTS</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon class="color-SpotifyLight" name="fas fa-plus-square" />
        </q-item-section>

        <q-item-section class="color-SpotifyLight">Criar Playlist</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon class="color-SpotifyLight" name="fab fa-gratipay" />
        </q-item-section>

        <q-item-section class="color-SpotifyLight">Músicas Curtidas</q-item-section>
      </q-item>
    </q-list>
    <hr />
    <q-scroll-area class="fit">
      <q-list class="list-playlist">
        <q-item v-for="item in 30" :key="item" v-ripple>
          <q-item-section class="color-SpotifyLight">playlist {{ item }}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
import fullLogo from '@/assets/icons/full-logo-spotify.svg';

export default {
  name: 'Sidebar',
  data() {
    return {
      fullLogo,
    };
  },
};
</script>

<style scoped>
.container {
  padding-left: 15px;
  padding-top: 25px;
  padding-right: 10px;
  height: 95vh;
  overflow: hidden;
}
</style>
