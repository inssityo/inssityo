<template>
  <div class="width__50">
    <h3>Vapautuu</h3>
    <input type="date" class="box" v-model="date" v-on:input="emitToParent">
  </div>
</template>

<script>

export default {
  name: 'AvailableFrom',
  
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