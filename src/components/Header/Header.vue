<template>
  <q-toolbar class="bg-SpotifyPrimaryAlternative">
    <q-toolbar-title />
    <q-btn class="vertical-middle bg-SpotifySecondary" no-caps rounded flat dense>
      <div class="btn-perfil">
        <q-avatar>
          <img src="https://i.imgur.com/TQlsJtD.jpg" />
        </q-avatar>
        <span class="text">
          Felipe ferraresi
        </span>
        <q-icon name="fas fa-caret-down" />
      </div>
    </q-btn>
  </q-toolbar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.q-toolbar {
  padding: 10px;
}
.btn-perfil {
  flex: 1;
  padding: 2px;
  flex-direction: row;
  justify-content: center;
  background-color: #010101;
  border-radius: 50px;
}
.btn-perfil:hover {
  background-color: #2a2a2a;
  transition: 0.4s;
}
.btn-perfil .q-icon {
  margin: 0;
}
.btn-perfil .text {
  font-weight: bold;
}
</style>
