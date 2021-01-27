<template>
  <div class="terms">
    <div>
      <label for="smoking">Asunnossa ei saa tupakoida
        <input type="checkbox" id="smoking" v-model="terms[0].smoking" v-on:click="emitToParent">
        <span class="checkmark"></span>
      </label>
    </div>
    <div>
      <label for="pets">Asunnossa ei saa pitää lemmikkejä
        <input type="checkbox" id="pets" v-model="terms[1].pets" v-on:click="emitToParent"> <!--lisää idValue -->
        <span class="checkmark"></span>
      </label>
    </div>
    <div>
      <label for="insurance">Kotivakuutus vaaditaan
        <input type="checkbox" id="insurance" v-model="terms[2].insurance" v-on:click="emitToParent"> <!--lisää idValue -->
        <span class="checkmark"></span>
      </label>
    </div>
    <div>
      <label for="rentIncrease">Vuokraa korotetaan vuosittain
        <input type="checkbox" id="rentIncrease" v-model="terms[3].checkedRentIncrease" v-on:click="emitToParent">
        <span class="checkmark"></span>
      </label>
    </div>
    <div v-show="terms[3].checkedRentIncrease">
      <label for="amount">Määrä</label>
      <input type="text" id="amount" v-model="amount" v-on:keyup="emitToParent">
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherExpenses',

  data() {
    return {
      terms: [
        { smoking: false },//true: Tupakointi kielletty
        { pets: false }, //false: Lemmikit sallittuja
        { insurance: false },
        { checkedRentIncrease: false },
      ],
      amount: '',
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', {'terms': this.terms, 'amount': this.amount})
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.terms {
  margin-top: 0.3rem;
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
  width: 3rem;
}

</style>
