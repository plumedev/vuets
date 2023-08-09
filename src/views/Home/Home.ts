import { Options, Vue } from 'vue-class-component';

/* Components */
import CustomTitle from '@/components/SharedComponents/CustomTitle';
import Header from '@/components/Header';
import TransactionForm from '@/components/TransactionForm';
import { CustomTable } from '@/components/SharedComponents/CustomTable';

/* Models */
import { TableTransactionLabels } from '@/models/tableTransactionLabels';
import { TableRows } from '@/models/tableTypes';

@Options({
  name: 'Home',
  template: require('./Home.html'),
  components: {
    CustomTitle,
    Header,
    TransactionForm,
    CustomTable
  },
})

export default class Home extends Vue {
  public getTableTitles = () => {
    const tableTitles = Object.values(TableTransactionLabels);
    return tableTitles;
  };

  public getTableRows(): TableRows[] {
    const tableRows = this.$store.state.transactions as TableRows[];
    return tableRows;
  }
}
