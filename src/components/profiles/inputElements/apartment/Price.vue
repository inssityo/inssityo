<template>
  <div class="flexbox"> 
    <div class="flexbox"> 
    <label v-if="aptValue === 'R'" for="monthlyRent" class="label__border-bottom--green border-radius__left">Vuokra:</label>
    <input v-if="aptValue ==='R'" type="number" min="0" oninput="validity.valid||(value=0);" id="monthlyRent" class="border-radius__right" v-model="monthlyRent" v-on:keyup="emitToParent">
    <label v-if="aptValue === 'R'" for="monthlyRent" id="euroLabel" >€/kk</label>
    </div>
    <div class="flexbox" v-if="aptValue === 'B'" id="saleDiv">
    <label for="price" class="label__border-bottom--green border-radius__left">Myyntihinta:</label>
    <input type="number" min="0" oninput="validity.valid||(value=0);" id="price" class="border-radius__right" v-model="price" v-on:keyup="emitToParent">
        <label id="euroLabel" for="price">€</label>
    <label  id="debtfreeLabel" for="debtFreePrice" class="label__border-bottom--green border-radius__left">Velaton hinta:</label>
    <input  type="number" min="0" oninput="validity.valid||(value=0);" id="debt-free" class="border-radius__right" v-model="debtFreePrice" v-on:keyup="emitToParent">
        <label id="euroLabel" for="debtFreePrice">€</label>
    </div>
  </div>
  <div v-if="aptValue === 'B'" id="maintenanceCosts">
    <h4>Yhtiövastike:</h4>
    <form oninput="result.value=parseFloat(upkeep.value) + parseFloat(financing.value) || 0">
  <label for="upkeep" class="description">Hoitovastike:</label> 
  <input type="number" oninput="validity.valid||(value=0);" step="0.01" id="upkeep" class="border-bottom--green" v-model="upkeep" v-on:input="emitToParent">
  <label id="euroLabel" for="upkeep">€/kk</label>
  <label id="euroLabel" for="upkeep">+</label>
    <label for="financing" class="description">Rahoitusvastike:</label> 
  <input type="number" oninput="validity.valid||(value=0);" step="0.01" id="financing" class="border-bottom--green" v-model="financing" v-on:input="emitToParent">
  <label id="euroLabel" for="financing">€/kk</label>
  <label id="euroLabel"> = <u><output name="result" for="upkeep financing"></output></u> €/kk</label>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Price',
  props: ['aptValue', 'idValue'],
  emits: ['childToParent'],
  
  data() {
    return {
      monthlyRent: null,
      price: null,
      debtFreePrice: null,
      upkeep:0,
      financing:0,
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', {salePrice:this.price, debtFreePrice:this.debtFreePrice, monthlyRent:this.monthlyRent, upkeep:this.upkeep, financing:this.financing});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

label {
  margin: auto 0;
}
input[type="text"]  {
  margin: 0.5rem 0;
  text-align:center;;
}

input[type="number"] {
  height: 1.45em;
}

.padding input, .padding label {
  padding: 0.5rem;
}

#saleDiv{
  margin-left: 1em;
}

#saleDiv input, #maintenanceCosts input {
width: 6em;
}

#priceLabel {
  margin-right: 1em;
  width: 1em;
}

#euroLabel {
  font-weight: bold;
  font-size: 2em;
}

#monthlyRent {
  width: 4em;
}

#debtfreeLabel {
  width: 7em;
  margin-left: 1em;
}
</style>