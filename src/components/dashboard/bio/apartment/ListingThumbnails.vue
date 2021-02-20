<template>
  <div>
    <h4 class="margin__topless">Omakotitalo</h4>
    <h1>{{ apartment.location.neighborhood }}, {{ apartment.location.city }}</h1>
    <h4 class="margin__topless">{{ apartment.location.address }}</h4>

    <p class="listing-basics__description">{{ apartment.description }}</p>

    <div class="listing-basics__content flexbox">

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-coins"></i>
          
          <div v-if="handleUrl">
            <p class="margin__bottomless">Vuokra</p> <!-- tai myyntihinta -->
            <p class="margin__bottomless">450 €</p>
          </div>
          <div v-else>
            <p class="margin__bottomless">Velaton hinta</p> <!-- tai myyntihinta -->
            <p class="margin__bottomless">2 000 000 €</p>
          </div>
        </div>
      </div>

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-expand"></i>
          <div>
            <p class="margin__bottomless">Huoneet</p> <!-- <i class="fas fa-layer-group"></i> -->
            <p class="margin__bottomless">2h + k + s + vh</p>
          </div>
        </div>
      </div>

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-hourglass-half"></i>
          <div>
            <p class="margin__bottomless">Rakennusvuosi</p>
            <p class="margin__bottomless">2020</p>
          </div>
        </div>
      </div>

      <div class="column flexbox">
        <div class="flexbox">
          <i class="fas fa-ruler-combined"></i>
          <div>
            <p class="margin__bottomless">Asuinpinta-ala</p>
            <p class="margin__bottomless">220m</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListingThumbnails',
  props: ['data'],

  data() {
    return {
      apartment: this.data
    }
  },
  computed: {
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
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

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