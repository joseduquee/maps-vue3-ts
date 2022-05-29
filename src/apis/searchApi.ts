import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibGVheGFseCIsImEiOiJjbDNpbWF6MnkwMGh1M2tsMnRyNWlmcTFkIn0.8ON5Wg1ZNyBjzGHNiEP6QA'
    }
})

export default searchApi;