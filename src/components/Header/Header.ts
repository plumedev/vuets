// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

class Props {}

library.add(faHouse);

@Options({
  name: 'Header',
  template: require('./Header.html'),
  components: {
    FontAwesomeIcon
  }
})
export default class Header extends Vue.with(Props) {
}
