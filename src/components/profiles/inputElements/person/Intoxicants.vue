<template>
  <div>
    <div>  
      <p v-if="idValue === 'P'">Käytätkö alkoholia päihtymistarkoitukseen?</p>
      <p v-if="idValue === 'R'">Sallitko alkoholin käytön päihtymistarkoitukseen?</p>
      <div class="check__label-only" >
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="idValue+'i0'+index" :value="use.value" v-model="intoxicants.alcohol"/>
          <label class="hover--check__label-only" :for="idValue+'i0'+index" @click="handleIntoxicants(1, use.value)">{{ use.text }}</label>
        </div>
      </div>
    </div>
    
    <div>
      <p v-if="idValue === 'P'">Tupakoitko?</p>
      <p v-if="idValue === 'R'">Sallitko tupakoinnin?</p>
      <div class="check__label-only">
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="idValue+'i1'+index" :value="use.value" v-model="intoxicants.smoking" />
          <label class="hover--check__label-only" :for="idValue+'i1'+index" @click="handleIntoxicants(2, use.value)">{{ use.text }}</label>
        </div>
      </div>
    </div>
    
    <div>
      <p v-if="idValue === 'P'">Käytätkö huumaavia aineita?</p>
      <p v-if="idValue === 'R'">Sallitko huumavien aineiden käytön?</p>
      <div class="check__label-only">
        <div v-for="(use, index,) in optionUses" :key="index">
          <input type="radio" :id="idValue+'i2'+index" :value="use.value" v-model="intoxicants.drugs" />
          <label :for="idValue+'i2'+index" class="hover--check__label-only" @click="handleIntoxicants(3, use.value)">{{ use.text }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intoxicants',
  props: ['idValue'],

  data() {
    return {
      intoxicants: { 
        alcohol: 1,
        smoking: 1,
        drugs: 1 
      },
      optionUses: [
        { text: 'En lainkaan', value: 1 },
        { text: 'Silloin tällöin', value: 2 },
        { text: 'Useimmiten', value: 3 }
      ],
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.intoxicants)
    },
    handleIntoxicants(intoxicant, value) {
      switch(intoxicant) {
        case 1:
          this.intoxicants.alcohol = value;
          break;
        case 2:
          this.intoxicants.smoking = value;
          break;
        case 3:
          this.intoxicants.drugs = value;
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
  margin: 0.25rem 0;
}
.check__label-only div {
  margin-bottom: 0.5rem;
}
.check__label-only label:last-child {
  margin-right: 0;
}
label {
  margin: 0.2rem 0 0.2rem 0.2rem;
}

</style>
