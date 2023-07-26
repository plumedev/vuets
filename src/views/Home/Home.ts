import { Options, Vue } from 'vue-class-component';

/** Components */
import Title from '@/components/SharedComponents/Title';

/** Store */

@Options({
  name: 'Home',
  template: require('./Home.html'),
  components: {
    Title
  },
})
export default class Home extends Vue {}
