import axios from 'axios';

export default {
  /**
   * GET all target profiles
   * @returns all target profiles
   */
  getAll() {
    return axios.get(process.env.VUE_APP_TARGETPROFILES_URL);
  },

  /**
   * GET single target profile by id
   * @param {String} id 
   * @returns single target profile with matching id
   */
  get(id) {
    return axios.get(`${process.env.VUE_APP_TARGETPROFILES_URL}/${id}`);
  },

  /**
   * POST new target profile
   * @param {JSON} data 
   * @returns 
   */
  create(data) {
    return axios.post(process.env.VUE_APP_TARGETPROFILES_URL, data);
  },

  /**
   * UPDATE existing target profile
   * @param {String} id 
   * @param {JSON} data 
   */
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_TARGETPROFILES_URL}/${id}`, data);
  },

  /**
   * DELETE given target profile
   * @param {String} id 
   */
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_TARGETPROFILES_URL}/${id}`);
  },

  /**
   * GET target profiles by location value
   * @param {String} data location values separated by , 
   * @returns Target profiles with matching
   */
  getByLocation(data) {
    return axios.get(`${process.env.VUE_APP_TARGETPROFILES_URL}${process.env.VUE_APP_LOCATION_URL}`, data);
  }
};