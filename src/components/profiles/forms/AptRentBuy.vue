<template>
  <div class="section">  
    <h2>Täytä asunnon tiedot:</h2>

    

    <form id="apt-rent-buy">
      <div class="form_group-grid--1">

        <div class="form_group_item--0">
        <RentBuy id-value="ARB" v-on:childToParent="onChildClickRentBuy" />
        </div>

        <div class="form_group_item--1-grid">
          <div class="form_group_item--1">
            <h3>Sijainti</h3>
          </div>
          <div class="form_group_item--2">
            <label for="location" class="labelText">Kaupunki*</label>
            <input type="text" id="location" v-model="location">
          </div>
          <div class="form_group_item--3">
            <label for="neighborhood" class="labelText">Kaupunginosa</label>
            <input type="text" id="neighborhood" v-model="neighborhood">
          </div>

          <div class="form_group_item--4">
            <label for="address" class="labelText">Osoite</label>
            <input type="text" id="address" v-model="address">
          </div>

          <div class="form_group_item--5">
            <label for="areaCode" class="labelText">Postinumero</label>
            <input type="text" id="areaCode" v-model="areaCode">
          </div>

          <div class="form_group_item--6">
            <h3>Rakennuksen tiedot</h3>
          </div>

          <div class="form_group_item--7">
            <label for="buildYear" class="labelText">Rakennusvuosi</label>
            <input type="text" id="buildYear" v-model="buildYear">
          </div>

          <div class="form_group_item--8">
            <BuildingType v-on:childToParent="onChildClickBuildingType"/>
          </div>

          <div class="form_group_item--9">
            <Floor v-on:childToParent="onChildClickFloor"/>
          </div>
          <div class="form_group_item--10">
            <AvailableFrom v-on:childToParent="onChildClickAvailableFrom" />
          </div>

          <div class="form_group_item--11">
            <h3>Ehdot</h3>
          </div>

          <div class="form_group_item--12">
            <Terms v-on:childToParent="onChildClickTerms" />
          </div>

          <div class="form_group_item--13">
            <textarea type="text" id="terms-arb" placeholder="ehdot" v-model="description"></textarea>
          </div>
          
          <div class="form_group_item--14">
            <textarea type="text" id="description-arb" placeholder="Kuvaus asunnosta" v-model="description"></textarea>
          </div>
        </div>

        <div class="form_group_item--2-grid">
          <div class="form_group_item--1">
            <h3>Asunnon tiedot</h3>
          </div>
          
          <div class="form_group_item--2">
            <FloorPlan v-on:childToParent="onChildClickFloorPlan"/>
          </div>

          <div class="form_group_item--3">
            <Area v-on:childToParent="onChildClickArea"/>
          </div>

          <div class="form_group_item--4">
            <Condition v-on:childToParent="onChildClickCondition"/>
          </div>

          <div class="form_group_item--5">
            <Features v-on:childToParent="onChildClickFeatures"/>
          </div>

          <div class="form_group_item--6">
            <label for="equipment">Varustus</label>
            <textarea type="text" id="equipment" placeholder="Varustus" v-model="equipment"></textarea>
          </div>
          <div class="form_group_item--7">
            <label for="equipment">Keittiön varustus</label>
            <textarea type="text" id="kitchen_equipment" placeholder="Keittiön varustus" v-model="kEquipment"></textarea>
          </div>
          <div class="form_group_item--8">
            <label for="equipment">Kylpyhuoneen varustus</label>
            <textarea type="text" id="bathroom_equipment" placeholder="Kylpyhuoneen varustus" v-model="bEquipment"></textarea>
          </div>
          <div class="form_group_item--9">
            <label for="equipment">Säilytystilat</label>
            <textarea type="text" id="storage" placeholder="Kerro säilytystiloista" v-model="storage"></textarea>
          </div>
        
        </div>

        <div class="form_group_item--3-grid">
          <div class="form_group_item--1">
            <h3>Kustannukset</h3>
          </div>
          <div class="form_group_item--2">
            <label for="price">Vuokra/kk</label>
            <input type="text" id="price" v-model="price">
          </div>

          <div class="form_group_item--3">
            <label for="quarantee">Vakuus</label>
            <input type="text" id="quarantee" v-model="quarantee">
          </div>

          <div class="form_group_item--4">
            <CellAptRoom v-on:childToParent="onChildClickCellAptRoom"/>
          </div>

          <div class="form_group_item--5">
            <Services v-on:childToParent="onChildClickServices"/>
          </div>

          <div class="form_group_item--6">
            <h3>Muut kustannukset</h3>
          </div>

          <div class="form_group_item--7">
            <OtherExpenses v-on:childToParent="onChildClickOtherExpenses"/>
          </div>

        </div>

      </div>

      
    </form>

  </div>
