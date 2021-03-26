<template>
  <div class="content">
    <h1>Osta asunto, josta tarinat alkavat</h1>

            <Autocomplete :items="apartments"/>
    <div class="box">
      <div class="cards flexbox box">

        <ApartmentCard card-id="S" :apartment-data="apartments[index]" v-for="(apt, index) in apartments" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "./cards/ApartmentCard.vue";
import ApartmentService from "../../api-services/apartment.service.js";
import Autocomplete from '../../components/dashboard/bio/apartment/Autocomplete.vue';

export default {
  name: 'ForSaleApartments',

  components: {
    ApartmentCard,
    Autocomplete
  },

  data() {
    return {
      apartments: {},
      price: {}
    }
  },
  async created() {
    try {
      const response =  await ApartmentService.getAll();
      let data = response.data;
      this.apartments = data.filter(function(el) {
        return el.isForSale === true;
      });
    } catch (err) {
      console.log("apartment data error: " + err);
    }
  },
  
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