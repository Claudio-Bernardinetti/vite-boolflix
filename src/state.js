import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  base_url: 'https://api.themoviedb.org/3/search/movie?api_key=f1021dc4b8529be03e97c8bdedb0d64c',
  searchQuery: '',
  movies: [],
  title: '',
  original_title: '',
  original_language: '',
  vote_average: '',

  searchMoviesByTitle(title) {
    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=f1021dc4b8529be03e97c8bdedb0d64c&query=${encodeURIComponent(title)}`;
    axios
      .get(searchUrl)
      .then(response => {
        if (response.data.results.length > 0) {
          // Itera su tutti i risultati e recupera i loro dettagli
          response.data.results.forEach(result => {
            this.searchMovies(result.id);
          });
        } else {
          console.log('No results found');
        }
      })
      .catch(error => {
        console.log('Error:');
        console.error(error);
      });
  },

  searchMovies(movieId) {
    let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f1021dc4b8529be03e97c8bdedb0d64c`;
    axios
      .get(apiUrl)
      .then(response => {
        const movie = response.data; // Ottieni i dettagli del film
        this.title = movie.title;
        this.original_title = movie.original_title;
        this.original_language = movie.original_language;
        this.vote_average = movie.vote_average;
  
        // Aggiungi il film all'array di film
        this.movies.push({
          title: this.title,
          original_title: this.original_title,
          original_language: this.original_language,
          vote_average: this.vote_average
        });
  
        // Memorizza i dati nel local storage
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