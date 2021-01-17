<template>
  <div>
    <p v-bind:style="{ marginBottom: '0.2rem' }">Harrastukset - 1 = en harrasta, 7 = intohimo</p>
    <div class="slider-container" v-for="(hobby, index,) in optionsHobbies" :key="index">
      <div class="hobby">
        <p>{{ hobby.text }}</p>
        <p> {{ hobby.range }} </p>
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
        <input type="range" name="range" min="1" max="7" step="1" :id="'h'+index" v-model="hobby.range" v-on:click="emitToParent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hobbies',

  data() {
    return {
      optionsHobbies: [
        { text: 'Lukeminen', value: 'reading', range: 1 },
        { text: 'Musiikki', value: 'music', range: 1 },
        { text: 'Kädentaidot', value: 'handicrafts', range: 1 },
        { text: 'Urheilu', value: 'sport', range: 1 },
        { text: 'Kulttuuri', value: 'culture', range: 1 },
        { text: 'Taide', value: 'art', range: 1 },
        { text: 'Keräily', value: 'collecting', range: 1 },
        { text: 'Ruuanlaitto', value: 'cooking', range: 1 },
        { text: 'Pelaaminen', value: 'playing', range: 1 },
        { text: 'Vapaaehtoistyö', value: 'volunteering', range: 1 },
        { text: 'Matkustelu', value: 'traveling', range: 1 },
        { text: 'Tietotekniikka', value: 'it', range: 1 },
      ],
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.optionsHobbies)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

.slider-container {
  display: flex;
  align-items: center;
}
.slider-div-wrapper {
  width: 100%;
  margin: 0 1rem;
}
.hobby {
  display: flex;
  align-items: center;
  width: 70%;
}
.hobby p:last-child {
  font-size: 2rem !important;
  color: v.$KAMGreenDark;
  font-weight: bold;
  margin: 0;
  //background: v.$White;
  width: 2rem;
  text-align: center;
  border-radius: 50%;
  padding-bottom: 0.3rem;
}
.slider-values {
  display: flex;
  justify-content: space-between;
}
.slider-values p {
  margin-top: 0;
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
  background-color: v.$KAMGreyLight;
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
  background: v.$KAMBlue;
  border-radius: 50%;
  box-shadow: -100.6rem 0 0 100rem v.$KAMGreenDark;
  z-index: 1;
}
input[type=range]:focus{
  outline: none;
}

</style>
