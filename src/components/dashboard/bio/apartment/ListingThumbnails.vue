<template>
  <div>
    <h4 class="margin__topless">{{  handleAptType  }}</h4>
    <h1>{{ location.neighborhood }}, {{ location.city }}</h1>
    <h4 class="margin__topless">{{ location.streetName }} {{ location.houseNumber}}</h4>

    <p class="listing-basics__description">{{ data.description }}</p>

    <div class="listing-basics__content flexbox">
      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-coins"></i>

          <div v-if="!apartment.isForSale">
            <p class="margin__bottomless">Vuokra/kk</p>
            <!-- tai myyntihinta -->
            <p class="margin__bottomless">{{ data.monthlyRent }} €</p>
          </div>
          <div v-else>
            <p class="margin__bottomless">Velaton hinta</p>
            <!-- tai myyntihinta -->
            <p class="margin__bottomless">
              {{ data?.price?.debtFreePrice }} €
            </p>
          </div>
        </div>
      </div>

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-expand"></i>
          <div>
            <p class="margin__bottomless">Huonejako</p>
            <!-- <i class="fas fa-layer-group"></i> -->
            <p id="roomPlan" class="margin__bottomless">
              {{ handleAptFloorPlan }}
            </p>
          </div>
        </div>
      </div>

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-hourglass-half"></i>
          <div>
            <p class="margin__bottomless">Rakennusvuosi</p>
            <p class="margin__bottomless">{{ apartment.buildYear }}</p>
          </div>
        </div>
      </div>

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-hourglass-half"></i>
          <div>
            <p class="margin__bottomless">Ilmoitus jätetty</p>
            <p class="margin__bottomless">{{ handleDates }}</p>
          </div>
        </div>
      </div>

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-ruler-combined"></i>
          <div>
            <p class="margin__bottomless">Asuinpinta-ala</p>
            <p class="margin__bottomless">{{ apartment.livingArea }}m<span>²</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handleFloorPlan, handleApartmentType } from "./ApartmentHelpers.js";
export default {
  name: "ListingThumbnails",
  props: ["data", "locationData"],

  data() {
    return {
      apartment: this.data,
      location: this.locationData,
    };
  },
  computed: {
    handleAptType: function () {
      if (this.data && this.data.apartmentType) {
      let typeString = handleApartmentType(this.data);
      return typeString;
      }
      return "Määrittelemätön talotyyppi";
    },
    handleAptFloorPlan: function () {
      if (this.data && this.data.floorPlan) {
      let floorPlanString = handleFloorPlan(this.data);
      return floorPlanString;
      }
      return "Pohjapiirrosta ei löydetty!";
    },
    handleDates: function () {
      const dbDate = this.data.creationTime;
      var d = new Date(dbDate);
      const dateString =
        d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
      return dateString;
    },
    handleUrl() {
      let rent;
      if (window.location.href.indexOf("rent") > -1) {
        rent = true;
      } else {
        rent = false;
      }
      return rent;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

#roomPlan {
  white-space: unset;
}

h1 {
  letter-spacing: 0.1rem;
  text-transform: none;
  text-align: left;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;

  span {
    font-family: v.$KAMQuinn;
  }
}

p:last-of-type svg:not(:first-of-type) {
  margin-left: 1rem;
}

.listing-basics {
  .listing-basics__description {
    padding: 1rem 0 0.5rem 0;
    margin-bottom: 1rem;
    font-size: 1.1rem !important;
  }
  .listing-basics__content {
    margin-top: 4rem;
    height: 5rem;
    border-top: 0.15rem solid v.$Black;
    width: 100%;

    .column {
      width: 25%;
    }
    .column .flexbox {
      margin: 1rem 0.5rem;
      width: 100%;
      justify-content: center;
    }
    .column:not(:last-of-type) {
      border-right: 0.1rem solid;
      margin-top: -0.1rem;
    }
    //label
    .flexbox p:first-of-type {
      font-size: 1.2rem !important;
    }
    //data
    .flexbox p:last-of-type {
      font-size: 1.4rem !important;
      font-weight: bold;
    }
    .flexbox svg {
      width: 1.8rem;
      height: 1.8rem;
      margin: auto 0.8rem auto 0;
      color: v.$KAMGreySemiDark;
    }
  }
}
</style>