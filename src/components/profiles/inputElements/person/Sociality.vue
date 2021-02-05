<template>
  <div>
    <div class="flexbox">
      <p v-if="idValue === 'P'">Oletko</p> 
      <p v-if="idValue === 'R'">Kämppis</p>
      <p>1 = yksineläjä vai 7 = laumaeläin</p>
    </div>
    <div class="flexbox">
      <div class="flexbox">
        <p>Sosiaalisuus</p>
        <p> {{ sociality }} </p>
      </div>
      <div class="slider">
        <div class="step-container">
          <div class="step">
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
          <div class="step2">
            <div class="breakpoint"></div>
            <div class="divider"></div>
            <div class="breakpoint"></div>
            <div class="divider"></div>
          </div>
        </div>
        <input class="box" type="range" name="range" :id="idValue+'range'" min="1" max="7" step="1" v-model="sociality" @change="emitToParent" />
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
    emitToParent() {
      this.$emit('childToParent', this.sociality)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.flexbox:first-of-type p {
  margin-right: 1rem;
}
.flexbox:last-of-type .flexbox {
  justify-content: start;
  width: 70%;

  p:first-child {
    margin-right: 0;
  }
  p:last-child {
    font-size: 1.5rem !important;
    color: v.$KAMGreenDark;
    font-weight: bold;
    margin: 0;
    width: 2rem;
    text-align: center;
    border-radius: 50%;
    padding-bottom: 0.4rem;
  }
}
.slider {
  width: 100%;
  margin: 0 1rem;
}
.step-container {
  position: relative;
  width: 100%;
}
.step, .step2 {
  position: absolute;
  height: 1rem;
  top: 0;
  display: flex;
  z-index: 0;
}
.step {
  width: 62.5%;
  left: 4.5%;
}
.step2 {
  width: 30.5%;
  left: 67%;
}
.divider {
  width: 0.1%;
  background: v.$KAMGreyDark;
  border: 0.12rem solid v.$KAMGreyDark;
  border-radius: 0.3rem;
}
.breakpoint {
  width: 100%;
}
input[type='range'] {
  -webkit-appearance: none;
  overflow: hidden;
  background-color: v.$KAMBeige;
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

</style>
