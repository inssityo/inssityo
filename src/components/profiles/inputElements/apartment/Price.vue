<template>
  <div class="wrapper">  
    <p>Vuokra kk</p>
    <div>
      <div>
        <label for="min">Min</label>
        <input type="text" id="min" v-model="min" v-on:keyup="emitToParent">
      </div>
      <div>
        <label for="max">Max</label>
        <input type="text" id="max" v-model="max" v-on:keyup="emitToParent">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Price',
  
  data() {
    return {
      min: null,
      max: null,
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', {'min':this.min, 'max':this.max});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

label {
  background: v.$White;
  padding: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
}
p {
  margin-bottom: 0;
}
input[type="text"] {
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.5rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 100%;
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