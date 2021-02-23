<template>
  <div>
    <h2>Täytä asunnon tiedot:</h2>

    <RentBuy
      id-value="ARB"
      style="width: 50%"
      v-on:childToParent="onChildClickRentBuy"
    />

    <div class="container">

      <div class="column">
        <div class="row">
          <h3>Sijainti</h3>
          <Location id-value="ARB" v-on:childToParent="onChildClickLocation"/>
        </div>

        <div class="row">
          <div v-if="!apartment.isForSale" class="flexbox" id="available-div">
            <AvailableFrom
              v-on:childToParent="onChildClickAvailableFrom"
              id="available-content"
            />
            <AvailableTo
              v-on:childToParent="onChildClickAvailableTo"
              id="available-content"
            />
          </div>
          <div v-else class="flexbox">
            <AvailableFrom
              v-on:childToParent="onChildClickAvailableFrom"
              id="available-content"
            />
          </div>
        </div>

        <div class="row">
          <h3>Hinta ja kulut</h3>
          <Price
            v-if="apartment.isForSale"
            apt-value="B"
            v-on:childToParent="onChildSetSalePrice"
          />
          <MaintenanceCost 
            v-if="apartment.isForSale"
            apt-value="B"
            v-on:childToParent="onChildSetMaintenanceCost"
          />
          <Price v-else apt-value="R" v-on:childToParent="onChildSetRent" />
        </div>

        <div class="row">
          <h3>Muita kustannuksia</h3>
          <OtherExpenses v-on:childToParent="onChildClickOtherExpenses" />
        </div>

        <div class="row">
          <h3>Kuvat</h3>
          <Images v-on:childToParent="onChildImages"/>
        </div>   

        <div class="row">
          <h3>Palvelut</h3>
          <Services v-on:childToParent="onChildClickServices" />
          {{ fromChildServices }} {{ fromChildServicesText }}
        </div>     
      </div>

      <div class="column">
        <div class="row">
          <h3>Asunnon ja kiinteistön kuvaus</h3>
          
          <label for="description-arb" class="margin-top__025 margin-bottom__025 label__padding__leftless">
            Esittelyteksti asunnosta, sijainnista ja palveluista*
          </label>
          <textarea
            id="description-arb"
            class="box margin-bottom__025"
            placeholder="Kuvaus"
            v-model="apartment.propertyDescription"
          ></textarea>
        </div>

        <div class="row">
          <h3>Asunnon pohja</h3>
          <FloorPlan v-on:childToParent="onChildClickFloorPlan" />
          <CellAptRoom v-on:childToParent="onChildClickCellAptRoom" />
          <Area apt-value="B" v-on:childToParent="onChildClickArea" />
          <FloorCount v-on:childToParent="onChildClickFloorCount" />
        </div>

        <div class="row">
          <h3>Asunnon varustelu</h3>
          <div
            class="flexbox"
            v-bind:class="{ 'remove__align-center': showFeatures }"
          >
            <Condition v-on:childToParent="onChildClickCondition" />
            <Features
              id-value="ARB"
              v-on:childToParent="onChildClickFeatures"
              v-bind:class="{ 'add__position-absolute': showFeatures }"
            />
          </div>

          <BalconyPatio v-on:childToParent="onBalconyPatio" />
         
          <label for="kitchen-equipment" class="label__padding__leftless">Keittiö:</label>
          <textarea
            id="kitchen-equipment"
            class="box margin-top__025 margin-bottom__025"
            placeholder="Keittiön varusteet"
            v-model="kEquipment"
          ></textarea>
          
          <label for="bathroom-equipment" class="label__padding__leftless">Kylpyhuone:</label>
          <textarea
            id="bathroom-equipment"
            class="box margin-top__025 margin-bottom__025"
            placeholder="Kylpyhuoneen varusteet"
            v-model="bEquipment"
          ></textarea>
          <label for="storage" class="label__padding__leftless">Säilytystilat:</label>
          <textarea
            id="storage"
            class="box margin-top__025 margin-bottom__025"
            placeholder="Kerro säilytystiloista"
            v-model="storage"
          ></textarea>
          <label for="equipment" class="label__padding__leftless">Muuta:</label>
          <textarea
            id="equipment"
            class="box margin-top__025 margin-bottom__025"
            placeholder="Muuta huomionarvoista asunnosta"
            v-model="equipment"
          ></textarea>
        </div>

        <div class="row">
          <Yard v-on:childToParent="onYardChange" />
        </div>
        <div class="row">
          <Parking v-on:childToParent="onChildParking"/>
        </div>
      </div>

      <div class="column">
        <div class="row">
          <h3>Rakennuksen tiedot</h3>
          <div class="flexbox">
            <div class="width__50">
              <label
                for="apartment.buildYear"
                class="label__border-bottom--green border-radius__left"
                >Rakennusvuosi:</label
              >
              <input
                type="number"
                min="0"
                oninput="validity.valid||(value=0);"
                id="build-year"
                class="border-radius__right"
                v-model="apartment.buildYear"
              />
            </div>
            <BuildingType
              id-value="ARB"
              v-on:childToParent="onChildClickBuildingType"
            />
          </div>
      
          <div class="flexbox">  
            <Floor v-on:childToParent="onChildClickFloor" />
            <Elevator v-on:childToParent="onChildClickElevator" />
          </div>

          <div class="margin-bottom__025">
            <label 
              class="label__padding__leftless" 
              for="total-amount-of-apts-on-property"
            >Asuinhuoneistojen määrä rakennuksessa:
            </label>
            <input
              type="number"
              min="0"
              id="total-amount-of-apts-on-property"
              class="border-radius box"
              v-model="apartment.totalAmountOfAptsOnProperty"
            />
          </div>
          <div>
            <label 
              class="label__padding__leftless" 
              for="businesses-on-property"
            >Liiketilojen määrä rakennuksessa:
            </label>
            <input
              type="number"
              min="0"
              id="businesses-on-property"
              class="border-radius box"
              v-model="apartment.businessesOnProperty"
            />
          </div>
        </div>

        <div class="row">
          <h3>Taloyhtiö</h3>
          <div class="flexbox">
            <label
              for="housing-association"
              class="label__border-bottom--green border-radius__left"
              >Taloyhtiö:</label
            >
            <input
              type="text"
              id="housing-association"
              class="border-radius__right"
              v-model="apartment.housingAssociation"
            />
          </div>

          <div class="flexbox">
            <label
              for="buildingManager"
              class="label__border-bottom--green border-radius__left"
            >
              Isännöitsijä:</label
            >
            <input
              type="text"
              id="buildingManager"
              class="border-radius__right"
              v-model="apartment.buildingManager"
            />
          </div>
          <div class="flexbox">
            <label
              for="maintainer"
              class="label__border-bottom--green border-radius__left"
              >Kunnossapitovastuu:</label
            >
            <input
              type="text"
              id="maintainer"
              class="border-radius__right"
              v-model="apartment.maintainer"
            />
          </div>
          <div v-if="apartment.isForSale" class="flexbox" id="tax-div">
            <label
              for="property-tax"
              class="label__nowrap label__padding__leftless"
              >Kiinteistövero €/vuosi:</label
            >
            <input
              type="number"
              min="0"
              oninput="validity.valid||(value=0);"
              id="property-tax"
              v-model="apartment.propertyTax"
            />
          </div>
          <label for="renovationDesc" class="label__padding__leftless margin-top__025">Remonttihistoria ja tulevat remontit:</label>
          <textarea id="renovationDesc" class="box margin-top__025 margin-bottom__025"  placeholder="Kerro menneistä ja tiedetyistä tulevista remonteista" v-model="apartment.renovationDescription"></textarea>
          
        </div>

        <div v-if="apartment.isForSale" class="row">
          <h3>Materiaalit</h3>
          <Materials v-on:childToParent="onChildMaterials" />
        </div>

        <div class="row">
          <h3>Ylläpito</h3>
          <Utilities v-on:childToParent="onChildUtilities" />
        </div>

        <div class="row" v-if="!apartment.isForSale">
          <h3>Vuokra-asunnon sopimusehdot</h3>
          <Terms v-on:childToParent="onChildClickTerms" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import FloorPlan from "../inputElements/apartment/FloorPlan.vue";
