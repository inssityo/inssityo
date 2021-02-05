<template>
  <div class="card pointer">
    <div class="card-info">
      <div class="transparency">
        <p>{{ address }}</p>
        <p>{{ neighborhood }}, {{ city }}</p>
      </div>
    </div>
    <div class="card-info">
      <div class="transparency flexbox">
        <p><i class="fas fa-ruler-combined"></i>{{ area }}m<span>&sup2;</span></p>
        <p><i class="far fa-building"></i>5/8</p>
        <p v-show="cardId === 'R'"><i class="far fa-calendar-alt"></i>{{ available }}</p>
        <p v-show="cardId === 'R'"><i class="fas fa-coins"></i>{{ rent }}€</p>
        <p v-show="cardId === 'S'"><i class="fas fa-coins"></i>{{ handlePrice }}€</p>
      </div>
    </div>
    <img src="../../assets/images/pexels-catherine-augustin-3049121.jpg" class="box" alt="">
  </div>
</template>

<script>
export default {
  name: 'ApartmentCard',
  props: ['cardId'],
  
  data() {
    return {
      city: 'Oulu',
      neighborhood: 'Keskusta',
      address: 'Aleksanterinkatu 22 G 222',
      area: 42,
      floor: '5/8',
      available: '07/07/22',
      rent: 2000,
      price: 98706030,
    }
  },
  computed: {
    handlePrice: function () {
      return this.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.card {
  height: 21rem;
}
.card:hover {
  margin-top: 1rem;
  img {
    filter:brightness(70%);
  }
}
.card .card-info {
  height: auto;
  z-index: 1;
}
.card .card-info:first-of-type p {
  margin: 0;
  padding: 0.5rem 0.5rem 0 0.5rem;
}
.card .card-info:first-of-type p:first-of-type {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-size: 1.1rem !important;
  color: v.$KAMGreenDark;
}
.card .card-info:first-of-type p:last-of-type {
  padding: 0.2rem 0.5rem 0.5rem 0.5rem;
}
.card .card-info:last-of-type p {
  text-align: center;
}
span {
  font-family: v.$KAMQuinn;
}

</style>