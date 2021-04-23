<template>
  <div class="flexbox"> 
    <div v-if="aptValue === 'R'" class="flexbox width__50"> 
      <label for="monthly-rent" class="label__border-bottom--green border-radius__left label__nowrap">Vuokra €/kk:</label>
      <input type="number" min="0" oninput="validity.valid||(value=0);" id="monthly-rent" class="border-radius__right" v-model="monthlyRent" v-on:keyup="emitToParent">
    </div>
    <div class="flexbox width__50" v-if="aptValue === 'B'">
      <label for="price" class="label__border-bottom--green border-radius__left label__nowrap">Myyntihinta €:</label>
      <input type="number" min="0" oninput="validity.valid||(value=0);" id="price" class="border-radius__right" v-model="price" v-on:keyup="emitToParent">
    </div>
    <div class="flexbox width__50" v-if="aptValue === 'B'">
      <label for="debtFreePrice" class="label__border-bottom--green border-radius__left label__nowrap">Velaton hinta €:</label>
      <input type="number" min="0" oninput="validity.valid||(value=0);" id="debt-free" class="border-radius__right" v-model="debtFreePrice" v-on:keyup="emitToParent">
    </div>
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
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', {salePrice:this.price, debtFreePrice:this.debtFreePrice, monthlyRent:this.monthlyRent});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>