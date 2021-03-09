<template>
  <div>
    <ImageCarousel :images="apartment.images" /><!-- handlaa, jos ei ole kuvia -->
    <div class="content">

      <div class="container">
        
        <div  class="column column-item--1">
          <div class="flexbox">
            <Icon icon="far fa-play-circle" tooltip-text="Katso esittelyvideo" />
            <Icon icon="fas fa-map-marker-alt" tooltip-text="Asunnon sijainti" />
            <Icon icon="fas fa-expand" tooltip-text="Katso pohjakuva" />
          </div>
          <div class="flexbox">
            <Icon icon="far fa-heart" tooltip-text="Tykkää" v-if="!liked" @click="like" />
            <Icon icon="fas fa-heart" tooltip-text="Älä tykkää" v-else @click="like" />
            <Icon icon="fas fa-dove" tooltip-text="Aloita chat" />
          </div>
          <h3>Katsottu {{ apartment.viewCount }} kertaa</h3>
        </div>
        
        <div class="column column-item--2 listing-basics">
          
          <ListingThumbnails :data="apartment" :locationData="location"/>

          <div class="listing-data__title">
            <h2>Perustiedot</h2>
            
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Kohdenumero</p>
                <p>{{ apartment._id }}</p>
              </div>
              <div class="row flexbox">
                <p>Osoite</p>
                <p>{{ handleStreetName }} {{handleHouseNumber}}, {{ handleAreaCode }} {{ handleCity }}</p>
              </div>
              <div class="row flexbox">
                <p>Kaupunginosa</p>
                <p>{{ handleNeighborhood }}</p>
              </div>
              <div class="row flexbox">
                <p>Talotyyppi</p>
                <p>{{ handledApartment.apartmentType }}</p>
              </div>
              <div class="row flexbox">
                <p>Omistusmuoto</p>
                <p>{{ handleIsForSale }}</p>
              </div>
            </div>

            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Huoneet</p>
                <p>2h + k + s + vh</p>
              </div>
              <div class="row flexbox">
                <p>Asuinpinta-ala</p>
                <p>{{ apartment.livingArea }}m</p>
              </div>
              <div class="row flexbox">
                <p>Kokonaispinta-ala</p>
                <p>{{ apartment.totalArea }}m</p>
              </div>
              <div class="row flexbox">
                <p>Kerros/kerroksia</p> <!-- if omakotitalo=kerroksia -->
                <p>{{ apartment.floor }}</p>
              </div>
              <div class="row flexbox">
                <p>Rakennusvuosi</p>
                <p>{{ apartment.buildYear }}</p>
              </div>
              
              <div class="row flexbox">
                <p>Lisäominaisuudet</p>
                <p>sauna</p>
              </div>
            </div>

            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Näköalat</p>
                <p>Pihalle</p>
              </div>
              <div class="row flexbox">
                <p>Tontin pinta-ala</p>
                <p>{{ apartment.propertyArea }}</p>
              </div>
              <div class="row flexbox">
                <p>Tontin kuvaus</p>
                <p>{{ apartment.propertyDescription }}</p>
              </div>
            </div>
          </div>

          <div class="listing-data__title">
            <h2>Varustus</h2>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Keittiö</p>
                <p>Keittiötila on luontevasti olohuoneen yhteydessä. Keittiötilassa on jääkaappipakastin, erillisuuni (induktioliesitasolla), liesituuletin, astianpesukone. Keittiötilassa on Puustellin kaapistot.</p>
              </div>
              <div class="row flexbox">
                <p>Pesutilat</p>
                <p>Tyylikkäästi laatoitetussa kylpyhuoneessa on Pukkilan laatat. Kylpyhuoneessa on suihku ja kääntyvä suihkuseinä, peili- ja allaskaappi, pesukoneliitäntä (pesutornivaraus). Koko kodissa on vesikiertoinen lattialämmitys.</p>
              </div>
              <div class="row flexbox">
                <p>Säilytystilat</p>
                <p>Lämmin irtamistovarasto yhtiön tiloissa, kaapistot</p>
              </div>
              <div class="row flexbox">
                <p>Muu varustus</p>
                <p>Lämmin irtamistovarasto yhtiön tiloissa, kaapistot</p>
              </div>
            </div>
          </div>

          <div class="listing-data__title">
            <h2>Materiaalit</h2>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Rakennusmateriaali</p>
                <p>hirsi</p>
              </div>
              <div class="row flexbox">
                <p>Lattia</p>
                <p>parketti</p>
              </div>
              <div class="row flexbox">
                <p>Seinät</p>
                <p>Seinät maalattu, osittain tapetoitu. Kylpyhuoneet kaakeloitu.</p>
              </div>
            </div>
          </div>

          <div class="listing-data__title">
            <h2>Asunnon järjestelmät</h2>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Vesi</p>
                <p>kunnan</p>
              </div>
              <div class="row flexbox">
                <p>Ilmanvaihto</p>
                <p>Painovoimainen, kosteissa tiloissa ilmastointi</p>
              </div>
              <div class="row flexbox">
                <p>Lämmitys</p>
                <p>Ilmalämpöpumppu</p>
              </div>
              <div class="row flexbox">
                <p>Jätevesi</p>
                <p>Kiinteistöllä on oma jätevesipumppaamo, joka pumppaa jätevedet kunnalliseen verkostoon</p>
              </div>
            </div>
          </div>

          <div class="listing-data__title">
            <h2>Hintatiedot</h2>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Velaton hinta</p>
                <p>{{ handleDebtFreePrice }} €</p>
              </div>
              <div class="row flexbox">
                <p>Myyntihinta</p>
                <p>{{ handleSalePrice }} €</p>
              </div>
              <div class="row flexbox">
                <p>Lainaosuus</p>
                <p>1 000 000 €</p>
              </div>
              <div class="row flexbox">
                <p>Neliöhinta</p>
                <p>{{ handlePerSquareFootPrice }} €</p>
              </div>
              <div class="row flexbox">
                <p>Hoitovastike</p>
                <p>{{ handleUpkeep }} €</p>
              </div>
              <div class="row flexbox">
                <p>Rahoitusvastike</p>
                <p>{{ handleFinancing }} €</p>
              </div>
              <div class="row flexbox">
                <p>Yhtiövastike</p>
                <p>3 000 €</p>
              </div>
              <div class="row flexbox">
                <p>Vesimaksu</p>
                <p>20 €</p>
              </div>
            </div>
          </div>

        </div>
        
      </div> 
    </div>
  </div>
