<template>
  <div class="content">
    <h1>Vuokraa asunto, jossa onnellisuus asuu</h1>

            <Autocomplete v-on:childToParent="updateFilteredApartments" :items="apartments"/>

    <div class="box">
      
    <button v-if="filterActive" @click="removeFilter"> {{filterType}} : {{optionValue}}</button>
      <div v-if="!filterActive"  class="cards flexbox box">
        <ApartmentCard card-id="R" :apartment-data="apartments[index]" v-for="(apt, index) in apartments" :key="index"/>
      </div>
            <div v-else class="cards flexbox box">
        <ApartmentCard card-id="R" :apartment-data="filteredApartments[index]" v-for="(apt, index) in apartments" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "./cards/ApartmentCard.vue";
import ApartmentService from "../../api-services/apartment.service.js";
import Autocomplete from '../../components/dashboard/bio/apartment/Autocomplete.vue';

export default {
  name: 'RentApartments',

  components: {
    ApartmentCard,
    Autocomplete
  },

  data() {
    return {
      apartments: {},
      filteredApartments:{},
      filterActive:false,
      filterType:"",
      optionValue:"",
    }
  },
  async created() {
    try {
      const response =  await ApartmentService.getAll();
      this.apartments = response.data;
    } catch (err) {
      console.log("apartment data error: " + err);
    }
  },
  methods: {
    updateFilteredApartments(value) {
      console.log(value)
      this.filteredApartments = value.wantedApts;
      this.filterActive = true;
      this.filterType = value.filterType;
      this.optionValue = value.optionValue
      console.log(this.apartments)
      console.log(this.filteredApartments)
    },
    removeFilter() {
      this.filteredApartments={}
      this.filterActive= false
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