<template>
  <div>
    <h4>Vapautuu:</h4>
    <input type="date" class="box" v-model="date" v-on:input="emitToParent"><!-- vaihda click -->
  </div>
</template>

<script>

export default {
  name: 'AvailableFrom', //Heti vapaa?
  
  data() {
    return {
      date: null,
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', this.date);
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

input[type="date"] {
  margin: 0.3rem 0 0 0;
}

</style>