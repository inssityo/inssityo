<template>
  <router-link :to="{name: 'apartment-rent-bio', params: { id: id, apartment: apartmentUrl, handledApartment: handledApartmentUrl }}" v-if="handleUrl" class="card pointer">
    {{ computedHandleApartmentUrl }}
    <div class="card-info">
      <div class="transparency">
        <h3>{{ apartment.location.neighborhood }}, {{ apartment.location.city }}</h3>
        <p>{{ computedApartmentType }} {{apartment.buildYear }}</p>
      </div>
    </div>
    <div class="card-info">
      <div class="transparency flexbox">
        <p class="align-center"><i class="fas fa-ruler-combined"></i>{{ apartment.cellArea }}m<span>&sup2;</span></p>
        <p class="align-center"><i class="far fa-building"></i>{{ apartment.floor }}</p>
        <p class="align-center"><i class="far fa-calendar-alt"></i> {{ handleDates }} </p>
        <p class="align-center"><i class="fas fa-coins"></i>{{ apartment.monthlyRent }}€</p>
      </div>
    </div>
    <img src="../../../assets/images/pexels-catherine-augustin-3049121.jpg" class="box" alt="">
  </router-link>

  <router-link :to="{name: 'apartment-buy-bio', params:{ id: id, apartment: apartmentUrl, handledApartment: handledApartmentUrl }}" v-else class="card pointer">
    {{ computedHandleApartmentUrl }}
    <div class="card-info">
      <div class="transparency">
        <h3>{{ apartment.location.neighborhood }}, {{ apartment.location.city }}</h3>
        <p>{{ computedApartmentType }} {{apartment.buildYear }}</p>
      </div>
    </div>
    <div class="card-info">
      <div class="transparency flexbox">
        <div>
          <p><i class="fas fa-coins"></i>{{ handlePrice }}€</p>
          <p><i class="fas fa-expand"></i>2h + k + s + vh</p>
        </div>
        <div>
          <p><i class="fas fa-ruler-combined"></i>{{ apartment.livingArea }}m<span>&sup2;</span></p>
          <p><i class="fas fa-layer-group"></i>{{ apartment.floor }}</p>
        </div>
        
      </div>
    </div>
    <img src="../../../assets/images/pexels-catherine-augustin-3049121.jpg" class="box" alt="">
  </router-link>
</template>

<script>
export default {
  name: 'ApartmentCard',
  props: ['cardId', 'apartmentData'],
  
  data() {
    return {
      apartment: this.apartmentData,
      id: this.apartmentData._id,
      apartmentUrl: JSON.stringify(this.apartmentData),

      handledApartment: {
        apartmentType: "",
        h: "moi",
      },
      handledApartmentUrl: {}, //Katoaa päivitettäessä bioa
    }
  },
  mounted() {
    //lisää kuvien prosessointi tähän.
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
    handlePrice() {
      let price;
      if (this.cardId === 'S') {
        price = this.handleUndefinedSellingPrice();
        if (price) {
          price = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
        }
      }
      else if (this.cardId === 'R') {
        price = this.apartment.monthlyRent.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
      }
      return price;
    },
    
    computedApartmentType() {
      return this.handleApartmentType();
    },
    
    computedHandleApartmentUrl() {
      return this.handleApartmentUrl();
    },

    handleDates: function() {
      const dbDate  = this.apartment.availableFrom
      var d = new Date(dbDate)
      const dateString = d.getDate() + "." + (d.getMonth()+1) + "." + d.getFullYear();
      return dateString
    },

  },
  methods: {
    handleUndefinedSellingPrice() {
      let t = "no selling price given ";
      if (this.apartment?.price?.salePrice !== undefined) { 
        t = this.apartment?.price?.salePrice
      }
      return t;
    },
    handleApartmentType() {
      let type = "";
      switch(this.apartment.apartmentType) {
        case 1:
          type = "Kerrostalo";
          break;
        case 2:
          type = "Rivitalo";
          break;
        case 3:
          type = "Paritalo";
          break;
        case 4:
          type = "Omakotitalo";
          break;
        case 5:
          type = "Ketjutalo";
          break;
        case 6:
          type = "Luhtitalo";
          break;
        case 7:
          type = "Puutalo-osake";
          break;
        case 8:
          type = "Muu";
          break;
      }
      this.handledApartment.apartmentType = type;
      return type;
    },
    handleApartmentUrl() {
      this.handledApartmentUrl = JSON.stringify(this.handledApartment);
      return "";
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

.card {
  height: 21rem;
  
  .card-info:first-of-type p {
    margin: 0;
    padding: 0.5rem 0.5rem 0 0.5rem;
  }
  .card-info:first-of-type h3 {
    margin: 0;
    padding: 0.2rem 0.5rem 0 0.5rem;
  }
  .card-info:first-of-type p:last-of-type {
    padding: 0.2rem 0.5rem 0.5rem 0.5rem;
  }
  .card-info:last-of-type div div p:last-of-type {
    padding-top: 0;
    text-align: right;
  }
}
.align-center {
  text-align: center;
}
</style>