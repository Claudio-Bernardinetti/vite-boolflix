<script>
import { state } from '../state'


export default {
    name: 'AppFlags', // Nome del componente
    props: ['languageCode'], // Proprietà passate al componente
    
    data() {
        return {
            state, // Lo stato dell'applicazione
            languages: { // Le lingue e le relative bandiere
                'en': { country: 'en', flag: state.en_flag },
                'fr': { country: 'fr', flag: state.fr_flag },
                'it': { country: 'it', flag: state.it_flag },
                'ko': { country: 'ko', flag: state.ko_flag },
                'es': { country: 'es', flag: state.sp_flag },
                'ja': { country: 'jp', flag: state.ja_flag },
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
     <img v-if="flag" :src="flag" :alt="`Flag of ${languageCode}`">
     <span v-else>{{ languageCode }}</span>
</template>