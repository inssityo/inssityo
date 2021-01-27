<template>
  <div class="wrapper">  
    <p>Kerros</p>
    <div>
      <div>
        <input type="text" id="floor" v-model="floor[0].floor" v-on:keyup="emitToParent">
      </div>
      <p>/</p>
      <div>
        <input type="text" id="ofFloors" v-model="floor[0].ofFloors" v-on:keyup="emitToParent">
      </div>
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

.wrapper {
  p {
    margin-bottom: 0;
  }
  div p {
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div div:first-child {
    margin-right: 0.35rem;
    width: 100%;
  }
  div div:last-child {
    margin-left: 0.35rem;
    width: 100%;
  }
}
input[type="text"] {
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.3rem 0;
  border-style: none none solid none;
  border-color: v.$KAMGreenDark;
  border-width: 0.15rem;
  box-shadow: -0.5px -0.5px v.$KAMGreySemiLight;
  width: 2rem;
}
input[type="text"]:focus  {
  outline: none;
  background: v.$KAMGreenLight !important;
}
input[type="text"]:hover {
  background: v.$KAMGreenLight;
}


</style>