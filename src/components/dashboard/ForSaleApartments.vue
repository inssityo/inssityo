<template>
  <div class="content">
    <h1>Osta asunto, josta tarinat alkavat</h1>
    <div class="box">
      <div class="cards flexbox box">
        <ApartmentCard card-id="S" v-for="r in cards" :key="r"/>
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "./ApartmentCard.vue"

export default {
  name: 'RentApartments',

  components: {
    ApartmentCard
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
.cards {
  flex-wrap: wrap;
  justify-content: center;
}


</style>