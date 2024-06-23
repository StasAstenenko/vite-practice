import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { UnsplashAPI } from './UnsplashAPI';
import { galleryTemplate } from './render_function';
import Pagination from 'tui-pagination'; /* ES6 */
import 'tui-pagination/dist/tui-pagination.min.css';

const api = new UnsplashAPI();
const galleryList = document.querySelector('.js-gallery');
const container = document.getElementById('tui-pagination-container');
const form = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');

const options = {
  // below default value of options
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};
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

pagination.on('afterMove', popular);

form.addEventListener('submit', async e => {
  e.preventDefault();

  const inputValue = e.target.elements.query.value.trim();

  if (inputValue === '') {
    iziToast.warning({
      message: 'Enter photo name',
    });
    return;
  }

  api.query = inputValue;
  pagination.off('afterMove', popular);
  pagination.off('afterMove', byQuery);
  showLoader();
  try {
    const data = await api.searchPhoto(currentPage);
    if (data.results.length === 0) {
      iziToast.info({
        message: 'Not found photo',
      });
      return;
    }
    iziToast.success({
      message: `We found ${data.total}`,
    });
    const markup = galleryTemplate(data.results);
    galleryList.innerHTML = markup;
    pagination.reset(data.total);
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'Error',
    });
  } finally {
    hideLoader();
    form.reset();
  }
  pagination.on('afterMove', byQuery);
});

function popular(event) {
  const currentPage = event.page;
  showLoader();
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
    })
    .finally(() => {
      hideLoader();
    });
}

function byQuery(event) {
  const currentPage = event.page;
  showLoader();
  api
    .searchPhoto(currentPage)
    .then(data => {
      const markup = galleryTemplate(data.results);
      galleryList.innerHTML = markup;
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Error',
      });
    })
    .finally(() => {
      hideLoader();
    });
}

function showLoader() {
  loader.classList.remove('visually-hidden');
}

function hideLoader() {
  loader.classList.add('visually-hidden');
}

galleryList.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') return;
  const id = e.target.closest('li').id;
  console.log(id);
});
