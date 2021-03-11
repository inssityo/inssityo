<template>
  <div class="flexbox margin-top__1 margin-bottom__1">
    <div class="width__50">
      <div class="flexbox">
        <label class="label__padding__leftless">Parveke:</label>
        <div class="flexbox">
        <p class="margin__topless margin__bottomless switch-no" v-bind:class="{'switch-yes': balconyExists}">{{ balconyExists ? "kyllä" : "ei" }}</p>
        <label class="switch switch__margin-left">
          <input type="checkbox" v-model="balconyExists" v-on:click="toggleBalcony" v-on:input="emitToParent">
          <span class="slider round" v-bind:class="{'switch-yes': balconyExists}"></span>
        </label>
        </div>
      </div>

      <div v-if="balconyExists" class="margin-top__05">
        <label for="balconyDescText" class="label__padding__leftless">Parvekkeen kuvaus:</label>
        <input type="text" id="balconyDescText" class="box margin-top__025" placeholder="ranskalainen, viherhuone..." v-model="balconyDesc" v-on:input="emitToParent">
      </div>
    </div>

    <div class="width__50">
      <div class="flexbox">
        <label class="label__padding__leftless">Terassi:</label>
        <div class="flexbox">
        <p class="margin__topless margin__bottomless switch-no" v-bind:class="{'switch-yes': patioExists}">{{ patioExists ? "kyllä" : "ei" }}</p>
        <label class="switch switch__margin-left">
          <input type="checkbox" v-model="patioExists" v-on:click="togglePatio" v-on:input="emitToParent">
          <span class="slider round" v-bind:class="{'switch-yes': patioExists}"></span>
        </label>
        </div>
      </div>

      <div v-if="patioExists" class="margin-top__05">
        <label for="patioDescText" class="label__padding__leftless">Terassin kuvaus:</label>
        <input type="text" id="patioDescText" class="box margin-top__025" placeholder="katettu, lasitettu..." v-model="patioDesc" v-on:input="emitToParent">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "balconyPatio",
  emits: ["childToParent"],

  data() {
    return {
      balconyExists: false,
      balconyDesc: "",
      patioExists: false,
      patioDesc: "",
    };
  },

  methods: {
    emitToParent() {
      this.$emit("childToParent", {
        balconyExists: this.balconyExists,
        balconyDesc: this.balconyDesc,
        patioExists: this.patioExists,
        patioDesc: this.patioDesc,
      });
    },
    toggleBalcony() {
      this.balconyExists = !this.balconyExists;
    },
    togglePatio() {
      this.patioExists = !this.patioExists;
    },
  },
};
</script>

<style lang='scss' scoped>
@use '../../../../assets/styles/variables.scss' as v;

.flexbox {
  align-items: normal;
  //margin-bottom: 1rem;
}

</style>