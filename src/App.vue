<script>

import { state } from '../src/state'
import gbFlag from '../src/country-flag-icons/3x2/GB.svg';
import frFlag from '../src/country-flag-icons/3x2/FR.svg';
import itFlag from '../src/country-flag-icons/3x2/IT.svg';
import koFlag from '../src/country-flag-icons/3x2/KR.svg';
import esFlag from '../src/country-flag-icons/3x2/ES.svg';

export default {
  name: 'App',
  
  data() {
    return {
      state,
      languages: {
        'en': { country: 'en', flag: gbFlag },
        'fr': { country: 'fr', flag: frFlag },
        'it': { country: 'it', flag: itFlag },
        'ko': { country: 'ko', flag: koFlag },
        'es': { country: 'es', flag: esFlag },
      }
    }
  },
  
  methods: {

   getMovies() {
      console.log('filter all movies');
      const url = this.state.base_url + `?api_key=${this.state.api_key}&query=${this.state.query}`;
      console.log(url);
      this.state.fetchMovies(url)
   }
  
  }
}
</script>

<template>
  
    <input  type="search" v-model="state.query">
    <button @click="getMovies">Search</button>

    <ol>
      <li v-for="(movie, index) in state.movies" :key="index">
        {{movie.title}}
        {{movie.original_title}}
        <img v-if="languages[movie.original_language]" :src="languages[movie.original_language].flag" alt="Country Flag" style="width: 20px; height: auto;">
        <span v-else>{{movie.original_language}}</span>
        {{movie.vote_average}}
      </li>
    </ol>
    
</template>

<style lang="scss" >



  
</style>
        