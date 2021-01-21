<template>
  <select v-model="type" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Työtyyppi</option>
    <option v-for="(type, index,) in optionWorkTypes" :value="type.value" :key="index">{{ type.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'WorkType',

  data() {
    return {
      type: '',
      optionWorkTypes: [
        { text: 'Päivätyö', value: 1 },
        { text: 'Vuorotyö', value: 2 },
        { text: 'Yötyö', value: 3 },
        { text: 'Reissutyö', value: 4 },
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.type)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
