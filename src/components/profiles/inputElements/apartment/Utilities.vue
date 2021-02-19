<template>
  <div> <label>Lämmitysjärjestelmä:</label> <input class="utilInput" type="text" v-model="heating" v-on:input="emitToParent"/> <label>Ilmanvaihto:</label> <input class="utilInput" type="text" v-model="airConditioning" v-on:input="emitToParent"/></div>
  <div> <label>Vesi:</label> <input class="utilInput" v-model="water" type="text" v-on:input="emitToParent"/> <label>Viemäröinti:</label> <input class="utilInput" type="text" v-model="plumbing" v-on:input="emitToParent"/> </div>
  <div> <label>Jätehuolto:</label> <input class="utilInput" v-model="garbage" type="text" v-on:input="emitToParent"/> <label>Yhteiset tilat:</label> <input class="utilInput" v-model="common" type="text" v-on:input="emitToParent"/> </div>
</template>

<script>
export default {
    name: 'Utilities',
    emits:["childToParent"],

    data() {
        return {
            heating:"",
            plumbing:"",
            water:"",
            garbage:"",
            airConditioning:"",
            common:"",
        }
    },
    methods: {
        emitToParent() {
            this.$emit('childToParent', {heating:this.heating, plumbing:this.plumbing, water:this.water, garbage:this.garbage, airConditioning:this.airConditioning, common:this.common});
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../../../../assets/styles/variables.scss' as v;

.utilInput{
   width: 98%;
   margin-bottom: 0.5em;
   margin-top: 0.25em;
}

</style>