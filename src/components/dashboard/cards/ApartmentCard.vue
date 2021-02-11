<template>
  <router-link :to="{name: 'apartment-rent-bio', params: { id: id, apartments: apartments }}" v-if="handleUrl" class="card pointer">
    <div class="card-info">
      <div class="transparency">
        <h3>{{ apartments.location.neighborhood }}, {{ apartments.location.city }}</h3>
        <p>{{ apartments.apartmentType }} {{apartments.buildYear }}</p>
      </div>
    </div>
    <div class="card-info">
      <div class="transparency flexbox">
        <p class="align-center"><i class="fas fa-ruler-combined"></i>{{ apartments.cellArea }}m<span>&sup2;</span></p>
        <p class="align-center"><i class="far fa-building"></i>{{ apartments.floor }}</p>
        <p class="align-center"><i class="far fa-calendar-alt"></i>{{ apartments.availableFrom }}</p>
        <p class="align-center"><i class="fas fa-coins"></i>{{ apartments.monthlyRent }}€</p>
      </div>
    </div>
    <img src="../../../assets/images/pexels-catherine-augustin-3049121.jpg" class="box" alt="">
  </router-link>

  <router-link :to="{name: 'apartment-for-sale-bio', params:{id: id, apartment: apartments }}" v-else class="card pointer">
    <div class="card-info">
      <div class="transparency">
        <h3>{{ apartments.location.neighborhood }}, {{ apartments.location.city }}</h3>
        <p>{{ apartments.apartmentType }} {{apartments.buildYear }}</p>
      </div>
    </div>
    <div class="card-info">
      <div class="transparency flexbox">
        <div>
          <p><i class="fas fa-coins"></i>{{ handlePrice }}€</p>
          <p><i class="fas fa-expand"></i>2h + k + s + vh</p>
        </div>
        <div>
          <p><i class="fas fa-ruler-combined"></i>{{ apartments.livingArea }}m<span>&sup2;</span></p>
          <p><i class="fas fa-layer-group"></i>{{ apartments.propertyFloors }}</p>
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
      apartments: this.apartmentData,
      id: this.apartmentData._id
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
    handlePrice: function() {
      let price;
      if (this.cardId === 'S') {
        price = this.apartments.price.salePrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
      }
      else if (this.cardId === 'R') {
        price = this.apartments.monthlyRent.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
      }
      return price;
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