import { createStore } from 'vuex';

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // keySettingsStore: KeySettingsStore,
    // layoutSettingsStore: LayoutSettingsStore,
    // layoutDetailStore: LayoutDetailStore,
    // layoutsListStore: LayoutsListStore,
    // settingsStore: SettingsStore,
    // layoutLibraryStore: LayoutLibraryStore,
  },
});

export default store;

// export const keySettingsStore = (): KeySettingsStore =>
//   getModule(KeySettingsStore, store);
// export const layoutSettingsStore = (): LayoutSettingsStore =>
//   getModule(LayoutSettingsStore, store);
// export const layoutDetailStore = (): LayoutDetailStore =>
//   getModule(LayoutDetailStore, store);
// export const layoutsListStore = (): LayoutsListStore =>
//   getModule(LayoutsListStore, store);
// export const settingsStore = (): SettingsStore =>
//   getModule(SettingsStore, store);
// export const layoutLibraryStore = (): LayoutLibraryStore =>
//   getModule(LayoutLibraryStore, store);
