<script>
import AppFlags from './AppFlags.vue'
import { state } from '../state';
export default {
    name: 'AppMain',
    props: ['languageCode'],
    components: {
          AppFlags
    },
    
    data() {
    return {
      state,
      flag: null,
    }
  },
  methods: {
    handleUpdateFlag(newFlag) {
      this.flag = newFlag;
    }
  }
  
    
};
</script>


<template>
  <div id="app_main">
    <h3 class="px-3 text-black">Films</h3>
    <div class="d-flex overflow-y-hidden">
      <div class="grid-item" v-for="(result, index) in state.movieResults" :key="index">
        <div class="poster-container ">
          <img v-if="result.poster_path" :src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" alt="Poster">
          <div class="overlay p-2">
            <p><strong>Titolo:</strong> {{result.title}}</p>
            <p><strong>Titolo originale: </strong>{{result.original_title}}</p>
            <p class="m-0"><strong>Voto:</strong> </p>
            <i v-for="n in Math.ceil(result.vote_average / 2)" :key="'full-star-' + index + '-' + n">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" class="gold-star">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
              </svg>
             </i>
            <div class="overview m-2">
              <p><strong>Overview:</strong> {{result.overview}}</p>
            </div>
            <div class="language_container">
              <p><strong>Lingua:</strong> <span v-if="!flag">{{ result.original_language }}</span></p>
              <AppFlags class="flag" :language-code="result.original_language" @updateFlag="handleUpdateFlag"></AppFlags>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Repeat the same structure for TV shows -->
    <h3 class="px-3 text-black">Serie TV</h3>
    <div class="d-flex overflow-y-hidden">
      <div class="grid-item" v-for="(result, index) in state.tvShowResults" :key="index">
        <div class="poster-container">
          <img v-if="result.poster_path" :src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" alt="Poster">
          <div class="overlay p-2">
            <p><strong>Titolo:</strong> {{result.name}}</p>
            <p><strong>Titolo originale:</strong> {{result.original_name}}</p>
            <p class="m-0"><strong>Voto:</strong> </p>
            <i v-for="n in Math.ceil(result.vote_average / 2)" :key="'full-star-' + index + '-' + n">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" class="gold-star">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
              </svg>
             </i>
            <div class="overview m-2">
              <p><strong>Overview:</strong> {{result.overview}}</p>
            </div>
            <div class="language_container">
              <p><strong>Lingua:</strong> <span v-if="!flag">{{ result.original_language }}</span></p>
              <AppFlags class="flag" :language-code="result.original_language" @updateFlag="handleUpdateFlag"></AppFlags>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss"  scoped>
@use '../assets/scss/partials/variables' as *;

#app_main {
  background-color: gray;

}

.poster-container {
  position: relative;
  
  img {
    height: 350px;
    width: 250px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    color: white;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    
    .overview {
      overflow-y: auto;
      max-height: 100px;
      opacity: 0.7;
    }
    ::-webkit-scrollbar {
    width: 0px;
}
  }

  &:hover .overlay {
    opacity: 1;
  }

  .gold-star {
    fill: gold;
  }
  .flag {
    width: 30px;
    height: 25px;
    margin-left: 10px;
  }
  .language_container {
  display: flex;
  align-content: center;
  }
}
</style>