<template>
  
  <div class="card pointer">

    <div class="card-slider">
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" />
        </div>
      </transition-group>
      <!--
      <span class="prev" @click="prev">&#10094; Previous</span>
      <span class="next" @click="next">Next &#10095;</span>-->
    </div>
    
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
</template>

<script>
export default {
  props: ['images'],

  data() {
    return {
      imagesData: [],
      timer: null,
      currentIndex: 0,

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
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    handlePrice: function () {
      return this.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
    }
  }


}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.card-slider {
  position: relative;
  height: 35rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
img {
  height: 35rem;
  width: 100%
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 1rem;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}


h3 {
  padding-left: 0.5rem;
}
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


.card {
  height: auto;
  width: auto;
  margin: 0;
  position: relative;

  .card-info {
    background: transparent;
    height: auto;
    position: absolute;
    width: 30%;
    min-height: fit-content;
    left: 5%;
    bottom: 6%;
  }
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
  .card-info-container {
    background: v.$KAMWhiteTRN7;
    box-shadow: 0px 5px 40px -25px black;
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
}

.card-info--specs {
  padding: 0.8rem 0.5rem;
  
  .flexbox {
    flex-direction: column;

    svg {
      margin-bottom: 0.3rem;
    }
  }
}
button {
  margin: 1rem 0;
  border-radius: 0;
}


</style>