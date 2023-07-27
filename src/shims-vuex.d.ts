// shims-vuex.d.ts
import { Store } from 'vuex';

interface State {
  transactions: Transaction[];
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
