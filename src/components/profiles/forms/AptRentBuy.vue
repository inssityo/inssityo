<template>
  <div id="apt-rent-buy" class="section">  
    <h2>Täytä asunnon tiedot:</h2>

    <div id="rentOrBuy">
      <RentBuy id-value="ARB" v-on:childToParent="onChildClickRentBuy" />
      {{ fromChildCheckedOwner }}
    </div>

    <div class="container">
      
      <div class="column">
        <div class="row">
          <h3>Sijainti</h3>
          <div class="flex">
            <label for="location" class="labelText">Kaupunki*</label>
            <input type="text" id="location" v-model="location">
          </div>
          <div class="flex">
            <label for="neighborhood" class="labelText">Kaupunginosa*</label>
            <input type="text" id="neighborhood" v-model="neighborhood">
          </div>
          <div class="flex">
            <label for="address" class="labelText">Osoite*</label>
            <input type="text" id="address" v-model="address">
          </div>
          <div class="flex">
            <label for="areaCode" class="labelText">Postinumero*</label>
            <input type="text" id="areaCode" v-model="areaCode">
          </div>
        </div>

        <div class="row">
          <h3>Rakennuksen tiedot</h3>
          <div class="flex">
            <label for="buildYear" class="labelText">Rakennusvuosi</label>
            <input type="text" id="buildYear" v-model="buildYear">
          </div>
          <div>
            <BuildingType v-on:childToParent="onChildClickBuildingType"/>
          </div>
          <div class="flex two_items">
            <div>
              <Floor v-on:childToParent="onChildClickFloor"/>
            </div>
            <div>
              <AvailableFrom v-on:childToParent="onChildClickAvailableFrom" />
              {{fromChildAvailablefrom}}
            </div>
          </div>
        </div>

        <div class="row">
          <h3>Ehdot</h3>
          <Terms v-on:childToParent="onChildClickTerms" />
          <div class="textarea">
            <label for="terms">Muita ehtoja</label>
            <textarea type="text" id="terms" placeholder="Mikäli vuokrasuhde päättyy ennen kuin vuosi sen alkamisesta on kulunut, peritään vuokralaiselta sopimussakko 1,24 x 1 kk vuokraa vastaava määrä." v-model="termsDescription"></textarea>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="row">
          <h3>Asunnon tiedot</h3>
          <div>
            <FloorPlan v-on:childToParent="onChildClickFloorPlan"/>
            <CellAptRoom v-on:childToParent="onChildClickCellAptRoom" />{{fromChildCell}}
            <Area apt-value="R" v-on:childToParent="onChildClickArea"/>
          </div>
          <div class="flex two_items">
            <Condition v-on:childToParent="onChildClickCondition"/>
            <Features v-on:childToParent="onChildClickFeatures"/>
          </div>
  
          <div class="textarea">
            <label for="equipment">Keittiön varustus</label>
            <textarea type="text" id="kitchen_equipment" placeholder="Keittiön varustus" v-model="kEquipment"></textarea>
          </div>
          <div class="textarea">
            <label for="equipment">Kylpyhuoneen varustus</label>
            <textarea type="text" id="bathroom_equipment" placeholder="Kylpyhuoneen varustus" v-model="bEquipment"></textarea>
          </div>
          <div class="textarea">
            <label for="equipment">Säilytystilat</label>
            <textarea type="text" id="storage" placeholder="Kerro säilytystiloista" v-model="storage"></textarea>
          </div>
          <div class="textarea">
            <label for="equipment">Muuta varustusta</label>
            <textarea type="text" id="equipment" placeholder="Muuta" v-model="equipment"></textarea>
          </div>
        </div>

      </div>

      <div class="column">
        <div class="row">
          <div class="textarea">
            <label for="description-arb">Esittelyteksti asunnosta, sijainnista ja palveluista*</label>
            <textarea type="text" id="description-arb" placeholder="Kuvaus" v-model="description"></textarea>
          </div>
        </div>
        <div class="row">
          <h3>Palvelut</h3>
          <Services v-on:childToParent="onChildClickServices"/>
          {{fromChildServices}} {{fromChildServicesText}}
        </div>
        <div class="row">
          <h3>Kustannukset</h3>
          <OtherExpenses v-on:childToParent="onChildClickOtherExpenses"/>
        </div>
      </div>

    </div>

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
      location: '',
      neighborhood: '',
      address: '',
      areaCode: '',
      showFloorPlan: false,
      equipment: '',
      kEquipment: '',
      bEquipment: '',
      storage: '',
      termsDescription: '',
      description: '',
      buildYear: '',
      fromChildFloorPlan: [],
      fromChildFloorPlanText: '',
      fromChildFeatures: null,
      fromChildAreaMinRoom: null,
      fromChildAreaMaxTotal: null,
      fromChildCondition: null,
      fromChildBuildingType: null,
      fromChildCell: null,
      fromChildFloor: null,
      fromChildFloorText: '',
      price: null,
      quarantee: null,
      fromChildCheckedOwner: null,
      fromChildServices: null,
      fromChildServicesText: '',
      fromChildOtherExpenses: null,
      fromChildSpeed: '',
      fromChildAvailablefrom: null,
      fromChildTerms: null,
      fromChildRentIncrease: null,
      
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
      this.fromChildAreaMinRoom = value.minRoom;
      this.fromChildAreaMaxTotal = value.maxTotal;
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
      this.fromChildFloorText = value.text;
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
      this.fromChildServicesText = value.text;
      this.fromChildServices = value.services;
    },
    onChildClickOtherExpenses(value) {
      this.fromChildOtherExpenses = value.expenses;
      this.fromChildSpeed = value.speed;
    },
    onChildClickAvailableFrom(value) {
      this.fromChildAvailablefrom = value;
    },
    onChildClickTerms(value) {
      this.fromChildTerms = value.terms;
      this.fromChildRentIncrease = value.amount;
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

.container {
  display: flex;
  flex-wrap: wrap;
}
#rentOrBuy {
  width: 50%;
  margin: 1rem 0 0.5rem 0;
}
.column {
  display: flex;
  flex-direction: column;
  width: 33.333%;
}
.container .column:not(:nth-child(2)) .row {
  background: v.$KAMGrey;
  //border: 1px solid v.$KAMGreySemiDark;
}
.container .column:not(:last-child) .row {
  margin-right: 1rem;
}
.container .column:first-child .row:first-child .flex:last-of-type {
  margin-bottom: 0.2rem;
}
.row {
  display: flex;
  flex-direction: column;
  background: v.$KAMBeige;
  padding: 0 0.8rem 0.5rem 0.8rem;
  margin-bottom: 1rem;
}

