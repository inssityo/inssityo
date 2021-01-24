<template>
  <div>
    <p>Lähipalvelut: <span>{{ servicesText }}</span></p>
              
    <label @click="handleServices">
      <div class="moreServices" v-bind:class="{'removeBorderRadius': showServices}">
        <p v-show="!showServices">Lisää palveluja</p> 
        <p v-show="showServices">Sulje palvelujen kuvaus</p>

        <div v-show="showServices">
          <i class="fas fa-times"></i>
        </div>
        <div v-show="!showServices">
          <i class="fas fa-plus"></i>
        </div>
      </div>
    </label>
    
    <div class="wrapper" v-show="showServices">
      
      <div class="floorPlan" v-for="(input, index) in services" :key="index">
        <div>
          <div class="labels">
          <label>Palvelu</label>
          <label>km</label>
          </div>
          <div class="inputFields">
            
          <select v-model="input.abbr" v-on:click="emitToParent" @click="createServicesText">
            <option v-for="(type, index2,) in optionServices" :value="type.abbr" :key="index+index2">{{ type.text }}</option>
          </select>
          
          <input type="text" v-model="input.amount" v-on:click="emitToParent" v-on:keyup="createServicesText"> <!-- Muuta v-model-->
          
          </div>
          <div>
            <div @click="remove(index)" v-show="index || ( !index && services.length > 1)">
              <i class="fas fa-minus"></i>
            </div>
            <div @click="add" v-show="index === services.length-1">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          
          <p>{{ input.amount }}<span v-show="input.amount !== null && input.abbr !== null">/</span>{{ input.abbr }}</p>
          
          
        </div>
      </div>
      
    </div>
<textarea type="text" id="description_services" placeholder="Kerro palveluista" v-model="description"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Services',

  data() {
    return {
      showServices: false,
      services: [
        { text: null, descr: null }  //Muuta
      ],
      servicesText: '',
      optionServices: [
        { text: 'Lähiliikenteen bussipysäkki', distance: '' },
        { text: 'Kaukoliikenteen bussipysäkki', distance: '' },
        { text: 'Lähiliikenteen linja-autoasema', distance: '' },
        { text: 'Kaukoliikenteen linja-autoasema', distance: '' },
        { text: 'Juna-asema', distance: '' },
        { text: 'Raitiovaunupysäkki', distance: '' },
        { text: 'Metroasema', distance: '' },
        { text: 'Ruokakauppa', distance: '' },
        { text: 'Kauppakeskus', distance: '' },
        { text: 'Ruokailupaikka', distance: '' },
        { text: 'Urheilupuisto', distance: '' },
        { text: 'Kuntosali', distance: '' },
        { text: 'Terveyspalvelut', distance: '' },
        { text: 'Päiväkoti', distance: '' },
        { text: 'Peruskoulu', distance: '' },
        { text: 'Ala-aste', distance: '' },
        { text: 'Yläaste', distance: '' },
        { text: 'Lukio', distance: '' },
      ],
      description: '',
    }
  },
  methods: {
    emitToParent() {
      console.log("text " + this.servicesText)
      this.$emit('childToParent', { 'text': this.servicesText, 'floorPlan': this.services })
    },
    add() {
      this.services.push(
        { text: null, descr: null }
      )
    },
    remove(index) {
      this.services.splice(index, 1);
      this.createServicesText();
      this.emitToParent();
    },
    createServicesText() {
      let arr = [];
      this.services.forEach(item => {
        if (item.text !== null && item.descr !== null && item.descr !== '') { //Muuta
          arr.push(item.text + '/' + item.descr); 
        }
      })
      this.servicesText = arr.join(', ');
      this.emitToParent();
    },
    handleServices() {
      this.showServices = !this.showServices;
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
.moreServices {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 1.5rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid white;
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
.floorPlan div .labels {
  display: block;
}
.floorPlan div .inputFields {
  display: block;
  width: max-content;
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
