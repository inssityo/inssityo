<template>
  <select id="age" v-model="age" v-on:click="emitToParent">
    <option value="" selected disabled hidden>Ikä</option>
    <option v-for="(age, index,) in optionAges" :value="age.value" :key="index">{{ age.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'Age',

  data() {
    return {
      age: '',
      optionAges: [
        { text: 'under 20', value: 1 },
        { text: '20-24', value: 2 },
        { text: '25-29', value: 3 },
        { text: '30-34', value: 4 },
        { text: '35-39', value: 5 },
        { text: '40-44', value: 6 },
        { text: '45-49', value: 7 },
        { text: 'over 50', value: 8 }
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.age)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;
label {
  cursor: pointer;
}
input, select {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  border-style: none none solid none!important;
  border-color: v.$KAMGreenDark!important;
}
input:focus {
  background: v.$White;
}
#age {
  padding: 0.1rem;
  margin: 0;
  border: none;
  width: -webkit-fill-available;
}

</style>
