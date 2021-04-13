<template>
  <div class="box flexbox" v-bind:class="{'width__50': idValue === 'ARB','remove__align-center2': expanded}">
    <label class="label__padding__leftless" v-bind:class="{'margin-top__025': expanded}">Talotyyppi:</label>
    <select v-if="idValue === 'ARB'" v-model="buildingType" v-on:click="emitToParent">
      <option value="" selected disabled hidden>Valitse...</option>
      <option v-for="(type, index,) in optionBuildingTypes" :value="type.value" :key="index">{{ type.text }}</option>
    </select>

    <div v-else class="multiselect">
      <div class="select-box pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Valitse...</option>
        </select>
        <div class="over-select"></div>
      </div>

      <div :id="idValue+'-checkboxes-building-type'" class="checkboxes check__label-only">
        <div v-for="(type, index,) in optionBuildingTypes" :key="index" class="flexbox pointer">
          <input type="checkbox" :id="idValue+'b'+index" />
          <label :for="idValue+'b'+index" @click="handleBuildingTypes(type.value)">{{ type.text }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BuildingType',
  props: ['idValue'],

  data() {
    return {
      optionBuildingTypes: [
        { text: 'Kerrostalo', value: 1, checked: false }, //High-Rise
        { text: 'Rivitalo', value: 2, checked: false }, //Terraced house
        { text: 'Paritalo', value: 3, checked: false }, //Detached house
        { text: 'Omakotitalo', value: 4, checked: false }, //Terraced House
        { text: 'Ketjutalo', value: 5, checked: false }, //Semi-Detached House
        { text: 'Luhtitalo', value: 6, checked: false }, //Luhtitalo
        { text: 'Puutalo-osake', value: 7, checked: false }, //Wooden house share
        { text: 'Muu', value: 8, checked: false }, //Other
      ],
      buildingType: '',
      buildingTypes: [],
      expanded: false,
    }
  },
  methods: {
    emitToParent() {

      if (this.idValue === 'ARB') {
        this.$emit('childToParent', {'types': this.buildingType, 'show': false});
      } else {
        this.$emit('childToParent', {'types': this.buildingTypes, 'show': this.expanded})
      }
    },
    handleBuildingTypes(value) {
        this.optionBuildingTypes[value-1].checked = !this.optionBuildingTypes[value-1].checked
      this.updateBuildingTypesArr();
    },
    updateBuildingTypesArr() {
      let arr = [];
      this.optionBuildingTypes.forEach(type => {
        if (type.checked) {
          arr.push(type.value);
        }
      })
      this.buildingTypes = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById(this.idValue+"-checkboxes-building-type");
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

.remove__align-center2 {
  align-items: normal !important;
}
.margin-top__025 {
  margin-top: 0.2rem;
}

</style>
