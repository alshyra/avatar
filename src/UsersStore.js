import Vue from "vue";
import Vuex from "vuex";
import usersService from "./api/Users";

Vue.use(Vuex);

const UsersStore = new Vuex.Store({
  state: {
    user: null,
    users: []
  },
  mutations: {
    selectUser(state, user) {
      state.user = user;
    },
    addUser(state, user) {
      state.users = [...state.users, user];
    }
  },
  actions: {
    async getUsers(state) {
      const users = await usersService.getUsers();
      users.forEach(user => {
        state.commit("addUser", user);
      });
    }
  },
  getters: {
    getUser: state => () => {
      return state.user;
    },
    getUsers: state => () => {
      return state.users;
    }
  }
});

export default UsersStore;
