<script>
import { state } from '../src/state'

export default {
  name: 'App',
  
  data() {
    return {
      searchQuery: state.searchQuery,
      movies: state.movies,
      title: state.title,
      original_title: state.original_title,
      original_language: state.original_language,
      vote_average: state.vote_average
    }
  },

  methods: {
    searchMovies() {
      state.searchMovies();
    }
  },

  // created() {
  //   if (localStorage.getItem('title')) {
  //     this.title = localStorage.getItem('title');
  //     this.original_title = localStorage.getItem('original_title');
  //     this.original_language = localStorage.getItem('original_language');
  //     this.vote_average = parseFloat(localStorage.getItem('vote_average'));
  //   }
  // }
}
</script>

<template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search for a movie...">
    <button @click="searchMovies">Search</button>

    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>Original Title: {{ movie.original_title }}</p>
      <p>Language: {{ movie.original_language }}</p>
      <p>Vote Average: {{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>