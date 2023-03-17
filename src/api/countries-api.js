import axios from "axios";
import { API_URL } from "../config";

export class CountriesAPI {
  // AXIOS
  static async fetchAllCountries() {
    try {
      const response = await axios.get(`${API_URL}/all`);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }   
  }

  static async fetchByName(name) {
    try {
      const response = await axios.get(
        `${API_URL}/name/${name}?fullText=true`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
      );
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }
}