</template>

<script>
import ImageCarousel from './apartment/ImageCarousel.vue';
import ListingThumbnails from './apartment/ListingThumbnails.vue';
import Icon from './Icon.vue';
import ApartmentService from '../../../api-services/apartment.service.js';

export default {
  components: { 
    ImageCarousel,
    ListingThumbnails,
    Icon
  },

  name: 'ApartmentDetails',

  data() {
    return {
      liked: false,
      apartment: {},
      handledApartment: {},
      location: {streetName: "", houseNumber: "", neighborhood: "", city: "", areaCode: ""},
      costs: {
        salePrice: null, 
        debtFreePrice: null, 
        perSquareFoot: null, 
        upkeep: null,
        financing: null,
      },

      currentIndex: 0,
      timer: null,
      cardId: null,
      loading: false,
    }
  },
  async created() {
    
    if (this.$route.params.id) {
      let aptId = this.$route.params.id

      if (this.$route.params.apartment) {
        this.apartment = JSON.parse(this.$route.params.apartment);
      }
      if (this.$route.params.handledApartment) {
        this.handledApartment = JSON.parse(this.$route.params.handledApartment);
      }
      //Required when the page is refreshed
      else {
        try {
          const response =  await ApartmentService.get(aptId);
          this.apartment = response.data;
        } catch (err) {
          console.log("apartment data error: " + err);
        }
      }
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
    
    /*
      Handling undefined nested object values: 
      floorPlan, utilities, location, price, nearbyServices, 
      balcony, patio, property, maintenanceCosts, equipment
    */
    handleStreetName() {
      return this.handleUndefined("street");
    },
    handleHouseNumber() {
      return this.handleUndefined("house");
    },
    handleNeighborhood() {
      return this.handleUndefined("neighborhood");
    },
    handleCity() {
      return this.handleUndefined("city");
    },
    handleAreaCode() {
      return this.handleUndefined("area");
    },
    handleSalePrice() {
      return this.handleUndefined("salePrice");
    },
    handleDebtFreePrice() {
      return this.handleUndefined("debtFreePrice");
    },
    handleUpkeep() {
      return this.handleUndefined("upkeep");
    },
    handleFinancing() {
      return this.handleUndefined("financing");
    },
    handlePerSquareFootPrice() {
      return this.countPerSquareFootPrice();
    },
    handleIsForSale() {
      if(this.apartment.isForSale) {
        return "omistus";
      } else {
        return "vuokra";
      }
    }
  },
  methods: {
    like() {
      this.liked = !this.liked;
    },
    handleUndefined(name) {
      let type = "";
      let t = "no " + name + " given ";
      switch(name) {
        case "street":
          type = this.apartment?.location?.address?.streetName;
          if (type !== undefined) { t = type }
          this.location.streetName = t;
          break;
        case "house":
          type = this.apartment?.location?.address?.houseNumber;
          if (type !== undefined) { t = type }
          this.location.houseNumber = t;
          break;
        case "neighborhood":
          type = this.apartment?.location?.neighborhood;
          if (type !== undefined) { t = type }
          this.location.neighborhood = t;
          break;
        case "city":
          type = this.apartment?.location?.city;
          if (type !== undefined) { t = type }
          this.location.city = t;
          break;
        case "area":
          type = this.apartment?.location?.areaCode;
          if (type !== undefined) { t = type }
          this.location.areaCode = t;
          break;
        case "salePrice":
          type = this.apartment?.price?.salePrice;
          if (type !== undefined) { t = type }
          this.costs.salePrice = t;
          break;
        case "debtFreePrice":
          type = this.apartment?.price?.debtFreePrice;
          if (type !== undefined) { t = type }
          this.costs.debtFreePrice = t;
          break;
        case "upkeep":
          type = this.apartment?.maintenanceCosts?.upkeep;
          if (type !== undefined) { t = type }
          this.costs.upkeep = t;
          break;
        case "financing":
          type = this.apartment?.maintenanceCosts?.financing;
          if (type !== undefined) { t = type }
          this.costs.financing = t;
          break;
      }
      return t;
    },
    countPerSquareFootPrice() {
      let price = (this.costs.salePrice / this.apartment.livingArea).toFixed(2);
      this.costs.perSquareFoot = price;
      return price;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

h2 {
  text-align: center;
}
h3 {
  padding: 2rem 0;
  text-align: right;
}
.listing-data__content {
  padding-top: 1rem;
}
p {
  margin: 0.2rem 0;
}

.container {
  display: flex;
}
.column:first-of-type {
  width: 20%;
}
.column:last-of-type {
  width: 80%;
}
.row {
  background: v.$White;
  align-items: flex-start;
  position: relative;
}
.column-item--1 .flexbox {
  justify-content: flex-end;
  padding-bottom: 1rem;
}
.column-item--2 {
  padding: 0 0 1rem 3rem;

  svg {
    margin-right: 0.4rem;
  }
  p:last-of-type svg:not(:first-of-type) {
    margin-left: 1rem;
  }
}


.listing-data__title {
  margin-top: 5rem;

  h2 {
    text-align: left;
    text-transform: none;
    //border-top: 0.1rem solid v.$Black;
    padding-top: 0.2rem;
  }
  .row {
    padding: 0.2rem 0;

    p:first-of-type {
      width: 30%;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-size: 0.9rem !important;
      font-weight: bold;
    }
    p:first-of-type:first-letter {
    font-size: 120%;
    }
    p:last-of-type {
      width: 70%;
    }
  }
  .flexbox {
    justify-content: normal;
  }
  /*
  .row:nth-child(odd) {
    //background: v.$KAMGreenLight;
  }*/
}


</style>