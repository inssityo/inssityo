<template>
  <div>  
    <p v-if="idValue === 'P'">Valitse luonnettasi kuvaavat sanat (max. 7)</p>
    <p v-if="idValue === 'R'">Valitse luonteenpiirteet, joita arvostaisit tulevassa kämppiksessä (max. 7)</p>
    <div class="text-danger">{{ errors.trait }}</div>
    <div class="check__label-only">
      <div v-for="(trait, index,) in optionsTraits" :key="index">
        <input type="checkbox" :id="idValue+'t'+index" v-model="trait.checked"/>
        <label class="hover--check__label-only" :for="idValue+'t'+index" v-on:click="emitToParent" @click="handleTraits">{{ trait.text }}</label>
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
      checkedTraitList: [],
      optionsTraits: [
        { text: 'Kokeilunhaluinen', value: 'experimental', checked: false },
        { text: 'Luotettava', value: 'trustworthy', checked: false },
        { text: 'Huumorintajuinen', value: 'humorous', checked: false },
        { text: 'Ennakkoluuloton', value: 'open_minded', checked: false },
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
        { text: 'Tavoitteellinen', value: 'goal_oriented', checked: false },
        { text: 'Luova', value: 'creative', checked: false },
        { text: 'Herkkä', value: 'sensitive', checked: false },
        { text: 'Tunnollinen', value: 'conscientious', checked: false },
        { text: 'Huomionhaluinen', value: 'attention_seeking', checked: false }
      ],
      errors: {},
      errorList: {},
      isValid: true,
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.optionsTraits)
    },
    handleCharacters() {
      
      let checked = [];
      let i;
      for (i = 0; i < this.optionsTraits.length; i++) {
        if (this.optionsTraits[i].checked) {
          checked.push(this.optionsTraits[i]);
        }
      }
      this.checkedTraitList = checked;
      console.log("check " + this.checkedTraitList.length)
      
      if (this.checkedTraitList.length > 6) {
        console.log(this.checkedTraitList.length)
        //this.checkedCharacterList[0].checked = false; //Poistaa kaksi aikaisempaa
        let p = checked.pop();
        
        this.optionsTraits.forEach(item => {
          if (item.value === p.value) {
            item.checked = false;
          }
        })
      }
      //console.log(JSON.stringify(this.checkedTraitList))


      //let result = this.optionsTraits.filter(c => c.checked); 
      //console.log("res" + JSON.stringify(result)); //Toimii viiveellä
     
      if (this.checkedTraitList.length + 1 > 7) {
        this.isValid = false;
        this.errorList["traits"] = "Max 7 characters can be chosen.";
        this.errors = this.errorList;
      } else {
        this.isValid = true;
        this.errors = {};
      
      }
      //console.log("Values of checked items: ", this.optionsTraits) //Toimii oikein
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.check__label-only div {
  margin: 0.15rem 0.1rem;
}

</style>
