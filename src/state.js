import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  // state
  movie_url: 'https://api.themoviedb.org/3/search/movie',
  tv_url: 'https://api.themoviedb.org/3/search/tv',
  api_key: 'f1021dc4b8529be03e97c8bdedb0d64c',
  query: '',
  movieResults: [], // Risultati dei film
  tvShowResults: [], // Risultati delle serie TV
  language: '',
  
  // action
  fetchMovies(){
    const url = `${this.movie_url}?api_key=${this.api_key}&query=${this.query}`;
    axios.get(url)
    .then(response => {
      this.movieResults = response.data.results; // Aggiorna i risultati dei film
      this.language = response.data.results[0].original_language; // Aggiorna il linguaggio
    })
    .catch(error => {
      console.log(error);
    })
  },

  fetchTVShows(){
    const url = `${this.tv_url}?api_key=${this.api_key}&query=${this.query}`;
    axios.get(url)
    .then(response => {
      this.tvShowResults = response.data.results; // Aggiorna i risultati delle serie TV
      this.language = response.data.results[0].original_language; // Aggiorna il linguaggio
    })
    .catch(error => {
      console.log(error);
    })
  }
});