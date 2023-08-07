// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';

// Extra
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareMinus as fasSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus as farSquareMinus } from '@fortawesome/free-regular-svg-icons';

/* Models */
import { TableRows } from '@/models/tableTypes';
import { TableTransactionLabels } from '@/models/tableTransactionLabels';

library.add(fasSquareMinus, farSquareMinus);

class Props {
    public tableTitles!: string;
    public tableRows!: string;
}

// Le décorateur 'Options' est utilisé pour définir les options du composant.
@Options({
    components: {
        FontAwesomeIcon,
        farSquareMinus,
        TableTransactionLabels
    },
    // 'template' est utilisé pour définir le modèle HTML du composant. Ici, il utilise dynamiquement la prop
    // 'type' comme la balise HTML et la prop 'content' comme le contenu de la balise.
    template: require('./CustomTable.html'),
    props: {
        tableTitles: String,
        tableRows: String
    },
    computed: {
        ...mapGetters({
            transactions: 'transactions',
        }),
    },
})
// On définit une classe 'CustomTitle' qui hérite de 'Vue' et qui est exportée par défaut.
// Cette classe représente le composant Vue.
export default class CustomTable extends Vue.with(Props) {
    public getTableTitles = () => Object.values(TableTransactionLabels);

    public getTableRows(): TableRows[] {
        console.log('getTableRows');
        return (this.$store.state as any)[this.tableRows] as TableRows[];
    }
}
