<template>
  <div>
    <div>  
      <p>Käytätkö alkoholia päihtymistarkoitukseen?</p>
      <div class="without_dot" >
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="'i0'+index" :value="use.value" v-model="optionIntoxidants[0].use"/>
          <label :for="'i0'+index" v-on:click="emitToParent" >{{ use.text }}</label>
        </div>
      </div>
    </div>
    
    <div>
      <p>Tupakoitko?</p>
      <div class="without_dot">
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="'i1'+index" :value="use.value" v-model="optionIntoxidants[1].use"/>
          <label :for="'i1'+index" v-on:click="emitToParent" >{{ use.text }}</label>
        </div>
      </div>
    </div>
    
    <div>
      <p>Käytätkö huumaavia aineita?</p>
      <div class="without_dot">
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="'i2'+index" :value="use.value" v-model="optionIntoxidants[2].use"/>
          <label :for="'i2'+index" v-on:click="emitToParent" >{{ use.text }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intoxidants',

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
        { text: 'Todella paljon', value: 4 },
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
@use '../../../assets/styles/variables.scss' as v;

label {
  letter-spacing: 0.05rem;
  cursor: pointer;
}
p {
  margin: 0;
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
.without_dot label:last-child {
  margin-right: 0;
}
.without_dot input[type="radio"]:checked + label, .without_dot input[type="checkbox"]:checked + label{
  background-color: v.$KAMGreenSemiLight;
}

</style>
