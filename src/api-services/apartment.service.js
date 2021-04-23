import axios from 'axios';
import localStorageService from "../plugins/localStorage.service.js"

export default {
  /**
   * GET all apartments
   * @returns 
   */
  getAll() {
    return axios.get(process.env.VUE_APP_APARTMENTS_URL);
  },
  /**
   * GET apartment by id
   * @param {String} id 
   * @returns 
   */
  get(id) {
    return axios.get(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`);
  },
  /**
   * POST new apartment
   * @param {JSON} data New apartment data
   */
  create(data) {
    const landlord = JSON.parse(localStorageService.getLoggedInUser())
    let formData = new FormData()
    data.images.forEach((item, i) => {
    formData.append("files", item, `image-${i}`)
    })

    formData.append('mainData', JSON.stringify(data))
    formData.append('landLord', landlord._id)
    return axios.post(process.env.VUE_APP_APARTMENTS_URL, formData);
  },
  /**
   * UPDATE existing apartment
   * @param {String} id 
   * @param {JSON} data Updated APARTMENT JSON
   * @returns 
   */
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`, data);
  },
  /**
   * DELETE existing apartment
   * @param {String} id 
   * @returns 
   */
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_APARTMENTS_URL}/${id}`);
  },
  /**
   * GET apartments by location value
   * @param {JSON} data 
   * @returns 
   */
  getByLocation(data) {
    return axios.get(`${process.env.VUE_APP_APARTMENTS_URL}${process.env.VUE_APP_LOCATION_URL}`, data);
  },

  /**
   * GET every apartment of a single landlord
   * @param {String} id 
   * @returns 
   */
  getByASingleLandlord(id) {
    return axios.get(`${process.env.VUE_APP_LANDLORD_APARTMENTS_URL}/${id}`);
  }
};