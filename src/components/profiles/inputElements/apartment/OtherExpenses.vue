<template>
  <div>
    <div>
      <input type="checkbox" id="electricity" v-model="electrity">
      <label for="electricity">Sisältää sähkön</label>
    </div>
    <div>
      <input type="checkbox" id="water" v-model="water">
      <label for="water">Sisältää veden</label>
    </div>
    <div>
      <input type="checkbox" id="data" v-model="checkedDataConnection">
      <label for="data">Sisältää internetyhteyden</label>
    </div>
    <div v-show="checkedDataConnection">
      <label for="speed">Nopeus</label>
      <input type="text" id="speed" v-model="speed">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherExpenses', //Lisää autopaikka

  data() {
    return {
      electricity: false,
      water: false,
      checkedDataConnection: false,
      speed: '',
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.electricity)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
