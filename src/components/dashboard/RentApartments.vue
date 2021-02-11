<template>
  <div class="content">
    <h1>Vuokraa asunto, jossa onnellisuus asuu</h1>
    <div class="box">
      <div class="cards flexbox box">
        <ApartmentCard card-id="R" :apartment-data="apartment" v-for="r in cards" :key="r"/>
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "./cards/ApartmentCard.vue";
import axios from 'axios';

export default {
  name: 'RentApartments',

  components: {
    ApartmentCard
  },

  data() {
    return {
      cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      apartments: {},

      apartment: {
        images: [{ data: Buffer, type: String }],
        _id: '600a9347a9dede27fc51f4b1',

        isForSale: false,
  
        housingAssociation: 'Asuntoyhtiö Oy',
        buildingManager: 'Isännöinti Oy',
        maintainer: 'Helsingin Kiinteistöpalvelu Oy', //Huolto
        yard: 'Pihalla lapsille leikkipaikka.',
        allowedBuildArea: 20,
        zoning: 'Helsingin kaupunki',
        description: 'Arkkitehti Juha Aalto-Setälän suunnittelema upea kokonaisuus arvostetussa Karhusaaressa. Tyylikäs talo jossa paljon kivoja yksityiskohtia, kuten korkea olohuone suurine ikkunoineen. Yläkerrasta voit nähdä mertakin. Upea kallioinen tontti on helppohoitoinen ja rajautuu tiehen luonnon kivimuurilla. Karhusaari tunnetaan merellisyydestä jossa on pari venesatamaa sekä uimaranta.',
        isFurnished: false,
        viewCount: 1200,

        floorPlan: {
          regular: { title: 'regular', amount: 2 },
          kitchen: { title: 'kitchen', amount: 0 },
          kitchenette: { title: 'kitchenette', amount: 1 },
          diningRoom: { title: 'diningRoom', amount: 0 },
          bathRoom: { title: 'bathRoom', amount: 1 },
          toilet: { title: 'toilet', amount: 1 },
          sauna: { title: 'sauna', amount: 0 },
          wardrobe: { title: 'wardrobe', amount: 0 },
          utilityRoom: { title: 'utility room', amount: 0 },
        },
        balcony: { exists: true, description: 'lasitettu' },
        patio: { exists: false, description: '' },
        totalArea: 200,
        livingArea: 150,
        cellArea: 10,
        propertyArea: 1000,
        location: {
          city: 'Helsinki',
          neighborhood: 'Kontula',
          address: 'Kontulankatu 14 A 20',
          areaCode: '00940',
        },
        hasGarage: false,
        hasHotTub: false,
        hasPool: true,
        monthlyRent: 400,
        property: {
          rented: true,
          owner: 'Helsingin kaupunki',
          propertyRent: 30000,
          contractExpiresAt: '01/01/2022',
        },

        price: { 
          salePrice: null, 
          debtFreePrice: null 
        },
        maintenanceCosts: { 
          upkeep: { type: Number }, 
          financing: { type: Number } 
        },
        propertyTax: 974.92,
        guarantee: { type: String },
        buildYear: 2020,
        apartmentType: 'Kerrostalo',
        isCellApartment: true,
        floor: '5/7',
        propertyFloors: 7,
        sights: 'Näkymät kattojen ylle merellä asti.',
        hasElevator: true,
        availableFrom: '01/04/2022',
        availableUntil: '01/02/2023',
        equipment: {
          kitchen: 'Jääkaappi/pakastin, keraaminenliesi, liesituuletin, astianpesukone (rikki), uuni, mikro.',
          bathroom: 'Suihku, suihkuseinä, peili, lavuaari, hana, allaskaappi, wc-istuin.',
          storage: 'Eteisessä tilavat liukuovikaapistot. Asunnolle kuuluu varastokomero kellarissa.',
          heating: 'Suora sähkölämmitys',
          plumbing: '',
          water: 'Kunnan',
          garbage: '',
          airConditioning: 'Painovoimainen, kosteissa tiloissa ilmastointi',
          common: { type: String },
          other: { type: String },
        },
        propertyDescription: 'Tonttiin kuuluu metsää 20 ha sekä viljelyskelpoista peltoa 10 ha.',
        totalAmountOfAptsOnProperty: 32, //ha
        businessesOnProperty: 2,
        buildMaterial: 'Tiili',
        roofType: 'Harjakatto',
        roofLining: 'Pelti',
        renovationDescription: 'Katto uusittu 2002, sauna 2003, yläkerran pikkukeittiö, kylpyhuone ja uudet tilajärjestelyt 2005, piharakennuksen katto 2011, jätevesipumppaamo 2011, keittiö 2016, julkisivun maalaus 2019, lattioiden ja seinäpintojen uusimisia 2019, muutoin kunnostettu huone kerrallaan ja tarpeen vaatiessa.',
        energyClass: 'E 2017',
        condition: 1,
        limitations: 'Asuntoa ei saa laittaa lyhytaikaiseen vuokraukseen, kuten Airbnb.',
        petsAllowed: true,
        smokingAllowed: false,
        utilities: {
          utilityDescription: { type: String },
          insurancePlan: {
            mustHave: true,
            monthlyPrice: { type: Number },
          },
          parking: {
            exists: true,
            description: 'Autopaikka kerrostalon parkkipaikalla',
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