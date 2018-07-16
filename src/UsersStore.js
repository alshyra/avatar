import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const UsersStore = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    selectUser(state, user) {
      state.user = user;
    }
  },
  getters: {
    getUser: state => () => {
      return state.user;
    }
  }
});

export default UsersStore;
