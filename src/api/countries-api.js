import axios from "axios";
import { API_URL } from "../config";

export class CountriesAPI {
  // AXIOS
  static async fetchAllCountries() {
    try {
      const response = await axios.get(`${API_URL}/`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }   
  }

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
      );
      return response.data.results;
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
