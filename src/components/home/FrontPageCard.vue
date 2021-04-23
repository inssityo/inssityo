<template>
  <div v-if="cardType === 'single'" class="card single pointer">
    <img src="../../assets/images/Thumbnail7.jpg" class="box" alt="">
    <div class="card-info">
      <div class="card-info-container">
        <div class="card-info--location">
          <h3>{{ neighborhood }}, {{ city }}</h3>
          <h4>{{ address }}</h4>
          <h4>{{ handlePrice }}€/kk</h4>
        </div>

        <div class="card-info--specs flexbox">
          <div class="flexbox">
            <i class="fas fa-ruler-combined"></i>
            <p>{{ area }}m<span>&sup2;</span></p>
          </div>

          <div class="flexbox"  v-if="floorPlan.length < 8">
            <i class="far fa-building"></i>
            <p>{{ floorPlan }}</p>
          </div>
          <div class="flexbox"  v-else>
            <i class="far fa-building"></i>
            <p>{{ floorPlan.substring(0,8)+'..' }}</p>
          </div>

          <div class="flexbox">
            <i class="far fa-building"></i>
            <p class="margin__nothing">{{ floor }}</p>
          </div>

          <div class="flexbox">
            <i class="far fa-calendar-alt"></i>
            <p class="margin__nothing">{{ available }}</p>
          </div>
        </div>
      </div>
      <button>Lue lisää</button>
    </div>
  </div>

  <div v-else class="card multiple pointer">
    <img src="../../assets/images/Thumbnail7.jpg" class="box" alt="">
    <div class="card-info">
      <div class="card-info--location">
        <h3>{{ neighborhood }}, {{ city }}</h3>
        <h4>{{ address }}</h4>
        <h4>{{ handlePrice }} €/kk</h4>
      </div>

      <div class="card-info--specs flexbox">
        <div class="flexbox">
          <i class="fas fa-ruler-combined"></i>
          <p>{{ area }}m<span>²</span></p>
        </div>

        <div class="flexbox"  v-if="floorPlan.length < 8">
          <i class="far fa-building"></i>
          <p>{{ floorPlan }}</p>
        </div>
        <div class="flexbox"  v-else>
          <i class="far fa-building"></i>
          <p>{{ floorPlan.substring(0,8)+'..' }}</p>
        </div>

        <div class="flexbox">
          <i class="far fa-building"></i>
          <p class="margin__nothing">{{ floor }}</p>
        </div>

        <div class="flexbox">
          <i class="far fa-calendar-alt"></i>
          <p class="margin__nothing">{{ available }}</p>
        </div>
      </div>
      <button>Lue lisää</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['cardType'],

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

h4 {
  padding: 0.2rem 0.5rem 0 0.5rem;
  text-transform: unset;
}
h4:first-of-type {
  margin: 0 0 0.8rem 0;
  
}
h4:last-of-type {
  margin: 0;
  color: v.$KAMGreyDark;
  font-family: v.$KAMLouis;
}
span {
  font-family: v.$KAMQuinn;
}
.single {
  .card-info {
    background: transparent;
    height: auto;
    position: absolute;
    width: 30%;
    min-height: fit-content;
    left: 5.5%;
    box-shadow: 0px 5px 40px -25px black;
  }
  .card-info:first-of-type {
    top: auto;
    bottom: 8% !important;
  }
  .card-info-container {
    background: v.$KAMWhiteTRN7;
  }
  img {
    height: 40vw;
  }
  button {
    margin: 1rem 0;
  }
}
.card-info {
    position: relative;
  }
.card {
  height: auto;
  width: auto;
  margin: 0;//1rem;

  
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
.card:hover {
  img {
    filter: brightness(100%);
  }
}

.card-info--location {
  border-bottom: 1px solid v.$KAMGreenDark;
  padding: 0.5rem;
  //background: v.$KAMGreySemiLight;
}

.card-info--specs {
  padding: 0.8rem 0.5rem;
  //background: v.$KAMGreenDark;
  //color: v.$White;
  
  .flexbox {
    flex-direction: column;

    svg {
      margin-bottom: 0.3rem;
    }
  }
}
button {
  margin: 0;
  border-radius: 0;
  //width: 100% !important;
}


</style>