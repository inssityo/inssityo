<template>
  <div>  
    <p class="margin__bottomless">Vuokra kk</p>
    <div class="flexbox">
      <div class="flexbox">
        <label for="min" class="label__border-bottom--green border-radius__left">Min</label>
        <input type="text" id="min" class="border-radius__right" v-model="min" v-on:keyup="emitToParent">
      </div>
      <div class="flexbox">
        <label for="max" class="label__border-bottom--green border-radius__left">Max</label>
        <input type="text" id="max" class="border-radius__right" v-model="max" v-on:keyup="emitToParent">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PriceMinMax',
  
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
  padding: 0.5rem;
  margin: auto 0;
}
input[type="text"] {
  padding: 0.5rem;
  margin: 0.5rem 0;
}
.flexbox div:first-child {
  margin-right: 0.35rem;
  width: 100%;
}
.flexbox div:last-child {
  margin-left: 0.35rem;
  width: 100%;
}

</style>