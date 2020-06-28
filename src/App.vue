<template>
  <q-layout class="bg-SpotifySecondary" view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <Header />
      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" :width="230" side="left">
      <Sidebar />
    </q-drawer>

    <q-page-container class="container-main-dashboard">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Sidebar from '@/views/dashboard/pages/home/components/sidebar/Sidebar.vue';

export default {
  data() {
    return {
      left: false,
    };
  },
  components: {
    Sidebar,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import '~@/styles/quasar.sass';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
body {
  overflow-y: hidden;
}
.container-main-dashboard {
  overflow: hidden;
}
.bg-SpotifyPrimarySystem {
  background-color: $spotufyPrimarySytem;
}
.color-SpotifyPrimarySystem {
  color: $spotufyPrimarySytem;
}
.bg-SpotifyPrimary {
  background-color: $spotifyPrimary;
}
.color-SpotifyPrimary {
  color: $spotifyPrimary;
}
.bg-SpotifyPrimaryAlternative {
  background-color: $spotifyPrimaryAlternative;
}
.color-SpotifyPrimaryAlternative {
  color: $spotifyPrimaryAlternative;
}
.bg-SpotifySecondary {
  background-color: $spotifySecondary;
}
.color-SpotifySecondary {
  color: $spotifySecondary;
}
.bg-SpotifyTertiary {
  background-color: $spotifyTertiary !important;
}
.color-SpotifyTertiary {
  color: $spotifyTertiary;
}
.bg-SpotifyLight {
  background-color: $spotifyLight;
}
.color-SpotifyLight {
  color: $spotifyLight;
}
.bg-SpotifyDarkLight {
  background-color: $spotifyDarkLight;
}
.color-SpotifyDarkLight {
  color: $spotifyDarkLight;
}
</style>
