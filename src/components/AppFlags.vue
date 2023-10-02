<script>
import { state } from '../state'
import gbFlag from '../country-flag-icons/3x2/GB.svg';
import frFlag from '../country-flag-icons/3x2/FR.svg';
import itFlag from '../country-flag-icons/3x2/IT.svg';
import koFlag from '../country-flag-icons/3x2/KR.svg';
import esFlag from '../country-flag-icons/3x2/ES.svg';
import jpFlag from '../country-flag-icons/3x2/JP.svg';

export default {
    name: 'AppFlags', // Nome del componente
    props: ['languageCode'], // Proprietà passate al componente
    
    data() {
        return {
            state, // Lo stato dell'applicazione
            languages: { // Le lingue e le relative bandiere
                'en': { country: 'en', flag: gbFlag },
                'fr': { country: 'fr', flag: frFlag },
                'it': { country: 'it', flag: itFlag },
                'ko': { country: 'ko', flag: koFlag },
                'es': { country: 'es', flag: esFlag },
                'ja': { country: 'jp', flag: jpFlag },
            },
        }
    },
    
    computed: {
        flag() { // Calcola la bandiera da mostrare
            if (this.languages[this.languageCode]) { // Se la lingua è presente nell'oggetto languages
                return this.languages[this.languageCode].flag; // Restituisci la bandiera corrispondente
            } else {
                return null; // Altrimenti restituisci null
            }
        }
    }
};
</script>

<template>
    <img v-if="flag" :src="flag" :alt="`Flag of ${languageCode}`"> <!-- Mostra la bandiera se è disponibile -->
</template>