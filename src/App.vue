<script>
import { state } from './state'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFlags from './components/AppFlags.vue'

export default {

  components:{
     AppHeader,
     AppMain,
     AppFlags
    },
    data() {
      return {
        state,
        search:'',
        languageCode: '',
      }
    },
    // computed: {
    // languageCode() {
    //   return this.state.languageCode;
    //   }
    // },

    methods: {
      handleSearch(query) {
          this.state.query = query;
          
          this.state.results = [];
          this.state.fetchMovies();
          this.state.fetchTVShows();
        }
      },
      mounted() {
  this.languageCode = this.state.languageCode;
 }
 };

</script>

<template>
  <AppHeader @search="handleSearch"></AppHeader>
  <AppMain :results="state.results">
    <AppFlags :language-code="state.languageCode"></AppFlags>
  </AppMain>
  
     
    
</template>

<style lang="scss" >

</style>
        