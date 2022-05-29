/* eslint-disable @typescript-eslint/no-empty-interface */
import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import MapModule from './map';
import { MapState } from './map/state';
import { PlacesState } from './places/state';


export interface StateInterface {
  places: PlacesState,
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: MapModule
  }
})