import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibGVheGFseCIsImEiOiJjbDNpbWF6MnkwMGh1M2tsMnRyNWlmcTFkIn0.8ON5Wg1ZNyBjzGHNiEP6QA'
    }
})

export default searchApi;