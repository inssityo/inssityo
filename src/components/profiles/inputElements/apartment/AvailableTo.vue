<template>
  <div class="width__50">
    <h3>Voimassa</h3>
    <div class="flexbox">
      <label class="label__padding__leftless">Toistaiseksi:</label>
      <div class="flexbox">
      <p class="margin__topless margin__bottomless switch-no" v-bind:class="{'switch-yes': forNow}">{{ forNow ? "kyllä" : "ei" }}</p>
      <label class="switch switch__margin-left">
        <input type="checkbox" v-model="forNow" v-on:click="clickForNow">
        <span class="slider round"  v-bind:class="{'switch-yes': forNow}"></span>
      </label>
      </div>
    </div>
    <div v-if="!forNow" class="flexbox">
      <input :disabled="forNow" type="date" class="margin-top__1" v-model="date" v-on:input="emitToParent" />
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
      this.$emit("childToParent", this.date);
    },
    clickForNow() {
      this.forNow = !this.forNow;
      this.$nextTick(function () {});
      if (this.forNow) {
        this.date = 0;
      } else {
        this.date;
      }
      this.emitToParent();
    },
  },
};
</script>

<style lang='scss' scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>