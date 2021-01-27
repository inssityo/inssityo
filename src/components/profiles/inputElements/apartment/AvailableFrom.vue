<template>
  <div>
    <label>Vapautuu: </label>
    <input type="date" v-model="date" v-on:click="emitToParent"><!-- vaihda click -->
  </div>
</template>

<script>

export default {
  name: 'AvalableFrom', //Heti vapaa?
  
  data() {
    return {
      date: null,
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', this.date);
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>