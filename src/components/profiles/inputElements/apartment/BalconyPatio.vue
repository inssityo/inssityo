<template>
  <div  id="balconyParent">

      <div class="flexbox">
      <label class="description"> Parveke
      </label>
      <label class="switch">
          <input type="checkbox" v-model="balconyExists" v-on:click="toggleBalcony">
          <span class="slider round" v-bind:class="{'switch-yes': balconyExists}"></span>
      </label>
      </div>

  <div class="balcText">
      <label for="balconyDescText" v-if="balconyExists" class="description">Parvekkeen kuvaus
      <input type="text" id="balconyDescText" v-model="balconyDesc">
      </label>
  </div>

    </div>

  <div id="patioParent">

      <div class="flexbox">
            <label class="description"> Terassi
      </label>
      <label class="switch">
          <input type="checkbox" v-model="patioExists" v-on:click="togglePatio">
          <span class="slider round" v-bind:class="{'switch-yes': patioExists}"></span>
      </label>
            </div>
            <div class="patioText">
            <label for="patioDescText" v-if="patioExists" class="description">Terassin kuvaus
      <input type="text" id="patioDescText" v-model="patioDesc">
      </label>
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
    toggleBalcony() {
      this.balconyExists = !this.balconyExists;
    },

    togglePatio() {
      this.patioExists = !this.patioExists;
    },
    emitToParent() {
      this.$emit("childToParent", {
        balconyExists: this.balconyExists,
        balconyDesc: this.balconyDesc,
        patioExists: this.patioExists,
        patioDesc: this.patioDesc,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@use '../../../../assets/styles/variables.scss' as v;

#patioParent,
#balconyParent {
  float: left;
  width: 50%;
  max-width: 50%;
  margin-top: 0.5em;
}

#patioParent {
  margin-left: 1em;
}

#balconyParent {
  margin-right: 1em;
}

.patioText, .balcText {
    margin-top: 0.5em;
}

.patioText {
  margin-right: 1em;
}

</style>