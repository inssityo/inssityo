<template>
    <div id="parent">
        <div>
              <div class="flexbox"> <label>Rakennusmateriaali:</label> <input class="materialInput" type="text" v-model="buildMaterial" v-on:input="emitToParent"/> <label>Energiatodistus:</label> <input class="materialInput-right" type="text" v-model="energyClass" v-on:input="emitToParent" /></div>
              <div class="flexbox"> <label>Kattotyyppi:</label> <input class="materialInput" type="text" v-model="roofType" v-on:input="emitToParent"/> <label>Katon pintamateriaali:</label> <input class="materialInput-right" type="text" v-model="roofLining" v-on:input="emitToParent"/></div>
  
        </div>
    </div>
</template>

<script>
export default {
    name:'Materials',
    emits:['childToParent'],

    data () {
        return {
            buildMaterial:"",
            energyClass:"",
            roofType:"",
            roofLining:"",
        }
    },

    methods: {
        emitToParent() {
            this.$emit('childToParent', {buildMaterial:this.buildMaterial, energyClass:this.energyClass, roofType:this.roofType, roofLining:this.roofLining})
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.materialInput {
    align-content: center;
    margin-bottom: 1em;
}

.materialInput-right {
    align-content: center;
    margin-bottom: 1em;
}

label {    white-space: nowrap;
margin-bottom: 1em;}

#parent {
    margin-top: 1.5em;
}

</style>