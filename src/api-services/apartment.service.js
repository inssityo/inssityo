import axios from 'axios';
import localStorageService from "../plugins/localStorage.service.js"

export default {
  getAll() {
    return axios.get(process.env.VUE_APP_APARTMENTS_URL);
  },
  get(id) {
    return axios.get(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`);
  },
  create(data) {
    const landlord = JSON.parse(localStorageService.getLoggedInUser())
    console.log("LLLL",landlord._id)
    let formData = new FormData()
    data.images.forEach((item, i) => {
    formData.append("files", item, `image-${i}`)
    })

    formData.append('mainData', JSON.stringify(data))
    formData.append('landLord', landlord._id)
    return axios.post(process.env.VUE_APP_APARTMENTS_URL, formData);
  },
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`, data);
  },
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`);
  },
  getByLocation(data) {
    return axios.get(`${process.env.VUE_APP_APARTMENTS_URL}${process.env.VUE_APP_LOCATION_URL}`, data);
  },
  getByASingleLandlord(id) {
    return axios.get(`${process.env.VUE_APP_LANDLORD_APARTMENTS_URL}/${id}`);
  }
};