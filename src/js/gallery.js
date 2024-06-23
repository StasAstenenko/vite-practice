import iziToast from 'izitoast';
import { UnsplashAPI } from './UnsplashAPI';
import { galleryTemplate } from './render_function';

const api = new UnsplashAPI();
const galleryList = document.querySelector('.js-gallery');

api
  .getPopularPhotos(1)
  .then(data => {
    const markup = galleryTemplate(data.results);
    galleryList.innerHTML = markup;
  })
  .catch(err => {
    console.log(err);
    iziToast.error({
      message: 'Error',
    });
  });
