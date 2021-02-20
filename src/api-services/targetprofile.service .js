import axios from 'axios';

export default {
  getAll() {
    return axios.get(process.env.VUE_APP_TARGETPROFILES_URL);
  },
  get(id) {
    return axios.get(`${process.env.VUE_APP_TARGETPROFILES_URL}/${id}`);
  },
  create(data) {
    return axios.post(process.env.VUE_APP_TARGETPROFILES_URL, data);
  },
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_TARGETPROFILES_URL}/${id}`, data);
  },
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_TARGETPROFILES_URL}/${id}`);
  },
  getByLocation(data) {
    return axios.get(`${process.env.VUE_APP_TARGETPROFILES_URL}${process.env.VUE_APP_LOCATION_URL}`, data);
  }
};