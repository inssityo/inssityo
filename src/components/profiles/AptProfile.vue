<template>
  <div class="section">  
    <h2>Luo etsimäsi kämppisasunnon profiili:</h2>

    <form id="roommate-profile">
      <div class="form_group-grid--1">

        <div class="form_group_item--1-grid">
          <div class="form_group_item--1">
            <AptImage />
          </div>
        </div>

        <div class="form_group_item--2-grid">
          <div class="form_group_item--1">
            <RentBuy v-on:childToParent="onChildClickRentBuy" />
          </div>
          <div class="form_group_item--2">
            <label for="location">Kaupunki*</label>
            <input type="text" id="location" v-model="location">
          </div>

          <div class="form_group_item--3">
            <label for="neighborhood">Kaupunginosa</label>
            <input type="text" id="neighborhood" v-model="neighborhood">
          </div>

          <div class="form_group_item--4">
            <label for="address">Osoite</label>
            <input type="text" id="address" v-model="address">
          </div>

          <div class="form_group_item--5">
            <label for="areaCode">Postinumero</label>
            <input type="text" id="areaCode" v-model="areaCode">
          </div>

          <div class="form_group_item--6">
            <Features v-on:childToParent="onChildClickFeatures" />
          </div>
          <div class="form_group_item--7">
            <LocationType v-on:childToParent="onChildClickLocationType" />
          </div>
          <div class="form_group_item--8">
            <BuildingType v-on:childToParent="onChildClickBuildingType" />
          </div>
      
        </div>

        <div class="form_group_item--3-grid">

          <div class="form_group_item--1">
            <Rooms v-on:childToParent="onChildClickRooms" />
          </div>
          <div class="form_group_item--2">
            <Roommates v-on:childToParent="onChildClickRoommates" />
          </div>
          <div class="form_group_item--3">
            <Price v-on:childToParent="onChildClickPrice" />
          </div>
           <div class="form_group_item--4">
            {{fromChildLocationType}}
            {{fromChildBuildingType}}
            {{fromChildFeatures}}
            {{fromChildRent}}
            {{fromChildBuy}}
            
           </div>
            
        </div>

      </div>

    </form>

  </div>
</template>

<script>
import AptImage from './inputElements/apartment/AptImage.vue'
import BuildingType from './inputElements/apartment/BuildingType.vue'
import LocationType from './inputElements/apartment/LocationType.vue'
import RentBuy from './inputElements/apartment/RentBuy.vue'
import Rooms from './inputElements/apartment/Rooms.vue'
import Price from './inputElements/apartment/Price.vue'
import Features from './inputElements/apartment/Features.vue'
import Roommates from './inputElements/apartment/Roommates.vue'

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
    Price,
    Features,
    Roommates
  },
  
  data() {
    return {
      location: '',
      neighborhood: '',
      address: '',
      fromChildRent: null,
      fromChildBuy: null,
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
      this.fromChildRent = !value.rent;
      this.fromChildBuy = !value.buy;
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
@use '../../assets/styles/variables.scss' as v;

.section {
  padding-top: 1rem;
}
input[type="text"] {
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.5rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 100%;
}
input[type="text"]:focus{
  outline: none;
  background: v.$KAMGreyLight;
}
select {
  padding: 0 0.2rem !important;
  margin: 0;
  height: 2rem;
  width: -webkit-fill-available;
  width: 100%;
  border-radius: 0.5rem;
  border-style: none none solid none !important;
  border-color: #016361 !important;
  border-width: 0.15rem;
  background: v.$White;
}
.form_group-grid--1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
}
.form_group_item--1-grid {
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 22.9rem);
  background: v.$KAMGreyLight;
}
.form_group_item--2-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 3rem);
  background: v.$KAMGreyLight;
  padding-bottom: 1.9rem;
}
.form_group_item--3-grid {
  grid-column-start: 3;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 3rem);
  background: v.$KAMPurpleLight;
}
//Image
.form_group_item--1-grid .form_group_item--1 { 
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
//Rent or Buy
.form_group_item--2-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  margin: 0 0.7rem;
}
.form_group_item--2-grid .form_group_item--1 div {
  width: 100%;
}
//City
.form_group_item--2-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  align-items: center;
  margin: 0 0.7rem;
}
//Neighborhood
.form_group_item--2-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  align-items: center;
  margin: 0 0.7rem;
}
//Address
.form_group_item--2-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  align-items: center;
  margin: 0 0.7rem;
}
//Area code
.form_group_item--2-grid .form_group_item--5 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.35rem 0 0.7rem;
}
.form_group_item--2-grid .form_group_item--2 label, 
.form_group_item--2-grid .form_group_item--3 label, 
.form_group_item--2-grid .form_group_item--4 label, 
.form_group_item--2-grid .form_group_item--5 label {
  background: v.$White;
  padding: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
}
//Features
.form_group_item--2-grid .form_group_item--6 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.7rem 0 0.35rem;
}
//Location type
.form_group_item--2-grid .form_group_item--7 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0 0.35rem 0 0.7rem;
}
//Building type
.form_group_item--2-grid .form_group_item--8 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0 0.7rem 0 0.35rem;
}
//Rooms
.form_group_item--3-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0 0.35rem 0 0.7rem;
}
//Roommates
.form_group_item--3-grid .form_group_item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0 0.7rem 0 0.35rem;
}
//Price
.form_group_item--3-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 0 0.7rem;
}
//Tulostus
.form_group_item--3-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 7;
  margin: 0 0.7rem;
}

</style>
