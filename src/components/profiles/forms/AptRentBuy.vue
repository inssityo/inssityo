<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div>
    <h2>Täytä asunnon tiedot:</h2>

    <RentBuy
      id-value="ARB"
      style="width: 50%"
      v-on:childToParent="onChildClickRentBuy"
    />
    {{ fromChildCheckedOwner }}
    <div class="container">
      <div class="column">
        <div class="row">
          <h3>Sijainti</h3>
          <div class="flexbox">
            <label
              for="location"
              class="label__border-bottom--green border-radius__left"
              >Kaupunki*</label
            >
            <input
              type="text"
              id="location"
              class="border-radius__right"
              v-model="apartment.location.city"
            />
          </div>
          <div class="flexbox">
            <label
              for="neighborhood"
              class="label__border-bottom--green border-radius__left"
              >Kaupunginosa*</label
            >
            <input
              type="text"
              id="neighborhood"
              class="border-radius__right"
              v-model="apartment.location.neighborhood"
            />
          </div>
          <div class="flexbox">
            <label
              for="address"
              class="label__border-bottom--green border-radius__left"
              >Osoite*</label
            >
            <input
              type="text"
              id="address"
              class="border-radius__right"
              v-model="apartment.location.address"
            />
          </div>
          <div class="flexbox">
            <label
              for="areaCode"
              class="label__border-bottom--green border-radius__left"
              >Postinumero*</label
            >
            <input
              type="text"
              id="areaCode"
              class="border-radius__right"
              v-model="apartment.location.areaCode"
            />
          </div>
        </div>

        <div class="row">
          <h3>Rakennuksen tiedot</h3>

          <div class="flexbox">
            <label
              for="housingAssociation"
              class="label__border-bottom--green border-radius__left"
              >Taloyhtiö</label
            >
            <input
              type="text"
              id="housingAssociation"
              class="border-radius__right"
              v-model="apartment.housingAssociation"
            />
          </div>

                    <div>
            <!-- pienennä input -->
            <label
              for="apartment.buildYear"
              class="label__border-bottom--green border-radius__left"
              >Rakennusvuosi</label
            >
            <input
              type="number"
              min="0"
              :max="new Date().getFullYear()"
              oninput="validity.valid||(value=0);"
              id="buildYear"
              class="border-radius__right"
              v-model="apartment.buildYear"
            />
          </div>

          <div class="flexbox" id="typeAndFloor">
            <BuildingType
              id-value="ARB"
              v-on:childToParent="onChildClickBuildingType"
            />
            <Floor v-on:childToParent="onChildClickFloor" />
          </div>

          <div class="flexbox" id="aptsBusinesses">
            <label
              for="totalAmountOfAptsOnProperty"
              id="aptsLabel"
            >
              Asuinhuoneistojen määrä rakennuksessa:
              <input
                type="number"
                min="0"
                id="totalAmountOfAptsOnProperty"
                class="border-radius"
                v-model="apartment.totalAmountOfAptsOnProperty"
            /></label>

            <label
              for="businessesOnProperty"
              id="businessesLabel">
              Liiketilojen määrä rakennuksessa:</label>
              <input
                type="number"
                min="0"
                id="businessesOnProperty"
                class="border-radius"
                v-model="apartment.businessesOnProperty"
            />
          </div>

          <div>
            <Materials v-if="apartment.isForSale" v-on:childToParent="onChildMaterials" />
          </div>

          <div v-if="!apartment.isForSale" class="flexbox" id="availableDiv">
            <AvailableFrom
              v-on:childToParent="onChildClickAvailableFrom"
              id="available-content"
            />
            <AvailableTo
              v-on:childToParent="onChildClickAvailableTo"
              id="available-content"
            />
          </div>
          <div v-else class="flexbox" id="availableDiv">
            <AvailableFrom
              v-on:childToParent="onChildClickAvailableFrom"
              id="available-content"
            />
          </div>

          <h3>Hinta ja kulut</h3>

          <div>
            <Price
              v-if="apartment.isForSale"
              apt-value="B"
              v-on:childToParent="onChildSetSalePrice"
            />
            <Price v-else apt-value="R" v-on:childToParent="onChildSetRent" />
          </div>
          <h4>Yhtiö:</h4>
          <div class="flexbox">

            <label
              for="buildingManager"
              class="label__border-bottom--green border-radius__left"
            >
              Isännöitsijä</label
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
              >Kunnossapitovastuu</label
            >
            <input
              type="text"
              id="maintainer"
              class="border-radius__right"
              v-model="apartment.maintainer"
            />
          </div>
          <div v-if="apartment.isForSale" class="flexbox" id="taxDiv">
            <label
              for="propertyTax"
              class="label__border-bottom--green border-radius__left"
              >Kiinteistövero</label
            >
            <input
              type="number"
              min="0"
              oninput="validity.valid||(value=0);"
              id="propertyTax"
              class="border-radius__right"
              v-model="apartment.propertyTax"
            />
            <label id="euroLabel" for="propertyTax">€/vuosi</label>
          </div>
              <label for="renovationDesc" class="description"> Remonttihistoria ja tulevat remontit:
      <textarea id="renovationDesc" class="box"  placeholder="Kerro menneistä ja tiedetyistä tulevista remonteista" v-model="apartment.renovationDescription"></textarea>
    </label>

    <h3> Ylläpito </h3>
    <Utilities v-on:childToParent="onChildUtilities" />
        </div>

        <div class="row" v-if="!apartment.isForSale">
          <h3>Vuokra-asunnon sopimusehdot</h3>
          <Terms v-on:childToParent="onChildClickTerms" />
        </div>
      </div>

      <div class="column">
        <div class="row">
          <h3>Asunnon tiedot</h3>
          <div>
            <FloorPlan v-on:childToParent="onChildClickFloorPlan" />
            <CellAptRoom v-on:childToParent="onChildClickCellAptRoom" />{{
              fromChildCell
            }}
            <Area apt-value="B" v-on:childToParent="onChildClickArea" />
          </div>
          <div
            class="flexbox flexbox"
            v-bind:class="{ 'remove__align-center': showFeatures }"
          >
            <Condition v-on:childToParent="onChildClickCondition" />
            <Features
              id-value="ARB"
              v-on:childToParent="onChildClickFeatures"
              v-bind:class="{ 'add__position-absolute': showFeatures }"
            />
          </div>

          <div class="flexbox">
            <BalconyPatio v-on:childToParent="onBalconyPatio" />
          </div>

          <label for="kitchen-equipment" class="description"
            >Keittiö:
            <textarea
              id="kitchen-equipment"
              class="box"
              placeholder="Keittiön varusteet"
              v-model="kEquipment"
            ></textarea>
          </label>
          <label for="bathroom-equipment" class="description"
            >Kylpyhuone:
            <textarea
              id="bathroom-equipment"
              class="box"
              placeholder="Kylpyhuoneen varusteet"
              v-model="bEquipment"
            ></textarea>
          </label>
          <label for="storage" class="description"
            >Säilytystilat:
            <textarea
              id="storage"
              class="box"
              placeholder="Kerro säilytystiloista"
              v-model="storage"
            ></textarea>
          </label>
          <label for="equipment" class="description"
            >Muuta:
            <textarea
              id="equipment"
              class="box"
              placeholder="Muuta huomionarvoista asunnosta"
              v-model="equipment"
            ></textarea>
          </label>
        </div>

        <div class="row">
          <Yard v-on:childToParent="onYardChange" />
        </div>
      </div>

      <div class="column">
        <div class="row">
          <h3>KUVAT</h3>
          <input
            type="file"
            id="file"
            ref="file"
            accept="image/*"
            @change="uploadAndPreviewImage"
            style="display: none"
            multiple
          />
          <label class="uploadBtn" for="file"> Lisää kuvia</label>
          <div
            id="imgParent"
            v-bind:style="[
              apartment.images.length === 0
                ? { height: 'auto' }
                : { 'max-height': '500px' },
            ]"
          >
            <div v-for="(image, imgIndex) in apartment.images" :key="imgIndex">
              <div v-if="apartment.images.length">
                <div class="img_controls">
                  <div class="btnDiv">
                    <button
                      class="upBtn"
                      type="button"
                      @click="moveImageInArray(imgIndex, imgIndex - 1)"
                    >
                      <i class="fas fa-chevron-up"></i>
                    </button>
                    <button
                      class="delBtn"
                      type="button"
                      @click="removeImage(imgIndex)"
                    >
                      <i class="far fa-times-circle"></i>
                    </button>
                    <button
                      class="downBtn"
                      type="button"
                      @click="moveImageInArray(imgIndex, imgIndex + 1)"
                    >
                      <i class="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <img :src="image" :key="imgIndex" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <label for="description-arb" class="description">
            Esittelyteksti asunnosta, sijainnista ja palveluista*
            <textarea
              id="description-arb"
              class="box"
              placeholder="Kuvaus"
              v-model="apartment.propertyDescription"
            ></textarea>
          </label>
        </div>
        <div class="row">
          <Parking v-on:childToParent="onChildParking"/>
        </div>
        <div class="row">
          <h3>Palvelut</h3>
          <Services v-on:childToParent="onChildClickServices" />
          {{ fromChildServices }} {{ fromChildServicesText }}
        </div>
        <div class="row">
          <h3>Muita kustannuksia</h3>
          <OtherExpenses v-on:childToParent="onChildClickOtherExpenses" />
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

