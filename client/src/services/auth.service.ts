import axios from "axios";

const API_URL = 'http://localhost:5001/login';

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL, {
        username,
        password
      })
  }

  logout() {
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    const token = localStorage.getItem("token");
    if (token) return JSON.parse(token);
    return null;
  }
}

export default new AuthService();