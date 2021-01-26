<template>
  <div>
    <p style="margin: 0.5rem 0 0.2rem 0">Huoneiston kuvaus: <span>{{ floorPlanText }}</span></p>
              
    <label @click="handleFloorPlan">
      <div class="moreFloorPlans" v-bind:class="{'removeBorderRadius': showFloorPlan}">
        <p v-show="!showFloorPlan">Lisää huonetyyppejä</p> 
        <p v-show="showFloorPlan">Sulje huoneiston kuvaus</p>

        <div v-show="showFloorPlan">
          <i class="fas fa-times"></i>
        </div>
        <div v-show="!showFloorPlan">
          <i class="fas fa-plus"></i>
        </div>
      </div>
    </label>
    
    <div class="wrapper" v-show="showFloorPlan">
      <div>
        <p>lkm</p>
        <p>huonetyyppi</p>
      </div>
      <div class="floorPlan" v-for="(input, index) in floorPlan" :key="index">
        <div>
          <input type="text" v-model="input.amount" v-on:click="emitToParent" v-on:keyup="createFloorPlanText">
          <select v-model="input.abbr" v-on:click="emitToParent" @click="createFloorPlanText">
            <option v-for="(type, index2,) in optionFloorPlans" :value="type.abbr" :key="index+index2">{{ type.text }}</option>
          </select>

          <div>
            <div @click="remove(index)" v-show="index || ( !index && floorPlan.length > 1)">
              <i class="fas fa-minus"></i>
            </div>
            <div @click="add" v-show="index === floorPlan.length-1">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          
          <p>{{ input.amount }}<span v-show="input.amount !== null && input.abbr !== null">/</span>{{ input.abbr }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FloorPlan',

  data() {
    return {
      showFloorPlan: false,
      floorPlan: [
        { abbr: null, amount: null } 
      ],
      floorPlanText: '',
      optionFloorPlans: [ // POISTA LISTASTA AINA SE ABBR, JOKA ON JO VALITTU
        { text: 'huone', abbr: 'h', value: 1 },
        { text: 'keittiö', abbr: 'k', value: 2 },
        { text: 'keittokomero', abbr: 'kk', value: 3 },
        { text: 'ruokailuhuone', abbr: 'rh', value: 4 },
        { text: 'kylpyhuone', abbr: 'kh', value: 5 },
        { text: 'vessa', abbr: 'wc', value: 6 },
        { text: 'erillinen vessa', abbr: 'erill. wc', value: 7 },
        { text: 'sauna', abbr: 's', value: 8 },
        { text: 'spaosasto', abbr: 'spa.os', value: 9 },
        { text: 'takkahuone', abbr: 'tkh', value: 10 },
        { text: 'vaatehuone', abbr: 'vh', value: 11 },
        { text: 'kodinhoitohuone', abbr: 'khh', value: 12 },
        { text: 'aula', abbr: 'aula', value: 13 },
        { text: 'terassi', abbr: 'ter', value: 14 },
        { text: 'parveke', abbr: 'parv', value: 15 },
        { text: 'lasitettu parveke', abbr: 'l.parv', value: 16 },
        { text: 'ranskalainenparveke', abbr: 'rp', value: 17 }
      ]
    }
  },
  methods: {
    emitToParent() {
      console.log("text " + this.floorPlanText)
      this.$emit('childToParent', { 'text': this.floorPlanText, 'floorPlan': this.floorPlan })
    },
    add() {
      this.floorPlan.push(
        { abbr: null, amount: null }
      )
    },
    remove(index) {
      this.floorPlan.splice(index, 1);
      this.createFloorPlanText();
      this.emitToParent();
    },
    createFloorPlanText() {
      let arr = [];
      this.floorPlan.forEach(item => {
        if (item.amount !== null && item.abbr !== null && item.amount !== '') {
          arr.push(item.amount + '/' + item.abbr);
        }
      })
      this.floorPlanText = arr.join(', ');
      this.emitToParent();
    },
    handleFloorPlan() {
      this.showFloorPlan = !this.showFloorPlan;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.floorPlan div {
  display: flex;
  align-items: center;
  width: 3rem;
}
.moreFloorPlans {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 1.5rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  border-bottom: 0.15rem solid v.$KAMGreenDark;
}
label div:first-child div {
  display: block;
}
.removeBorderRadius {
  border-radius: 0.5rem 0.5rem 0 0 !important;
  border-bottom: none !important;
}
.wrapper {
  background: v.$White;
  padding: 0.2rem 0.4rem !important;
  margin: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  border-bottom: 0.15rem solid v.$KAMGreenDark;
}
.wrapper div:first-child {
  display: flex;
  align-items: center;
}
.wrapper div:first-child p:first-child {
  margin-right: 0.5rem;
}
.wrapper div:first-child p {
  margin: 0.2rem 0 0.2rem 0;
}
select {
  padding: 0 0.2rem !important;
  margin: 0.2rem 0.2rem 0.2rem 0;
  height: 2rem;
  border-radius: 0.5rem;
  border-style: none none solid none !important;
  border-color: #016361 !important;
  border-width: 0.15rem;
  background: v.$KAMGreyLight;
}
p {
  margin-right: 0.5rem;
}
.wrapper .floorPlan div:last-child p {
  margin: 0 0.5rem;
}
svg {
  margin: 0 0 0 0.4rem; 
  color: v.$KAMGreenDark;
}
svg:hover {
  cursor: pointer;
  color: v.$KAMBlue;
}
label {
  letter-spacing: 0.05rem;
  cursor: pointer;
}
input[type="text"] {
  padding: 0.2rem;
  border-radius: 0.5rem;
  margin: 0.25rem 0.5rem 0.25rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 1.2rem;
  height: 1.4rem;
  text-align: center;
  background: v.$KAMGreyLight;
}
input[type="text"]:focus, input[type="select"]:focus {
  outline: none;
  background: v.$KAMGreyLight;
}

</style>
