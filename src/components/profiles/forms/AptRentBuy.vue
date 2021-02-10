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
            <!-- pienennä input -->
            <label
              for="apartment.buildYear"
              class="label__border-bottom--green border-radius__left"
              >Rakennusvuosi</label
            >
            <input
              type="text"
              id="buildYear"
              class="border-radius__right"
              v-model="apartment.buildYear"
            />
          </div>
          <div class="flexbox">
            <label
              for="apartment.housingAssociation"
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
          <div class="flexbox" id="typeAndFloor">
            <BuildingType
              id-value="ARB"
              v-on:childToParent="onChildClickBuildingType"
            />
            <Floor v-on:childToParent="onChildClickFloor" />

            <!-- siirrä muualle -->
          </div>
          <div>
            <AvailableFrom v-on:childToParent="onChildClickAvailableFrom" />
            <AvailableTo v-on:childToParent="onChildClickAvailableTo" />
          </div>
          <div class="flexbox">
            <Price apt-value="R" />
          </div>
        </div>

        <div class="row">
          <h3>Ehdot</h3>
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
            <Area apt-value="R" v-on:childToParent="onChildClickArea" />
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

          <label for="kitchen-equipment" class="description"
            >Keittiön varustus
            <textarea
              type="text"
              id="kitchen-equipment"
              class="box"
              placeholder="Keittiön varustus"
              v-model="kEquipment"
            ></textarea>
          </label>
          <label for="bathroom-equipment" class="description"
            >Kylpyhuoneen varustus
            <textarea
              type="text"
              id="bathroom-equipment"
              class="box"
              placeholder="Kylpyhuoneen varustus"
              v-model="bEquipment"
            ></textarea>
          </label>
          <label for="storage" class="description"
            >Säilytystilat
            <textarea
              type="text"
              id="storage"
              class="box"
              placeholder="Kerro säilytystiloista"
              v-model="storage"
            ></textarea>
          </label>
          <label for="equipment" class="description"
            >Muuta varustusta
            <textarea
              type="text"
              id="equipment"
              class="box"
              placeholder="Muuta"
              v-model="equipment"
            ></textarea>
          </label>
        </div>

        <div class="row">
                <Yard v-on:childToParent="onYardChange"/>
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
              v-model="apartment.description"
            ></textarea>
          </label>
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
import Yard from '../inputElements/apartment/Yard.vue';

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
      quarantee: null,
      fromChildCheckedOwner: null,
      fromChildServices: null,
      fromChildServicesText: "",
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
    /*
    emitToParent() {
      this.$emit('childToParent', this.firstname)
    },*/
    onChildClickFloorPlan(value) {
      this.apartment.floorPlan = value.text;
      //this.fromChildFloorPlan = value.floorPlan;
    },
    onChildClickArea(value) {
      //Area, ei min tai max!!!!, cellArea
      this.fromChildAreaMinRoom = value.minRoom;
      this.fromChildAreaMaxTotal = value.maxTotal;
      //this.apartment.area = value.area;
    },
    onChildClickCondition(value) {
      this.apartment.condition = value;
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
    },
    onChildClickPrice(value) {
      //monthlyRent
      this.apartment.price.salePrice = value.price1;
      this.apartment.price.debtFreePrice = value.price2;
      //this.apartment.monthlyRent = value;
    },
    onChildClickRentBuy(value) {
      this.apartment.isForSale = value;
    },
    onChildClickFeatures(value) {
      //utilities
      this.fromChildFeatures = value.features; //Muuta muuttuja
      this.showFeatures = value.show;
      //this.apartment.mustHave
    },
    onChildClickServices(value) {
      this.fromChildServicesText = value.text;
      this.apartment.nearbyServices = value.services;
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
    },
    onYardChange(value) {
      this.apartment.propertyArea = value.yardArea;
      this.apartment.yard = value.yardDescription
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
</style>