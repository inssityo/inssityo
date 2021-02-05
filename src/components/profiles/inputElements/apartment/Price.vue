<template>
  <div class="flexbox" v-bind:class="{'padding': idValue === 'A'}">  
    <label v-show="aptValue === 'R' || idValue === 'A'" for="price" class="label__border-bottom--green border-radius__left">Vuokra/kk</label>
    <label v-show="aptValue === 'B'" for="price" class="label__border-bottom--green border-radius__left">Myyntihinta</label>
    <input type="text" id="price" class="border-radius__right" v-model="price" v-on:keyup="emitToParent">
    <label v-show="aptValue === 'B'" for="debtFreePrice" class="label__border-bottom--green border-radius__left">Myyntihinta</label>
    <input v-show="aptValue === 'B'" type="text" id="debt-free" class="border-radius__right" v-model="debtFreePrice" v-on:keyup="emitToParent">
  </div>
</template>

<script>

export default {
  name: 'Price',
  props: ['aptValue', 'idValue'],
  
  data() {
    return {
      price: null,
      debtFreePrice: null,
    }
  },

  methods: {
    emitToParent() { //debt-free
      this.$emit('childToParent', {'price1': this.price, 'price2': this.debtFreePrice});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

label {
  margin: auto 0;
}
input[type="text"] {
  margin: 0.5rem 0;
}
.padding input, .padding label {
  padding: 0.5rem;
}

</style>