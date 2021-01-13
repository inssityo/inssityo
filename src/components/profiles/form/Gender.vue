<template>
  <select id="gender" v-model="gender" v-on:click="emitToParent">
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
#gender {
  padding: 0.1rem;
  margin: 0;
  border: none;
  width: -webkit-fill-available;
}

</style>
