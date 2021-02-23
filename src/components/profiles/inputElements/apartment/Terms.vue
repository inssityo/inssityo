<template>
  <div>
    <label for="smoking" class="checkmark-label">Asunnossa ei saa tupakoida
      <input type="checkbox" id="smoking" v-model="terms[0].smoking" v-on:click="emitToParent">
      <span class="checkmark"></span>
    </label>
    <label for="pets" class="checkmark-label">Asunnossa ei saa pitää lemmikkejä
      <input type="checkbox" id="pets" v-model="terms[1].pets" v-on:click="emitToParent"> <!--lisää idValue -->
      <span class="checkmark"></span>
    </label>
    <label for="insurance" class="checkmark-label">Kotivakuutus vaaditaan
      <input type="checkbox" id="insurance" v-model="terms[2].insurance" v-on:click="emitToParent"> <!--lisää idValue -->
      <span class="checkmark"></span>
    </label>
    <label for="rent-increase" class="checkmark-label margin-bottom__025">Vuokraa korotetaan vuosittain
      <input type="checkbox" id="rent-increase" v-model="terms[3].checkedRentIncrease" v-on:click="emitToParent">
      <span class="checkmark"></span>
    </label>

    <div v-if="terms[3].checkedRentIncrease" class="flexbox margin-bottom__05">
      <label for="amount" class="label__padding__leftless">Määrä:</label>
      <input type="text" id="amount" v-model="amount" v-on:keyup="emitToParent">
    </div>

    <div v-bind:class="{'margin-top__1' : !terms[3].checkedRentIncrease}">
      <label for="guarantee" class="label__padding__leftless">Vuokravakuus:</label>
      <textarea class="box margin-bottom__1" placeholder="Kahden kuukauden vuokrahinta ennen asuntoon muuttamista." v-model="termsDescription"></textarea>

      <label for="terms" class="label__padding__leftless">Muita ehtoja:</label>
      <textarea id="terms-description" class="box" placeholder="Mikäli vuokrasuhde päättyy ennen kuin vuosi sen alkamisesta on kulunut, peritään vuokralaiselta sopimussakko 1,24 x 1 kk vuokraa vastaava määrä." v-model="guarantee"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherExpenses',

  data() {
    return {
      terms: [
        { smoking: false },//true: Tupakointi kielletty
        { pets: false }, //false: Lemmikit sallittuja
        { insurance: false },
        { checkedRentIncrease: false },
      ],
      guarantee:'',
      amount: '',
      termsDescription: '', //HUOM!
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', {'terms': this.terms, 'amount': this.amount, guarantee:this.guarantee})
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

div {
  margin-top: 0.3rem;

  .flexbox {
    justify-content: normal;

    label {
      padding-left: 1.8rem;
    }
  }
  //amount
  #amount {
    display: block;
    margin: 0.3rem 0 0.5rem;
    width: 3rem;
    
    input {
      margin: 0.3rem 0.5rem;
      width: 3rem;
    }
  }
  label:nth-last-of-type() {
    margin: 0 0 1rem 0;
  }
}
textarea {
  margin-top: 0.3rem;
  height: 5.5rem;
}

</style>
