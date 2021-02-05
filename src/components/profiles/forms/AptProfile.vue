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
          <RentBuy id-value="A" v-on:childToParent="onChildClickRentBuy" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--2 flexbox">
          <label for="location" class="label__border-bottom--green border-radius__left">Kaupunki*</label>
          <input type="text" id="location" class="border-radius__right" v-model="sharedApartment.location.city" v-on:keyup="emitToParent">
        </div>
        <div class="row-item--3 flexbox">
          <label for="neighborhood" class="label__border-bottom--green border-radius__left">Kaupunginosa</label>
          <input type="text" id="neighborhood" class="border-radius__right" v-model="sharedApartment.location.neighborhood" v-on:keyup="emitToParent">
        </div>
        <div class="row-item--4 flexbox">
          <label for="address" class="label__border-bottom--green border-radius__left">Osoite</label>
          <input type="text" id="address" class="border-radius__right" v-model="sharedApartment.location.address" v-on:keyup="emitToParent">
        </div>
        <div class="row-item--5 flexbox"> <!-- tee leveämpi -->
          <label for="area-code" class="label__border-bottom--green border-radius__left">Postinumero</label>
          <input type="text" id="area-code" class="border-radius__right" v-model="sharedApartment.location.areaCode" v-on:keyup="emitToParent">
        </div>
        <div class="row-item--6 flexbox" v-bind:class="{'remove__align-center': showFeatures}">
          <Features id-value="A" v-on:childToParent="onChildClickFeatures" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--7 flexbox" v-bind:class="{'remove__align-center': showLocationType}">
          <LocationType id-value="A" v-on:childToParent="onChildClickLocationType" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--8 flexbox" v-bind:class="{'remove__align-center': showBuildingType}">
          <BuildingType id-value="A" v-on:childToParent="onChildClickBuildingType" v-on:click="emitToParent"/>
        </div>
      </div>

      <div class="column column-item--3">
        <div class="row-item--1">
          <Rooms v-on:childToParent="onChildClickRooms" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--2">
          <Roommates v-on:childToParent="onChildClickRoommates" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--3">
          <Price id-value='A' v-on:childToParent="onChildClickPrice" v-on:click="emitToParent"/>
        </div>
          <div class="row-item--4">
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
import Price from '../inputElements/apartment/Price.vue'
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
    Price,
    Features,
    Roommates
  },
  
  data() {
    return {
      //FIKSAA NÄMÄ
      fromChildCheckedOwner: null,
      
      errors: {},
      errorList: {},
      isValid: true,

      showLocationType: false,
      showBuildingType: false,
      showFeatures: false,

      sharedApartment: {
        rentLimit: null,
        maxRoomMates: null,
        location: {
          city: '',
          neighborhood: '',
          address: '',
          areaCode: ''
        },
        buildingType: [],
        locationType: [],
        features: [],
        maxRooms: null,
        movingDate: null,
      }
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', this.sharedApartment)
    },
    onChildClickRentBuy(value) {
      this.fromChildCheckedOwner = value;
    },
    onChildClickLocationType(value) {
      this.sharedApartment.locationType = value.types;
      this.showLocationType = value.show;
    },
    onChildClickBuildingType(value) { //Ei toimi
      this.sharedApartment.buildingType = value.types;
      this.showBuildingType = value.show;
    },
    onChildClickRooms(value) {
      this.sharedApartment.maxRooms = value;
    },
    onChildClickPrice(value) {
      this.sharedApartment.rentLimit = value.price1;
    },
    onChildClickFeatures(value) {
      this.sharedApartment.features = value.features;
      this.showFeatures = value.show;
    },
    onChildClickRoommates(value) {
      this.sharedApartment.maxRoomMates = value;
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
.remove__align-center {
  align-items: normal !important;
  margin-top: 0.5rem !important;
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
  z-index: 2;
}
//Location type
.column-item--2 .row-item--7 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 8;
  margin: 0 0.4rem 0 0.8rem;
  z-index: 1;
}
//Building type
.column-item--2 .row-item--8 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  margin: 0 0.8rem 0 0.4rem;
  z-index: 1;
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
