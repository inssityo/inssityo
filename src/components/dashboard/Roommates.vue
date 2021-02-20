<template>
  <div class="content">
    <h1>Löydä itsellesi sopiva kämppis</h1>
    <div class="box">
      <div class="roommate-cards flexbox box">
        <RoommateCard :user-data="users[index]" v-for="(user, index) in users" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import RoommateCard from "./cards/RoommateCard.vue";
import UserService from "../../api-services/user.service.js";

export default {
  name: 'Roommates',

  components: {
    RoommateCard,
  },

  data() {
    return {
      users: {}
    }
  },
  async created() {
    UserService.getAll().then((response) => {
      this.users = response.data;
    }).catch((error) => {
      console.log("user data error: " + error.response.data);
    });
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h1 {
  margin-top: 3rem;
  margin-bottom: 4rem;
}
.roommate-cards {
  flex-wrap: wrap;
  justify-content: center;
}


</style>