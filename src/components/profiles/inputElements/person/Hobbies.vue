<template>
  <div class="wrapper">
    <div>
      <p>Harrastukset</p>
      <p v-if="idValue === 'P'">En harrasta<span>-</span>Himoharrastaja</p>
      <p v-if="idValue === 'R'">Ei harrasta<span>-</span>Himoharrastaja</p>
    </div>
    <div v-for="(hobby, index) in optionsHobbies" :key="'h'+index" :id="idValue+'h'+index">  
      <p>{{ hobby.text }}</p>
      <div class="without_dot" >
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
        { text: 'Kädentaidot', value: 'handicrafts', level: 1 },
        { text: 'Urheilu', value: 'sport', level: 1 },
        { text: 'Kulttuuri', value: 'culture', level: 1 },
        { text: 'Taide', value: 'art', level: 1 },
        { text: 'Keräily', value: 'collecting', level: 1 },
        { text: 'Ruuanlaitto', value: 'cooking', level: 1 },
        { text: 'Pelaaminen', value: 'playing', level: 1 },
        { text: 'Vapaaehtoistyö', value: 'volunteering', level: 1 },
        { text: 'Matkustelu', value: 'traveling', level: 1 },
        { text: 'Tietotekniikka', value: 'it', level: 1 },
      ],
      optionLevels: [
        { level: 1 },
        { level: 2 },
        { level: 3 },
        { level: 4 },
        { level: 5 },
        { level: 6 },
        { level: 7 },
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.optionsHobbies)
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

label {
  letter-spacing: 0.05rem;
  cursor: pointer;
}
.wrapper div:not(:first-child) p {
  margin: 0;
}
p {
  padding-right: 0.2rem;
  padding-bottom: 1rem;
}
span {
  display: inline-block;
  width: 2.1rem;
  text-align: center;
}
.wrapper div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_group-intoxicants div {
  margin-top: 0.2rem;
}
.form_group-intoxicants div div {
  margin-bottom: 0;
}
.form_group-intoxicants div .without_dot {
  margin-top: 0.2rem !important;
}
.form_group-intoxicants div p {
  margin: 0;
}
.without_dot {
  display: flex;
  align-items: center;
  margin-top: 0.2rem!important;
  flex-wrap: wrap;
}
.without_dot div {
  margin-bottom: 0.5rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.without_dot input[type="radio"] {
  visibility: hidden;
  height: 0;
  width: 0;
  margin: 0;
}
.without_dot label {
  height: 1rem;
  text-align: center;
  background-color: v.$White;
  padding: 0.3rem;
  display:inline-block;
  width: 1rem;
  margin: 0.2rem 0 0.2rem 0.2rem;
  border-radius: 50%;
  font-size: 0.75rem!important;
}
.without_dot div:first-child label,
.without_dot div:last-child label {
  width: 0.9rem;
  height: 0.9rem;
}
.without_dot div:nth-child(2) label,
.without_dot div:nth-child(6) label {
  width: 0.75rem;
  height: 0.75rem;
}
.without_dot div:nth-child(3) label,
.without_dot div:nth-child(5) label {
  width: 0.5rem;
  height: 0.5rem;
}
.without_dot div:nth-child(4) label {
  border: 0.1rem solid v.$KAMGreySemiDark;
  width: 0.35rem;
  height: 0.35rem;
}
.without_dot div:nth-child(4) label:hover,
.without_dot div:nth-child(4) input[type="radio"]:checked + label {
  background: v.$KAMGrey;
  border: 0.15rem solid v.$KAMGreyDark;
  width: 0.25rem;
  height: 0.25rem;
}
.without_dot div:first-child label, 
.without_dot div:nth-child(2) label, 
.without_dot div:nth-child(3) label {
  border: 0.1rem solid v.$KAMGreyDark;
}
.without_dot div:nth-child(5) label, 
.without_dot div:nth-child(6) label,
.without_dot div:last-child label {
  border: 0.1rem solid v.$KAMGreenDark;
}
.without_dot div:first-child label:hover, 
.without_dot div:nth-child(2) label:hover, 
.without_dot div:nth-child(3) label:hover,
.without_dot div:first-child input[type="radio"]:checked + label,
.without_dot div:nth-child(2) input[type="radio"]:checked + label,
.without_dot div:nth-child(3) input[type="radio"]:checked + label   {
  background: v.$KAMGreyDark;
  border: 0.1rem solid v.$KAMGreyDark;
}
.without_dot div:nth-child(5) label:hover, 
.without_dot div:nth-child(6) label:hover,
.without_dot div:last-child label:hover,
.without_dot div:nth-child(5) input[type="radio"]:checked + label,
.without_dot div:nth-child(6) input[type="radio"]:checked + label,
.without_dot div:last-child input[type="radio"]:checked + label {
  background: v.$KAMGreenDark;
  border: 0.1rem solid v.$KAMGreenDark;
}


.without_dot label:last-child {
  margin-right: 0;
}


</style>