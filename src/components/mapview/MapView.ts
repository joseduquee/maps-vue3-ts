import mapboxgl from "mapbox-gl";
import { defineComponent, ref, onMounted, watch } from "vue";
import { usePlacesStore, useMapStore } from "../../composables";


export default defineComponent({
  name: "MapView",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) throw new Error("Div Element no existe");
      if (!userLocation.value) throw new Error("UserLocation no existe");

      await Promise.resolve();

      const map = new mapboxgl.Map({
        container: mapElement.value,
        style: "mapbox://styles/mapbox/streets-v11",
        center: userLocation.value,
        zoom: 15,
      });

      map.addControl(
          new mapboxgl.GeolocateControl({
              positionOptions: {
                  enableHighAccuracy: true
              },
              trackUserLocation: true
          })
      )

      const MyLocationPopUp = new mapboxgl.Popup(/*{ offset: [0, 0]}*/)
          .setLngLat( userLocation.value )
          .setHTML(`
          <h3>Aqui estoy</h3>
          <p>Actualmente en Madrid</p>
          <p>${ userLocation.value }</p>
          `)

      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat( userLocation.value )
        .setPopup(MyLocationPopUp)
        .addTo( map )

      //Se establece el mapa en vuex
      setMap( map )

    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
