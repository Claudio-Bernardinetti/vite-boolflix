import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  // state
  movie_url: 'https://api.themoviedb.org/3/search/movie',
  tv_url: 'https://api.themoviedb.org/3/search/tv',
  api_key: 'f1021dc4b8529be03e97c8bdedb0d64c',
  query: '',
  results: [],
  
  // action
  fetchMovies(){
    const url = `${this.movie_url}?api_key=${this.api_key}&query=${this.query}`;
    axios.get(url)
    .then(response => {
      this.results = response.data.results
    })
    .catch(error => {
      console.log(error);
    })
  },

  fetchTVShows(){
    const url = `${this.tv_url}?api_key=${this.api_key}&query=${this.query}`;
    axios.get(url)
    .then(response => {
      this.results = [...this.results, ...response.data.results]
    })
    .catch(error => {
      console.log(error);
    })
  }
});
