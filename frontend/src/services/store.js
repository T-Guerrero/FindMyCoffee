import Api from './api';

const StoreService = {
    //Os parâmetros são passados como query
    index: (latitude, longitude) => Api.get('/stores', {params: {latitude, longitude}}),
    show: (google_place_id) => Api.get(`/stores/${google_place_id}`),
}

export default StoreService;