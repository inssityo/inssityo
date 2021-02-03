<template>
  <div>  
    <div class="flexbox">
      <div class="flexbox">
        <p v-if="idValue === 'P'">Omistatko lemmikkejä?</p>
        <p v-if="idValue === 'R'">Sallitko lemmikit?</p>
        <p v-bind:class="{'switch-yes': checkedPets}" class="switch-no">{{ checkedPets ? "kyllä" : "ei" }}</p>
      </div>
      <label class="switch" @click="handleCheckedPets" v-on:click="emitToParent">
        <input type="checkbox" :id="idValue+'checkbox-pet'" checked @click="updateChecked">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="check__label-only" v-if="checkedPets">
      <div v-for="(pet, index,) in optionPets" :key="index">
        <input type="checkbox" :id="idValue+'p'+index" />
        <label class="hover--check__label-only" :for="idValue+'p'+index" @click="handlePets(pet.value)">{{ pet.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>

const DOGS ='dogs';
const CATS = 'cats';
const RODENTS = 'rodents';
const BIRDS = 'birds';
const FISHES = 'fishes';
const TERRARIUM = 'terrarium';
const OTHER = 'other';

export default {
  name: 'Pets',
  props: ['idValue'],

  data() {
    return {
      checkedPets: true,
      optionPets: [
        { text: 'Koiria', value: DOGS },
        { text: 'Kissoja', value: CATS },
        { text: 'Jyrsijöitä', value: RODENTS },
        { text: 'Lintuja', value: BIRDS },
        { text: 'Kaloja', value: FISHES },
        { text: 'Terraarioeläimiä', value: TERRARIUM },
        { text: 'Muita eläimiä', value: OTHER }
      ],
      pets: { 
        dogs: false,
        cats: false,
        rodents: false,
        birds: false,
        fishes: false,
        terrarium: false,
        other: false,
      },
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', {'checked': this.checkedPets, 'petList': [this.pets]});
    },
    //if no animals allowed, set all animals false
    handleCheckedPets() {
      if(!this.checkedPets) {
        for (var key in this.pets ) {
          this.pets[key] = false;
        }
      }
    },
    handlePets(value) {
      switch(value) {
        case DOGS:
          this.pets.dogs = !this.pets.dogs;
          break;
        case CATS:
          this.pets.cats = !this.pets.cats;
          break;
        case RODENTS:
          this.pets.rodents = !this.pets.rodents;
          break;
        case BIRDS:
          this.pets.birds = !this.pets.birds;
          break;
        case FISHES:
          this.pets.fishes = !this.pets.fishes;
          break;
        case TERRARIUM:
          this.pets.terrarium = !this.pets.terrarium;
          break;
        case OTHER:
          this.pets.other = !this.pets.other;
          break;
      }
      this.emitToParent();
    },
    updateChecked: function () {
      this.checkedPets = !this.checkedPets;
      this.$nextTick(function () {});
      this.emitToParent();
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.flexbox div p {
  margin: 0 0.5rem 0 0;
}
.check__label-only div {
  margin: 0.15rem 0.1rem;
}

</style>
