import { Options, Vue } from 'vue-class-component';

/** Components */
import { SelectWithIcon } from '@/components/SharedComponents/SelectWithIcon';

/** Store */

@Options({
  name: 'Home',
  template: require('./Home.html'),
  components: {
    SelectWithIcon
  },
})
export default class Home extends Vue {

  protected getSelectedDisplayMode(): string | null {
    return 'null';
  }

  protected getKeyDisplayModes() {
    const plop = [
      { id: 'KeyDisplayMode_None', trad: 'keySettings.displayMode.none', imgUrl: './images/none-zone.png'},
      { id: 'KeyDisplayMode_One', trad: 'keySettings.displayMode.one', imgUrl: './images/one-zone.png'}
    ];
    return plop;

  }

  protected changeKeyDisplayMode() {
    return 'fourBlocks';
  }
}
