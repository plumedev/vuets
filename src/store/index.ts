import { createStore } from 'vuex';

/* Models */
import { Transaction } from '@/models/transaction';

// Tentative de récupération des transactions sauvegardées dans le localStorage
const savedTransactions = localStorage.getItem('transactions');
// Si les transactions sont présentes dans le localStorage, on les parse, sinon on initialise un tableau vide
const initialTransactions = savedTransactions ? JSON.parse(savedTransactions) : [];

// Initialisation de l'état (state) avec les transactions
const state = {
  transactions: initialTransactions as Transaction[],
};

const store = createStore({
  state,
  getters: {
    transactions: (state) => state.transactions
  },
  mutations: {
    addTransaction: (state, transaction: Transaction) => {
      state.transactions.push(transaction);
    },
    syncTransactions: (state, transactions: Transaction[]) => {
      state.transactions = transactions;
    },
    deleteTransaction: (state, uuid: string) => {
      state.transactions = state.transactions.filter((transaction) => transaction.uuid !== uuid);
    },
  },
  actions: {
    addTransaction: ({ commit }, transaction: Transaction) => {
      commit('addTransaction', transaction);
    },
    deleteTransaction: ({ commit }, uuid: string) => {
      commit('deleteTransaction', uuid);
    },
  },
  modules: {},
});

// S'abonner aux mutations du store
store.subscribe((mutation, state) => {
  if (mutation.type === 'addTransaction'      ||
      mutation.type === 'deleteTransaction'   ||
      mutation.type === 'syncTransactions') {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }
});

export default store;
