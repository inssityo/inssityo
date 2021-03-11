<template>
  <div v-if="aptValue === 'B'">
    <form oninput="result.value=parseFloat(upkeep.value) + parseFloat(financing.value) || 0">
      <div class="margin-top__05">
        <label for="upkeep" class="label__padding__leftless">Hoitovastike €/kk:</label> 
        <input type="number" oninput="validity.valid||(value=0);" step="0.01" id="upkeep" class="margin-top__025 border-bottom--green box" v-model="upkeep" v-on:input="emitToParent">
      </div>
      <div class="margin-top__05">
        <label for="financing" class="label__padding__leftless">Rahoitusvastike €/kk:</label> 
        <input type="number" oninput="validity.valid||(value=0);" step="0.01" id="financing" class="margin-top__025 border-bottom--green box" v-model="financing" v-on:input="emitToParent">
      </div>
      <div class="margin-top__05 flexbox">
        <label class="label__padding__leftless">Yhtiövastike yhteensä: <output name="result" for="upkeep financing"></output> €/kk</label>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Price',
  props: ['aptValue'],
  emits: ['childToParent'],
  
  data() {
    return {
      upkeep: 0,
      financing: 0,
    }
  },

  methods: {
    emitToParent() {
      this.$emit('childToParent', {upkeep:this.upkeep, financing:this.financing});
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

output {
  color: v.$KAMGreenDark;
  font-weight: bold;
}

</style>