import Area from "../inputElements/apartment/Area.vue";
import Condition from "../inputElements/apartment/Condition.vue";
import BuildingType from "../inputElements/apartment/BuildingType.vue";
import CellAptRoom from "../inputElements/apartment/CellAptRoom.vue";
import Floor from "../inputElements/apartment/Floor.vue";
import RentBuy from "../inputElements/apartment/RentBuy.vue";
import Features from "../inputElements/apartment/Features.vue";
import Services from "../inputElements/apartment/Services.vue";
import OtherExpenses from "../inputElements/apartment/OtherExpenses.vue";
import AvailableFrom from "../inputElements/apartment/AvailableFrom.vue";
import AvailableTo from "../inputElements/apartment/AvailableTo.vue";
import Terms from "../inputElements/apartment/Terms.vue";
import Price from "../inputElements/apartment/Price.vue";
import Yard from "../inputElements/apartment/Yard.vue";
import BalconyPatio from "../inputElements/apartment/BalconyPatio.vue";
import Utilities from "../inputElements/apartment/Utilities.vue"
import Materials from '../inputElements/apartment/Materials.vue';
import Parking from '../inputElements/apartment/Parking.vue'
import Elevator from '../inputElements/apartment/Elevator.vue';
import FloorCount from '../inputElements/apartment/FloorCount.vue';
import MaintenanceCost from '../inputElements/apartment/MaintenanceCost.vue';
import Images from '../inputElements/apartment/Images.vue';
import Location from '../inputElements/apartment/Location.vue';

