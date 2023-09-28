<script>
import { state } from '../src/state'

export default {
  name: 'App',
  
  data() {
    return {
      // Dichiara le variabili di dati che verranno utilizzate nel componente
      searchQuery: state.searchQuery,
      movies: state.movies,
      title: state.title,
      original_title: state.original_title,
      original_language: state.original_language,
      vote_average: state.vote_average
    }
  },

  methods: {
    // Metodo per cercare film per titolo
    searchMoviesByTitle() {
      const title = this.searchQuery; // Usa la query di ricerca dell'utente
      state.searchMoviesByTitle(title);// Chiama il metodo searchMoviesByTitle dello stato
    }
  },

  created() {
    // Se esistono dati nel local storage, utilizzali per inizializzare le variabili di dati
    if (localStorage.getItem('title')) {
      this.title = localStorage.getItem('title');
      this.original_title = localStorage.getItem('original_title');
      this.original_language = localStorage.getItem('original_language');
      this.vote_average = parseFloat(localStorage.getItem('vote_average'));
    }
  }
}
</script>

<template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search for a movie...">
    <button @click="searchMoviesByTitle">Search</button>
    <!-- Visualizza i dettagli di ogni film nell'array dei film -->
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>Original Title: {{ movie.original_title }}</p>
      <p>Language: {{ movie.original_language }}</p>
      <p>Vote Average: {{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<style>

</style>