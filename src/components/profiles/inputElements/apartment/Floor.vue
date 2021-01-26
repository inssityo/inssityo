<template>
  <div class="wrapper">  
    <p>Kerros</p>
    <div>
      <div>
        <input type="text" id="floor" v-model="floor" v-on:keyup="emitToParent">
      </div>
      <p>/</p>
      <div>
        <input type="text" id="ofFloors" v-model="ofFloors" v-on:keyup="emitToParent">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Floor',
  
  data() {
    return {
      floor: null,
      ofFloors: null,
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', {'floor':this.floor, 'ofFloors':this.ofFloors});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.wrapper p {
  margin-bottom: 0;
}
.wrapper div p {
  margin: 0;
}
input[type="text"] {
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.3rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  box-shadow: -0.5px -0.5px v.$KAMGreySemiLight;
  width: 2rem;
}
input[type="text"]:focus{
  outline: none;
  background: v.$KAMGreyLight;
}
.wrapper div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper div div:first-child {
  margin-right: 0.35rem;
  width: 100%;
}
.wrapper div div:last-child {
  margin-left: 0.35rem;
  width: 100%;
}
</style>