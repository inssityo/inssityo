<template>
  <div class="flexbox">  
    <label v-show="aptValue === 'R'" for="price" class="label__border-bottom--green border-radius__left">Vuokra/kk</label>
    <label v-show="aptValue === 'B'" for="price" class="label__border-bottom--green border-radius__left">Myyntihinta</label>
    <input type="text" id="price" class="border-radius__right" v-model="price" v-on:keyup="emitToParent">
    <label v-show="aptValue === 'B'" for="debtFreePrice" class="label__border-bottom--green border-radius__left">Myyntihinta</label>
    <input v-show="aptValue === 'B'" type="text" id="debt-free" class="border-radius__right" v-model="debtFreePrice" v-on:keyup="emitToParent">
  </div>
</template>

<script>

export default {
  name: 'Price',
  props: ['aptValue'],
  
  data() {
    return {
      price: null,
      debtFreePrice: null,
    }
  },

  methods: {
    emitToParent() { //debt-free
      this.$emit('childToParent', this.price);
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

</style>