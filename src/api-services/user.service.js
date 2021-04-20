import axios from 'axios';

export default {
  /**
   * GET all users
   * @returns All users
   */
  getAll() {
    return axios.get(process.env.VUE_APP_USERS_URL);
  },

  /**
   * GET single user by id
   * @param {String} id 
   * @returns 
   */
  get(id) {
    return axios.get(`${process.env.VUE_APP_USERS_URL}/${id}`);
  },

  /**
   * POST new User
   * @param {JSON} data 
   */
  create(data) {
    return axios.post(process.env.VUE_APP_USERS_URL, data);
  },

  /**
   * UPDATE existing User
   * @param {String} id 
   * @param {JSON} data 
   */
  update(id, data) {
    return axios.put(`${process.env.VUE_APP_USERS_URL}/${id}`, data);
  },

  /**
   * DELETE existing User
   * @param {String} id 
   */
  delete(id) {
    return axios.delete(`${process.env.VUE_APP_USERS_URL}/${id}`);
  },

  /**
   * GET user by location
   * @param {String} data 
   * @returns users with matching location values
   */
  getByLocation(data) {
    return axios.get(`${process.env.VUE_APP_USERS_URL}${process.env.VUE_APP_LOCATION_URL}`, data);
  }
};