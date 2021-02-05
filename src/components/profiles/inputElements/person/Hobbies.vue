<template>
  <div>
    <div class="flexbox">
      <p>Harrastukset</p>
      <p v-if="idValue === 'P'">En harrasta<span>-</span>Himoharrastaja</p>
      <p v-if="idValue === 'R'">Ei harrasta<span>-</span>Himoharrastaja</p>
    </div>
    <div class="flexbox" v-for="(hobby, index) in optionHobbies" :key="'h'+index" :id="idValue+'h'+index">  
      <p class="margin__nothing">{{ hobby.text }}</p>
      <div class="check__label-only" >
        <div v-for="(level, index2,) in optionLevels" :key="'l'+index2">
          <input type="radio" :id="index+idValue+'h'+index2" :value="level.level" v-model="optionHobbies[index].level" @change="updateLevel(index)"/>
          <label :for="index+idValue+'h'+index2"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const READING = 'reading';
const MUSIC = 'music';
const CRAFTS = 'crafts';
const SPORTS = 'sports';
const CULTURE = 'culture';
const ART = 'art';
const COLLECTING = 'collecting';
const COOKING = 'cooking';
const GAMES = 'games';
const VOLUNTARYWORK = 'voluntaryWork';
const TRAVELLING = 'travelling';
const INFORMATIONTECH = 'informationTech';

export default {
  name: 'Hobbies',
  props: ['idValue'],

  data() {
    return {
      optionHobbies: [
        { text: 'Lukeminen', value: READING, level: 1 },
        { text: 'Musiikki', value: MUSIC, level: 1 },
        { text: 'Kädentaidot', value: CRAFTS, level: 1 },
        { text: 'Urheilu', value: SPORTS, level: 1 },
        { text: 'Kulttuuri', value: CULTURE, level: 1 },
        { text: 'Taide', value: ART, level: 1 },
        { text: 'Keräily', value: COLLECTING, level: 1 },
        { text: 'Ruuanlaitto', value: COOKING, level: 1 },
        { text: 'Pelaaminen', value: GAMES, level: 1 },
        { text: 'Vapaaehtoistyö', value: VOLUNTARYWORK, level: 1 },
        { text: 'Matkustelu', value: TRAVELLING, level: 1 },
        { text: 'Tietotekniikka', value: INFORMATIONTECH, level: 1 },
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
      hobbies: {
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
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', [this.hobbies]);
    },
    updateLevel(index){
      this.$nextTick(function () {});
      this.handleHobbies(index);
    },
    handleHobbies(index) {
      switch(this.optionHobbies[index].value) {
        case READING: 
          this.hobbies.reading = this.optionHobbies[0].level;
          break;
        case MUSIC: 
          this.hobbies.music = this.optionHobbies[1].level;
          break;
        case CRAFTS: 
          this.hobbies.crafts = this.optionHobbies[2].level;
          break;
        case SPORTS: 
          this.hobbies.sports = this.optionHobbies[3].level;
          break;
        case CULTURE: 
          this.hobbies.culture = this.optionHobbies[4].level;
          break;
        case ART: 
          this.hobbies.art = this.optionHobbies[5].level;
          break;
        case COLLECTING: 
          this.hobbies.collecting = this.optionHobbies[6].level;
          break;
        case COOKING: 
          this.hobbies.cooking = this.optionHobbies[7].level;
          break;
        case GAMES: 
          this.hobbies.games = this.optionHobbies[8].level;
          break;
        case VOLUNTARYWORK: 
          this.hobbies.voluntaryWork = this.optionHobbies[9].level;
          break;
        case TRAVELLING: 
          this.hobbies.travelling = this.optionHobbies[10].level;
          break;
        case INFORMATIONTECH: 
          this.hobbies.informationTech = this.optionHobbies[11].level;
          break;
      }
      this.emitToParent();
    }
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
  background: v.$KAMGreenSemiLight;
  border: 0.1rem solid v.$KAMGreenSemiLight;
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