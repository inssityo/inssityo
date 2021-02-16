<template>
  <div> <label>Lämmitysjärjestelmä:</label> <input class="utilInput" type="text" v-model="heating"/> <label>Ilmanvaihto:</label> <input class="utilInput" type="text" v-model="airConditioning" /></div>
  <div> <label>Vesi:</label> <input class="utilInput" v-model="water" type="text"/> <label>Viemäröinti:</label> <input class="utilInput" type="text" v-model="plumbing" /> </div>
  <div> <label>Jätehuolto:</label> <input class="utilInput" v-model="garbage" type="text"/> <label>Yhteiset tilat:</label> <input class="utilInput" v-model="common" type="text"/> </div>
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
   width: 97%;
   margin-bottom: 0.5em;
   margin-top: 0.25em;
}

</style>