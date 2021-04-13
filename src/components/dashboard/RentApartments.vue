<template>
  <div class="content">
    <h1>Vuokraa asunto, jossa onnellisuus asuu!</h1>

    <div id="autoCompleteParent" class="flexbox">
      <Autocomplete
        id="searchBar"
        v-on:childToParent="updateFilteredApartments"
        :items="apartments"
      />
    </div>
          <button v-if="filterActive" @click="removeFilter">
        {{ typeOptions}} {{ filterType }}: {{ optionValue }} {{givenCity}} ({{filteredApartments.length}} osumaa)<i id="icon" class="far fa-times-circle"></i>
      </button>
    <div class="box">
      <div v-if="!filterActive" class="cards flexbox box">
        <ApartmentCard
          card-id="R"
          :apartment-data="apartments[index]"
          v-for="(apt, index) in apartments"
          :key="index"
        />
      </div>
      <div v-else class="cards flexbox box">
        <ApartmentCard
          card-id="R"
          :apartment-data="filteredApartments[index]"
          v-for="(apt, index) in filteredApartments"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "./cards/ApartmentCard.vue";
import ApartmentService from "../../api-services/apartment.service.js";
import Autocomplete from "../../components/dashboard/bio/apartment/Autocomplete.vue";
export default {
  name: "RentApartments",
  components: {
    ApartmentCard,
    Autocomplete,
  },
  data() {
    return {
      apartments: {},
      filteredApartments: [],
      filterActive: false,
      filterType: "",
      optionValue: "",
      houseFilterType:"",
      houseOptionValue:"",
      givenCity:"",
      typeOptions:[],
    };
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
  },
  methods: {
    updateFilteredApartments(value) {
      if (value.wantedApts) {
      console.log(value)
      this.filteredApartments = value.wantedApts;
      this.filterActive = true;
      this.filterType = value.filterType;
      this.optionValue = value.optionValue;
      this.givenCity = value.givenCity
      } else {
        this.removeFilter()
      }
    },
    removeFilter() {
      this.filteredApartments = [];
      this.filterActive = false;
    },
  },
};
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
#autoCompleteParent {
  justify-content: center;
  margin-bottom: 1em;
}
svg {
  margin-top: auto;
  margin-left: 0.25em;
}
</style>