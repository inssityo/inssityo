<template>
  <div class="flexbox">
    <p>Onko asunto solu tai sen yksi huone?</p>
    <div class="flexbox">
      <p class="margin__topless margin__bottomless switch-no" v-bind:class="{'switch-yes': checkedCell}">{{ checkedCell ? "kyllä" : "ei" }}</p>
      <label class="switch switch__margin-left" v-on:click="emitToParent">
        <input type="checkbox" id="checkbox-rent" v-model="checkedCell">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CellAptRoom',

  data() {
    return {
      checkedCell: true,
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.checkedCell);
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
