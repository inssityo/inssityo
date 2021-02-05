<template>
  <div class="content">
    <h1>Löydä itsellesi sopiva kämppis</h1>
    <div class="box">
      <div class="roommate-cards flexbox box">
        <RoommateCard v-for="r in cards" :key="r"/>
      </div>
    </div>
  </div>
</template>

<script>
import RoommateCard from "./RoommateCard.vue"

export default {
  name: 'Roommates',

  components: {
    RoommateCard
  },

  data() {
    return {
      cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
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