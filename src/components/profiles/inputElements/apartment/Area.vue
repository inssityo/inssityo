<template>
    <div class="flexbox">
      <div class="flexbox width__50">
        <label v-show="aptValue === 'S'" for="minRoom" class="label__border-bottom--green border-radius__left">Min:</label>
        <label v-show="aptValue === 'R'" for="minRoom" class="label__border-bottom--green border-radius__left">Room:</label>
        <label v-show="aptValue === 'B'" for="minRoom" class="label__border-bottom--green border-radius__left label__nowrap">Asuinpinta-ala:</label>
        <input type="number" min="0" id="min-room" class="border-radius__right" v-model="minRoom" v-on:keyup="emitToParent">
      </div>
      <div class="flexbox width__50">
        <label v-show="aptValue === 'S'" for="maxTotal" class="label__border-bottom--green border-radius__left">Max:</label>
        <label v-show="aptValue === 'R'" for="maxTotal" class="label__border-bottom--green border-radius__left">Liveable:</label>
        <label v-show="aptValue === 'B'" for="minRoom" class="label__border-bottom--green border-radius__left label__nowrap">Kerrospinta-ala:</label>
        <input type="number" min="0" id="max-total" class="border-radius__right" v-model="maxTotal" v-on:keyup="emitToParent">
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
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', {'minRoom':this.minRoom, 'maxTotal':this.maxTotal});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>