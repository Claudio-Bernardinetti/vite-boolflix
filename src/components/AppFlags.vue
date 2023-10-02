<script>
import { state } from '../state'
import gbFlag from '../country-flag-icons/3x2/GB.svg';
import frFlag from '../country-flag-icons/3x2/FR.svg';
import itFlag from '../country-flag-icons/3x2/IT.svg';
import koFlag from '../country-flag-icons/3x2/KR.svg';
import esFlag from '../country-flag-icons/3x2/ES.svg';
import jpFlag from '../country-flag-icons/3x2/JP.svg';

    export default {
        name: 'AppFlags',
        props: ['languageCode'],
    
        data() {
            return {
            state,
            languages: {
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
        flag() {
            if (this.languages[this.languageCode]) {
                return this.languages[this.languageCode].flag;
            } else {
                return null;
            }
        }
    }
};
</script>

<template>
    <img v-if="flag" :src="flag" :alt="`Flag of ${languageCode}`">
</template>
