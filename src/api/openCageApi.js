import axios from 'axios';
const GEOCODE_API_KEY = import.meta.env.VITE_GEOCODE_API_KEY;

const openCageApi = (input) => {
    return axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${GEOCODE_API_KEY}&limit=5`
    });
}

export default openCageApi;