//_-----------
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
  //box-shadow: -0.5px -0.5px v.$KAMGreySemiDark;
}

div[class="textarea"] {
  margin-top: 1rem;
}

div[class="textarea"] ~ div[class="textarea"] {
  margin-top: 0.5rem;
}
.flex {
  display: flex;
  align-items: center;
}
.two_items {
  justify-content: space-between;
  div, select {
    width: 48%;
  }
}
input[type="text"] {
  padding: 0.2rem 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.3rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 100%;
  //box-shadow: 0.5px -0.5px 0.5px v.$KAMGreySemiDark;
}
input[type="text"]:focus, select:focus, textarea:focus {
  outline: none;
  background: v.$KAMGreenLight;
}
select {
  padding: 0 0.2rem !important;
  margin: 0.3rem 0;
  height: 1.8rem;
  width: -webkit-fill-available;
  width: 100%;
  border-radius: 0.5rem;
  border-style: none none solid none !important;
  border-color: #016361 !important;
  border-width: 0.15rem;
  background: v.$White;
  //box-shadow: -0.5px -0.5px 0.5px v.$KAMGreySemiDark;
}
textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 4.8rem;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  //-webkit-box-shadow: -0.5px -0.5px 0.5px v.$KAMGreySemiDark;
  //box-shadow: -0.5px -0.5px 0.5px v.$KAMGreySemiDark;
  margin: 0.3rem 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#description-arb {
  height: 12rem;
}
#terms {
  height: 6rem;
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
input:hover {
  background: v.$KAMGreenLight;
}

</style>
