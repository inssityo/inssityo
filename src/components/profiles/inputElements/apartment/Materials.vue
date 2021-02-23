<template>
    <div >
      <div class="flexbox margin-bottom__05">
        <label class="label__padding__leftless">Rakennusmateriaali:</label>
        <input type="text" v-model="buildMaterial" v-on:input="emitToParent"/>
      </div>
      <div class="flexbox margin-bottom__05">
        <label class="label__padding__leftless">Energiatodistus:</label>
        <input type="text" v-model="energyClass" v-on:input="emitToParent" />
        </div>
      <div class="flexbox margin-bottom__05">
        <label class="label__padding__leftless">Kattotyyppi:</label>
        <input type="text" v-model="roofType" v-on:input="emitToParent"/>
      </div>
      <div class="flexbox margin-bottom__05">
        <label class="label__nowrap label__padding__leftless">Katon pintamateriaali:</label>
        <input type="text" v-model="roofLining" v-on:input="emitToParent"/>
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

.margin-bottom__05:last-of-type {
  margin-bottom: 0.3rem;
}

</style>