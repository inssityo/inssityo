<template>
  <div style="width: 100%">
    <select v-if="idValue === 'P'" v-model="gender" v-on:click="emitToParent">
      <option value="" selected disabled hidden>Sukupuoli</option>
      <option v-for="(gender, index,) in optionGenders" :value="gender.value" :key="index">{{ gender.text }}</option>
    </select>

    <div v-else class="multiselect">

      <div class="selectBox pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Sukupuoli</option>
        </select>
        <div class="overSelect"></div>
      </div>

      <div id="checkboxes-gender" class="checkboxes check__label-only">
        <div v-for="(gender, index,) in optionGenders" :key="index" class="flexbox pointer">
          <input type="checkbox" :id="idValue+'g'+index" />
          <label :for="idValue+'g'+index" @click="handleGenders(gender.value)">{{ gender.text }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Gender',
  props: ['idValue'],

  data() {
    return {
      optionGenders: [
        { text: 'Mies', value: 1, checked: false },
        { text: 'Nainen', value: 2, checked: false },
        { text: 'Muu', value: 3, checked: false }
      ],
      gender: '',
      genders: [],
      expanded: false,
    }
  },
  methods: {
    emitToParent() {
      if (this.idValue === 'P') {
        this.$emit('childToParent', {'genders': this.gender, 'show': false});
      } else {
        this.$emit('childToParent', {'genders': this.genders, 'show': this.expanded})
      }
    },
    handleAges(value) {
      switch(value) {
        case 1:
          this.optionGenders[0].checked = !this.optionGenders[0].checked;
          break;
        case 2:
          this.optionGenders[1].checked = !this.optionGenders[1].checked;
          break;
        case 3:
          this.optionGenders[2].checked = !this.optionGenders[2].checked;
          break;
      }
      this.updateGendersArr();
    },
    updateGendersArr() {
      let arr = [];
      this.optionGenders.forEach(gender => {
        if (gender.checked) {
          arr.push(gender.value);
        }
      })
      this.genders = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById("checkboxes-gender");
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
