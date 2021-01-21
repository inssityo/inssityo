<template>
  <div>
    <div class="slider-text">
      <p v-if="idValue === 'P'">Oletko</p> 
      <p v-if="idValue === 'R'">Haluatko kämppiksen olevan</p>
      <p>1 = yksineläjä vai 7 = laumaeläin</p>
      
    </div>
    <div class="slider-container">
      <div class="sociality">
        <p>Sosiaalisuus</p>
        <p> {{ sociality }} </p>
      </div>
      <div class="slider-div-wrapper">
        <div class="slider-wrapper">
          <div class="underlay">
            <div class="divider"></div>
            <div class="breakpoint"></div>
            <div class="divider"></div>
            <div class="breakpoint"></div>
            <div class="divider"></div>
            <div class="breakpoint"></div>
            <div class="divider"></div>
            <div class="breakpoint"></div>
            <div class="divider"></div>
          </div>
          <div class="underlay2">
            <div class="breakpoint2"></div>
            <div class="divider"></div>
            <div class="breakpoint2"></div>
            <div class="divider"></div>
          </div>
        </div>
        <input type="range" name="range" :id="idValue+'range'" min="1" max="7" step="1" v-model="sociality" v-on:click="emitToParent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sociality',
  props: ['idValue'],

  data() {
    return {
      sociality: 1,
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.sociality)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.slider-text {
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
}
.slider-text p {
  margin-bottom: 0.2rem;
}
.slider-container {
  display: flex;
  align-items: center;
}
.slider-div-wrapper {
  width: 100%;
  margin: 0 1rem;
}
.sociality {
  display: flex;
  align-items: center;
  width: 70%;
}
.sociality p:last-child {
  font-size: 1.5rem !important;
  color: v.$KAMGreenDark;
  font-weight: bold;
  margin: 0;
  width: 2rem;
  text-align: center;
  border-radius: 50%;
  padding-bottom: 0.3rem;
}
.slider-values {
  display: flex;
  justify-content: space-between;
}
.slider-wrapper {
  position: relative;
  width: 100%;
}
.slider {
  width: 100%;
  margin: 0;
  padding: 0;
}
.underlay {
  position: absolute;
  height: 1rem;
  width: 62%;
  top: 0;
  left: 4%;
  display: flex;
  z-index: 0;
}
.underlay2 {
  position: absolute;
  height: 1rem;
  width: 30.5%;
  top: 0;
  left: 65%;
  display: flex;
  z-index: 0;
}
.divider {
  width: 0.1%;
  background: v.$KAMGreyDark;
  border: 0.12rem solid v.$KAMGreyDark;
  border-radius: 0.3rem;
}
.breakpoint, .breakpoint2 {
  width: 100%;
}
input[type='range'] {
  -webkit-appearance: none;
  overflow: hidden;
  width: -webkit-fill-available;
  background-color: v.$KAMBeigeLight;
}
input[type='range']::-webkit-slider-runnable-track {
  height: 1.1rem;
  -webkit-appearance: none;
  color: v.$KAMGreenDark;
  margin-top: -0.3rem;
  display: flex;
  align-items: center;
}
input[type='range']::-webkit-slider-thumb {
  width: 9%;
  -webkit-appearance: none;
  height: 1.5rem;
  background: v.$White;
  border-radius: 50%;
  box-shadow: -100.7rem 0 0 100rem v.$KAMGreenDark;
  z-index: 1;
}
input[type=range]:focus{
  outline: none;
}

</style>
