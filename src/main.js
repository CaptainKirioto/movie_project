/* ----------- JS imports ----------- */

import { getMovies } from './js/list-api.js';
import { createMarkup } from './js/markup.js';

/* ----------- iziToast ----------- */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* ----------- ------- ----------- */

// import { MoviesApi } from './js/list-api.js';

// const moviesApi = new MoviesApi();

// moviesApi.getMovies();

const filmsContainer = document.querySelector('.films-container');

getMovies()
  .then(data => {
    if (data.length > 0) {
      filmsContainer.insertAdjacentHTML('beforeend', createMarkup(data));
    }
  })
  .catch(error => {
    console.log(error);
  });
