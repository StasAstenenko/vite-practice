import iziToast from 'izitoast';
import { UnsplashAPI } from './UnsplashAPI';
import { galleryTemplate } from './render_function';
import Pagination from 'tui-pagination'; /* ES6 */
import 'tui-pagination/dist/tui-pagination.min.css';

const api = new UnsplashAPI();
const galleryList = document.querySelector('.js-gallery');
const container = document.getElementById('tui-pagination-container');
const form = document.querySelector('.js-search-form');



const options = { // below default value of options
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
}
const pagination = new Pagination(container, options);

const currentPage = pagination.getCurrentPage();


api
  .getPopularPhotos(currentPage)
  .then(data => {
    const markup = galleryTemplate(data.results);
    galleryList.innerHTML = markup;
    pagination.reset(data.total);
  })
  .catch(err => {
    console.log(err);
    iziToast.error({
      message: 'Error',
    });
  });

pagination.on('afterMove', (event) => {
    const currentPage = event.page;
    api
  .getPopularPhotos(currentPage)
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
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const inputValue = e.target.elements.query.value.trim();

  if (inputValue === '') {
    iziToast.warning({
      message: 'Enter photo name',
    });
    return;
  };

  api.query = inputValue;
  try {
    const data = await api.searchPhoto(currentPage);
    const markup = galleryTemplate(data.results);
    galleryList.innerHTML = markup;
    pagination.reset(data.total);
  } catch (err) {
  console.log(err);
  };


});