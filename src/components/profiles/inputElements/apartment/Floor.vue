<template>
  <div id="parent" class="flexbox">  
    <label>Kerros</label>
    <div class="flexbox">
      <input type="number" min="0" oninput="validity.valid||(value='');" id="floor" v-model="floor[0].floor" v-on:keyup="emitToParent">
      <p class="margin__nothing">/</p>
      <input type="number"  min="0" oninput="validity.valid||(value='');" id="of-floors" v-model="floor[0].ofFloors" v-on:keyup="emitToParent">
    </div>

          <div class="flexbox" id="elevatorDiv">
            <label class="description"> Hissi
      </label>
      <label class="switch">
          <input type="checkbox" v-model="hasElevator" v-on:click="toggleElevator">
          <span class="slider round" v-bind:class="{'switch-yes': hasElevator}"></span>
      </label>
                <p class="margin__topless margin__bottomless switch-no" id="elevatorText" v-bind:class="{'switch-yes': hasElevator}">{{ hasElevator ? "kyllä" : "ei" }}</p>
            </div>
  </div>
</template>

<script>

export default {
  name: 'Floor',
  
  data() {
    return {
      hasElevator:false,
      floor: [
        { floor: null, ofFloors: null }
      ],
      floorText: '',
    }
  },

  methods: {
    emitToParent() {
      this.createText();
      this.$emit('childToParent', {'floor':this.floor, 'text':this.floorText, hasElevator:this.hasElevator});
    },
    createText() {
      this.floorText = this.floor[0].floor + '/' + this.floor[0].ofFloors;
    },
        toggleElevator() {
      this.hasElevator = !this.hasElevator;
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

#parent {
  padding-top: 4em;
  padding-right: 5em;
}

div .flexbox {
  justify-content: normal;
  
  input:first-child {
    margin-right: 0.35rem;
    margin-bottom: 1em;
    width: 2rem;
  }
  input:last-child {
    margin-left: 0.35rem;
    width: 2rem;
    margin-bottom: 1em;
  }
}
input[type="text"], input[type="number"] {
  margin: 0.5rem 0 0 0;
  width: 2rem;
}

#elevatorDiv {
  margin-left: 4em;
  margin-right: 1em;
}

#elevatorText {
  margin-left: 1em;
}
</style>