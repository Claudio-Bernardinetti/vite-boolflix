<script>
import { state } from '../src/state'

export default {
  name: 'App',
  
  data() {
    return {
      state
    }
  },

  methods: {
   getMovies() {
      console.log('filter all movies');
      const url = this.state.base_url + `?api_key=${this.state.api_key}&query=${this.state.query}`;
      console.log(url);
      this.state.fetchMovies(url)
   }
  },

  
}
</script>

<template>
  
    <input  type="search" v-model="state.query">
    <button @click="getMovies">Search</button>

    <ol>
      <li v-for="(movie, index) in state.movies" :key="index">
        {{movie.title}}
        {{movie.original_title}}
        {{movie.original_language}}
        {{movie.vote_average}}

      </li>
    </ol>
    
</template>

<style>

</style>