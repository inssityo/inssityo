<template>
  <select v-model="buildingType" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Talotyyppi</option>
    <option v-for="(building, index,) in optionBuildingTypes" :value="building.value" :key="index">{{ building.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'BuildingType',

  data() {
    return {
      buildingType: '',
      optionBuildingTypes: [
        { text: 'Kerrostalo', value: 1, checked: false }, //High-Rise
        { text: 'Omakotitalo', value: 2, checked: false }, //Detached House
        { text: 'Erillistalo', value: 3, checked: false }, //
        { text: 'Rivitalo', value: 4, checked: false }, //Terraced House
        { text: 'Paritalo', value: 5, checked: false }, //Semi-Detached House
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.buildingType)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
