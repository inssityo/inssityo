import axios from 'axios';

export default {
  getAll() {
    return axios.get(process.env.VUE_APP_LANDLORDS_URL);
  },
  get(id) {
    return axios.get(`${process.env.VUE_APP_LANDLORDS_URL}/${id}`);
  },
  create(data) {
    return axios.post(process.env.VUE_APP_LANDLORDS_URL, data);
  },
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_LANDLORDS_URL}/${id}`, data);
  },
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_LANDLORDS_URL}/${id}`);
  }
};