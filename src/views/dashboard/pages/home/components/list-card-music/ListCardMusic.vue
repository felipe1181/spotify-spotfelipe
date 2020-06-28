<template>
  <div class="container">
    <span class="text-h5 text-title-list color-SpotifyLight">{{ title }}</span>
    <div class="row q-gutter-md">
      <div v-for="index in 6" :key="index" transition="flip-right">
        <CardMusic
          class="card-music"
          cd-cover="https://picsum.photos/300/300"
          :title="`${index}`"
          :artist="`${index}`"
          v-once
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardMusic from '@/components/Cards/CardMusic.vue';

export default {
  name: 'ListCardMusic',
  components: {
    CardMusic,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-music {
  margin-top: 15px;
  max-width: 160px !important;
}
.text-title-list {
  margin-left: 15px;
}
</style>
