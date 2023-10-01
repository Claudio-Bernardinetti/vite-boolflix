<script>
// import AppFlags from './AppFlags.vue'
import { state } from '../state';
export default {
  
   name: 'AppHeader',
    data() {
        return {
            state,
            message:'',
        }
    },
    mounted() {
    this.state.query = 'Hello';
    this.search();
  },
    methods: {
      onSubmit() {
      // Invia il tuo messaggio qui
      console.log(this.message);
      this.message = '';
    },
    search() {
      this.$emit('search', this.state.query);
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
