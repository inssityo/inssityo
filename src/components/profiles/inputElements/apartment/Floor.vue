<template>
  <div class="flexbox width__50">
    <label class="label__padding__leftless">Kerros:</label>
    <div class="flexbox">
      <input type="number" min="0" oninput="validity.valid||(value='');" id="floor" v-model="floor[0].floor" v-on:keyup="emitToParent">
      <p class="margin__nothing">/</p>
      <input type="number"  min="0" oninput="validity.valid||(value='');" id="of-floors" v-model="floor[0].ofFloors" v-on:keyup="emitToParent">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Floor',
  
  data() {
    return {
      hasElevator:false,
      floor: [
        { floor: null, ofFloors: null }
      ],
      floorText: '',
    }
  },

  methods: {
    emitToParent() {
      this.createText();
      this.$emit('childToParent', { 'floor':this.floor, 'text':this.floorText });
    },
    createText() {
      this.floorText = this.floor[0].floor + '/' + this.floor[0].ofFloors;
    },
        toggleElevator() {
      this.hasElevator = !this.hasElevator;
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

div .flexbox {
  input:first-child {
    margin-right: 0.35rem;
    width: 2rem;
  }
  input:last-child {
    margin-left: 0.35rem;
    width: 2rem;
  }
}
label {
  padding: 0.2rem 0.4rem 0.2rem 0;
}

</style>