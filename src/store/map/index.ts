import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { MapState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const MapModule: Module<MapState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default MapModule;