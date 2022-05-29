<template>
  <button v-if="isBtnReady"
    class="btn btn-primary"
    @click="onMyLocationClicked"
    >
      Ir a mi ubicación
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables'
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'MyLocationBtn',
    setup() {
        const { userLocation, isUserLocationReady} = usePlacesStore()
        const { map, isMapReady } = useMapStore()

        return {

            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                })
            }
        }
    }

})
</script>


<style scoped>
    button {
        position: fixed;
        top: 50px;
        right: 10px;
    }
</style>