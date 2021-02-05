<template>
  <div v-bind:class="{'width-100': idValue === 'A'}">
    <div class="multiselect">

      <div class="selectBox pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Lisäominaisuudet</option>
        </select>
        <div class="overSelect"></div>
      </div>

      <div :id="idValue+'checkboxes-feature'" class="checkboxes check__label-only">
        <div v-for="(feature, index,) in optionFeatures" :key="index" class="flexbox pointer">
          <input type="checkbox" :id="idValue+'fe'+index" />
          <label :for="idValue+'fe'+index" @click="handleFeatures(feature.value)">{{ feature.text }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  props: ['idValue'],

  data() {
    return {
      optionFeatures: [
        { text: 'Lift', value: 1, checked: false },
        { text: 'Garage', value: 2, checked: false },
        { text: 'Hot Tub', value: 3, checked: false },
        { text: 'Swimming Pool', value: 4, checked: false },
        { text: 'Furnished', value: 5, checked: false }
      ],
      features: [],
      expanded: false,
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', {'features': this.features, 'show': this.expanded})
    },
    handleFeatures(value) {
      switch(value) {
        case 1:
          this.optionFeatures[0].checked = !this.optionFeatures[0].checked;
          break;
        case 2:
          this.optionFeatures[1].checked = !this.optionFeatures[1].checked;
          break;
        case 3:
          this.optionFeatures[2].checked = !this.optionFeatures[2].checked;
          break;
        case 4:
          this.optionFeatures[3].checked = !this.optionFeatures[3].checked;
          break;
        case 5:
          this.optionFeatures[4].checked = !this.optionFeatures[4].checked;
          break;
      }
      this.updateFeaturesArr();
    },
    updateFeaturesArr() {
      let arr = [];
      this.optionFeatures.forEach(feature => {
        if (feature.checked) {
          arr.push(feature.value);
        }
      })
      this.features = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById(this.idValue+"checkboxes-feature");
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

.width-100 {
  width: 100%;
}

</style>
