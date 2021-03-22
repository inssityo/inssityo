<template>
  <div class="flexbox">
    <label class="label__border-bottom--green border-radius__left">Asunnon kerroslukumäärä:</label>
    <input type="number" min="0" class="border-radius__right" v-model="apartmentFloorAmt" v-on:input="emitToParent">
  </div>
</template>

<script>
export default {
  name: 'FloorCount',
  
  data() {
    return {
      apartmentFloorAmt: null
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.apartmentFloorAmt);
    },
  },
}
</script>

<style lang="scss" scoped>

.flexbox {
  justify-content: normal;
}
input[type="number"] {
  width: 3rem;
}

</style>