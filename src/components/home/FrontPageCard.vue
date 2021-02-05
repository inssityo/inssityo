<template>
  <div class="card--front-page">
    <img src="../../assets/images/Thumbnail4_Large.jpg" alt="Image 1">

    <div class="card-body flexbox box margin__nothing">
      <section>
        <h3 class="margin__nothing">Aleksanterinkatu 8</h3>
        <p class="card-body--location margin__bottomless">Keskusta, Oulu</p>
        <div class="card-body--details flexbox">
          <p class="margin__bottomless" v-if="floorPlan.length < 8">
            <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, {{ floorPlan }}
          </p>
          <p class="margin__bottomless" v-else>
            <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, {{ floorPlan.substring(0,8)+'..' }} <!--Katso, että katkaisee ennen + merkkiä-->
          </p>
          <p class="margin__bottomless">
            <i class="far fa-building"></i>5/8
          </p>
          <p class="margin__bottomless">
            <i class="far fa-calendar-alt"></i>02/02/22
          </p>
          <p class="margin__bottomless">
            <i class="fas fa-coins"></i>2 000 645 €/kk
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
      floorPlan: '2h+k+s+2h+k+s+2h+k+s'
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
    border-top: 0.15rem solid #016361;
    background: #fff;
    background: rgba(255, 255, 255, 0.85);
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



</style>