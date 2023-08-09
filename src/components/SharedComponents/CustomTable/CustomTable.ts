// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareMinus as fasSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus as farSquareMinus } from '@fortawesome/free-regular-svg-icons';

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
  }
})
export class CustomTable extends Vue.with(Props) {}
