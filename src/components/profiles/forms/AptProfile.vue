<template>
  <div>  
    <h2>Minne olet muuttamassa:</h2>

    <div class="container">

      <div class="column column-item--1">
        <div class="row-item--1">
          <AptImage />
        </div>
      </div>

      <div class="column column-item--2">
        <div class="row-item--1 flexbox">
          <RentBuy id-value="A" v-on:childToParent="onChildClickRentBuy" />
        </div>
        <div class="row-item--2 flexbox">
          <label for="location" class="label__border-bottom--green border-radius__left">Kaupunki*</label>
          <input type="text" id="location" class="border-radius__right" v-model="location">
        </div>
        <div class="row-item--3 flexbox">
          <label for="neighborhood" class="label__border-bottom--green border-radius__left">Kaupunginosa</label>
          <input type="text" id="neighborhood" class="border-radius__right" v-model="neighborhood">
        </div>
        <div class="row-item--4 flexbox">
          <label for="address" class="label__border-bottom--green border-radius__left">Osoite</label>
          <input type="text" id="address" class="border-radius__right" v-model="address">
        </div>
        <div class="row-item--5 flexbox"> <!-- tee leveämpi -->
          <label for="area-code" class="label__border-bottom--green border-radius__left">Postinumero</label>
          <input type="text" id="area-code" class="border-radius__right" v-model="areaCode">
        </div>
        <div class="row-item--6 flexbox">
          <Features v-on:childToParent="onChildClickFeatures" />
        </div>
        <div class="row-item--7 flexbox">
          <LocationType v-on:childToParent="onChildClickLocationType" />
        </div>
        <div class="row-item--8 flexbox">
          <BuildingType v-on:childToParent="onChildClickBuildingType" />
        </div>
      </div>

      <div class="column column-item--3">
        <div class="row-item--1">
          <Rooms v-on:childToParent="onChildClickRooms" />
        </div>
        <div class="row-item--2">
          <Roommates v-on:childToParent="onChildClickRoommates" />
        </div>
        <div class="row-item--3">
          <PriceMinMax v-on:childToParent="onChildClickPrice" />
        </div>
          <div class="row-item--4">
          {{fromChildLocationType}}
          {{fromChildBuildingType}}
          {{fromChildFeatures}}
          {{fromChildCheckedOwner}}
          </div>
      </div>

    </div>

  </div>
</template>

<script>
import AptImage from '../inputElements/apartment/AptImage.vue'
import BuildingType from '../inputElements/apartment/BuildingType.vue'
import LocationType from '../inputElements/apartment/LocationType.vue'
import RentBuy from '../inputElements/apartment/RentBuy.vue'
import Rooms from '../inputElements/apartment/Rooms.vue'
import PriceMinMax from '../inputElements/apartment/PriceMinMax.vue'
import Features from '../inputElements/apartment/Features.vue'
import Roommates from '../inputElements/apartment/Roommates.vue'

//import axios from 'axios';

export default {
  name: 'AptProfile',
  el: '#aptProfile',

  components: {
    AptImage,
    RentBuy,
    LocationType,
    BuildingType,
    Rooms,
    PriceMinMax,
    Features,
    Roommates
  },
  
  data() {
    return {
      location: '',
      neighborhood: '',
      address: '',
      areaCode: '',
      fromChildCheckedOwner: null,
      fromChildLocationType: [],
      fromChildBuildingType: [],
      fromChildAreaMin: null,
      fromChildAreaMax: null,
      fromChildPriceMin: null,
      fromChildPriceMax: null,
      fromChildFeatures: [],
      fromChildRooms: [],
      fromChildRoommates: [],
      
      errors: {},
      errorList: {},
      isValid: true,
    }
  },

  methods: {
    /*
    emitToParent() {
      this.$emit('childToParent', this.firstname)
    },*/
    onChildClickRentBuy(value) {
      this.fromChildCheckedOwner = value;
    },
    onChildClickLocationType(value) {
      this.fromChildLocationType = value;
      this.handleWorkType();
    },
    onChildClickBuildingType(value) {
      this.fromChildBuildingType = value;
    },
    onChildClickRooms(value) {
      this.fromChildRooms = value;
    },
    onChildClickPrice(value) {
      this.fromChildPriceMin = value.min;
      this.fromChildPriceMax = value.max;
    },
    onChildClickFeatures(value) {
      this.fromChildFeatures = value;
    },
    onChildClickRoommates(value) {
      this.fromChildRoommates = value;
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

h2 {
  padding-top: 1rem;
}
input[type="text"] {
  padding: 0.5rem;
  margin: 0.5rem 0;
}
.container {
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 1rem;
}
.column {
  display: grid;
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 22.9rem);
  background: v.$KAMGrey;
}
.column-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 3rem);
  background: v.$KAMGrey;
  padding-bottom: 1.9rem;
}
.column-item--3 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 3rem);
  background: v.$KAMBeige;
}
//Image
.column-item--1 .row-item--1 { 
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
//Rent or Buy
.column-item--2 .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0 0.8rem;
}
.column-item--2 .row-item--1 div {
  width: 100%;
}
//City
.column-item--2 .row-item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 0 0.8rem;
}
//Neighborhood
.column-item--2 .row-item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 0 0.8rem;
}
//Address
.column-item--2 .row-item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  margin: 0 0.8rem;
}
//Area code
.column-item--2 .row-item--5 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  margin: 0 0.4rem 0 0.8rem;
}
.column-item--2 .row-item--2 label, 
.column-item--2 .row-item--3 label, 
.column-item--2 .row-item--4 label, 
.column-item--2 .row-item--5 label {
  padding: 0.5rem;
  margin: auto 0;
}
//Features
.column-item--2 .row-item--6 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  margin: 0 0.8rem 0 0.4rem;
}
//Location type
.column-item--2 .row-item--7 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 8;
  margin: 0 0.4rem 0 0.8rem;
}
//Building type
.column-item--2 .row-item--8 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  margin: 0 0.8rem 0 0.4rem;
}
//Rooms
.column-item--3 .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0 0.4rem 0 0.8rem;
}
//Roommates
.column-item--3 .row-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0 0.8rem 0 0.4rem;
}
//Price
.column-item--3 .row-item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 0 0.8rem;
}
//Tulostus
.column-item--3 .row-item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 7;
  margin: 0 0.8rem;
}

</style>
