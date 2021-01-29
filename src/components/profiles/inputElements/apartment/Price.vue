<template>
  <div class="flexbox">  
    <label v-show="aptValue === 'R'" for="price" class="label__border-bottom--green">Vuokra/kk</label>
    <label v-show="aptValue === 'B'" for="price" class="label__border-bottom--green">Myyntihinta</label>
    <input type="text" id="price" v-model="price" v-on:keyup="emitToParent">
    <label v-show="aptValue === 'B'" for="debtFreePrice" class="label__border-bottom--green">Myyntihinta</label>
    <input v-show="aptValue === 'B'" type="text" id="debt-free" v-model="debtFreePrice" v-on:keyup="emitToParent">
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
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
}
input[type="text"] {
  padding: 0.2rem 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.5rem 0;
  width: 100%;
}

</style>