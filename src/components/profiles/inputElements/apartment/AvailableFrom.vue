<template>
  <div>
    <label>Vapautuu: </label>
    <input type="date" class="box" v-model="date" v-on:click="emitToParent"><!-- vaihda click -->
  </div>
</template>

<script>

export default {
  name: 'AvalableFrom', //Heti vapaa?
  
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
  padding: 0.2rem 0.5rem;
  margin: 0.3rem 0 0 0;
}

</style>