</template>

<script>
import FloorPlan from '../inputElements/apartment/FloorPlan.vue'
import Area from '../inputElements/apartment/Area.vue'
import Condition from '../inputElements/apartment/Condition.vue'
import BuildingType from '../inputElements/apartment/BuildingType.vue'
import CellAptRoom from '../inputElements/apartment/CellAptRoom.vue'
import Floor from '../inputElements/apartment/Floor.vue'
import RentBuy from '../inputElements/apartment/RentBuy.vue'
import Features from '../inputElements/apartment/Features.vue'
import Services from '../inputElements/apartment/Services.vue'
import OtherExpenses from '../inputElements/apartment/OtherExpenses.vue'
import AvailableFrom from '../inputElements/apartment/AvailableFrom.vue'
import Terms from '../inputElements/apartment/Terms.vue'

//import ProfileImage from '../inputElements/person/ProfileImage.vue'


//import axios from 'axios';

export default {
  name: 'AptRentBuy',
  el: '#aptRentBuy',

  components: {
    FloorPlan,
    Area,
    Condition,
    BuildingType,
    CellAptRoom,
    Floor,
    RentBuy,
    Features,
    Services,
    OtherExpenses,
    AvailableFrom,
    Terms,
    
    //ProfileImage,
 
  },
 
  data() {
    return {
      showFloorPlan: false,
      equipment: '',
      kEquipment: '',
      bEquipment: '',
      storage: '',
      description: '',
      buildYear: '',
      fromChildFloorPlan: [],
      fromChildFloorPlanText: '',
      fromChildAreaMin: null,
      fromChildAreaMax: null,
      fromChildCondition: null,
      fromChildBuildingType: null,
      fromChildCell: null,
      fromChildFloor: null,
      fromChildOfFloors: null,
      price: null,
      quarantee: null,
      fromChildCheckedOwner: null,
      fromChildServices: null,
      fromChildOtherExpenses: null,
      fromChildAvailablefrom: null,
      fromChildTerms: null,
      
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
    /*
    emitToParent() {
      this.$emit('childToParent', this.firstname)
    },*/
    onChildClickFloorPlan(value) {
      this.fromChildFloorPlanText = value.text;
      this.fromChildFloorPlan = value.floorPlan;
    },
    onChildClickArea(value) {
      this.fromChildAreaMin = value.min;
      this.fromChildAreaMax = value.max;
    },
    onChildClickCondition(value) {
      this.fromChildCondition = value;
    },
    onChildClickBuildingType(value) {
      this.fromChildBuildingType = value;
    },
    onChildClickCellAptRoom(value) {
      this.fromChildCell = value;
    },
    onChildClickFloor(value) {
      this.fromChildFloor = value.floor;
      this.fromChildOfFloors = value.ofFloors;
    },
    onChildClickPrice(value) {
      this.fromChildPrice = value;
    },
    onChildClickRentBuy(value) {
      this.fromChildCheckedOwner = value;
    },
    onChildClickFeatures(value) {
      this.fromChildFeatures = value;
    },
    onChildClickServices(value) {
      this.fromChildServices = value;
    },
    onChildClickOtherExpenses(value) {
      this.fromChildOtherExpenses = value;
    },
    onChildClickAvailableFrom(value) {
      this.fromChildAvailablefrom = value;
    },
    onChildClickTerms(value) {
      this.fromChildTerms = value;
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
h3 {
  margin-bottom: 0.4rem;
}
.labelText {
  background: v.$White;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  box-shadow: -0.5px -0.5px v.$KAMGreySemiLight;
}
input[type="text"] {
  padding: 0.2rem 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.5rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 100%;
  box-shadow: 0.5px -0.5px v.$KAMGreySemiLight;
}
input[type="text"]:focus, select:focus {
  outline: none;
  background: v.$KAMGreenLight;
}
select {
  padding: 0 0.2rem !important;
  margin: 0;
  height: 1.8rem;
  width: -webkit-fill-available;
  width: 100%;
  border-radius: 0.5rem;
  border-style: none none solid none !important;
  border-color: #016361 !important;
  border-width: 0.15rem;
  background: v.$White;
  box-shadow: -0.5px -0.5px v.$KAMGreySemiLight;
}
textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: -webkit-fill-available;
  width: 100%;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  box-shadow: -0.5px -0.5px v.$KAMGreySemiLight;
}
svg {
  color: v.$KAMGreenDark;
}
svg:hover {
  cursor: pointer;
  color: v.$KAMBlue;
}
label:hover {
  cursor: pointer;
  svg {
    color: v.$KAMBlue;
  }
}
.form_group-grid--1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto, 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
.form_group-grid--1 .form_group_item--0 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.form_group_item--1-grid {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(20, 2.5rem);
  background: v.$KAMGreyLight;
  border: 1px solid v.$KAMGreySemiDark;
}
.form_group_item--2-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(20, 2.5rem);
  background: v.$KAMGreyLight;
  border: 1px solid v.$KAMGreySemiDark;
  //padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
.form_group_item--3-grid {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(20, 2.5rem);
  background: v.$KAMGreyLight;
  border: 1px solid v.$KAMGreySemiDark;
  //padding: 0.4rem 0.8rem 0.4rem 0.8rem;
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
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
#areaCode {
  width: 3.5rem;
}
//Building header
.form_group_item--1-grid .form_group_item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  border-top: 1px solid v.$KAMGreySemiDark;
}
//BuildYear
.form_group_item--1-grid .form_group_item--7 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
//BuildingType
.form_group_item--1-grid .form_group_item--8 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
//Floor
.form_group_item--1-grid .form_group_item--9 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//AvailableFrom
.form_group_item--1-grid .form_group_item--10 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//Terms header
.form_group_item--1-grid .form_group_item--11 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 11;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  border-top: 1px solid v.$KAMGreySemiDark;
}
//Terms
.form_group_item--1-grid .form_group_item--12 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 11;
  grid-row-end: 13;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//Terms description
.form_group_item--1-grid .form_group_item--13 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 13;
  grid-row-end: 15;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//Description
.form_group_item--1-grid .form_group_item--14 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 15;
  grid-row-end: 17;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}

