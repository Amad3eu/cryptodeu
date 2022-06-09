import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    crypto: [1],
  },
  actions: {
    async fetchCrypto({ commit }) {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
        );
        commit("setCrypto", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    setCrypto: (state, payload) => {
      state.crypto = payload;
    },
  },
  getters: {
    getCrypto: (state) => state.crypto,
  },
  modules: {},
});
