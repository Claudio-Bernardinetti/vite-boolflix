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
            <img v-if="result.poster_path" :src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" alt="Poster">
            <img v-if="languages[result.original_language]" :src="languages[result.original_language].flag" alt="Country Flag" style="width: 20px; height: auto;">
            <span v-else>{{result.original_language}}</span>
            <!-- Trasforma il voto in stelle -->
            <i v-for="n in Math.ceil(result.vote_average / 2)" :key="'full-star-' + index + '-' + n">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
              </svg>
            </i>
          </li>
        </ol>
    
     </div>
    
</template>

<style lang="scss" >

</style>
        