//Apartment text
.form_group_item--2-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
//FloorPlan
.form_group_item--2-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: 0 0.8rem;
  z-index: 2;
  //overflow: scroll;
}
.form_group_item--2-grid .form_group_item--2 .moreFloorPlans {
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
.form_group_item--2-grid .form_group_item--2 label div:first-child div {
  display: block;
}
.removeBorderRadius {
  border-radius: 0.5rem 0.5rem 0 0 !important;
  border-bottom: none !important;
}
.form_group_item--2-grid .form_group_item--2 p {
  margin-bottom: 0.4rem;
}
.form_group_item--2-grid .form_group_item--2 label div:first-child p {
  margin: 0;
}
.form_group_item--2-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 6;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
.form_group_item--2-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
.form_group_item--2-grid .form_group_item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
.form_group_item--2-grid .form_group_item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 9;
  display: flex;
  margin: 0.2rem 0.8rem;
}
.form_group_item--2-grid .form_group_item--7 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 11;
  margin: 0.2rem 0.8rem;
}
.form_group_item--2-grid .form_group_item--8 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 11;
  grid-row-end: 13;
  margin: 0.2rem 0.8rem;
}
.form_group_item--2-grid .form_group_item--9 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 13;
  grid-row-end: 15;
  margin: 0.2rem 0.8rem;
}
.form_group_item--2-grid .form_group_item--6 textarea, 
.form_group_item--2-grid .form_group_item--7 textarea,
.form_group_item--2-grid .form_group_item--8 textarea,
.form_group_item--2-grid .form_group_item--9 textarea {
  margin: 0.2rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: -webkit-fill-available;
  width: 100%;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
}
.form_group_item--3-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
.form_group_item--3-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
.form_group_item--3-grid .form_group_item--3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
.form_group_item--3-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 5;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  div {
    width: 100%;
  }
}
.form_group_item--3-grid .form_group_item--5 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 8;
  margin: 0 0.8rem;
}
.form_group_item--3-grid .form_group_item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  margin: 0 0.8rem;
}
.form_group_item--3-grid .form_group_item--7 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 11;
  grid-row-end: 12;
  margin: 0 0.8rem;
}

</style>
