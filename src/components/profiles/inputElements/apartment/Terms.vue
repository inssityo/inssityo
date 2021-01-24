<template>
  <div>
    <div>
      <input type="checkbox" id="smoking" v-model="smoking">
      <label for="smoking">Asunnossa ei saa tupakoida</label>
    </div>
    <div>
      <input type="checkbox" id="pets" v-model="pets"> <!--lisää idValue -->
      <label for="pets">Asunnossa ei saa pitää lemmikkejä</label>
    </div>
    <div>
      <input type="checkbox" id="rentIncrease" v-model="checkedRentIncrease">
      <label for="rentIncrease">Vuokraa korotetaan vuosittain</label>
    </div>
    <div v-show="checkedRentIncrease">
      <label for="amount">Määrä %</label>
      <input type="text" id="amount" v-model="amount">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherExpenses',

  data() {
    return {
      smoking: false,
      pets: false,
      checkedRentIncrease: false,
      amount: '',
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
