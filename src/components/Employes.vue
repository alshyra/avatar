<template>
    <div>
        <div v-if="users" class="users">
            <div @click="selectUser(user)" class="user" :class="{selected: isUserSelected === user.id.value}" v-for="user in users" :key="user.id.value">
                <img class="thumb" :src="user.picture.thumbnail" alt="">{{user.name.first}} {{user.name.last}}
            </div>
        </div>
        <div class="loader" v-if="!users || !users.length">
            <div class="spinner"></div> Loading ...
        </div>
    </div>
</template>


<script>
import AvatarService from "../AvatarService.js";
import UsersStore from "../UsersStore.js";

export default {
  name: "Employes",
  store: UsersStore,
  data: () => {
    return {
      users: []
    };
  },
  computed: {
    isUserSelected: () => {
      if (UsersStore.getters.getUser()) {
        return UsersStore.getters.getUser().id.value;
      }
    }
  },
  created() {
    AvatarService.getUsers().then(users => {
      this.users = users;
    });
  },
  methods: {
    selectUser(user) {
      UsersStore.commit("selectUser", user);
    }
  }
};
</script>

<style>
.thumb {
  border-radius: 50%;
  margin: 8px;
}
.users {
  display: flex;
  flex-direction: column;
}
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
}
.user:hover,
.selected {
  background-color: rgb(206, 199, 255);
}
.loader {
  font-size: 20px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.spinner {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #6157e7; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin-right: 8px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
