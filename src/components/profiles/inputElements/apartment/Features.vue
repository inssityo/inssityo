<template>
  <select v-model="checkedFeatures" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Lisäominaisuudet</option>
    <option v-for="(feature, index,) in optionFeatures" :value="feature.value" :key="index">{{ feature.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'Features',

  data() {
    return {
      checkedFeatures: '',
      optionFeatures: [
        { text: 'Balcony', value: 1, checked: false },
        { text: 'Sauna', value: 2, checked: false },
        { text: 'Lift', value: 3, checked: false },
        { text: 'Garage', value: 4, checked: false },
        { text: 'Hot Tub', value: 5, checked: false },
        { text: 'Swimming Pool', value: 6, checked: false },
        { text: 'Furnished', value: 7, checked: false }
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.checkedFeatures)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
