import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  base_url: 'https://api.themoviedb.org/3/search/movie?api_key=f1021dc4b8529be03e97c8bdedb0d64c&query=',
  searchQuery: '',
  movies: [],
  title: '',
  original_title: '',
  original_language: '',
  vote_average: '',

  searchMovies() {
    axios
      .get(this.base_url + this.searchQuery)
      .then(response => {
        this.movies = response.data.results; // Store all movies from the results
        const movie = this.movies[0]; // Get the first movie from the results
        this.title = movie.title;
        this.original_title = movie.original_title;
        this.original_language = movie.original_language;
        this.vote_average = movie.vote_average;

        // Store data in local storage
        localStorage.setItem('title', this.title);
        localStorage.setItem('original_title', this.original_title);
        localStorage.setItem('original_language', this.original_language);
        localStorage.setItem('vote_average', this.vote_average.toString());
    })
    .catch(error => {
      console.log('Error:');
      console.error(error);
    });
  }
});