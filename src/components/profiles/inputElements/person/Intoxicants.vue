<template>
  <div>
    <div>  
      <p v-if="idValue === 'P'">Käytätkö alkoholia päihtymistarkoitukseen?</p>
      <p v-if="idValue === 'R'">Sallitko alkoholin käytön päihtymistarkoitukseen?</p>
      <div class="without_dot" >
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="idValue+'i0'+index" :value="use.value" v-model="optionIntoxidants[0].use"/>
          <label :for="idValue+'i0'+index" v-on:click="emitToParent" >{{ use.text }}</label>
        </div>
      </div>
    </div>
    
    <div>
      <p v-if="idValue === 'P'">Tupakoitko?</p>
      <p v-if="idValue === 'R'">Sallitko tupakoinnin?</p>
      <div class="without_dot">
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="idValue+'i1'+index" :value="use.value" v-model="optionIntoxidants[1].use"/>
          <label :for="idValue+'i1'+index" v-on:click="emitToParent" >{{ use.text }}</label>
        </div>
      </div>
    </div>
    
    <div>
      <p v-if="idValue === 'P'">Käytätkö huumaavia aineita?</p>
      <p v-if="idValue === 'R'">Sallitko huumavien aineiden käytön?</p>
      <div class="without_dot">
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="idValue+'i2'+index" :value="use.value" v-model="optionIntoxidants[2].use"/>
          <label :for="idValue+'i2'+index" v-on:click="emitToParent" >{{ use.text }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intoxidants',
  props: ['idValue'],

  data() {
    return {
      optionIntoxidants: [
        { intoxidant: 'alcohol', use: 1 },
        { intoxidant: 'smoking', use: 1 },
        { intoxidant: 'drugs', use: 1 },
      ],
      optionUses: [
        { text: 'En lainkaan', value: 1 },
        { text: 'Silloin tällöin', value: 2 },
        { text: 'Usein', value: 3 },
        { text: 'Todella paljon', value: 4 }, //Muuta teksti
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.optionIntoxidants)
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
p {
  margin: 0.25rem 0;
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
  margin-top: 0.2rem!important;
  flex-wrap: wrap;
}
.without_dot div {
  margin-bottom: 0.5rem;
}
.without_dot input[type="radio"], .without_dot input[type="checkbox"] {
  visibility: hidden;
  height: 0;
  width: 0;
  margin: 0;
}
.without_dot label {
  //display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-color: v.$KAMGreyDark;
  color: v.$White;
  padding: 0.2rem 0.4rem;
  margin: 0.2rem 0 0.2rem 0.2rem;
  border-radius: 0.2rem;
  font-size: 0.75rem!important;
}
.without_dot label:hover {
  background-color: v.$KAMBeigeLight;
  color: v.$Black;
  font-weight: bold;
}
.without_dot label:last-child {
  margin-right: 0;
}
.without_dot input[type="radio"]:checked + label {
  background-color: v.$KAMGreenSemiLight;
}

</style>
