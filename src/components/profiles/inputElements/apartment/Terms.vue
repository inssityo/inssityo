<template>
  <div class="terms">
    <div>
      <input type="checkbox" id="smoking" v-model="terms[0].smoking" v-on:click="emitToParent">
      <label for="smoking">Asunnossa ei saa tupakoida</label>
    </div>
    <div>
      <input type="checkbox" id="pets" v-model="terms[1].pets" v-on:click="emitToParent"> <!--lisää idValue -->
      <label for="pets">Asunnossa ei saa pitää lemmikkejä</label>
    </div>
    <div>
      <input type="checkbox" id="insurance" v-model="terms[2].insurance" v-on:click="emitToParent"> <!--lisää idValue -->
      <label for="insurance">Kotivakuutus vaaditaan</label>
    </div>
    <div>
      <input type="checkbox" id="rentIncrease" v-model="terms[3].checkedRentIncrease" v-on:click="emitToParent">
      <label for="rentIncrease">Vuokraa korotetaan vuosittain</label>
    </div>
    <div v-show="terms[3].checkedRentIncrease">
      <label for="amount">Määrä %</label>
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
        { smoking: false },
        { pets: false },
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
  margin-bottom: 0.5rem;
}

</style>
