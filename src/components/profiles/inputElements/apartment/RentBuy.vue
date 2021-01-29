<template>
  <div v-bind:class="{'flexbox':idValue === 'ARB'}">
    <p v-if="idValue === 'A'" class="margin__nothing">Etsitkö vuokra-asuntoa vai omistusasuntoa?</p>
    <p v-if="idValue === 'ARB'" class="margin__nothing">Uusi ilmoitus vuokra-asunnosta vai omistusasunnosta?</p>
    <div class="flexbox">
      <p v-if="idValue === 'A'" v-bind:style="{ fontWeight: 'bold' }" class="margin__nothing">{{ checkedOwner ? "-omistusasuntoa" : "-vuokra-asuntoa" }}</p>
      <p v-if="idValue === 'ARB'" v-bind:style="{ fontWeight: 'bold' }" class="margin__nothing">{{ checkedOwner ? "omistusasunnosta" : "vuokra-asunnosta" }}</p>
      <label class="switch" v-on:click="emitToParent">
        <input type="checkbox" v-model="checkedOwner">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RentBuy',
  props: ['idValue'],

  data() {
    return {
      checkedOwner: true,
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', !this.checkedOwner);
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.flexbox {
  margin: 0.5rem 0;
  
  div p {
    margin-right: 1rem;
  }
}

</style>
