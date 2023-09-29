import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  // state
  base_url: 'https://api.themoviedb.org/3/search/movie',
  api_key: 'f1021dc4b8529be03e97c8bdedb0d64c',
  query: '',
  movies: [],
  
  // action
  fetchMovies(url){
    axios.get(url)
    .then(response => {
      console.log(response);
      this.movies = response.data.results
    })
    .catch(error => {
      console.log(error);
    })
  }
});