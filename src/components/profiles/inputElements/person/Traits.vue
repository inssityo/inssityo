<template>
  <div>  
    <p v-if="idValue === 'P'">Valitse luonnettasi kuvaavat sanat (max. 7)</p>
    <p v-if="idValue === 'R'">Valitse luonteenpiirteet, joita arvostaisit tulevassa kämppiksessä (max. 7)</p>
    <div class="text-danger">{{ errors.traits }}</div>
    <div class="check__label-only">
      <div v-for="(trait, index,) in optionTraits" :key="index">
        <input type="checkbox" :id="idValue+'t'+index" />
        <label class="hover--check__label-only" :for="idValue+'t'+index" @click="handleTraits(index, idValue+'t'+index)">{{ trait.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Traits',
  props: ['idValue'],

  data() {
    return {
      traitList: [],
      optionTraits: [
        { text: 'Kokeilunhaluinen', value: 'experimental', checked: false },
        { text: 'Luotettava', value: 'trustworthy', checked: false },
        { text: 'Huumorintajuinen', value: 'humorous', checked: false },
        { text: 'Ennakkoluuloton', value: 'open minded', checked: false },
        { text: 'Puhelias', value: 'talkative', checked: false },
        { text: 'Hiljainen', value: 'quiet', checked: false },
        { text: 'Rauhallinen', value: 'calm', checked: false },
        { text: 'Levoton', value: 'restless', checked: false },
        { text: 'Ymmärtäväinen', value: 'understanding', checked: false },
        { text: 'Harkitseva', value: 'prudent', checked: false },
        { text: 'Itsenäinen', value: 'independent', checked: false },
        { text: 'Rohkea', value: 'brave', checked: false },
        { text: 'Seikkailunhaluinen', value: 'adventurous', checked: false },
        { text: 'Pohdiskeleva', value: 'contemplative', checked: false },
        { text: 'Järjestelmällinen', value: 'systematic', checked: false },
        { text: 'Tavoitteellinen', value: 'goal oriented', checked: false },
        { text: 'Luova', value: 'creative', checked: false },
        { text: 'Herkkä', value: 'sensitive', checked: false },
        { text: 'Tunnollinen', value: 'conscientious', checked: false },
        { text: 'Huomionhaluinen', value: 'attention seeking', checked: false }
      ],
      errors: {},
      errorList: {},
      isValid: true,
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.traitList)
    },
    //check or uncheck a trait
    handleTraits(index, id) {
      this.optionTraits[index].checked = !this.optionTraits[index].checked;
      this.updateTraitList();
      this.handleNumberOfTraits();

      if (!this.isValid) {
        this.optionTraits[index].checked = !this.optionTraits[index].checked;
        this.updateTraitList();
  
        //uncheck checkbox
        document.getElementById(id).checked = true;
      }
      this.emitToParent();
    },
    updateTraitList: function () {
      //initializing the list
      this.traitList = [];

      //push all the true elements to the list
      for (let i = 0; i < this.optionTraits.length; i++) {
        if (this.optionTraits[i].checked) {
          this.traitList.push(this.optionTraits[i].value);
        }
      }
    },
    handleNumberOfTraits() {
      if (this.traitList.length > 7) {
        this.isValid = false;
        this.errorList["traits"] = "Max 7 characters can be chosen.";
        this.errors = this.errorList;
      } else {
        this.isValid = true;
        this.errors = {};
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.check__label-only div {
  margin: 0.15rem 0.1rem;
}

</style>