//LocationType puuttuu

//import axios from 'axios';

export default {
  name: "AptRentBuy",
  el: "#aptRentBuy",

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
    AvailableTo,
    Terms,
    Price,
    Yard,
    BalconyPatio,
    Utilities,
    Materials,
    Parking,
    Elevator,
    FloorCount,
    MaintenanceCost,
    Images,
    Location
  },

  data() {
    return {
      location: "",
      neighborhood: "",
      address: "",
      areaCode: "",
      showFloorPlan: false,
      equipment: "",
      kEquipment: "",
      bEquipment: "",
      storage: "",
      description: "",
      buildYear: "",
      fromChildFloorPlan: [],
      fromChildFloorPlanText: "",
      fromChildAreaMinRoom: null,
      fromChildAreaMaxTotal: null,
      fromChildCondition: null,
      fromChildBuildingType: null,
      fromChildCell: null,
      fromChildFloor: null,
      fromChildFloorText: "",
      price: null,
      guarantee: null,
      fromChildCheckedOwner: null,
      fromChildOtherExpenses: null,
      fromChildSpeed: "",
      fromChildTerms: null,
      fromChildRentIncrease: null,

      errors: {},
      errorList: {},
      isValid: true,

      showFeatures: false,

      apartment: {
        location: {
          city: "",
          neighborhood: "",
          address: "",
          areaCode: "",
        },
        isForSale: true,
        nearbyServices: {
          //Listoja
          publicTransport: [
            {
              title: "",
              distance: null,
            },
          ],
          healthCare: [
            {
              title: "",
              distance: null,
            },
          ],
          dayCare: [
            {
              title: "",
              distance: null,
            },
          ],
          education: [
            {
              title: "",
              distance: null,
            },
          ],
          excercise: [
            {
              title: "",
              distance: null,
            },
          ],
          groceries: [
            {
              title: "",
              distance: null,
            },
          ],
        },
        images: [],
        interestedUsers: [],
        landLord: "",
        description: "",
        viewCount: 0,
        floorPlan: {
          regular: { amount: null },
          kitchen: { amount: null },
          kitchenette: { amount: null },
          diningRoom: { amount: null },
          bathRoom: { amount: null },
          toilet: { amount: null },
          sauna: { amount: null },
          wardrobe: { amount: null },
          utilityRoom: { amount: null },
        },
        area: null,
        cellArea: null,
        monthlyRent: null,
        price: { salePrice: null, debtFreePrice: null },
        maintenanceCosts: {upkeep: null, financing:null},
        guarantee: "",
        buildYear: null,
        apartmentType: null,
        isCellApartment: false,
        isFurnished: false,
        floor: "",
        propertyFloors: "",
        sights: "",
        hasElevator: false,
        housingAssociation: "",
        buildingManager: "",
        maintainer: "",
        yard: "",
        allowedBuildArea: 0,
        zoning: "",
        balcony: { exists: false, description: "" },
        patio: { exists: false, description: "" },
        propertyDescription: "",
        totalAmountOfAptsOnProperty: null,
        businessesOnProperty: null,
        buildMaterial: "",
        roofType: "",
        roofLining: "",
        renovationDescription: "",
        energyClass: "",
        limitations: "",
        availableFrom: null,
        availableUntil: null,
        property: {
          rented: false,
          owner: "",
          propertyRent: null,
          contractExpiresAt: null,
        },
        equipment: {
          kitchen: "",
          bathroom: "",
          storage: "",
          heating: "",
          plumbing: "",
          water: "",
          garbage: "",
          airConditioning: "",
          common: "",
          other: "",
        },
        condition: null,
        petsAllowed: false,
        smokingAllowed: false,
        utilities: {
          insurancePlan: {
            mustHave: false,
            monthlyPrice: null,
          },
          parking: {
            exists: false,
            description: "",
            supportsElectric: false,
            type: null,
          },
          water: {
            mustHave: false,
            monthlyPrice: null,
          },
          includesElectricity: {
            mustHave: false,
            monthlyPrice: null,
          },
          dataConnection: {
            isIncluded: false,
            speed: null,
          },
        },
      },
    };
  },
  methods: {
    onChildMaterials(value) {
      this.apartment.buildMaterial = value.buildMaterial;
      this.apartment.energyClass = value.energyClass;
      this.apartment.roofType = value.roofType;
      this.apartment.roofLining = value.roofLining;
    },
    onChildClickFloorPlan(value) {
      this.apartment.floorPlan = value.text;
      this.apartment.floorPlanText = value.text;
      this.apartment.sights = value.sights;
    },
    onChildUtilities(value) {
      this.apartment.equipment.heating = value.heating;
      this.apartment.equipment.plumbing = value.plumbing;
      this.apartment.equipment.water = value.water;
      this.apartment.equipment.garbage = value.garbage;
      this.apartment.equipment.airConditioning = value.airConditioning;
      this.apartment.equipment.common = value.common;
    },
    onChildClickArea(value) {
      //Area, ei min tai max!!!!, cellArea - KYSY SUVILTA
      this.fromChildAreaMinRoom = value.minRoom;
      this.fromChildAreaMaxTotal = value.maxTotal;
    },
    onChildClickFloorCount(value) {
      this.apartment.propertyFloors = value;
    },
    onChildClickCondition(value) {
      this.apartment.condition = value;
    },
    onChildParking (value) {
      //tukeeko skeema options arrayta?
      this.apartment.parking.options = value.options;
      this.apartment.parking.supportsElectric = value.supportsElectric;
      this.apartment.parking.description = value.description;
    },
    onChildClickBuildingType(value) {
      this.apartment.BuildingType = value.types;
      console.log(this.apartment.BuildingType)
    },
    onChildClickCellAptRoom(value) {
      this.apartment.isCellApartment = value;
    },
    onChildClickFloor(value) {
      //this.fromChildFloor = value.floor;
      this.apartment.floor = value.text;
    },
    onChildClickElevator(value) {
      this.apartment.hasElevator = value;
    },
    onChildSetSalePrice(value) {
      this.apartment.price.salePrice = value.salePrice;
      this.apartment.price.debtFreePrice = value.debtFreePrice;
    },
    onChildSetMaintenanceCost(value) {
      this.apartment.maintenanceCosts.upkeep = value.upkeep;
      this.apartment.maintenanceCosts.financing = value.financing;
    },
    onChildClickRentBuy(value) {
      this.apartment.isForSale = value;
    },
    onChildSetRent(value) {
      this.apartment.monthlyRent = value.monthlyRent;
    },
    onChildClickFeatures(value) {
      //utilities
      this.showFeatures = value.show;
      //this.apartment.mustHave
    },
    onChildClickServices(value) {
      this.apartment.nearbyServices = value.nearbyServices;
      this.apartment.serviceDescription = value.description
    },
    onChildClickOtherExpenses(value) {
      this.fromChildOtherExpenses = value.expenses;
      this.fromChildSpeed = value.speed;
    },
    onChildClickAvailableFrom(value) {
      this.apartment.availableFrom = value;
    },
    onChildClickAvailableTo(value) {
      this.apartment.availableUntil = value;
    },
    onChildClickTerms(value) {
      this.fromChildTerms = value.terms;
      this.fromChildRentIncrease = value.amount;
      this.guarantee = value.guarantee;
    },
    onYardChange(value) {
      this.apartment.propertyArea = value.yardArea;
      this.apartment.yard = value.yardDescription;
      this.apartment.allowedBuildArea = value.buildArea;
      this.apartment.zoning = value.zoningDescription;
      this.apartment.property.rented = value.propertyIsRental;
      this.apartment.property.owner = value.propertyOwner;
    },
    onBalconyPatio(value) {
      this.apartment.balcony.exists = value.balconyExists;
      this.apartment.balcony.description = value.balconyDesc;
      this.apartment.patio.exists = value.patioExists;
      this.apartment.patio.description = value.patioDesc;
    },
    onChildClickLocation(value) {
      this.apartment.location.city = value.city;
      this.apartment.location.address = value.address;
      this.apartment.location.neighborhood = value.neighborhood;
      this.apartment.location.areaCode = value.areaCode;
    },
    onChildImages(value) {
      console.log("image " + JSON.stringify(value));
      this.apartment.images = value;
      console.log("image2 " + JSON.stringify(this.apartment.images));
    },
    handleFloorPlan() {
      this.showFloorPlan = !this.showFloorPlan;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

h2 {
  padding-top: 1rem;
}
.remove__align-center {
  align-items: normal !important;
  margin-top: 0.3rem !important;
  position: relative;
}
.add__position-absolute {
  position: absolute;
  right: 0;
  z-index: 1;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.column {
  display: flex;
  flex-direction: column;
  width: 33.333%;
}
//Calculation of margins, so that the widths of the columns will be the same
.container .column:first-of-type .row {
  margin-right: 0.75rem;
}
.container .column:nth-of-type(2) .row {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}
.container .column:last-of-type .row {
  margin-left: 0.75rem;
}
.container .column:not(:nth-child(2)) .row {
  background: v.$KAMGrey;
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

  .flexbox {
    margin: 0.3rem 0;
  }
}
h3 {
  margin-bottom: 0.4rem;
}
textarea {
  height: 4rem;
}
.flexbox {
  select {
    width: 48%;
  }
}
#available-div {
  align-items: flex-start;
}
#description-arb {
  height: 15rem;
}
#tax-div {
  justify-content: normal;

  #property-tax {
    width: 3.5rem;
  }
}
#businesses-on-property, #total-amount-of-apts-on-property {
  width: 3em;
}
#build-year {
  width: 3.2rem;
}

</style>