<template>
  <div>
    <div class="flexbox">
      <p>Harrastukset</p>
      <p v-if="idValue === 'P'">En harrasta<span>-</span>Himoharrastaja</p>
      <p v-if="idValue === 'R'">Ei harrasta<span>-</span>Himoharrastaja</p>
    </div>
    <div class="flexbox" v-for="(hobby, index) in optionsHobbies" :key="'h'+index" :id="idValue+'h'+index">  
      <p class="margin__nothing">{{ hobby.text }}</p>
      <div class="check__label-only" >
        <div v-for="(level, index2,) in optionLevels" :key="'l'+index2">
          <input type="radio" :id="index+idValue+'h'+index2" :value="level.level" v-model="optionsHobbies[index].level"/>
          <label :for="index+idValue+'h'+index2" v-on:click="emitToParent" ></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hobbies',
  props: ['idValue'],

  data() {
    return {
      optionsHobbies: [
        { text: 'Lukeminen', value: 'reading', level: 1 },
        { text: 'Musiikki', value: 'music', level: 1 },
        { text: 'Kädentaidot', value: 'crafts', level: 1 },
        { text: 'Urheilu', value: 'sports', level: 1 },
        { text: 'Kulttuuri', value: 'culture', level: 1 },
        { text: 'Taide', value: 'art', level: 1 },
        { text: 'Keräily', value: 'collecting', level: 1 },
        { text: 'Ruuanlaitto', value: 'cooking', level: 1 },
        { text: 'Pelaaminen', value: 'games', level: 1 },
        { text: 'Vapaaehtoistyö', value: 'voluntaryWork', level: 1 },
        { text: 'Matkustelu', value: 'travelling', level: 1 },
        { text: 'Tietotekniikka', value: 'informationTech', level: 1 },
      ],
      optionLevels: [
        { level: 1 },
        { level: 2 },
        { level: 3 },
        { level: 4 },
        { level: 5 },
        { level: 6 },
        { level: 7 },
      ],
      hobbies: [
        {
          reading: 0,
          music: 1,
          crafts: 1,
          sports: 1,
          culture: 1,
          art: 1,
          collecting: 1,
          cooking: 1,
          games: 1,
          voluntaryWork: 1,
          travelling: 1,
          informationTech: 1
        }
      ]
    }
  },
  methods: {
    emitToParent() {
      /*for (let i = 0; i < this.optionsHobbies.length; i++) {
        delete this.optionsHobbies[i].text;
      }*/
      /*
      this.hobbies[0].reading = this.optionsHobbies[0].level;
      this.hobbies[0].music = this.optionsHobbies[1].level;
      this.hobbies[0].crafts = this.optionsHobbies[2].level;
      this.hobbies[0].sports = this.optionsHobbies[3].level;
      this.hobbies[0].culture = this.optionsHobbies[4].level;
      this.hobbies[0].art = this.optionsHobbies[5].level;
      this.hobbies[0].collecting = this.optionsHobbies[6].level;
      this.hobbies[0].cooking = this.optionsHobbies[7].level;
      this.hobbies[0].games = this.optionsHobbies[8].level;
      this.hobbies[0].voluntaryWork = this.optionsHobbies[9].level;
      this.hobbies[0].travelling = this.optionsHobbies[10].level;
      this.hobbies[0].informationTech = this.optionsHobbies[11].level;
      */
      
      this.$emit('childToParent', this.optionsHobbies)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

p {
  padding-right: 0.2rem;
  padding-bottom: 0.5rem;
}
span {
  display: inline-block;
  width: 2.1rem;
  text-align: center;
}
.check__label-only label {
  margin: 0.2rem 0 0.2rem 0.2rem;
  padding: 0.3rem;
  width: 1rem;
  height: 1rem;
  background-color: v.$White;
  display: inline-block;
  border-radius: 50%;
}
.check__label-only div {
  margin-bottom: 0.56rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.check__label-only div:first-child label,
.check__label-only div:last-child label {
  width: 0.9rem;
  height: 0.9rem;
}
.check__label-only div:nth-child(2) label,
.check__label-only div:nth-child(6) label {
  width: 0.75rem;
  height: 0.75rem;
}
.check__label-only div:nth-child(3) label,
.check__label-only div:nth-child(5) label {
  width: 0.5rem;
  height: 0.5rem;
}
.check__label-only div:nth-child(4) label {
  border: 0.1rem solid v.$KAMGreySemiDark;
  width: 0.35rem;
  height: 0.35rem;
}
.check__label-only div:nth-child(4) label:hover,
.check__label-only div:nth-child(4) input[type="radio"]:checked + label {
  background: v.$KAMGrey;
  border: 0.15rem solid v.$KAMGreyDark;
  width: 0.25rem;
  height: 0.25rem;
}
.check__label-only div:first-child label, 
.check__label-only div:nth-child(2) label, 
.check__label-only div:nth-child(3) label {
  border: 0.1rem solid v.$KAMGreyDark;
}
.check__label-only div:nth-child(5) label, 
.check__label-only div:nth-child(6) label,
.check__label-only div:last-child label {
  border: 0.1rem solid v.$KAMGreenDark;
}
.check__label-only div:first-child label:hover, 
.check__label-only div:nth-child(2) label:hover, 
.check__label-only div:nth-child(3) label:hover,
.check__label-only div:first-child input[type="radio"]:checked + label,
.check__label-only div:nth-child(2) input[type="radio"]:checked + label,
.check__label-only div:nth-child(3) input[type="radio"]:checked + label   {
  background: v.$KAMGreyDark;
  border: 0.1rem solid v.$KAMGreyDark;
}
.check__label-only div:nth-child(5) label:hover, 
.check__label-only div:nth-child(6) label:hover,
.check__label-only div:last-child label:hover,
.check__label-only div:nth-child(5) input[type="radio"]:checked + label,
.check__label-only div:nth-child(6) input[type="radio"]:checked + label,
.check__label-only div:last-child input[type="radio"]:checked + label {
  background: v.$KAMGreenDark;
  border: 0.1rem solid v.$KAMGreenDark;
}
.check__label-only label:last-child {
  margin-right: 0;
}

</style>