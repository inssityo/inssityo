<template>
  <div style="width: 100%">
    <select v-if="idValue === 'P'" v-model="type" v-on:click="emitToParent">
      <option value="" selected disabled hidden>{{workTypeChoice ? optionWorkTypes[workTypeChoice-1].text : "Työtyyppi"}}</option>
      <option v-for="(type, index,) in optionWorkTypes" :value="type.value" :key="index">{{ type.text }}</option>
    </select>

    <div v-else class="multiselect">

      <div class="selectBox pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Työtyyppi</option>
        </select>
        <div class="overSelect"></div>
      </div>

      <div id="checkboxes-worktype" class="checkboxes check__label-only">
        <div v-for="(type, index,) in optionWorkTypes" :key="index" class="flexbox pointer">
          <input type="checkbox" :id="idValue+'w'+index" />
          <label :for="idValue+'w'+index" @click="handleWorkTypes(type.value)">{{ type.text }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkType',
  props: {employmentStatusP:{type:Number}, employmentStatusR: {type:Number}, idValue:{type:String}, workTypeChoice: {
    type: Number
  }},

  watch: {
    employmentStatus: function() {

      this.handleWorkType();
    }
  },
  data() {
    return {
      optionWorkTypes: [
        { text: 'Päivätyö', value: 1, checked: false },
        { text: 'Vuorotyö', value: 2, checked: false },
        { text: 'Yötyö', value: 3, checked: false },
        { text: 'Reissutyö', value: 4, checked: false },
      ],
      type: '',
      types: [],
      expanded: false,
    }
  },
  methods: {
    emitToParent() {
      console.log("wor " + this.type + this.types)
      if (this.idValue === 'P') {
        this.$emit('childToParent', {'types': this.type, 'show': false});
      } else {
        this.$emit('childToParent', {'types': this.types, 'show': this.expanded})
      }
    },
    handleWorkTypes(value) {
      switch(value) {
        case 1:
          this.optionWorkTypes[0].checked = !this.optionWorkTypes[0].checked;
          break;
        case 2:
          this.optionWorkTypes[1].checked = !this.optionWorkTypes[1].checked;
          break;
        case 3:
          this.optionWorkTypes[2].checked = !this.optionWorkTypes[2].checked;
          break;
        case 4:
          this.optionWorkTypes[3].checked = !this.optionWorkTypes[3].checked;
          break;
      }
      this.updateWorkTypesArr();
    },
    updateWorkTypesArr() {
      let arr = [];
      this.optionWorkTypes.forEach(type => {
        if (type.checked) {
          arr.push(type.value);
        }
      })
      this.types = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById("checkboxes-worktype");
      if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
      } else {
        checkboxes.style.display = "none";
        this.expanded = false;
      }
      this.emitToParent();
    },
    handleWorkType() { //Ei taida toimia?
      if (this.employmentStatusP !== 1) {
        this.type = '';
      }
      else if (!this.employmentStatusR) {
        console.log("in")
        this.types = [];
        for (let i= 0; i < this.optionWorkTypes.length; i++ ) {
          this.optionWorkTypes[i].checked = false;
          console.log("in " + this.optionWorkTypes[i].checked)
        }
      }
      this.emitToParent();
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
