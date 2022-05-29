<template>
    <div v-if="distance" class="trip-container colum">
        <div class="col">Distancia: <strong>{{ distance }} kms</strong></div>
        <div class="col">Duración: <strong>{{ duration }} min</strong></div>
    </div>
</template>

<script lang="ts">
import { useMapStore } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TripDetails',
    setup() {

        const { distance, duration} = useMapStore()

        return {
            distance,
            duration
        }
    }
})
</script>

<style scoped>
.trip-container {
    padding: 10px;
    position: fixed;
    bottom: 80px;
    left: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    width: 350;
}

strong {
    color: #42b983
}
</style>