<template>
      <h3>Piha</h3>
  <div>

    <label class="switch">
        <input type="checkbox" v-model="showYardDetails" v-on:click="setYardDetails">
        <span class="slider round" v-bind:class="{'switch-yes':showYardDetails}"></span>
            </label>
            <div class="flexbox" v-if="showYardDetails"
            id="yardParent">
            <label
            for="yardArea"
            class="label__border-bottom--green border-radius__left">Ala</label>
            <input  type="text" v-model="yardArea" v-on:input="emitToParent" id="yardArea" class="border-radius__right">
            </div>

            <div class="flexbox" v-if="showYardDetails">    
            <label
            for="yardDesc"
            class="description">Kuvaus <textarea v-on:input="emitToParent"  v-model="yardDescription" id="yardDesc" class="box"/></label>
            
            </div>
  </div>
</template>

<script>
export default {
  name: "yard",
  emits: ["childToParent"],

  data() {
    return {
      showYardDetails: false,
      yardArea:null,
      yardDescription:"",
    };
  },

  methods: {
    setYardDetails() {
      this.showYardDetails = !this.showYardDetails;
    },
    emitToParent() {
        this.$emit("childToParent", {area:this.yardArea, description:this.yardDescription})

    }
  },
};
</script>

<style lang = 'scss' scoped>
@use '../../../../assets/styles/variables.scss' as v;
input[type="text"] {
  margin: 0.3rem, 0 0 0;
}

#yardArea {
    margin-right: 75%;
}

#yardParent {
    margin-bottom: 1em;
}

#yardDesc {
    margin-top: 0.5em;
    width: 100%;
}

.description {
    width: 100%;
}

.switch {
  margin-bottom: 1em;
}
</style>