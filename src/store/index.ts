import { createStore } from 'vuex';

/* Models */
import { Transaction } from '@/models/transaction';

const state = {
  transactions: [] as Transaction[],
};

const store = createStore({
  state,
  getters: {
    transactions: (state) => state.transactions
  },
  mutations: {
    // Define mutation to add a new transaction
    addTransaction: (state, transaction: Transaction) => {
      state.transactions.push(transaction);
    },

    // Define mutation to sync transactions with localStorage
    syncTransactions: (state, transactions: Transaction[]) => {
      state.transactions = transactions;
    },
  },
  actions: {
    // Define action to add a new transaction
    addTransaction: ({ commit }, transaction: Transaction) => {
      commit('addTransaction', transaction);
    },
  },
  modules: {},
});

export default store;
