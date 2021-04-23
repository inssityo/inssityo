<template>
  <div class="margin-top__05">
    <div class="margin-bottom__05">
      <label class="label__padding__leftless">Lämmitysjärjestelmä:</label>
      <input class="box margin-top__025" type="text" v-model="heating" v-on:input="emitToParent"/>
    </div>
    <div class="margin-bottom__05">
      <label class="label__padding__leftless">Ilmanvaihto:</label>
      <input class="box margin-top__025" type="text" v-model="airConditioning" v-on:input="emitToParent"/>
    </div>
    <div class="margin-bottom__05">
      <label class="label__padding__leftless">Vesi:</label>
      <input class="box margin-top__025" v-model="water" type="text" v-on:input="emitToParent"/>
    </div>
    <div class="margin-bottom__05">
      <label class="label__padding__leftless">Viemäröinti:</label>
      <input class="box margin-top__025" type="text" v-model="plumbing" v-on:input="emitToParent"/>
    </div>
    <div class="margin-bottom__05">
      <label class="label__padding__leftless">Jätehuolto:</label>
      <input class="box margin-top__025" v-model="garbage" type="text" v-on:input="emitToParent"/>
    </div>
    <div class="margin-bottom__025">
      <label class="label__padding__leftless">Yhteiset tilat:</label>
      <input class="box margin-top__025" v-model="common" type="text" v-on:input="emitToParent"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Utilities',
  emits: ["childToParent"],

  data() {
    return {
      heating: "",
      plumbing: "",
      water: "",
      garbage: "",
      airConditioning: "",
      common: "",
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', {
        heating: this.heating, 
        plumbing: this.plumbing, 
        water: this.water, 
        garbage: this.garbage, 
        airConditioning: this.airConditioning, 
        common: this.common
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;
/*
.box{
   margin-bottom: 0.5em;
   margin-top: 0.25em;
}*/

</style>