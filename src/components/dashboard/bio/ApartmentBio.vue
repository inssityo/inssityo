<template>
  
  <ImageCarousel :images="apartment.images" /> <!-- handlaa, jos ei ole kuvia -->
  <div class="content">

    <div class="container">
      
      <div  class="column column-item--1">
        <div class="flexbox">
          <Icon icon="far fa-play-circle" tooltip-text="Katso esittelyvideo" />
          <Icon icon="fas fa-map-marker-alt" tooltip-text="Asunnon sijainti" />
          <Icon icon="fas fa-expand" tooltip-text="Katso pohjakuva" />
        </div>
        <div class="flexbox">
          <Icon icon="far fa-heart" tooltip-text="Tykkää" v-show="!liked" @click="like" />
          <Icon icon="fas fa-heart" tooltip-text="Älä tykkää" v-show="liked" @click="like" />
          <Icon icon="fas fa-dove" tooltip-text="Aloita chat" />
        </div>
        <h3>Katsottu {{ apartment.viewCount }} kertaa</h3>
      </div>
      
      <div class="column column-item--2 listing-basics">
        
        <ListingThumbnails :data="apartment" />

        <div class="listing-data__title">
          <h2>Perustiedot</h2>
          <div class="listing-data__content">
            <div class="row flexbox">
              <p>Kohdenumero</p>
              <p>{{ apartment._id }}</p>
            </div>
            <div class="row flexbox">
              <p>Sijainti</p>
              <p>{{ apartment.location.address }}, {{ apartment.location.neighborhood }}, {{ apartment.location.city }}</p>
            </div>
            <div class="row flexbox">
              <p>Talotyyppi</p>
              <p>Omakotitalo</p>
            </div>
            <div class="row flexbox">
              <p>Omistusmuoto</p>
              <p>omistus</p>
            </div>
          </div>
          <div class="listing-data__content">
            <div class="row flexbox">
              <p>Huoneet</p>
              <p>2h + k + s + vh</p>
            </div>
            <div class="row flexbox">
              <p>Asuinpinta-ala</p>
              <p>200m</p>
            </div>
            <div class="row flexbox">
              <p>Kokonaispinta-ala</p>
              <p>250m</p>
            </div>
            <div class="row flexbox">
              <p>Kerros/kerroksia</p> <!-- if omakotitalo=kerroksia -->
              <p>2</p>
            </div>
            <div class="row flexbox">
              <p>Rakennusvuosi</p>
              <p>2020</p>
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
              <p>1000m</p>
            </div>
            <div class="row flexbox">
              <p>Tontin kuvaus</p>
              <p>Iso piha. Pihalla omenapuita. Kiinteistöön kuuluu peltoa ja metsää.</p>
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
</template>

<script>
import ImageCarousel from './apartment/ImageCarousel.vue';
import ListingThumbnails from './apartment/ListingThumbnails.vue';
import Icon from './Icon.vue';
import axios from 'axios';

