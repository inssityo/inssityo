<template>
  <select v-model="locationType" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Sijainnin tyyppi</option>
    <option v-for="(locationType, index,) in optionLocationTypes" :value="locationType.value" :key="index">{{ locationType.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'LocationType',

  data() {
    return {
      locationType: '',
      optionLocationTypes: [
        { text: 'Downtown', value: 1, checked: false },
        { text: 'Suburb', value: 2, checked: false },
        { text: 'Conurbation', value: 3, checked: false },
        { text: 'Good public transport connections', value: 4, checked: false },
        { text: 'Sea view', value: 5, checked: false },
        { text: 'Lots of cafes and restaurants', value: 6, checked: false }
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.locationType)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
