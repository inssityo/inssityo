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
import { pruneUsers, createComparedTargetObject, createComparisonUserObjects } from '../../algorithm/comparableObjects.js'
import { getSimilarities/*calculateDistance, calculateIfExists*/ } from '../../algorithm/similarity.js'

export default {
  name: 'Roommates',
  inject: ['$store'],

  components: {
    RoommateCard,
  },

  data() {
    return {
      users: {},
      userId: "601a7fa029bf5f228cfcd4c5", //Hae tietokannasta
      
      pruneUsersObject: [],
      comparedTargetObject: {},
      comparisonUserObjects: {},
    }
  },
  async created() {
    try {
      const response =  await UserService.getAll();
      let users = response.data;

      /* ==============================================================================*/
      //Get logged in user, POISTA TÄMÄ
      let loggedInUser = users.filter(({_id}) => _id.includes(this.userId));

      //Siirrä nämä api-serviceen
      this.$store.commit("loggedInUser", loggedInUser[0]);
      this.$store.commit("targetProfile", loggedInUser[0].targetProfile);
      /* ==============================================================================*/

      //Remove logged in user
      this.users = users.filter(({_id}) => !_id.includes(this.userId));

    } catch (err) {
      console.log("user data error: " + err);
    }
    this.pruneUsersFirst();
  },
  methods: {
    pruneUsersFirst() {
      const userObjects = this.users;
      this.pruneUsersObject = pruneUsers(userObjects, this.$store.getters.getLoggedInUser.targetProfile);
      this.createObjects();
    },
    createObjects() {
      this.comparedTargetObject = createComparedTargetObject(this.$store.getters.getLoggedInUser);
      this.comparisonUserObjects = createComparisonUserObjects(this.pruneUsersObject); //MUUTTAA THIS.USERS TIETOJA!!!!!
      this.calculateSimilarity();
    },
    calculateSimilarity() {
      
      //[0] or [1]
      //[0][0] or [1][0]

      let similarities = getSimilarities(
        this.comparisonUserObjects[0], this.comparedTargetObject[0][0], 
        this.comparisonUserObjects[1], this.comparedTargetObject[1][0]);
      
      console.log(similarities)
      /*
      let ifExists = calculateIfExists(this.comparisonUserObjects[0], this.comparedTargetObject[0][0]);
      console.log("IF exists ", ifExists);
      
      let distances = calculateDistance(this.comparisonUserObjects[1], this.comparedTargetObject[1][0]);
      console.log("DISTANCE ", distances) //TOIMII*/
    }
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