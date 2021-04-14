<template>
  <div>
    <ImageCarousel :images="createImageUrls" /><!-- handlaa, jos ei ole kuvia -->
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
            <Icon icon="far fa-heart" tooltip-text="Tykkää" v-if="!liked" @click="like" />
            <Icon icon="fas fa-heart" tooltip-text="Älä tykkää" v-else @click="like" />
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

                <p>Osoite</p>
                <p>{{ handleStreetName }} {{handleHouseNumber}}, {{ handleAreaCode }} {{ handleCity }}</p>
              </div>
              <div class="row flexbox">
                <p>Kaupunginosa</p>
                <p>{{ handleNeighborhood }}</p>
              </div>
              <div class="row flexbox">
                <p>Talotyyppi</p>
                <p>{{ handleAptType }}</p>
                <!--<p>{{ handledApartment.apartmentType }}</p>-->
              </div>

              <div v-if="apartment.isCellApartment" class="row flexbox">
                <p>Soluasunto</p>
                <p>Kyllä</p>
              </div>

              <div class="row flexbox">
                <p>Omistusmuoto</p>
                <p>{{ handleIsForSale }}</p>
              </div>
            </div>

            <div
              v-if="
                apartment.floorPlan &&
                Object.values(apartment.floorPlan).some((val) => val.amount)
              "
              class="row flexbox"
            >
              <p>Huoneet</p>
              <p>{{ handleAptFloorPlan }}</p>
            </div>
            <div class="row flexbox">
              <p>Asuinpinta-ala</p>
              <p>{{ apartment.livingArea }}&#13217;</p>
            </div>
            <div class="row flexbox">
              <p>Kokonaispinta-ala</p>
              <p>{{ apartment.totalArea }}&#13217;</p>
            </div>

            <div v-if="apartment.housingAssociation" class="row flexbox">
              <p>Taloyhtiö</p>
              <p>{{ apartment.housingAssociation }}</p>
            </div>

            <div v-if="apartment.hasElevator !== null" class="row flexbox">
              <p>Hissi</p>
              <p>{{ apartment.hasElevator ? "Kyllä" : "Ei" }}</p>
            </div>

            <div v-if="apartment.buildingManager" class="row flexbox">
              <p>Isännöitsijä</p>
              <p>{{ apartment.buildingManager }}</p>
            </div>

            <div v-if="apartment.maintainer" class="row flexbox">
              <p>Kunnossapito</p>
              <p>{{ apartment.maintainer }}</p>
            </div>

            <div v-if="apartment.floor" class="row flexbox">
              <p v-if="apartment.apartmentType === 1">Kerros</p>
              <p v-else>Kerroksia</p>
              <p>{{ apartment.floor }}</p>
            </div>
            <div v-if="apartment.buildYear" class="row flexbox">
              <p>Rakennusvuosi</p>
              <p>{{ apartment.buildYear }}</p>
            </div>

            <div
              v-if="apartment.totalAmountOfAptsOnProperty"
              class="row flexbox"
            >
              <p>Asuinhuoneistojen määrä tontilla</p>
              <p>{{ apartment.totalAmountOfAptsOnProperty }}</p>
            </div>

            <div v-if="apartment.businessesOnProperty" class="row flexbox">
              <p>Liikehuoneistojen määrä tontilla</p>
              <p>{{ apartment.businessesOnProperty }}</p>
            </div>

            <div
              v-if="
                (apartment.balcony && apartment.balcony.exists) ||
                (apartment.patio && apartment.patio.exists) ||
                apartment.hasGarage ||
                apartment.hasHotTub ||
                apartment.hasPool
              "
              class="row flexbox"
            >
              <p>Lisäominaisuudet</p>
              <p>{{ handleBalconyPatioGarageTubPool }}</p>
            </div>

            <div v-if="apartment.sights" class="row flexbox">
              <p>Näköalat</p>
              <p>{{ apartment.sights }}</p>
            </div>

            <div v-if="apartment.condition" class="row flexbox">
              <p>Asunnon kunto</p>
              <p>{{ handleCondition }}</p>
            </div>

            <div v-if="apartment.energyClass" class="row flexbox">
              <p>Energiatodistus</p>
              <p>{{ apartment.energyClass }}</p>
            </div>

            <div v-if="apartment.availableFrom" class="row flexbox">
              <p>Vapautuu</p>
              <p>{{ makeDateString(apartment.availableFrom) }}</p>
            </div>

            <div v-if="apartment.availableTo" class="row flexbox">
              <p>Vuokrasopimus voimassa</p>
              <p>{{ makeDateString(apartment.availableTo) }}</p>
            </div>

            <div
              v-if="
                apartment.propertyArea ||
                apartment.allowedBuildArea ||
                apartment.zoning ||
                apartment.propertyDescription ||
                apartment.yard ||
                apartment.property
              "
              class="listing-data__title"
            >
              <h2>Tontti</h2>
              <div v-if="apartment.propertyArea" class="row flexbox">
                <p>Tontin pinta-ala</p>
                <p>{{ apartment.propertyArea }}&#13217;</p>
              </div>
              <div v-if="apartment.propertyDescription" class="row flexbox">
                <p>Tontin kuvaus</p>
                <p>
                  {{ apartment.propertyDescription }}
                </p>
              </div>
              <div v-if="apartment.yard" class="row flexbox">
                <p>Pihan kuvaus</p>
                <p>{{ apartment.yard }}</p>
              </div>

              <div v-if="apartment.property" class="row flexbox">
                <p>Tontin omistus</p>
                <p v-if="apartment.property && apartment.property.rented">
                  Vuokratontti
                </p>
                <p
                  v-else-if="
                    apartment.property && apartment.property.rented === false
                  "
                >
                  Oma tontti
                </p>
              </div>

              <div
                v-if="
                  apartment.property &&
                  !apartment.property.rented &&
                  apartment.propertyTax
                "
                class="row flexbox"
              >
                <p>Kiinteistövero</p>
                <p>{{ apartment.propertyTax }} €/vuosi</p>
              </div>

              <div
                v-if="
                  apartment.property &&
                  apartment.property.rented &&
                  handlePropertyOwner
                "
                class="row flexbox"
              >
                <p>Tontin omistaja</p>
                <p>{{ handlePropertyOwner }}</p>
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
              <div
                v-if="
                  apartment.property &&
                  apartment.property.rented &&
                  handlePropertyRent
                "
                class="row flexbox"
              >
                <p>Tonttivuokra</p>
                <p>{{ handlePropertyRent }}€/kk</p>
              </div>

              <div
                v-if="
                  apartment.property &&
                  apartment.property.rented &&
                  handleContractExpiration
                "
                class="row flexbox"
              >
                <p>Tontin vuokrasopimus erääntyy</p>
                <p>{{ handleContractExpiration }}</p>
              </div>

              <div v-if="apartment.allowedBuildArea" class="row flexbox">
                <p>Sallittu rakennusala tontilla</p>
                <p>{{ apartment.allowedBuildArea }}&#13217;</p>
              </div>
              <div v-if="apartment.zoning" class="row flexbox">
                <p>Kaavoitustiedot</p>
                <p>{{ apartment.zoning }}</p>
              </div>
            </div>
          </div>

          <div class="listing-data__title">
            <h2>Varustus</h2>
            <div v-if="apartment.equipment" class="listing-data__content">
              <div v-if="apartment.equipment.kitchen" class="row flexbox">
                <p>Keittiö</p>
                <p>
                  {{ apartment.equipment.kitchen }}
                </p>
              </div>
              <div v-if="apartment.equipment.bathroom" class="row flexbox">
                <p>Pesutilat</p>
                <p>
                  {{ apartment.equipment.bathroom }}
                </p>
              </div>
              <div v-if="apartment.equipment.storage" class="row flexbox">
                <p>Säilytystilat</p>
                <p>{{ apartment.equipment.storage }}</p>
              </div>
              <div v-if="apartment.equipment.other" class="row flexbox">
                <p>Muu varustus</p>
                <p>{{ apartment.equipment.other }}</p>
              </div>
            </div>
            <div class="row flexbox">
              <p>Toimitetaan kalustettuna</p>
              <p v-if="apartment.isFurnished">Kyllä</p>
              <p v-else>ei</p>
            </div>
          </div>

          <div
            v-if="
              apartment.buildMaterial ||
              apartment.roofType ||
              apartment.roofMaterial ||
              apartment.renovationDescription
            "
            class="listing-data__title"
          >
            <h2>Materiaalit ja kunto</h2>
            <div class="listing-data__content">
              <div v-if="apartment.buildMaterial" class="row flexbox">
                <p>Rakennusmateriaali</p>
                <p>{{ apartment.buildMaterial }}</p>
              </div>
              <div v-if="apartment.roofType" class="row flexbox">
                <p>Katto</p>
                <p>{{ apartment.roofType }}</p>
              </div>
              <div v-if="apartment.roofMaterial" class="row flexbox">
                <p>Kattomateriaali</p>
                <p>
                  {{ apartment.roofMaterial }}
                </p>
              </div>
              <div v-if="apartment.renovationDescription" class="row flexbox">
                <p>Remontit</p>
                <p>{{ apartment.renovationDescription }}</p>
              </div>
            </div>
          </div>

          <div
            v-if="
              apartment.equipment &&
              Object.values(apartment.equipment).some((val) => val)
            "
            class="listing-data__title"
          >
            <h2>Asunnon järjestelmät</h2>
            <div class="listing-data__content">
              <div v-if="apartment.equipment.water" class="row flexbox">
                <p>Vesi</p>
                <p>{{ apartment.equipment.water }}</p>
              </div>
              <div
                v-if="apartment.equipment.airConditioning"
                class="row flexbox"
              >
                <p>Ilmanvaihto</p>
                <p>{{ apartment.equipment.airConditioning }}</p>
              </div>
              <div v-if="apartment.equipment.heating" class="row flexbox">
                <p>Lämmitys</p>
                <p>{{ apartment.equipment.heating }}</p>
              </div>
              <div v-if="apartment.equipment.plumbing" class="row flexbox">
                <p>Jätevesi</p>
                <p>{{ apartment.equipment.plumbing }}</p>
              </div>
              <div v-if="apartment.equipment.garbage" class="row flexbox">
                <p>Jätehuolto</p>
                <p>{{ apartment.equipment.garbage }}</p>
              </div>
              <div v-if="apartment.equipment.common" class="row flexbox">
                <p>Yhteiset</p>
                <p>{{ apartment.equipment.common }}</p>
              </div>
              <div v-if="apartment.equipment.other" class="row flexbox">
                <p>Muuta</p>
                <p>{{ apartment.equipment.other }}</p>
              </div>
            </div>
          </div>

          <div
            v-if="
              (apartment.price && apartment.price.salePrice) ||
              apartment.monthlyRent
            "
            class="listing-data__title"
          >
            <h2>Hintatiedot</h2>
            <div v-if="!apartment.isForSale" class="listing-data__content">
              <div v-if="apartment.monthlyRent" class="row flexbox">
                <p>Vuokra</p>
                <p>{{ apartment.monthlyRent }}€/kk</p>
              </div>

              <div v-if="apartment.guarantee" class="row flexbox">
                <p>Vuokratakuu</p>
                <p>{{ apartment.guarantee }}</p>
              </div>
            </div>

            <div
              v-if="apartment.price && apartment.isForSale"
              class="listing-data__content"
            >
              <div v-if="apartment.price.debtFreePrice" class="row flexbox">
                <p>Velaton hinta</p>
                <p>{{ handleDebtFreePrice }} €</p>
              </div>
              <div v-if="apartment.price.salePrice" class="row flexbox">
                <p>Myyntihinta</p>
                <p>{{ handleSalePrice }} €</p>
              </div>
              <div
                v-if="
                  apartment.price.debtFreePrice && apartment.price.salePrice
                "
                class="row flexbox"
              >
                <p>Lainaosuus</p>
                <p>{{ calculateDebtFree }}€</p>
              </div>
              <div
                v-if="apartment.price.salePrice && apartment.totalArea"
                class="row flexbox"
              >
                <p>Neliöhinta</p>
                <p>{{ handlePerSquareFootPrice }} €</p>
                <!--<p>{{ calculatePricePerMeter }}€/&#13217;</p>-->
              </div>
              <div
                v-if="
                  apartment.maintenanceCosts &&
                  apartment.maintenanceCosts.upkeep
                "
                class="row flexbox"
              >
                <p>Hoitovastike</p>
                <p>{{ handleUpkeep }} €</p>
              </div>
              <div
                v-if="
                  apartment.maintenanceCosts &&
                  apartment.maintenanceCosts.financing
                "
                class="row flexbox"
              >
                <p>Rahoitusvastike</p>
                <p>{{ handleFinancing }} €</p>
              </div>
              <div
                v-if="
                  apartment.maintenanceCosts &&
                  apartment.maintenanceCosts.financing &&
                  apartment.maintenanceCosts.upkeep
                "
                class="row flexbox"
              >
                <p>Yhtiövastike</p>
                <p>
                  {{
                    calculateTotalCosts(
                      apartment.maintenanceCosts.upkeep,
                      apartment.maintenanceCosts.financing
                    )
                  }}€
                </p>
              </div>
            </div>
            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.water &&
                apartment.utilities.water.mustHave &&
                !apartment.isForSale
              "
              class="row flexbox"
            >
              <p>Vesi hankittava itse</p>
              <p>{{ apartment.utilities.water.mustHave ? "kyllä" : "ei" }}</p>
            </div>
            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.water &&
                apartment.utilities.water.monthlyPrice
              "
              class="row flexbox"
            >
              <p>Vesimaksu</p>
              <p>{{ apartment.utilities.water.monthlyPrice }}€/kk</p>
            </div>
            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.includesElectricity &&
                apartment.utilities.includesElectricity.mustHave &&
                !apartment.isForSale
              "
              class="row flexbox"
            >
              <p>Sähkö hankittava itse</p>
              <p>
                {{
                  apartment.utilities.includesElectricity.mustHave
                    ? "kyllä"
                    : "ei"
                }}
              </p>
            </div>
            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.includesElectricity &&
                apartment.utilities.includesElectricity.monthlyPrice
              "
              class="row flexbox"
            >
              <p>Arvioitu sähkönkulutus</p>
              <p>
                {{ apartment.utilities.includesElectricity.monthlyPrice }}€/kk
              </p>
            </div>
            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.insurancePlan &&
                apartment.utilities.insurancePlan.mustHave &&
                !apartment.isForSale
              "
              class="row flexbox"
            >
              <p>Kotivakuutus hankittava itse</p>
              <p>
                {{
                  apartment.utilities.insurancePlan.mustHave ? "kyllä" : "ei"
                }}
              </p>
            </div>
            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.insurancePlan &&
                apartment.utilities.insurancePlan.monthlyPrice &&
                !apartment.isForSale
              "
              class="row flexbox"
            >
              <p>Arvioitu kotivakuutus</p>
              <p>{{ apartment.utilities.insurancePlan.monthlyPrice }}€/kk</p>
            </div>

            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.dataConnection &&
                apartment.utilities.dataConnection.isIncluded !== null
              "
              class="row flexbox"
            >
              <p>Kauppaan sisältyy internet-yhteys</p>
              <p>
                {{
                  apartment.utilities.dataConnection.isIncluded ? "Kyllä" : "Ei"
                }}
              </p>
            </div>

            <div
              v-if="
                apartment.utilities &&
                apartment.utilities.dataConnection &&
                apartment.utilities.dataConnection.speed
              "
              class="row flexbox"
            >
              <p>Internet-yhteyden-nopeus</p>
              <p>{{ apartment.utilities.dataConnection.speed }} Mbit/s</p>
            </div>
          </div>

          <div
            v-if="
              apartment.smokingAllowed ||
              apartment.petsAllowed ||
              apartment.rentIncrease
            "
            class="listing-data__title"
          >
            <h2>Vuokralaisen ehdot</h2>

            <div v-if="apartment.smokingAllowed" class="row flexbox">
              <p>Tupakointi sallittu</p>
              <p>{{ apartment.smokingAllowed ? "Kyllä" : "Ei" }}</p>
            </div>

            <div v-if="apartment.petsAllowed" class="row flexbox">
              <p>Lemmikit sallittu</p>
              <p>{{ apartment.petsAllowed ? "Kyllä" : "Ei" }}</p>
            </div>

            <div v-if="apartment.rentIncrease" class="row flexbox">
              <p>Vuokraa korotetaan vuosittain</p>
              <p>{{ apartment.rentIncrease ? "Kyllä" : "Ei" }}</p>
            </div>

            <div v-if="apartment.rentIncreaseAmount" class="row flexbox">
              <p>Vuosittaiskorotuksen määrä</p>
              <p>{{ apartment.rentIncreaseAmount }}</p>
            </div>
          </div>

          <div v-if="apartment.parking" class="listing-data__title">
            <h2>Kohteen pysäköintimahdollisuudet</h2>

            <div
              v-if="apartment.parking && apartment.parking.type"
              class="row flexbox"
            >
              <p>Tyyppi</p>
              <p>{{ handleParkingTypes }}</p>
            </div>

            <div
              v-if="apartment.parking && apartment.parking.description"
              class="row flexbox"
            >
              <p>Kuvaus</p>
              <p>{{ apartment.parking.description }}</p>
            </div>

            <div
              v-if="
                apartment.parking && apartment.parking.supportsElectric !== null
              "
              class="row flexbox"
            >
              <p>Tuki sähköautolle</p>
              <p>{{ apartment.parking.supportsElectric ? "Kyllä" : "Ei" }}</p>
            </div>
          </div>

          <div
            v-if="
              (apartment.nearbyServices &&
                Object.values(apartment.nearbyServices).some((val) =>
                  Object.values(val).some((childVal) => childVal.title)
                )) ||
              apartment.serviceDescription
            "
            class="listing-data__title"
          >
            <h2>Lähialueen palvelut</h2>

            <div v-if="apartment.serviceDescription" class="row flexbox">
              <p>Kuvaus alueen palveluista</p>
              <p>
                {{ apartment.serviceDescription }}
              </p>
            </div>

            <div
              v-if="
                Object.values(apartment.nearbyServices.publicTransport).some(
                  (val) => val.title
                )
              "
              class="row flexbox"
            >
              <p>Julkinen liikenne</p>
              <p v-for="item of nearbyStops" :key="item._id">
                {{ item.title }}, {{ item.distance }}m
              </p>
            </div>

            <div
              v-if="
                Object.values(apartment.nearbyServices.groceries).some(
                  (val) => val.title
                )
              "
              class="row flexbox"
            >
              <p>Ruokakaupat</p>
              <p v-for="item of nearbyGroceries" :key="item._id">
                {{ item.title }}, {{ item.distance }}m <br />
              </p>
            </div>

            <div
              v-if="
                Object.values(apartment.nearbyServices.healthCare).some(
                  (val) => val.title
                )
              "
              class="row flexbox"
            >
              <p>Terveydenhoito</p>
              <p v-for="item of nearbyHealthcare" :key="item._id">
                {{ item.title }}, {{ item.distance }}m <br />
              </p>
            </div>

            <div
              v-if="
                Object.values(apartment.nearbyServices.dayCare).some(
                  (val) => val.title
                )
              "
              class="row flexbox"
            >
              <p>Päivähoito</p>
              <p v-for="item of nearbyDayCare" :key="item._id">
                {{ item.title }}, {{ item.distance }}m <br />
              </p>
            </div>

            <div
              v-if="
                Object.values(apartment.nearbyServices.education).some(
                  (val) => val.title
                )
              "
              class="row flexbox"
            >
              <p>Koulut ja opistot</p>
              <p v-for="item of nearbyEducation" :key="item._id">
                {{ item.title }}, {{ item.distance }}m <br />
              </p>
            </div>

            <div
              v-if="
                Object.values(apartment.nearbyServices.excercise).some(
                  (val) => val.title
                )
              "
              class="row flexbox"
            >
              <p>Liikuntapaikat</p>
              <p v-for="item of nearbyExcercise" :key="item._id">
                {{ item.title }}, {{ item.distance }}m <br />
              </p>
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
    Icon,
  },

  name: "ApartmentDetails",

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
    };
  },
  async created() {
    if (this.$route.params.id) {
      let aptId = this.$route.params.id;

      if (this.$route.params.apartment) {
        this.apartment = JSON.parse(this.$route.params.apartment);
      }
      if (this.$route.params.handledApartment) {
        this.handledApartment = JSON.parse(this.$route.params.handledApartment);
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
    handleAptFloorPlan() {
      return 1; //handleFloorPlan(this.apartment);
    },
    handleAptEquipment() {
      return this.apartment.equipment;
    },
    handleAptType() {
      return 1; //handleApartmentType(this.apartment);
    },
    handleKitchen() {
      return this.apartment.equipment.kitchen;
    },
    nearbyGroceries() {
      return this.apartment.nearbyServices.groceries;
    },
    nearbyStops() {
      return this.apartment.nearbyServices.publicTransport;
    },
    nearbyHealthcare() {
      return this.apartment.nearbyServices.healthCare;
    },
    nearbyDayCare() {
      return this.apartment.nearbyServices.dayCare;
    },
    nearbyEducation() {
      return this.apartment.nearbyServices.education;
    },
    nearbyExcercise() {
      return this.apartment.nearbyServices.excercise;
    },
    calculatePricePerMeter() {
      return this.apartment.price.salePrice / this.apartment.totalArea;
    },
    calculateDebtFree() {
      return (
        this.apartment.price.debtFreePrice - this.apartment.price.salePrice
      );
    },
    calculateTotalCosts(upkeep, financing) {
      return upkeep + financing;
    },
    handleIsForSale() {
      if (this.apartment.isForSale) {
        return "Omistusasunto";
      } else {
        return "Vuokra";
      }
    },
    createImageUrls(){
      console.log(this.apartment.images)
      let urls = []
      if (this.apartment.images) {
        this.apartment.images.forEach(img => {
          urls.push(`https://drive.google.com/uc?id=${img}&amp;export=download`)
        }) 
        console.log(urls)
        return urls
      }
      return null
    },
    handleParkingTypes() {
      let parkingString = "";
      if (this.apartment.parking && this.apartment.parking.type) {
        this.apartment.parking.type.forEach((type) => {
          switch (type) {
            case 1:
              parkingString += "ulkopaikka ";
              break;
            case 2:
              parkingString += "autokatos ";
              break;
            case 3:
              parkingString += "autotalli ";
              break;
            case 4:
              parkingString += "parkkihalli ";
              break;
          }
        });
        return parkingString;
      }
      return parkingString;
    },
    handleBalconyPatioGarageTubPool() {
      let balconyPatioString = "";
      if (this.apartment.balcony && this.apartment.balcony.exists) {
        balconyPatioString += `Parveke: ${this.apartment.balcony.description} `;
      }
      if (this.apartment.balcony && this.apartment.patio.exists) {
        balconyPatioString += `Terassi: ${this.apartment.patio.description} `;
      }
      if (this.apartment.hasHotTub) {
        balconyPatioString += "Poreamme ";
      }
      if (this.apartment.hasPool) {
        balconyPatioString += "Uima-allas ";
      }
      if (this.apartment.hasGarage) {
        balconyPatioString += "Autotalli ";
      }
      return balconyPatioString;
    },
    handleCondition() {
      let conditionString;
      if (this.apartment.condition) {
        switch (this.apartment.condition) {
          case 1:
            conditionString = "Huono";
            break;
          case 2:
            conditionString = "Tyydyttävä";
            break;
          case 3:
            conditionString = "Hyvä";
            break;
        }
      }
      return conditionString;
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
    handlePropertyRented() {
      console.log(this.handleUndefined("rented"));
      return this.handleUndefined("rented");
    },
    handlePropertyOwner() {
      return this.handleUndefined("propertyOwner");
    },
    handlePropertyRent() {
      return this.handleUndefined("propertyRent");
    },
    handleContractExpiration() {
      return this.handleUndefined("contractExpiresAt");
    },
  },
  methods: {
    like() {
      this.liked = !this.liked;
    },
    //create listing availability information. Returns "heti" if date param is already in the past.
    makeDateString(date) {
      let dateString;
      var d = new Date(date);
      if (d >= new Date()) {
        dateString =
          d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
        return dateString;
      }
      dateString = "heti";
      return dateString;
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
        case "rented":
          type = this.apartment?.property?.rented;
          if (type !== undefined) {
            t = type;
          }
          break;
        case "propertyOwner":
          type = this.apartment?.property?.owner;
          if (type !== undefined) {
            t = type;
          }
          break;
        case "propertyRent":
          type = this.apartment?.property?.propertyRent;
          if (type !== undefined) {
            t = type;
          }
          break;
        case "contractExpiresAt":
          type = this.apartment?.property?.contractExpiresAt;
          if (type !== undefined) {
            t = this.makeDateString(type);
          }
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