export default {
  components: { 
    ImageCarousel,
    ListingThumbnails,
    Icon
  },

  name: 'RoommateDetails',

  data() {
    return {
      apartmentData: {},
      liked: false,
      apartment: {
        images: [
          'pexels-julia-kuzenkov-1974596.jpg',
          'pexels-vlada-karpovich-4451937.jpg',
          'pexels-kate-trifo-4123921.jpg',
          'pexels-thgusstavo-santana-2102587.jpg',
          'pexels-the-lazy-artist-gallery-1642125.jpg'
        ], //Nuolet, jos on enemmän kuin yksi kuva
        _id: '600a9347a9dede27fc51f4b1',
        isForSale:  false,
        housingAssociation: '',

        description: 'Keskeiseltä paikalta Kannelmäestä seitsemännen kerroksen päädystä maisemayksiö, missä koko asunnon levyinen ikkuna. Juna-asema ja Kauppakeskus Kaari kävelymatkan päässä, bussipysäkki talon edustalla ja tien toiselle puolelle rakenteilla jo osittain valmistunut uusi ostari. Kylpyhuone uudistettu putkisaneerauksen yhteydessä ja seinät maalattu. Vuokraan kuuluu taloyhtiön laajakaistayhteys. Asunnossa iso komerohuone hyllyineen sekä uusi jääkaappipakastin ja hella. Taloyhtiössä on sauna, pesukoneet, kuivaushuone, kerhohuone sekä kuntosali.',
        isFurnished: false,
        viewCount: 12000,

        floorPlan:{ regular:{ title:{type:String, default:"regular"}, amount:{ type:Number } },
        kitchen:{ title:{type:String, default:"kitchen"}, amount:{ type:Number } },
        kitchenette:{ title:{type:String, default:"kitchenette"}, amount:{ type:Number } },
        diningRoom: { title:{type:String, default:"diningRoom"}, amount:{ type:Number } },
        bathRoom:{ title:{type:String, default:"bathRoom"}, amount:{ type:Number } },
        toilet: { title:{type:String, default:"toilet"}, amount:{ type:Number } },
        sauna:{ title:{type:String, default:"sauna" }, amount:{ type:Number } },
        wardrobe:{ title:{type:String, default:"wardrobe"}, amount:{ type:Number } },
        utilityRoom:{ title:{type:String, default:"utility room"}, amount:{ type:Number } },
        patio:{ title:{type:String, default:"patio"}, amount:{ type:Number } },
        balcony:{ title:{type:String, default:"balcony"}, amount:{ type:Number } } },

        totalArea: 60,
        livingArea: 50,
        cellArea: 10,
        propertyArea: 150,

        location: {
          city: 'Helsinki',
          neighborhood: 'Kontula',
          address: 'Kontulankatu 14 A 20',
          areaCode: 444444,
        },

        hasGarage: false,
        hasHotTub: false,
        hasPool: true,
        monthlyRent: 480,
        propertyRent: 250,

        price: { 
          salePrice: 280000, 
          debtFreePrice: 130500 
        },

        maintenanceCosts: 300,
        guarantee: '',
        buildYear: 2010,
        apartmentType: 1,
        isCellApartment: true,
        floor: '4/5',
        hasElevator: true,
        availableFrom: '01/04/2022',
        availableUntil: '01/07/2022',
        equipment: '',
        condition: 1,
        petsAllowed: true,
        smokingAllowed: false,

        utilities: {
          insurancePlan: {
            mustHave: { type: Boolean },
            monthlyPrice: { type: Number },
          },
          parkingIncluded: { type: Boolean },
          water: { mustHave: { type: Boolean }, monthlyPrice: { type: Number } },
          includesElectricity: {
            mustHave: { type: Boolean },
            monthlyPrice: { type: Number },
          },
          dataConnection: {
            isIncluded: { type: Boolean },
            speed: { type: Number },
          },
        },

        distance: 400,
        nearbyServices: {
          publicTransport: [{ title: { type: String }, distance: { type: Number } }],
          groceries: [{ title: { type: String }, distance: { type: Number } }],
          healthCare: [{ title: { type: String }, distance: { type: Number } }],
          dayCare: [{ title: { type: String }, distance: { type: Number } }],
          education: [{ title: { type: String }, distance: { type: Number } }],
          excercise: [{ title: { type: String }, distance: { type: Number } }],
        },
      },
      currentIndex: 0,
      timer: null,
      cardId: null,
      loading: false,
    }
  },
  async created() {
    if (this.$route.params.id) {
      let apartmentData = this.$route.params.apartments;
      let apartmentId = this.$route.params.id

      if (apartmentData){
        this.apartmentData = apartmentData;
      } else {
        this.loading = true	
        let res = await axios.get(`/apartments/${apartmentId}`)
        this.apartmentData = res.data
        this.loading = false	
      }
      
      console.log("props"+this.$route.params.apartments + JSON.stringify(this.$route.params.apartments) + this.apartmentData)
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
  methods: {
    like() {
      this.liked = !this.liked;
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

img {
  height: auto;
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