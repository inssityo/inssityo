<template>
  <div style="width: 100%">
    <select v-if="idValue === 'P'" v-model="status" v-on:click="emitToParent">
      <option value="" selected disabled hidden>Elämäntilanne</option>
      <option v-for="(status, index,) in optionStatuses" :value="status.value" :key="index">{{ status.text }}</option>
    </select>

    <div v-else class="multiselect">

      <div class="selectBox pointer" @click="showCheckboxes()">
        <select v-bind:class="{'background--green': expanded}">
          <option>Elämäntilanne</option>
        </select>
        <div class="overSelect"></div>
      </div>

      <div id="checkboxes-status" class="checkboxes check__label-only">
        <div v-for="(status, index,) in optionStatuses" :key="index" class="flexbox pointer">
          <input type="checkbox" :id="idValue+'s'+index" />
          <label :for="idValue+'s'+index" @click="handleStatuses(status.value)">{{ status.text }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Status',
  props: ['idValue'],

  data() {
    return {
      optionStatuses: [
        { text: 'Työssäkäyvä', value: 1, checked: false },
        { text: 'Työtön', value: 2, checked: false },
        { text: 'Opiskelija', value: 3, checked: false },
        { text: 'Eläkeläinen', value: 4, checked: false }
      ],
      status: '',
      statuses: [],
      expanded: false,
    }
  },
  methods: {
    emitToParent() {
      if (this.idValue === 'P') {
        this.$emit('childToParent', {'statuses': this.status, 'show': false});
      } else {
        this.$emit('childToParent', {'statuses': this.statuses, 'show': this.expanded})
      }
    },
    handleStatuses(value) {
      switch(value) {
        case 1:
          this.optionStatuses[0].checked = !this.optionStatuses[0].checked;
          break;
        case 2:
          this.optionStatuses[1].checked = !this.optionStatuses[1].checked;
          break;
        case 3:
          this.optionStatuses[2].checked = !this.optionStatuses[2].checked;
          break;
        case 4:
          this.optionStatuses[3].checked = !this.optionStatuses[3].checked;
          break;
      }
      this.updateStatusesArr();
    },
    updateStatusesArr() {
      let arr = [];
      this.optionStatuses.forEach(status => {
        if (status.checked) {
          arr.push(status.value);
        }
      })
      this.statuses = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById("checkboxes-status");
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
