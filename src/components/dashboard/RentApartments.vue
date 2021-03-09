<template>
  <div class="content">
    <h1>Vuokraa asunto, jossa onnellisuus asuu</h1>
    <div class="box">
      <div class="cards flexbox box">
        <ApartmentCard card-id="R" :apartment-data="apartments[index]" v-for="(apt, index) in apartments" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "./cards/ApartmentCard.vue";
import ApartmentService from "../../api-services/apartment.service.js";

export default {
  name: 'RentApartments',

  components: {
    ApartmentCard
  },

  data() {
    return {
      apartments: {},
    }
  },
  async created() {
    try {
      const response =  await ApartmentService.getAll();
      let data = response.data;
      this.apartments = data.filter(function(el) {
        return el.isForSale === false;
      });

    } catch (err) {
      console.log("apartment data error: " + err);
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