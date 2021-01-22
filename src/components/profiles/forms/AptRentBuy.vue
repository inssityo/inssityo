<template>
  <div class="section">  
    <h2>Täytä asunnon tiedot:</h2>

    <form id="apt-rent-buy">
      <div class="form_group-grid--1">

        <div class="form_group_item--1-grid">
          <div class="form_group_item--1">
            <h3>Sijainti</h3>
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
            <h3>Asunnon tiedot</h3>
          </div>
          
          <div class="form_group_item--7">
            <p>Huoneiston kuvaus: 
              <span class="floorPlanText">{{ fromChildFloorPlanText }}</span>
            </p>
            
            <div class="moreFloorPlans" v-bind:class="{'removeBorderRadius': showFloorPlan}">
              
              <div v-show="!showFloorPlan">
              <p>Lisää huonetyyppejä</p> 
              
              </div>
              <p v-show="showFloorPlan">Sulje huoneiston kuvaus</p>
              <div v-show="showFloorPlan" @click="handleFloorPlan">
                <i class="fas fa-times"></i>
              </div>
              <div v-show="!showFloorPlan" @click="handleFloorPlan">
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <FloorPlan v-show="showFloorPlan" v-on:childToParent="onChildClickFloorPlan"/>
          </div>

          <div class="form_group_item--8">
            <textarea type="text" id="more_about" placeholder="Kerro vapaasti itsestäsi ja hakusi taustoista" v-model="more_about"></textarea>
          </div>
        </div>

        <div class="form_group_item--2-grid">
          <div class="form_group_item--1">
            
          </div>
        </div>

        <div class="form_group_item--3-grid">
          <div class="form_group_item--1">
            
          </div>

          <div class="form_group_item--2">

          </div>

          <div class="form_group_item--3">
            
          </div>

          <div class="form_group_item--4">
            
          </div>

        </div>

      </div>

      
    </form>

  </div>
</template>

<script>
import FloorPlan from '../inputElements/apartment/FloorPlan.vue'
//import ProfileImage from '../inputElements/person/ProfileImage.vue'


//import axios from 'axios';

export default {
  name: 'RentBuy',
  el: '#rentBuy',

  components: {
    FloorPlan,
    //ProfileImage,
 
  },
 
  data() {
    return {
      firstname: '',
      lastname: '',
      showFloorPlan: false,
      more_about: '',


      fromChildFloorPlan: [],
      fromChildFloorPlanText: '',

      fromChildSrc: '',
      fromChildCheckedCharacterList: [],
      fromChildCheckedHobbyList: [],
      fromChildCheckedPets: true,
      fromChildCheckedPetList: [],
      fromChildCheckedIntoxidantList: [],
      fromChildSociality: null,
      fromChildWorkType: null,
      
      errors: {},
      errorList: {},
      isValid: true,
    }
  },
  computed: {
    filteredCharacters() {
      return this.fromChildCheckedCharacterList.filter((character) => { 
        return character.checked;
      });
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', this.firstname)
    },
    onChildClickFloorPlan(value) {
      this.fromChildFloorPlanText = value.text;
      this.fromChildFloorPlan = value.floorPlan;
    },
    onChildClickAge(value) {
      this.fromChildAge = value;
    },
    onChildClickStatus(value) {
      this.fromChildStatus = value;
      this.handleWorkType();
    },
    onChildClickPets(value) {
      this.fromChildCheckedPets = !value.tableOne;
      this.fromChildCheckedPetList = value.tableTwo;
    },
    onChildClickProfileImage(value) {
      this.fromChildSrc = value;
    },
    onChildClickCharacters(value) {
      this.fromChildCheckedCharacterList = value;
    },
    onChildClickHobbies(value) {
      this.fromChildCheckedHobbyList = value;
    },
    onChildClickIntoxicants(value) {
      this.fromChildCheckedIntoxidantList = value;
    },
    onChildClickSociality(value) {
      this.fromChildSociality = value;
    },
    onChildClickWorkType(value) {
      this.fromChildWorkType = value;
    },
    handleWorkType() {
      if (this.fromChildStatus !== 1) {
        this.fromChildWorkType = null;
      }
    },
    handleFloorPlan() {
      this.showFloorPlan = !this.showFloorPlan;
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

.section {
  padding-top: 1rem;
  padding-bottom: 1rem;
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
input[type="text"]:focus, input[type="select"]:focus {
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
svg {
  color: v.$KAMGreenDark;
}
svg:hover {
  cursor: pointer;
  color: v.$KAMBlue;
}
.form_group-grid--1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //gap: 1.5rem;
  margin-top: 2rem;
}
.form_group_item--1-grid {
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGreyLight;
}
.form_group_item--2-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMBeigeLight;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
.form_group_item--3-grid {
  grid-column-start: 3;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGreyLight;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
//Location header
.form_group_item--1-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
}
//City
.form_group_item--1-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//Neighborhood
.form_group_item--1-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//Address
.form_group_item--1-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//Area code
.form_group_item--1-grid .form_group_item--5 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}

.form_group_item--1-grid .form_group_item--2 label,
.form_group_item--1-grid .form_group_item--3 label,
.form_group_item--1-grid .form_group_item--4 label,
.form_group_item--1-grid .form_group_item--5 label {
  background: v.$White;
  padding: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
}


.form_group_item--1-grid .form_group_item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//FloorPlan
.form_group_item--1-grid .form_group_item--7 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  margin: 0 0.8rem;
  z-index: 2;
  //overflow: scroll;
}
.form_group_item--1-grid .form_group_item--7 .moreFloorPlans {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 1.5rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  border-bottom: 0.15rem solid v.$KAMGreenDark;
}
.form_group_item--1-grid .form_group_item--7 div:first-child div {
  display: block;
}
.removeBorderRadius {
  border-radius: 0.5rem 0.5rem 0 0 !important;
  border-bottom: none !important;
}
.form_group_item--1-grid .form_group_item--7 div:first-child p {
  margin: 0;
}
.form_group_item--1-grid .form_group_item--7 p .floorPlanText {
  font-weight: bold;
}
.form_group_item--1-grid .form_group_item--8 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 14;
  display: flex;
  align-items: center;
  margin: 2rem 0.8rem;
}
.form_group_item--1-grid .form_group_item--8 textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 100%;
  width: -webkit-fill-available;
  width: 100%;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
}
.form_group_item--2-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
  position: relative;
}
.form_group_item--3-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0.8rem;
  position: relative;
}
.form_group_item--3-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 8;
  margin-bottom: 0.8rem;
}
.form_group_item--3-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 10;
  margin-bottom: 0.8rem;
}
.form_group_item--3-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
}

</style>
