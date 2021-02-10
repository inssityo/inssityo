<template>
  <div>
    <label>Voimassa:</label>
    <div class="flexbox">
      Toistaiseksi:
      <label class="switch">
        <input type="checkbox" v-model="forNow" v-on:click="clickForNow">
        <span class="slider round"  v-bind:class="{'switch-yes': forNow}"></span>
      </label>
    </div>
  <div class="flexbox">
    <input :disabled="forNow" type="date" v-model="date" v-on:input="emitToParent" />
  </div>
  </div>
</template>

<script>
export default {
  name: "availableTo",

  data() {
    return {
      date: null,
      forNow: false,
    };
  },

  methods: {
    emitToParent() {
      this.forNow = false;
      this.$emit("childToParent", this.date);
    },
    clickForNow() {
      this.forNow = !this.forNow;
      if (this.forNow) {
        this.$emit("childToParent", 0);
      } else {
        this.$emit("childToParent", this.date);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@use '../../../../assets/styles/variables.scss' as v;

input[type="date"] {
  margin: 0.3rem, 0 0 0;
}

.switch {
    margin-bottom: 1em;
}
</style>