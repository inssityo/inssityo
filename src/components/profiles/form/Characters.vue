<template>
  <div>  
    <p>Valitse luonnettasi kuvaavat sanat (max. 7)</p>
    <div class="text-danger">{{ errors.characters }}</div>
    <div class="without_dot">
      <div v-for="(character, index,) in optionsCharacters" :key="index">
        <input type="checkbox" :id="'c'+index" v-model="character.checked"/>
        <label :for="'c'+index" v-on:click="emitToParent" @click="handleCharacters">{{ character.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Characters',

  data() {
    return {
      checkedCharacterList: [],
      optionsCharacters: [
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
      this.$emit('childToParent', this.optionsCharacters)
    },
    handleCharacters() {
      
      let checked = [];
      let i;
      for (i = 0; i < this.optionsCharacters.length; i++) {
        if (this.optionsCharacters[i].checked) {
          checked.push(this.optionsCharacters[i]);
        }
      }
      this.checkedCharacterList = checked;

      if (this.checkedCharacterList.length > 2) {
        //this.checkedCharacterList[0].checked = false; //Poistaa kaksi aikaisempaa
        let p = checked.pop();
        
        this.optionsCharacters.forEach(item => {
          if (item.value === p.value) {
            item.checked = false;
          }
        })
      }
      //console.log(JSON.stringify(this.checkedCharacterList))


      //let result = this.optionsCharacters.filter(c => c.checked); 
      //console.log("res" + JSON.stringify(result)); //Toimii viiveellä
      console.log("check " + this.checkedCharacterList.length)
      if (this.checkedCharacterList.length + 1 > 7) {
        this.isValid = false;
        this.errorList["characters"] = "Max 7 characters can be chosen.";
        this.errors = this.errorList;
      } else {
        this.isValid = true;
        this.errors = {};
      
      }
      /*
      if (this.checked.length > 7) {
        this.isValid = false;
        this.errorList["characters"] = "Max 7 characters can be chosen.";
        this.errors = this.errorList;
      } else {
        this.isValid = true;
        this.errors = {};
      }*/

      //console.log("Values of checked items: ", this.optionsCharacters) //Toimii oikein
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

label {
  letter-spacing: 0.05rem;
  cursor: pointer;
}
.without_dot {
  display: flex;
  margin-top: 0.2rem!important;
  flex-wrap: wrap;
}
.without_dot div {
  margin: 0.15rem 0.1rem;
}
.without_dot input[type="radio"], .without_dot input[type="checkbox"] {
  visibility: hidden;
  height: 0;
  width: 0;
  margin: 0;
}
.without_dot label {
  vertical-align: middle;
  text-align: center;
  background-color: v.$KAMGreyDark;
  color: v.$White;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.75rem!important;
}
.without_dot input[type="radio"]:checked + label, .without_dot input[type="checkbox"]:checked + label{
  background-color: v.$KAMGreenSemiLight;
}

</style>
