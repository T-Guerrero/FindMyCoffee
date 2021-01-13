import Api from './api';

const GoogleListOfEstablishmentsService = {
    index: (latitude, longitude) => Api.get(`/google_store?latitude=${latitude}&longitude=${longitude}`)
}

export default GoogleListOfEstablishmentsService;