import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';

export function createStore () {
  return new Vuex.Store({
    state: () => ({
      name: undefined,
      user: "default user"
    }),
    actions: {
      getUser({commit}) {
        return axios.get('https://api.github.com/users/barbier').then((response) => {
          let user = response.data.login;
          commit('setUser', { user })
        });
      },
      setName ({ commit }, page) {
        return axios.get(`/api/name/${page}`).then(({ data }) => commit('setName', data));
      }
    },
    mutations: {
      setName (state, payload) {
        state.name = payload;
      },
      setUser (state, { user }) {
        state.user = user;
      }
    }
  })
}
