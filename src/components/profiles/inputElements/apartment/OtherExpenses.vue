<template>
  <div>
    <label for="electricity" class="checkmark-label">Sisältää sähkön
      <input type="checkbox" id="electricity" v-model="expenses[0].electricity" v-on:click="emitToParent">
      <span class="checkmark"></span>
    </label>

    <label for="water" class="checkmark-label">Sisältää veden
      <input type="checkbox" id="water" v-model="expenses[1].water" v-on:click="emitToParent">
      <span class="checkmark"></span>
    </label>

    <label for="data" class="checkmark-label">Sisältää internetyhteyden
      <input type="checkbox" id="data" v-model="expenses[2].checkedDataConnection" v-on:click="emitToParent">
      <span class="checkmark"></span>
    </label>

    <label v-show="expenses[2].checkedDataConnection" for="speed">Nopeus
      <input type="number" id="speed" oninput="validity.valid||(value=0);" v-model="speed" v-on:keyup="emitToParent">
      mbit/s
    </label>
  </div>
</template>

<script>
export default {
  name: 'OtherExpenses', //Lisää autopaikka

  data() {
    return {
      expenses: [
        { electricity: false },
        { water: false },
        { checkedDataConnection: false }
      ],
      speed: '', //10 M (valokuitu) 
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', {'expenses': this.expenses, 'speed': this.speed})
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

div {
  margin-top: 0.3rem;

  //speed
  label:last-of-type {
    margin-left: 1.5rem;
    
    input {
      margin: 0.3rem 0.5rem;
      width: 3rem;
    }
  }
}

</style>
