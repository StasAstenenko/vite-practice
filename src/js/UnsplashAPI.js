import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = '';

  async getPopularPhotos(page) {
    const url = `${
      this.#BASE_URL
    }/search/photos?page=${page}&query=popular&per_page=12&orientation=portrait&client_id=${
      this.#API_KEY
    }`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async searchPhoto(page) {
    const url = `${
      this.#BASE_URL
    }/search/photos?page=${page}&query=${this.#query}&per_page=12&orientation=portrait&client_id=${
      this.#API_KEY
    }`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
