import axios from 'axios';
export function getImagesByQuery(query) {}
axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.headers.common['key'] = '50191530-19c60f56ef7d22126639596e8';

const params = {
  image_type: 'photo',
  oriention: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(guery) {
  return axios('', {
    params: {
      q: guery,
      key: '50191530-19c60f56ef7d22126639596e8',
      image_type: 'photo',
      oriention: 'horizontal',
      safesearch: true,
    },
  }).then(res => res);
}
