import axios from 'axios';

import authHeader from './auth.header';

const API_URL = 'http://localhost:5001/api/';

class DataService {
  getFeeds() {
    return axios.get(API_URL + 'feeds');
  }

  getUserProfile() {
    return axios.get(API_URL + 'profile', { headers: authHeader() });
  }
}

export default new DataService();