import axios from 'axios';

export default {
  /**
   * GET all landlords
   * @returns all landlords
   */
  getAll() {
    return axios.get(process.env.VUE_APP_LANDLORDS_URL);
  },

  /**
   * GET single landlord by id
   * @param {String} id id to search with 
   * @returns single landlord with given id
   */
  get(id) {
    return axios.get(`${process.env.VUE_APP_LANDLORDS_URL}/${id}`);
  },
  
  /**
   * POST new landlord
   * @param {JSON} data new landlord data
   */
  create(data) {
    return axios.post(process.env.VUE_APP_LANDLORDS_URL, data);
  },

  /**
   * UPDATE existing landlord
   * @param {String} id id value for landlord to update
   * @param {JSON} data updated landlord data
   */
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_LANDLORDS_URL}/${id}`, data);
  },

  /**
   * DELETE existing landlord
   * @param {*} id the id for the landlord to be deleted
   */
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_LANDLORDS_URL}/${id}`);
  }
};