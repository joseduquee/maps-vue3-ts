<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
      <div class="text-center">
          <h3>Espere por favor</h3>
          <span>Localizando...</span>
      </div>
  </div>
  <div v-show="isUserLocationReady" class="map-container" ref="mapElement">

  </div>
</template>

<script lang="ts" src="./MapView.ts">
export default {

}
</script>

<style scoped>
.loading-map {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 9999;
}

.map-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
}
</style>