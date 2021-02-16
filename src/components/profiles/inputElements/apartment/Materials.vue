<template>
    <div id="parent">
        <div>
              <div class="flexbox"> <label>Rakennusmateriaali:</label> <input class="materialInput" type="text" v-model="buildMaterial"/> <label>Energiatodistus:</label> <input class="materialInput-right" type="text" v-model="energyClass" /></div>
              <div class="flexbox"> <label>Kattotyyppi:</label> <input class="materialInput" type="text" v-model="roofType"/> <label>Katon pintamateriaali:</label> <input class="materialInput-right" type="text" v-model="roofLining" /></div>
  
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
    width: 25em;
    align-content: center;
    margin-bottom: 1em;
}

.materialInput-right {
    width: 50em;
    align-content: center;
    margin-bottom: 1em;
    float: right;
}

label {    white-space: nowrap;
margin-bottom: 1em;}

#parent {
    margin-top: 1.5em;
}

</style>