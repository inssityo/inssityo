<template>
  <div class="card--front-page pointer">
    <img src="../../assets/images/Thumbnail4_Large.jpg" alt="Image 1">

    <div class="card-body flexbox box margin__nothing">
      <section>
        <h3 class="margin__nothing">{{ address }}</h3>
        <p class="card-body--location margin__bottomless">{{ neighborhood }}, {{ city }}</p>
        <div class="card-body--details flexbox">
          <p class="margin__bottomless" v-if="floorPlan.length < 8">
            <i class="fas fa-ruler-combined"></i>{{ area }}m<span>&sup2;</span>, {{ floorPlan }}
          </p>
          <p class="margin__bottomless" v-else>
            <i class="fas fa-ruler-combined"></i>{{ area }}m<span>&sup2;</span>, {{ floorPlan.substring(0,8)+'..' }} <!--Katso, että katkaisee ennen + merkkiä-->
          </p>
          <p class="margin__bottomless">
            <i class="far fa-building"></i>{{ floor }}
          </p>
          <p class="margin__bottomless">
            <i class="far fa-calendar-alt"></i>{{ available }}
          </p>
          <p class="margin__bottomless">
            <i class="fas fa-coins"></i>{{ handlePrice }}€/kk
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  data() {
    return {
      city: 'Oulu',
      neighborhood: 'Keskusta',
      address: 'Aleksanterinkatu 22 G 222',
      area: 42,
      floorPlan: '2h+k+s+2h+k+s+2h+k+s',
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

.card--front-page {
  position: relative;
  height: 100%;

  .card-body {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.9rem 0.6rem 0.7rem 0.6rem;
    border-top: 0.15rem solid v.$KAMGreenDark;
    background: v.$White;
    background: v.$KAMWhiteTRN8;
    line-height: 0.3;
    width: 100%;
    
    div {
      width: 100%;
    }
    .card-body--location {
      color: v.$KAMGreyDark;
    }
    .card-body--details {
      padding-top: 0.1rem;
      
      span {
        font-family: v.$KAMQuinn;
      }
      svg {
        margin-right: 0.3rem;
        font-size: 0.9rem;
        color: v.$KAMGreenDark;
      }
    }
  }
}
.card--front-page:hover {
  img {
    filter:brightness(70%);
  }
}


</style>