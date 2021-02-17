<template>
  <div>
    <p>Pohja: <span>{{ floorPlanText }}</span></p>
              
    <label @click="handleFloorPlan">
      <div class="flexbox label__border-bottom--green" v-bind:class="{'remove__border-radius': showFloorPlan}">
        <p v-show="!showFloorPlan">Lisää huonetyyppejä</p> 
        <p v-show="showFloorPlan">Sulje huoneiston kuvaus</p>

        <div v-show="showFloorPlan">
          <i class="fas fa-times hover__color--blue"></i>
        </div>
        <div v-show="!showFloorPlan">
          <i class="fas fa-plus hover__color--blue"></i>
        </div>
      </div>
    </label>
    
    <div class="show-floor-plan label__border-bottom--green" v-show="showFloorPlan">
      <div class="flexbox">
        <label for="number-of-rooms">lkm</label>
        <label for="floorplan">huonetyyppi</label>
      </div>
      <div v-for="(input, index) in floorPlan" :key="index">
        <div class="flexbox">
          <input type="number" min="0" id="number-of-rooms" oninput="validity.valid||(value=0);" v-model="input.number" v-on:click="emitToParent" v-on:keyup="createFloorPlanText">
          <select id="floorplan" v-model="input.abbr" v-on:click="emitToParent" @click="createFloorPlanText">
            <option v-for="(type, index2,) in optionFloorPlans" :value="type.abbr" :key="index+index2">{{ type.text }}</option>
          </select>

          <div>
            <div @click="remove(index)" v-show="index || ( !index && floorPlan.length > 1)">
              <i class="fas fa-minus hover__color--blue"></i>
            </div>
            <div @click="add" v-show="index === floorPlan.length-1">
              <i class="fas fa-plus hover__color--blue"></i>
            </div>
          </div>
          
          <p>{{ input.number }}<span v-show="input.number !== null && input.abbr !== null">/</span>{{ input.abbr }}</p>
        </div>
      </div>
    </div>
    <label for="description-floorplan">Kuvaus:
      <textarea id="description-floorplan" class="box" type="text" placeholder="Kerro vapaasti asunnosta." v-model="description"></textarea>
    </label>

        <label for="description-floorplan">Näkymät:
      <textarea id="description-floorplan" class="box" type="text" placeholder="Kuvaile asunnosta avautuvia näkymiä." v-model="sights"></textarea>
    </label>

  </div>
</template>

<script>
export default {
  name: 'FloorPlan',

  data() {
    return {
      sights:"",
      showFloorPlan: false,
      floorPlan: [
        { abbr: null, number: null } 
      ],
      floorPlanText: '',
      description: '',
      optionFloorPlans: [
        { text: 'huone', abbr: 'h', value: 1 },
        { text: 'keittiö', abbr: 'k', value: 2 },
        { text: 'keittokomero', abbr: 'kk', value: 3 },
        { text: 'ruokailuhuone', abbr: 'rh', value: 4 },
        { text: 'kylpyhuone', abbr: 'kh', value: 5 },
        { text: 'vessa', abbr: 'wc', value: 6 },
        { text: 'sauna', abbr: 's', value: 7 },
        { text: 'vaatehuone', abbr: 'vh', value: 8 },
        { text: 'kodinhoitohuone', abbr: 'khh', value: 9 },
      ]
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', { 'text': this.floorPlanText, 'floorPlan': this.floorPlan, sights:this.sights})
    },
    add() {
      this.floorPlan.push(
        { abbr: null, number: null }
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
        if (item.number !== null && item.abbr !== null && item.number !== '') {
          arr.push(item.number + '' + item.abbr);
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

label {
  padding: 0;

  .flexbox {
    height: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.1rem 0.5rem;

    div:first-child div {
      display: block;
    }
  }
}
.show-floor-plan {
  padding: 0.2rem 0.5rem !important;
  margin: 0 0 1rem 0;
  border-radius: 0 0 0.5rem 0.5rem;

  .flexbox, div .flexbox {
    justify-content: normal;
  }
  //roomtype label to the right
  div:first-child label:first-child {
    margin-right: 0.5rem;
  }
  //labels
  div:first-child label {
    margin: 0.2rem 0 0.2rem 0;
  }
  //paragraph next to the plus icon
  .flexbox p {
    margin: 0 0.5rem;
  }
}
.remove__border-radius {
  border-radius: 0.5rem 0.5rem 0 0 !important;
  border-bottom: none !important;
  margin-bottom: 0 !important;
}
select {
  margin: 0.2rem 0.2rem 0.2rem 0;
  width: 12rem;
  background: v.$KAMGreyLight;
}
p {
  margin-right: 0.5rem;
}
svg {
  margin: 0 0 0 0.5rem; 
  color: v.$KAMGreenDark;
}
input[type="text"], input[type="number"] {
  margin: 0.2rem 0.5rem 0.25rem 0;
  width: 2rem;
  height: 1.45rem;
  text-align: center;
  background: v.$KAMGreyLight;
}
textarea {
  margin: 0.4rem 0 0.3rem 0;
  height: 4rem;
}

</style>
