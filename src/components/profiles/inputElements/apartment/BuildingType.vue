<template>
  <div v-bind:class="{'width50': idValue !== 'ARB'}">
    <h4>Talotyyppi</h4>
    <select v-if="idValue === 'ARB'" v-model="buildingType" v-on:click="emitToParent">
      <option value="" selected disabled hidden>Valitse...</option>
      <option v-for="(type, index,) in optionBuildingTypes" :value="type.value" :key="index">{{ type.text }}</option>
    </select>

    <div v-else class="multiselect">

      <div class="selectBox pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Talotyyppi</option>
        </select>
        <div class="overSelect"></div>
      </div>

      <div id="checkboxes-buildingtype" class="checkboxes check__label-only">
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
      if (this.idValue === 'P') {
        this.$emit('childToParent', {'types': this.buildingType, 'show': false});
      } else {
        this.$emit('childToParent', {'types': this.buildingTypes, 'show': this.expanded})
      }
    },
    handleBuildingTypes(value) {
      switch(value) {
        case 1:
          this.optionBuildingTypes[0].checked = !this.optionBuildingTypes[0].checked;
          break;
        case 2:
          this.optionBuildingTypes[1].checked = !this.optionBuildingTypes[1].checked;
          break;
        case 3:
          this.optionBuildingTypes[2].checked = !this.optionBuildingTypes[2].checked;
          break;
        case 4:
          this.optionBuildingTypes[3].checked = !this.optionBuildingTypes[3].checked;
          break;
        case 5:
          this.optionBuildingTypes[4].checked = !this.optionBuildingTypes[4].checked;
          break;
      }
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
      let checkboxes = document.getElementById("checkboxes-buildingtype");
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

.width100 {
  width: 50%;
}

select {
  max-width: 75%;
}

</style>
