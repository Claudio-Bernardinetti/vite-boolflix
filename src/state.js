import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  // stato
  movie_url: 'https://api.themoviedb.org/3/search/movie', // URL per cercare i film
  tv_url: 'https://api.themoviedb.org/3/search/tv', // URL per cercare le serie TV
  api_key: 'f1021dc4b8529be03e97c8bdedb0d64c', // La tua chiave API
  it_flag: 'https://flagsapi.com/IT/flat/64.png',
  fr_flag: 'https://flagsapi.com/FR/flat/64.png',
  en_flag: 'https://flagsapi.com/GB/flat/64.png',
  sp_flag: 'https://flagsapi.com/ES/flat/64.png',
  ja_flag: 'https://flagsapi.com/JP/flat/64.png',
  ko_flag: 'https://flagsapi.com/KR/flat/64.png',
  query: '', // La tua query di ricerca
  movieResults: [], // I risultati della ricerca dei film
  tvShowResults: [], // I risultati della ricerca delle serie TV
  languageCode: '', // Il codice della lingua
  
  // azioni
  fetchMovies(){
    const url = `${this.movie_url}?api_key=${this.api_key}&query=${this.query}`; // Costruisci l'URL per la richiesta
    axios.get(url) // Fai una richiesta GET all'URL
    .then(response => {
      this.movieResults = response.data.results; // Aggiorna i risultati dei film con la risposta
      this.language = response.data.results[0].original_language; // Aggiorna la lingua con la risposta
    })
    .catch(error => {
      console.log(error); // Stampa l'errore se c'è un problema con la richiesta
    })
  },

  fetchTVShows(){
    const url = `${this.tv_url}?api_key=${this.api_key}&query=${this.query}`; // Costruisci l'URL per la richiesta
    axios.get(url) // Fai una richiesta GET all'URL
    .then(response => {
      this.tvShowResults = response.data.results; // Aggiorna i risultati delle serie TV con la risposta
      this.language = response.data.results[0].original_language; // Aggiorna la lingua con la risposta
    })
    .catch(error => {
      console.log(error); // Stampa l'errore se c'è un problema con la richiesta
    })
  }
});