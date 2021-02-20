<template>
  <div class="content">
    <h1>Osta asunto, josta tarinat alkavat</h1>
    <div class="box">
      <div class="cards flexbox box">
        <ApartmentCard card-id="S" :apartment-data="apartment" v-for="r in cards" :key="r"/>
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "./cards/ApartmentCard.vue";
import axios from 'axios';

export default {
  name: 'ForSaleApartments',

  components: {
    ApartmentCard
  },

  data() {
    return {
      cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      apartments: {},

      apartment: {
        images: [{ data: Buffer, type: String }],
        _id: '600a9bc0713b7c3b5464f1e7',

        isForSale: true,
  
        housingAssociation: null,
        buildingManager: null,
        maintainer: null,
        yard: 'Pihalla omenapuita, pieni yrttitarha ja kukkaistutuksia. Lapsille tilaa liikkua ja pieni leikkimökki. Ajotie asfalaltoitu.',
        allowedBuildArea: 20,
        zoning: 'Helsingin kaupunki',
        description: 'Arkkitehti Juha Aalto-Setälän suunnittelema upea kokonaisuus arvostetussa Karhusaaressa. Tyylikäs talo jossa paljon kivoja yksityiskohtia, kuten korkea olohuone suurine ikkunoineen. Yläkerrasta voit nähdä mertakin. Upea kallioinen tontti on helppohoitoinen ja rajautuu tiehen luonnon kivimuurilla. Karhusaari tunnetaan merellisyydestä jossa on pari venesatamaa sekä uimaranta.',
        isFurnished: false,
        viewCount: 1200,

        floorPlan: {
          regular: { title: 'regular', amount: 4 },
          kitchen: { title: 'kitchen', amount: 1 },
          kitchenette: { title: 'kitchenette', amount: 0 },
          diningRoom: { title: 'diningRoom', amount: 1 },
          bathRoom: { title: 'bathRoom', amount: 3 },
          toilet: { title: 'toilet', amount: 2 },
          sauna: { title: 'sauna', amount: 1 },
          wardrobe: { title: 'wardrobe', amount: 1 },
          utilityRoom: { title: 'utility room', amount: 2 },
        },
        balcony: { exists: true, description: 'lasitettu' },
        patio: { exists: true, description: 'katettu ja osittain lasitettu' },
        totalArea: 200,
        livingArea: 150,
        cellArea: 10,
        propertyArea: 1000,
        location: {
          city: 'Helsinki',
          neighborhood: 'Kontula',
          address: 'Kontulantie 30',
          areaCode: '00940',
        },
        hasGarage: true,
        hasHotTub: true,
        hasPool: false,
        monthlyRent: null,
        property: {
          rented: false,
          owner: 'oma',
          propertyRent: null,
          contractExpiresAt: null,
        },
        price: { 
          salePrice: 2000000, 
          debtFreePrice: 1500000 
        },
        maintenanceCosts: { 
          upkeep: { type: Number }, 
          financing: { type: Number } 
        },
        propertyTax: 974.92,
        guarantee: { type: String },
        buildYear: 2020,
        apartmentType: 'Omakotitalo',
        isCellApartment: false,
        floor: null,
        propertyFloors: 2,
        sights: 'Etelänpuoleisista ikkunoista maalaismaisemat pellolle ja metsään. Pohjoispuolella omakotialue.',
        hasElevator: false,
        availableFrom: '01/04/2022',
        availableUntil: '01/02/2023',
        equipment: {
          kitchen: 'Jääkaappi/pakastin, keraaminenliesi, liesituuletin, astianpesukone (rikki), uuni, mikro.',
          bathroom: 'Suihku, suihkuseinä, peili, lavuaari, hana, allaskaappi, wc-istuin.',
          storage: 'Eteisessä tilavat liukuovikaapistot. Asunnolle kuuluu varastokomero kellarissa.',
          heating: 'Suora sähkölämmitys',
          plumbing: '',
          water: 'Kaivo',
          garbage: '',
          airConditioning: 'Ilmalämpöpumppu',
          common: { type: String },
          other: { type: String },
        },
        propertyDescription: 'Tonttiin kuuluu metsää 20 ha sekä viljelyskelpoista peltoa 10 ha.',
        totalAmountOfAptsOnProperty: 32, //ha
        businessesOnProperty: null,
        buildMaterial: 'Hirsi, puu',
        roofType: 'Harjakatto',
        roofLining: 'Pelti',
        renovationDescription: 'Katto uusittu 2002, sauna 2003, yläkerran pikkukeittiö, kylpyhuone ja uudet tilajärjestelyt 2005, piharakennuksen katto 2011, jätevesipumppaamo 2011, keittiö 2016, julkisivun maalaus 2019, lattioiden ja seinäpintojen uusimisia 2019, muutoin kunnostettu huone kerrallaan ja tarpeen vaatiessa.',
        energyClass: 'E 2017',
        condition: 1,
        limitations: null,
        petsAllowed: null,
        smokingAllowed: null,
        utilities: {
          utilityDescription: { type: String },
          insurancePlan: {
            mustHave: null,
            monthlyPrice: { type: Number },
          },
          parking: {
            exists: true,
            description: 'Kahden auton lämmin autotalli sekä autokatos',
            supportsElectric: true,
            type: 2,
          },
          water: {
            mustHave: true,
            monthlyPrice: 16,
          },
          includesElectricity: {
            mustHave: false,
            monthlyPrice: null,
          },
          dataConnection: {
            isIncluded: true,
            speed: 5,
          },
        },
        nearbyServices: {
          publicTransport: [
            { title: 'Bussi keskustaan', distance: 100 },
          ],
          groceries: [{ title: 'Sale', distance: 50 }],
          healthCare: [{ title: 'Terveysasema', distance: 1400 }],
          dayCare: [{ title: 'Ipana päiväkoti', distance: 900 }],
          education: [{ title: 'Kontulan ala-aste', distance: 700 }],
          excercise: [{ title: 'Kontulan pururata', distance: 50 }],
        },
      },
    }
  },
  async created() {
    let res = await axios.get('/apartments')
    this.apartments = res.data
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h1 {
  margin-top: 3rem;
  margin-bottom: 4rem;
}
.cards {
  flex-wrap: wrap;
  justify-content: center;
}


</style>