import axios from "axios";
import { API_URL } from "../config";

export class CountriesAPI {
  // AXIOS
  static async fetchAllCountries() {
    try {
      const response = await axios.get(`${API_URL}/all`);
      return response.data;
    } catch (e) {
    }   
  }

  static async fetchByName(name) {
    try {
      const response = await axios.get(
        `${API_URL}/name/${name}?fullText=true`
      );
      return response.data;
    } catch (e) {
    }
  }
}
