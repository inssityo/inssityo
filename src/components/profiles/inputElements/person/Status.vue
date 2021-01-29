<template>
  <select v-model="status" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Elämäntilanne</option>
    <option v-for="(status, index,) in optionStatus" :value="status.value" :key="index">{{ status.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'Status',

  data() {
    return {
      status: '',
      optionStatus: [
        { text: 'Työssäkäyvä', value: 1 },
        { text: 'Työtön', value: 2 },
        { text: 'Opiskelija', value: 3 },
        { text: 'Eläkeläinen', value: 4 }
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.status)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
