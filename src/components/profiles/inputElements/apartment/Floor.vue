<template>
  <div>  
    <label>Kerros</label>
    <div class="flexbox">
      <input type="text" id="floor" v-model="floor[0].floor" v-on:keyup="emitToParent">
      <p class="margin__nothing">/</p>
      <input type="text" id="of-floors" v-model="floor[0].ofFloors" v-on:keyup="emitToParent">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Floor',
  
  data() {
    return {
      floor: [
        { floor: null, ofFloors: null }
      ],
      floorText: '',
    }
  },

  methods: {
    emitToParent() {
      this.createText();
      this.$emit('childToParent', {'floor':this.floor, 'text':this.floorText});
    },
    createText() {
      this.floorText = this.floor[0].floor + '/' + this.floor[0].ofFloors;
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

div .flexbox {
  justify-content: normal;
  
  input:first-child {
    margin-right: 0.35rem;
    width: 2rem;
  }
  input:last-child {
    margin-left: 0.35rem;
    width: 2rem;
  }
}
input[type="text"] {
  margin: 0.3rem 0 0 0;
  width: 2rem;
}

</style>