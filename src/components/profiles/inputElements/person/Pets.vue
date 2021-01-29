<template>
  <div>  
    <div class="flexbox">
      <div class="flexbox">
        <p v-if="idValue === 'P'">Omistatko lemmikkejä?</p>
        <p v-if="idValue === 'R'">Saako kämppis omistaa lemmikkejä?</p>
        <p v-bind:style="{ fontWeight: 'bold' }">{{ checkedPets ? "-kyllä" : "-ei" }}</p>
      </div>
      <label class="switch" @click="handleCheckedPets" v-on:click="emitToParent">
        <input type="checkbox" :id="idValue+'checkbox-pet'" checked v-model="checkedPets">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="check__label-only" v-if="checkedPets">
      <div v-for="(pet, index,) in optionsPets" :key="index">
        <input type="checkbox" :id="idValue+'p'+index" v-model="pet.checked"/>
        <label class="hover--check__label-only" :for="idValue+'p'+index" v-on:click="emitToParent" @click="handlePets(pet.value)">{{ pet.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pets',
  props: ['idValue'],

  data() {
    return {
      checkedPets: true,
      optionsPets: [
        { text: 'Koiria', value: 'dogs', checked: false },
        { text: 'Kissoja', value: 'cats', checked: false },
        { text: 'Jyrsijöitä', value: 'rodents', checked: false },
        { text: 'Lintuja', value: 'birds', checked: false },
        { text: 'Kaloja', value: 'fishes', checked: false },
        { text: 'Terraarioeläimiä', value: 'terrarium', checked: false },
        { text: 'Muita eläimiä', value: 'other', checked: false }
      ],
      pets: [
        { 
          dogs: false,
          cats: false,
          rodents: false,
          birds: false,
          fishes: false,
          terrarium: false,
          other: false,
        }
      ]
    }
  },
  methods: {
    emitToParent () {
      console.log(JSON.stringify(this.pets))
      this.$emit('childToParent', {'checked': !this.checkedPets, 'petList': this.optionsPets});
    },
    handleCheckedPets() {
      if(!this.checkedPets) {
        this.optionsPets.forEach(pet => {
          pet.checked = false;
        });
      }
    },
    handlePets(value) { //Ei toimi
      switch(value) {
        case 'dogs':
          this.pets[0].dogs = true;
          break;
        case 'cats':
          this.pets[0].cats = true;
          break;
        case 'rodents':
          this.pets[0].rodents = true;
          break;
      }
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
