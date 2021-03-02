<template>
  <div>
    <label for="smoking" class="checkmark-label">Asunnossa ei saa tupakoida
      <input type="checkbox" id="smoking" v-model="smokingAllowed" v-on:click="handleSmokeClick">
      <span class="checkmark"></span>
    </label>
    <label for="pets" class="checkmark-label">Asunnossa ei saa pitää lemmikkejä
      <input type="checkbox" id="pets" v-model="petsAllowed" v-on:click="handlePetsClick"> <!--lisää idValue -->
      <span class="checkmark"></span>
    </label>
    <label for="insurance" class="checkmark-label">Kotivakuutus vaaditaan
      <input type="checkbox" id="insurance" v-model="terms[2].insurance" v-on:click="handleInsuranceClick"> <!--lisää idValue -->
      <span class="checkmark"></span>
    </label>
    <label for="rent-increase" class="checkmark-label">Vuokraa korotetaan vuosittain
      <input type="checkbox" id="rent-increase" v-model="checkedRentIncrease" v-on:click="emitToParent">
      <span class="checkmark"></span>
    </label>
    <label v-show="checkedRentIncrease" for="amount">Määrä
      <input type="text" id="amount" v-model="amount" v-on:input="emitToParent">
    </label>

    <label for="guarantee">Vuokravakuus
            <textarea class="box" placeholder="Kahden kuukauden vuokrahinta ennen asuntoon muuttamista." v-model="termsDescription"></textarea>
    </label>
  
    <label for="terms">Muita ehtoja
      <textarea id="terms-description" class="box" placeholder="Mikäli vuokrasuhde päättyy ennen kuin vuosi sen alkamisesta on kulunut, peritään vuokralaiselta sopimussakko 1,24 x 1 kk vuokraa vastaava määrä." v-model="guarantee"></textarea>
    </label>
  </div>
</template>

<script>
export default {
  name: 'OtherExpenses',

  data() {
    return {
      smokingAllowed: false,//true: Tupakointi kielletty
      petsAllowed: false , //false: Lemmikit sallittuja
      insuranceRequired: false,
      checkedRentIncrease:"",
      guarantee:'',
      amount: '',
      termsDescription: '', //HUOM!
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', {smokingAllowed:this.smokingAllowed, petsAllowed:this.petsAllowed, insuranceRequired:this.insuranceRequired, rentIncrease:this.checkedRentIncrease, 'amount': this.amount, guarantee:this.guarantee, termsDescription:this.termsDescription})
    },
    handleSmokeClick () {
      this.smokingAllowed = !this.smokingAllowed
      this.emitToParent()
    },
    handlePetsClick () {
      this.petsAllowed = !this.petsAllowed
      this.emitToParent()
    },
    handleInsuranceClick () {
      this.insuranceRequired =!this.insuranceRequired
      this.emitToParent()
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

div {
  margin-top: 0.3rem;

  //amount
  #amount {
    display: block;
    margin: 1rem 0 0.5rem;
    width: 24em;
    
    input {
      margin: 0.3rem 0.5rem;
      width: 3rem;
    }
  }
  label:nth-last-of-type(3) {
    margin: 0 0 1rem 0;
  }
}
textarea {
  margin-top: 0.3rem;
  height: 5.5rem;
}

</style>
