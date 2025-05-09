import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByQuery } from './js/pixabay-api';

// axios.defaults.headers.common['key'] = '50191530-19c60f56ef7d22126639596e8';
const formEl = document.querySelector('.js-form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDeafult();
  console.log(event.target.elements.query.value);
  const query = event.target.elements.query.value;
  console.log(getImagesByQuery(query));
}
