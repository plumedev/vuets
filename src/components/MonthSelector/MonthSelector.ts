// On importe le décorateur 'Options' et la classe de base 'Vue' du module 'vue-class-component'.
import { Options, Vue } from 'vue-class-component';

import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/fr';

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

/* Services */
import DayJsService from '@/services/DayJsService';

import CustomTitle from '../SharedComponents/CustomTitle';

dayjs.locale('fr');
library.add(faArrowRight, faArrowLeft);
// Le décorateur 'Options' est utilisé pour définir les options du composant.
@Options({
  template: require('./MonthSelector.html'),
  // 'props' est utilisé pour définir les propriétés que le composant peut accepter de ses composants parents.
  props: {
  },
  components: {
    dayjs,
    FontAwesomeIcon,
    CustomTitle
  }
})
// On définit une classe 'MonthSelector' qui hérite de 'Vue' et qui est exportée par défaut.
// Cette classe représente le composant Vue.
export default class MonthSelector extends Vue {

  public activeMonth: Dayjs = DayJsService.getActiveMonth();
  public displayedActiveMonth: string = this.activeMonth.format('MMMM YY');

  public forwardDate(): void {
    this.activeMonth = this.activeMonth.add(1, 'month');
    this.displayedActiveMonth = this.activeMonth.format('MMMM YY');
  }

  public backwardDate(): void {
    this.activeMonth = this.activeMonth.subtract(1, 'month');
    this.displayedActiveMonth = this.activeMonth.format('MMMM YY');
  }
}
