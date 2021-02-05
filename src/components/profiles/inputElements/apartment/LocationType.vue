<template>
  <div style="width: 100%">
    <select v-if="idValue === 'ARB'" v-model="locationType" v-on:click="emitToParent">
      <option value="" selected disabled hidden>Sijainnin tyyppi</option>
      <option v-for="(type, index,) in optionLocationTypes" :value="type.value" :key="index">{{ type.text }}</option>
    </select>

    <div v-else class="multiselect">

      <div class="selectBox pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Sijainnin tyyppi</option>
        </select>
        <div class="overSelect"></div>
      </div>

      <div id="checkboxes-locationtype" class="checkboxes check__label-only">
        <div v-for="(type, index,) in optionLocationTypes" :key="index" class="flexbox pointer">
          <input type="checkbox" :id="idValue+'l'+index" />
          <label :for="idValue+'l'+index" @click="handleAges(type.value)">{{ type.text }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationType',
  props: ['idValue'],

  data() {
    return {
      optionLocationTypes: [
        { text: 'Downtown', value: 1, checked: false },
        { text: 'Suburb', value: 2, checked: false },
        { text: 'Conurbation', value: 3, checked: false },
        { text: 'Good public transport connections', value: 4, checked: false },
        { text: 'Sea view', value: 5, checked: false },
        { text: 'Lots of cafes and restaurants', value: 6, checked: false }
      ],
      locationType: '',
      locationTypes: [],
      expanded: false,
    }
  },
  methods: {
    emitToParent() {
      if (this.idValue === 'P') {
        this.$emit('childToParent', {'types': this.locationType, 'show': false});
      } else {
        this.$emit('childToParent', {'types': this.locationTypes, 'show': this.expanded})
      }
    },
    handleAges(value) { //For loop?
      switch(value) {
        case 1:
          this.optionLocationTypes[0].checked = !this.optionLocationTypes[0].checked;
          break;
        case 2:
          this.optionLocationTypes[1].checked = !this.optionLocationTypes[1].checked;
          break;
        case 3:
          this.optionLocationTypes[2].checked = !this.optionLocationTypes[2].checked;
          break;
        case 4:
          this.optionLocationTypes[3].checked = !this.optionLocationTypes[3].checked;
          break;
        case 5:
          this.optionLocationTypes[4].checked = !this.optionLocationTypes[4].checked;
          break;
        case 6:
         this.optionLocationTypes[5].checked = !this.optionLocationTypes[5].checked;
          break;
      }
      this.updateLocationTypesArr();
    },
    updateLocationTypesArr() {
      let arr = [];
      this.optionLocationTypes.forEach(type => {
        if (type.checked) {
          arr.push(type.value);
        }
      })
      this.locationTypes = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById("checkboxes-locationtype");
      if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
      } else {
        checkboxes.style.display = "none";
        this.expanded = false;
      }
      this.emitToParent();
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
