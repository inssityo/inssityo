<template>
  <div class="wrapper">  
    <p>Pinta-ala</p>
    <div>
      <div>
        <label v-if="aptValue === 'S'" for="minRoom">Min</label>
        <label v-if="aptValue === 'R'" for="minRoom">Room</label>
        <label v-if="aptValue === 'B'" for="minRoom">Asuinpinta-ala</label>
        <input type="text" id="minRoom" v-model="minRoom" v-on:keyup="emitToParent">
      </div>
      <div>
        <label v-if="aptValue === 'S'" for="maxTotal">Max</label>
        <label v-if="aptValue === 'R'" for="maxTotal">Total</label>
        <label v-if="aptValue === 'B'" for="minRoom">Kerrospinta-ala</label>
        <input type="text" id="maxTotal" v-model="maxTotal" v-on:keyup="emitToParent">
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
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  box-shadow: -0.5px -0.5px v.$KAMGreySemiLight;
}
p {
  margin-bottom: 0;
}
input[type="text"] {
  padding: 0.2rem 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.4rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  box-shadow: 0.5px -0.5px v.$KAMGreySemiLight;
  width: 1.9rem;
}
input[type="text"]:focus{
  outline: none;
  background: v.$KAMGreyLight;
}
.wrapper div {
  display: flex;
  align-items: center;
  //justify-content: space-between;
}
.wrapper div div:first-child {
  margin-right: 0.35rem;
}
.wrapper div div:last-child {
  margin-left: 0.35rem;
}
</style>