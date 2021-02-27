<template>
  <div>
    <h4 class="margin__topless">Omakotitalo</h4>
    <h1>{{ location.neighborhood }}, {{ location.city }}</h1>
    <h4 class="margin__topless">{{ location.address }}</h4>

    <p class="listing-basics__description">{{ apartment.description }}</p>

    <div class="listing-basics__content flexbox">
      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-coins"></i>

          <div v-if="apartment.monthlyRent">
            <p class="margin__bottomless">Vuokra/kk</p>
            <!-- tai myyntihinta -->
            <p class="margin__bottomless">{{ apartment.monthlyRent }} €</p>
          </div>
          <div v-else>
            <p class="margin__bottomless">Velaton hinta</p>
            <!-- tai myyntihinta -->
            <p class="margin__bottomless">
              {{ apartment?.price?.debtFreePrice }} €
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
              {{ handleFloorPlan }}
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
            <p class="margin__bottomless">
              {{ apartment.livingArea }} &#13217;
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    handleFloorPlan() {
      let floorPlanString = "";
      if (this.data && this.data.floorPlan) {
      let values = Object.values(this.data.floorPlan);

      let entries = values.filter((item) => item.amount);
      entries.forEach((entry) => {
        switch (entry.title) {
          case "regular":
            floorPlanString += `${entry.amount}h`;
            break;
          case "kitchen":
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}k`;
            break;
          case "kitchenette":
            floorPlanString += `, ${entry?.amount === 1 ? "" : entry.amount}kk`;
            break;
          case "diningRoom":
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}rh`;
            break;
          case "bathRoom":
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}kh`;
            break;
          case "toilet":
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}wc`;
            break;
          case "sauna":
            floorPlanString += `, ${
              entry.amount === 1 ? "" : entry.amount
            }sauna`;
            break;
          case "wardrobe":
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}vh`;
            break;
          case "utility room":
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}khh`;
            break;
        }
      });
      if (this.apartment.balcony?.exists) {
        floorPlanString += ", parveke";
      }
      if (this.apartment.patio?.exists) {
        floorPlanString += ", terassi";
      }
      }
      return floorPlanString;
    },
    handleDates: function () {
      const dbDate = this.apartment.creationTime;
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