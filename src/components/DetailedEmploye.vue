<template>
    <div v-if="user">
        <div class="user-detail">
            <img :src="user.picture.large" alt="">
            <h1>{{user.name.first}} {{user.name.last}} {{user.dob.age}} ans</h1>
        </div>
        <div class="user-info">
            <div> 
                <span class="label"> <i class="el-icon-info"></i> Email:</span>
                {{user.email}}
            </div>
            <div>
                <span class="label"> <i class="el-icon-info"></i> Username</span>
                {{user.login.username}}
            </div>
            <div>
                <span class="label"> <i class="el-icon-phone"></i> Phone</span>
                {{user.phone}}
            </div>
            <div>
                <span class="label"> <i class="el-icon-message"></i> State:</span>
                {{user.location.state}}
            </div>
            <div>
                <span class="label no-icon">City:</span>
                {{user.location.city}} {{user.location.postcode}}            
            </div>
                <div>
                <span class="label  no-icon">Street:</span>
                {{user.location.street}}
            </div>
        </div>
    </div>
    <div v-else-if="!user">
        <h1>Please select a contact</h1>
    </div>
</template>
<style>
.label {
  font-weight: 600;
}
.label.no-icon {
  margin-left: 20px;
}
.user-detail {
  text-transform: capitalize;
  font-size: 26px;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.user-detail img {
  border-radius: 50%;
  margin-right: 8px;
}
</style>

<script>
import UsersStore from "../UsersStore.js";

export default {
  name: "DetailedEmploye",
  store: UsersStore,
  data() {
      return {
          testMessage: "test"
      }
  },
  created() {
    this.testMessage = "aze";
  },
  computed: {
    user() {
      return UsersStore.getters.getUser();
    }
  }
};
</script>

