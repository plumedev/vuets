import { Options, Vue } from 'vue-class-component';

/** Components */
import CustomTitle from '@/components/SharedComponents/CustomTitle';
import Header from '@/components/Header';
import TransactionForm from '@/components/TransactionForm';
import CustomTable from '@/components/SharedComponents/CustomTable';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareMinus as fasSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus as farSquareMinus } from '@fortawesome/free-regular-svg-icons';
import { TableTransactionLabels } from '@/models/tableTransactionLabels';

library.add(fasSquareMinus, farSquareMinus);

interface TableRows {
  label: string;
  date: string;
  amount: number;
}

/** Store */

@Options({
  name: 'Home',
  template: require('./Home.html'),
  components: {
    CustomTitle,
    Header,
    TransactionForm,
    CustomTable,
    FontAwesomeIcon
  },
})
export default class Home extends Vue {
  public getTableTitles = () => Object.values(TableTransactionLabels);

  public getTableRows(): TableRows[] {
      const tableRows = this.$store.state.transactions as TableRows[];
      console.log(tableRows);
      return tableRows;
  }
}