//LocationType puuttuu

//import ProfileImage from '../inputElements/person/ProfileImage.vue'

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
    Parking
    //ProfileImage,
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
      fromChildFeatures: null,
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
  computed: {
    filteredCharacters() {
      return this.fromChildCheckedCharacterList.filter((character) => {
        return character.checked;
      });
    },
  },
  methods: {
    uploadAndPreviewImage() {
      this.$refs.file.files.forEach((e, i) =>
        this.apartment.images.push(
          URL.createObjectURL(this.$refs.file.files[i])
        )
      );
    },
    removeImage(index) {
      this.apartment.images.splice(index, 1);
    },
    moveImageInArray(from, to) {
      var moved = this.apartment.images.splice(from, 1)[0];
      this.apartment.images.splice(to, 0, moved);
    },
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
      this.apartment.propertyFloors = value.aptFloorAmt;
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
      this.apartment.BuildingType = value;
    },
    onChildClickCellAptRoom(value) {
      this.apartment.isCellApartment = value;
    },
    onChildClickFloor(value) {
      //this.fromChildFloor = value.floor;
      this.apartment.floor = value.text;
      this.apartment.hasElevator = value.hasElevator
    },
    onChildSetSalePrice(value) {
      this.apartment.price.salePrice = value.salePrice;
      this.apartment.price.debtFreePrice = value.debtFreePrice;
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
      this.fromChildFeatures = value.features; //Muuta muuttuja
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
label,
input,
textarea {
  margin: auto 0;
}
label.description {
  padding: 0;
  margin-top: 1.2rem;

  textarea {
    margin-top: 0.4rem;
    height: 4rem;
  }
}
label[class="description"] ~ label[class="description"] {
  margin-top: 0.8rem;
}
.flexbox {
  div,
  select {
    width: 48%;
  }
}
#description-arb {
  height: 15rem;
}
#imgParent {
  margin-top: 1em;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
}
.img_controls {
  display: inline-block;
  margin-top: 0.5em;
  position: relative;
  width: 100%;
}
.img_controls img {
  width: 100%;
  height: auto;
  overflow: auto;
}
.img_controls .btnDiv {
  margin-top: 1em;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 3%;
}
.btnDiv button {
  margin: 10% auto 10% auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.uploadBtn {
  background-color: v.$KAMGreenDark;
  color: white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
}
#typeAndFloor {
  margin-bottom: auto;
}
#aptsLabel {
  margin-right: 1em;
}
#businessesLabel {
  margin-left: 1em;
}
#aptsBusinesses {
  margin-top: 2em;
}
#aptsBusinesses input {
  max-width: 97%;
}
#euroLabel {
  font-weight: bold;
}
#taxDiv{
  width: 40%;
}
#propertyTax {
  height: 1.45em;
}
#businessesOnProperty, #totalAmountOfAptsOnProperty {
  width: 3em;
}
#buildYear {
  height: 1.45em;
  width: 4em;
}
</style>