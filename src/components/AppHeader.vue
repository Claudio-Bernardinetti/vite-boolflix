<script>
// import AppFlags from './AppFlags.vue'
import { state } from '../state'; // Importa lo stato dell'applicazione

export default {
   name: 'AppHeader', // Nome del componente
    data() {
        return {
            state, // Lo stato dell'applicazione
            message:'', // Il messaggio da inviare
        }
    },
    mounted() { // Quando il componente viene montato
    this.state.query = 'Hello'; // Imposta la query di ricerca
    this.search(); // Esegui la ricerca
    },
    methods: {
      onSubmit() { // Quando il modulo viene inviato
      // Invia il tuo messaggio qui
      console.log(this.message); // Stampa il messaggio sulla console
      this.message = ''; // Resetta il messaggio
    },
    search() { // Esegui la ricerca
      this.$emit('search', this.state.query); // Emetti un evento di ricerca con la query corrente
    }
  }
};

</script>

<template>
  <header id="app_header">
        <div class="d-flex">
          <div class="p-3 text-danger" >
            <h1>BOOLFLIX</h1>
          </div>
          <div class="col-4 offset-5 d-flex p-4">
            <input type="text" class="form-control" placeholder="Cerca" v-model="state.query">
            <button class="btn btn-info" @click="search">Cerca</button>
          </div>
        </div>
  </header>
</template>

<style lang="scss"  scoped>
@use '../assets/scss/partials/variables' as *;
#app_header {
  background-color: black;
}
</style>
