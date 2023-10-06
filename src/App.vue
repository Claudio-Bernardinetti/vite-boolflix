<script>
import { state } from './state'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFlags from './components/AppFlags.vue'

export default {
  components:{
     AppHeader, // Importa il componente AppHeader
     AppMain, // Importa il componente AppMain
     AppFlags // Importa il componente AppFlags
    },
    data() {
      return {
        state, // Lo stato dell'applicazione
        search:'', // La query di ricerca
        languageCode: '', // Il codice della lingua
      }
    },
    methods: {
      handleSearch(query) { // Gestisce la ricerca
          this.state.query = query; // Imposta la query di ricerca
          
          this.state.results = []; // Resetta i risultati
          this.state.fetchMovies(); // Cerca i film
          this.state.fetchTVShows(); // Cerca le serie TV
        }
      },
      mounted() { // Quando l'applicazione è montata
  this.languageCode = this.state.languageCode; // Imposta il codice della lingua
 }
 };

</script>

<template>
  <AppHeader @search="handleSearch"></AppHeader> <!-- Mostra l'header e gestisce l'evento di ricerca -->
  <AppMain > 
    <AppFlags :language-code="state.languageCode"></AppFlags> <!-- Mostra le bandiere delle lingue -->
  </AppMain>
</template>

<style lang="scss" >
  /* Qui puoi aggiungere i tuoi stili */
</style>
        