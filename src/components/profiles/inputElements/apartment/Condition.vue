<template>
<h4>Kunto</h4>
<div>
  <select v-model="condition" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Kunto</option>
    <option v-for="(condition, index,) in optionConditions" :value="condition.value" :key="index">{{ condition.text }}</option>
  </select>
</div>
</template>

<script>
export default {
  name: 'Condition',
  emits: ['childToParent'],

  data() {
    return {
      condition: '',
      optionConditions: [
        { text: 'Hyvä', value: 1 },
        { text: 'Tyydyttävä', value: 2 },
        { text: 'Huono', value: 3 }
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.condition)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
