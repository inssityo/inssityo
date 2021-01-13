<template>
  <div>
    <div class="petlist" v-for="(pet, index) in optionsPets" :key="index">
      <input type="checkbox" :id="'p'+index" :value="pet.value" v-model="pet.checked" v-on:click="emitToParent">
      <label :for="'p'+index" v-on:click="emitToParent">{{ pet.text }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pets',

  data() {
    return {
      optionsPets: [
        { text: 'Koiria', value: 'dogs', checked: false },
        { text: 'Kissoja', value: 'cats', checked: false },
        { text: 'Jyrsijöitä', value: 'rodents', checked: false },
        { text: 'Lintuja', value: 'birds', checked: false },
        { text: 'Kaloja', value: 'fish', checked: false },
        { text: 'Terraarioeläimiä', value: 'terrarium', checked: false },
        { text: 'Muita eläimiä', value: 'other_animals', checked: false }
      ],
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.optionsPets)
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
.petlist {
  margin: 0.2rem 0;
  display: flex;
  align-items: center;
}
.petlist label {
  margin-left: 0.6rem;
}
.petlist [type="checkbox"]{
  border: 0.1rem solid v.$KAMGreenDark;
  background: v.$KAMGreySemiDark;
  border-radius: 50%; 
  display: inline-block;
  height: 1rem;
  width: 1.1rem;
  margin: 0 0 0 0.5rem;
  position: relative;
  -webkit-appearance: none;
}
.petlist [type="checkbox"]:checked, .petlist [type="checkbox"]:checked {
  border: 0.25rem solid v.$KAMGreenDark;
  background: v.$White;
  width: 1.2rem;
  margin: 0;
}
.petlist [type="checkbox"]:checked + label{
  color: v.$KAMGreenDark;
  font-weight: bold;
}

</style>
