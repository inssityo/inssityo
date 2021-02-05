<template>
  <div>  
    <p class="margin__bottomless">Pinta-ala</p>
    <div class="flexbox">
      <div>
        <label v-show="aptValue === 'S'" for="minRoom" class="label__border-bottom--green border-radius__left">Min</label>
        <label v-show="aptValue === 'R'" for="minRoom" class="label__border-bottom--green border-radius__left">Room</label>
        <label v-show="aptValue === 'B'" for="minRoom" class="label__border-bottom--green border-radius__left">Asuinpinta-ala</label>
        <input type="text" id="min-room" class="border-radius__right" v-model="minRoom" v-on:keyup="emitToParent">
      </div>
      <div>
        <label v-show="aptValue === 'S'" for="maxTotal" class="label__border-bottom--green border-radius__left">Max</label>
        <label v-show="aptValue === 'R'" for="maxTotal" class="label__border-bottom--green border-radius__left">Total</label>
        <label v-show="aptValue === 'B'" for="minRoom" class="label__border-bottom--green border-radius__left">Kerrospinta-ala</label>
        <input type="text" id="max-total" class="border-radius__right" v-model="maxTotal" v-on:keyup="emitToParent">
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

label {
  background: v.$White;
  margin: auto 0;
}
input[type="text"] {
  margin: 0.4rem 0;
  width: 1.9rem;
}
.flexbox {
  justify-content: normal;
  
  div:first-child {
    margin-right: 0.35rem;
  }
  div:last-child {
    margin-left: 0.35rem;
  }
}

</style>