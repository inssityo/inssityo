import axios from 'axios';

export default {
  getAll() {
    return axios.get(process.env.VUE_APP_APARTMENTS_URL);
  },
  get(id) {
    return axios.get(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`);
  },
  create(data) {
    return axios.post(process.env.VUE_APP_APARTMENTS_URL, data);
  },
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`, data);
  },
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`);
  },
  getByLocation(data) {
    axios.get(`${process.env.VUE_APP_APARTMENTS_URL}${process.env.VUE_APP_LOCATION_URL}`, data);
  },
  getByASingleLandlord(id) {
    axios.get(`${process.env.VUE_APP_LANDLORD_APARTMENTS_URL}/${id}`);
  }
};