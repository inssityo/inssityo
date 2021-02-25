<template>
  <div>
    <!--<ImageCarousel :images="apartment.images" />-->
    <!-- handlaa, jos ei ole kuvia -->
    <div class="content">
      <div class="container">
        <div class="column column-item--1">
          <div class="flexbox">
            <Icon
              icon="far fa-play-circle"
              tooltip-text="Katso esittelyvideo"
            />
            <Icon
              icon="fas fa-map-marker-alt"
              tooltip-text="Asunnon sijainti"
            />
            <Icon icon="fas fa-expand" tooltip-text="Katso pohjakuva" />
          </div>
          <div class="flexbox">
            <Icon
              icon="far fa-heart"
              tooltip-text="Tykkää"
              v-show="!liked"
              @click="like"
            />
            <Icon
              icon="fas fa-heart"
              tooltip-text="Älä tykkää"
              v-show="liked"
              @click="like"
            />
            <Icon icon="fas fa-dove" tooltip-text="Aloita chat" />
          </div>
          <h3>Katsottu {{ apartment.viewCount }} kertaa</h3>
        </div>

        <div class="column column-item--2 listing-basics">
          <ListingThumbnails :data="apartment" :locationData="location" />

          <div class="listing-data__title">
            <h2>Perustiedot</h2>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Kohdenumero</p>
                <p>{{ apartment._id }}</p>
              </div>
              <div class="row flexbox">
                <p>Sijainti</p>
                <p>
                  {{ handleAddress }}, {{ handleNeighborhood }},
                  {{ handleCity }}, {{ apartment.location.areaCode }}
                </p>
              </div>
              <div class="row flexbox">
                <p>Talotyyppi</p>
                <p>{{ handleApartmentType }}</p>
              </div>
              <div class="row flexbox">
                <p>Omistusmuoto</p>
                <p>{{ handleIsForSale }}</p>
              </div>
            </div>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Huoneet</p>
                <p>{{ handleFloorPlan }}</p>
              </div>
              <div class="row flexbox">
                <p>Asuinpinta-ala</p>
                <p>{{ apartment.livingArea }}&#13217;</p>
              </div>
              <div class="row flexbox">
                <p>Kokonaispinta-ala</p>
                <p>{{ apartment.totalArea }}&#13217;</p>
              </div>
              <div class="row flexbox">
                <p>Kerros/kerroksia</p>
                <!-- if omakotitalo=kerroksia -->
                <p>{{ apartment.floor }}</p>
              </div>
              <div class="row flexbox">
                <p>Rakennusvuosi</p>
                <p>{{ apartment.buildYear }}</p>
              </div>

              <div class="row flexbox">
                <p>Lisäominaisuudet</p>
                <p>{{ handleBalconyPatio }}</p>
              </div>
            </div>
            <div class="listing-data__content">
              <div v-if="apartment.sights" class="row flexbox">
                <p>Näköalat</p>
                <p>{{ apartment.sights }}</p>
              </div>

              <div class="listing-data__title">
                <h2>Tontti</h2>
                <div v-if="apartment.propertyArea" class="row flexbox">
                  <p>Tontin pinta-ala</p>
                  <p>{{ apartment.propertyArea }}&#13217;</p>
                </div>
                <div v-if="apartment.yard" class="row flexbox">
                  <p>Tontin kuvaus</p>
                  <p>
                    {{ apartment.yard }}
                  </p>
                </div>
                <div v-if="apartment.allowedBuildArea" class="row flexbox">
                  <p>Sallittu rakennusala tontilla</p>
                  <p>{{ apartment.allowedBuildArea }}&#13217;</p>
                </div>
                <div v-if="apartment.zoning" class="row flexbox">
                  <p>Kaavoitustiedot</p>
                  <p>
                    {{ apartment.zoning }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="listing-data__title">
            <h2>Varustus</h2>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Keittiö</p>
                <p>
                  {{apartment.equipment.kitchen}}
                </p>
              </div>
              <div class="row flexbox">
                <p>Pesutilat</p>
                <p>
                {{apartment.equipment.bathroom}}
                </p>
              </div>
              <div class="row flexbox">
                <p>Säilytystilat</p>
                <p>{{apartment.equipment.storage}}</p>
              </div>
              <div v-if="apartment.equipment.other" class="row flexbox">
                <p>Muu varustus</p>
                <p>{{apartment.equipment.other}}</p>
              </div>
            </div>
            <div class="row flexbox">
              <p>Toimitetaan kalustettuna</p>
              <p v-if="apartment.isFurnished">Kyllä</p>
              <p v-else>ei</p>
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
                <p>
                  Seinät maalattu, osittain tapetoitu. Kylpyhuoneet kaakeloitu.
                </p>
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
                <p>
                  Kiinteistöllä on oma jätevesipumppaamo, joka pumppaa jätevedet
                  kunnalliseen verkostoon
                </p>
              </div>
            </div>
          </div>

          <div class="listing-data__title">
            <h2>Hintatiedot</h2>
            <div class="listing-data__content">
              <div class="row flexbox">
                <p>Velaton hinta</p>
                <p>2 000 000 €</p>
              </div>
              <div class="row flexbox">
                <p>Myyntihinta</p>
                <p>1 000 000 €</p>
              </div>
              <div class="row flexbox">
                <p>Lainaosuus</p>
                <p>1 000 000 €</p>
              </div>
              <div class="row flexbox">
                <p>Neliöhinta</p>
                <p>200 000 €</p>
              </div>
              <div class="row flexbox">
                <p>Hoitovastike</p>
                <p>2 000 €</p>
              </div>
              <div class="row flexbox">
                <p>Rahoitusvastike</p>
                <p>1 000 €</p>
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
//import ImageCarousel from './apartment/ImageCarousel.vue';
import ListingThumbnails from "./apartment/ListingThumbnails.vue";
import Icon from "./Icon.vue";
import ApartmentService from "../../../api-services/apartment.service.js";

export default {
  components: {
    //ImageCarousel, //Handlaa kuvat
    ListingThumbnails,
    Icon,
  },

  name: "ApartmentDetails",

  data() {
    return {
      liked: false,
      apartment: {},
      location: { address: "", neighborhood: "", city: "" },

      currentIndex: 0,
      timer: null,
      cardId: null,
      loading: false,
    };
  },
  async created() {
    if (this.$route.params.id) {
      let aptId = this.$route.params.id;

      if (this.$route.params.apartment) {
        this.apartment = JSON.parse(this.$route.params.apartment);
      }
      //Required when the page is refreshed
      else {
        try {
          const response = await ApartmentService.get(aptId);
          this.apartment = response.data;
        } catch (err) {
          console.log("apartment data error: " + err);
        }
      }
    }
  },
  computed: {
    handleFloorPlan() {
      let floorPlanString = "";
      let values = Object.values(this.apartment.floorPlan);
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
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}kk`;
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
            floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}sauna`;
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
      return floorPlanString;
    },
    handleIsForSale() {
      if (this.apartment.isForSale) {
        return "Omistusasunto";
      } else {
        return "Vuokra";
      }
    },
    handleBalconyPatio() {
      let balconyPatioString = "";
      if (this.apartment.balcony.exists) {
        balconyPatioString += `Parveke: ${this.apartment.balcony.description} `;
      }
      if (this.apartment.patio.exists) {
        balconyPatioString += `Terassi: ${this.apartment.patio.description} `;
      }
      if (this.apartment.hasHotTub) {
        balconyPatioString += "Poreamme ";
      }
      if (this.apartment.hasPool) {
        balconyPatioString += "Uima-allas ";
      }
      return balconyPatioString;
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
    handleApartmentType() {
      const type = this.apartment.apartmentType;
      let typeString;
      switch (type) {
        case 1:
          typeString = "Kerrostaloasunto";
          break;
        case 2:
          typeString = "Rivitalo";
          break;
        case 3:
          typeString = "Paritalo";
          break;
        case 4:
          typeString = "Omakotitalo";
          break;
        case 5:
          typeString = "Ketjutalo";
          break;
        case 6:
          typeString = "Luhtitalo";
          break;
        case 7:
          typeString = "Puutalo-osake";
          break;
        case 8:
          typeString = "Muu";
          break;
      }
      return typeString;
    },

    /*
      Handling undefined nested object values: 
      floorPlan, utilities, location, price, nearbyServices, 
      balcony, patio, property, maintenanceCosts, equipment
    */
    handleAddress() {
      return this.handleUndefined("address");
    },
    handleNeighborhood() {
      return this.handleUndefined("neighborhood");
    },
    handleCity() {
      return this.handleUndefined("city");
    },
  },
  methods: {
    like() {
      this.liked = !this.liked;
    },
    handleUndefined(name) {
      let type = "";
      let t = "no " + name + " given ";
      switch (name) {
        case "address":
          type =
            this.apartment?.location?.address.streetName +
            " " +
            this.apartment?.location?.address.houseNumber;
          if (type !== undefined) {
            t = type;
          }
          this.location.address = t;
          break;
        case "neighborhood":
          type = this.apartment?.location?.neighborhood;
          if (type !== undefined) {
            t = type;
          }
          this.location.neighborhood = t;
          break;
        case "city":
          type = this.apartment?.location?.city;
          if (type !== undefined) {
            t = type;
          }
          this.location.city = t;
          break;
      }
      return t;
    },
  },
};
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