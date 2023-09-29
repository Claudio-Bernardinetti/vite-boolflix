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
    getMoviesAndTVShows() {
        this.state.results = [];
        this.state.fetchMovies();
        this.state.fetchTVShows();
      }
    }
}

</script>

<template>
  
    <div>
    <input type="search" v-model="state.query">
    <button @click="getMoviesAndTVShows">Search</button>

    <ol>
      <li v-for="(result, index) in state.results" :key="index">
        {{result.title || result.name}}
        {{result.original_title || result.original_name}}
        <img v-if="languages[result.original_language]" :src="languages[result.original_language]
        .flag" alt="Country Flag" style="width: 20px; height: auto;">
        <span v-else>{{result.original_language}}</span>
        {{result.vote_average}}
      </li>
    </ol>
  </div>
    
</template>

<style lang="scss" >

</style>
        