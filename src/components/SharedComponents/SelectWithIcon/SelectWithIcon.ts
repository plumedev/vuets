// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';

export interface OptionSelectWithIcon {
  id: string;
  trad: string;
  imgUrl: string;
}

class Props {
  public selectedOptionId!: string | null;
  public options!: OptionSelectWithIcon[] | null;
}

@Options({
  name: 'SelectWithIcon',
  template: require('./SelectWithIcon.html'),
})
export class SelectWithIcon extends Vue.with(Props) {
  public setSelectedOption() {
    this.$emit('updateSelectedOption', 'selectedOption.id');
  }

  public get getSelectedOption(): OptionSelectWithIcon | null {
    return { id: 'KeyDisplayMode_None', trad: 'keySettings.displayMode.none', imgUrl: './images/none-zone.png'};
  }
}
