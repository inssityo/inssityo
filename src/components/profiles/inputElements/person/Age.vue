<template>
  <div style="width: 100%">
    <select v-if="idValue === 'P'" v-model="age" v-on:click="emitToParent">
      <option value="" selected disabled hidden>Ikä</option>
      <option v-for="(age, index,) in optionAges" :value="age.value" :key="index">{{ age.text }}</option>
    </select>

    <div v-else class="multiselect">

      <div class="selectBox pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Ikä</option>
        </select>
        <div class="overSelect"></div>
      </div>

      <div id="checkboxes-age" class="checkboxes check__label-only">
        <div v-for="(age, index,) in optionAges" :key="index" class="flexbox pointer">
          <input type="checkbox" :id="idValue+'a'+index" />
          <label :for="idValue+'a'+index" @click="handleAges(age.value)">{{ age.text }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  name: 'Age',
  props: ['idValue'],

  data() {
    return {
      optionAges: [
        { text: 'under 20', value: 1, checked: false },
        { text: '20-24', value: 2, checked: false },
        { text: '25-29', value: 3, checked: false },
        { text: '30-34', value: 4, checked: false },
        { text: '35-39', value: 5, checked: false },
        { text: '40-44', value: 6, checked: false },
        { text: '45-49', value: 7, checked: false },
        { text: 'over 50', value: 8, checked: false }
      ],
      age: '',
      ages: [],
      expanded: false,
    }
  },
  methods: {
    emitToParent() {
      if (this.idValue === 'P') {
        this.$emit('childToParent', {'ages': this.age, 'show': false});
      } else {
        this.$emit('childToParent', {'ages': this.ages, 'show': this.expanded})
      }
    },
    handleAges(value) {
      switch(value) {
        case 1:
          this.optionAges[0].checked = !this.optionAges[0].checked;
          break;
        case 2:
          this.optionAges[1].checked = !this.optionAges[1].checked;
          break;
        case 3:
          this.optionAges[2].checked = !this.optionAges[2].checked;
          break;
        case 4:
          this.optionAges[3].checked = !this.optionAges[3].checked;
          break;
        case 5:
          this.optionAges[4].checked = !this.optionAges[4].checked;
          break;
        case 6:
         this.optionAges[5].checked = !this.optionAges[5].checked;
          break;
        case 7:
          this.optionAges[6].checked = !this.optionAges[6].checked;
          break;
        case 8:
         this.optionAges[7].checked = !this.optionAges[7].checked;
          break;
      }
      this.updateAgesArr();
    },
    updateAgesArr() {
      let arr = [];
      this.optionAges.forEach(age => {
        if (age.checked) {
          arr.push(age.value);
        }
      })
      this.ages = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById("checkboxes-age");
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

