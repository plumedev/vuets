// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { mapActions } from 'vuex';

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareMinus as fasSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus as farSquareMinus } from '@fortawesome/free-regular-svg-icons';

import store from '@/store';

library.add(fasSquareMinus, farSquareMinus);

class Props {
  public tableTitles!: [] | null;
  public tableRows!: [] | null;
}

@Options({
  name: 'CustomTable',
  template: require('./CustomTable.html'),
  components: {
    FontAwesomeIcon,
  },
  methods: {
    ...mapActions(['deleteTransaction'])
  }
})
export class CustomTable extends Vue.with(Props) {
  public async deleteRow(uuid: string) {
    try {
      await store.dispatch('deleteTransaction', uuid);
    } catch (error) {
      console.error('Erreur lors de la suppression de la transaction :', error);
    }
  }
}
