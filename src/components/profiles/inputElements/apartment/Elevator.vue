<template>
  <div class="flexbox width__50">
    <label class="label__padding__leftless">Hissi:</label>
    <div class="flexbox">
      <p class="margin__topless margin__bottomless switch-no" v-bind:class="{'switch-yes': hasElevator}">{{ hasElevator ? "kyllä" : "ei" }}</p>
      <label class="switch switch__margin-left">
        <input type="checkbox" v-model="hasElevator" v-on:click="toggleElevator" v-on:input="emitToParent">
        <span class="slider round" v-bind:class="{'switch-yes': hasElevator}"></span>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Elevator',
  
  data() {
    return {
      hasElevator:false,
    }
  },

  methods: {
    emitToParent() {
      this.createText();
      this.$emit('childToParent', this.hasElevator);
    },
    toggleElevator() {
      this.hasElevator = !this.hasElevator;
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>