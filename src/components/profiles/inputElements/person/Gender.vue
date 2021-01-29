<template>
  <select v-model="gender" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Sukupuoli</option>
    <option v-for="(gender, index,) in optionGenders" :value="gender.value" :key="index">{{ gender.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'Gender',

  data() {
    return {
      gender: '',
      optionGenders: [
        { text: 'Mies', value: 1 },
        { text: 'Nainen', value: 2 },
        { text: 'Muu', value: 3 }
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.gender)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
