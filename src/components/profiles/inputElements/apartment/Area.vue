<template>
  <div>  
    <p class="margin__bottomless">Pinta-ala</p>
    <div class="flexbox" id="parent">
      <div>
        <label v-show="aptValue === 'S'" for="minRoom" class="label__border-bottom--green border-radius__left">Min</label>
        <label v-show="aptValue === 'R'" for="minRoom" class="label__border-bottom--green border-radius__left">Room</label>
        <label v-show="aptValue === 'B'" for="minRoom" class="label__border-bottom--green border-radius__left">Asuinpinta-ala</label>
        <input type="number" min="0" id="min-room" class="border-radius__right" v-model="minRoom" v-on:keyup="emitToParent">
      </div>
      <div>
        <label v-show="aptValue === 'S'" for="maxTotal" class="label__border-bottom--green border-radius__left">Max</label>
        <label v-show="aptValue === 'R'" for="maxTotal" class="label__border-bottom--green border-radius__left">Liveable</label>
        <label v-show="aptValue === 'B'" for="minRoom" class="label__border-bottom--green border-radius__left">Kerrospinta-ala</label>
        <input type="number" min="0" id="max-total" class="border-radius__right" v-model="maxTotal" v-on:keyup="emitToParent">
      </div>
      <div class="flexbox" id="floorCountDiv">
      <label id="floorAmtLabel" class="label__border-bottom--green border-radius__left">Asunnon kerroslukumäärä:</label>
      <input type="number" id="floorNumberInput" min="0" class="border-radius__right" v-model="apartmentFloorAmt" v-on:input="emitToParent">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Area',
  props: ['aptValue'],
  
  data() {
    return {
      minRoom: null,
      maxTotal: null,
      apartmentFloorAmt: null
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', {'minRoom':this.minRoom, 'maxTotal':this.maxTotal, aptFloorAmt:this.apartmentFloorAmt});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

label {
  background: v.$White;
  margin: auto 0;
  white-space: nowrap;
}
input {
  margin: 0.4rem 0;
  width: 1.9rem;
}
input[type="number"] {
  height: 1.5em;
  width: 3em;
}
#floorNumberInput {
  height: 1.5em;
}
.flexbox {
  justify-content: center;
  div:first-child {
    margin-right: 3rem;
  }
  div:last-child {
    margin-left: 3rem;
  }
}
</style>