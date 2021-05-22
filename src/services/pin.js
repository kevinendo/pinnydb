import http from "../services/http-common";

class PinDataService {
    getAll() {
        return http.get('/pins');
    }

    get(pin_id) {
        return http.get(`/pinDetail?pin_id=${pin_id}`);
    } 

    find(by, query) {
        return http.get(`/pins?${by}=${query}`);
    }

    getCategory(query) {
        return http.get(`/pins?category=${query}`);
    }
    getSet(query) {
        return http.get(`/pins?set=${query}`);
    }
    getTags(query) {
        return http.get(`/pins?tags=${query}`);
    }

}

export default new PinDataService();