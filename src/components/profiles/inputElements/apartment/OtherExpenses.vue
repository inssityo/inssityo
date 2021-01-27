<template>
  <div class="expenses">
    <div>
      <label for="electricity">Sisältää sähkön
        <input type="checkbox" id="electricity" v-model="expenses[0].electricity" v-on:click="emitToParent">
        <span class="checkmark"></span>
      </label>
    </div>
    <div>
      <label for="water">Sisältää veden
        <input type="checkbox" id="water" v-model="expenses[1].water" v-on:click="emitToParent">
        <span class="checkmark"></span>
      </label>
    </div>
    <div>
      <label for="data">Sisältää internetyhteyden
        <input type="checkbox" id="data" v-model="expenses[2].checkedDataConnection" v-on:click="emitToParent">
        <span class="checkmark"></span>
      </label>
    </div>
    <div v-show="expenses[2].checkedDataConnection">
      <label for="speed">Nopeus</label>
      <input type="text" id="speed" v-model="speed" v-on:keyup="emitToParent">
    </div>
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

.expenses {
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    align-items: center;
  }
  div:last-child label{
    margin-right: 0.5rem;
  }
}
label {
  display: block;
  position: relative;
  padding-left: 1.8rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  
  input {
    -webkit-appearance: none;
  }
  input:checked ~ .checkmark {
    background-color: v.$KAMGreenDark;
  }
  .checkmark:after {
    left: 0.5rem;
    top: 0.3rem;
    width: 0.3rem;
    height: 0.6rem;
    border: solid v.$White;
    border-width: 0 0.2rem 0.2rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
label:hover input ~ .checkmark {
  background-color: v.$KAMGreyDark;
}
label input:checked ~ .checkmark:after { //Show the checkmark when checked
  display: block;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.2rem;
  width: 1.2rem;
  background-color: v.$KAMGreySemiDark;
  border-radius: 0.2rem;
}
.checkmark:after { //Hidden when not checked 
  content: "";
  position: absolute;
  display: none;
}

input[type="text"] {
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.3rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 8.5rem;
}

</style>
