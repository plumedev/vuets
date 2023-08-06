// On importe le décorateur 'Options' et la classe de base 'Vue' du module 'vue-class-component'.
import { Options, Vue } from 'vue-class-component';
import CustomTitle from '../SharedComponents/CustomTitle';
import { TransactionType } from '@/models/transactionTypes';
import LocalStorageService from '@/services/LocalStorageService';

// Le décorateur 'Options' est utilisé pour définir les options du composant.
@Options({
  template: require('./TransactionForm.html'),
  // 'props' est utilisé pour définir les propriétés que le composant peut accepter de ses composants parents.
  props: {
  },
  components: {
    CustomTitle,
    LocalStorageService
  }
})
// On définit une classe 'CustomTitle' qui hérite de 'Vue' et qui est exportée par défaut.
// Cette classe représente le composant Vue.
export default class TransactionForm extends Vue {
  // Define your data properties
  public label = '';
  public date = '';
  public amount = '';

  public labelError = '';
  public dateError = '';
  public amountError = '';

  // Method to handle form submission
  public async submitForm(): Promise<void> {
    if(this.label && this.date && this.amount !== '') {
      const transaction = {
        label: this.label,
        date: this.date,
        amount: parseFloat(this.amount),
        type: TransactionType.Income, // By default, the type is set to Income
      };
      await this.$store.dispatch('addTransaction', transaction ).then(() => {
        // Clear the form
        this.label = '';
        this.date = '';
        this.amount = '';

        LocalStorageService.save('transactions', {

          label: transaction.label,
          date: transaction.date,
          amount: transaction.amount
        });
      }).catch((error) => {
        console.error('Error while adding transaction', error);
      });
    }
  }

  public async validForm(): Promise<void> {
    // Reset error messages
    this.labelError = '';
    this.dateError = '';
    this.amountError = '';

    // Check if fields are not empty
    if (!this.label) {
      this.labelError = 'Veuillez renseigner un label.';
    }
    if (!this.date) {
      this.dateError = 'Veuillez renseigner une date.';
    }
    if (!this.amount) {
      this.amountError = 'Veuillez renseigner un montant.';
    }

    // If no errors, submit the form
    if (this.label && this.date && this.amount) {
      try {
        await this.submitForm();
      } catch (error) {
        console.log('Error');
      }
    }
  }

  public saveDataForm(transaction: object) {
    // Save data to local storage
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

}