<template>
  <div>
    <p>Lähipalvelut: <br/>{{ servicesText }}</p>
    <!--<p v-for="(text, index) in services" :key="'p'+index">{{text.distance}} {{text.text}}</p>-->
              
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
            <label>metriä</label>
          </div>
          <div class="inputFields">
            <select v-model="input.text" v-on:click="emitToParent" @click="createServicesText">
              <option v-for="(type, index2,) in optionServices" :value="type.text" :key="index+index2">{{ type.text }}</option>
            </select>
            
            <input type="text" v-model="input.distance" v-on:click="emitToParent" v-on:keyup="createServicesText">
          </div>
          <div>
            <div @click="remove(index)" v-show="index || ( !index && services.length > 1)">
              <i class="fas fa-minus"></i>
            </div>
            <div @click="add" v-show="index === services.length-1">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          
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
        { text: null, distance: null } 
      ],
      servicesText: '',
      optionServices: [
        { text: 'Lähil. bussipysäkki', distance: '' },
        { text: 'Kaukol. bussipysäkki', distance: '' },
        { text: 'Lähil. linja-autoasema', distance: '' },
        { text: 'Kaukol. linja-autoasema', distance: '' },
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
      this.$emit('childToParent', { 'text': this.servicesText, 'services': this.services })
    },
    add() {
      this.services.push(
        { text: null, distance: null }
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
        if (item.text !== null && item.distance !== null && item.distance !== '') {
          arr.push(item.distance + 'm ' + item.text); 
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

.floorPlan {
  div {
    display: flex;
    align-items: center;
    width: 3rem;
    margin-bottom: 0.5rem;
  }
  div .labels {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-right: 1rem;
    label:first-child {
      margin-bottom: 1rem;
    }
  }
  div .inputFields {
    display: block;
    width: max-content;
  }
  div:last-child p {
    margin: 0 0.5rem;
  }
}
.moreServices {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 1.5rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  border-bottom: 0.15rem solid v.$KAMGreenDark;
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
  
  div:first-child p:first-child {
    margin-right: 0.5rem;
  }
  
  div:first-child p {
    margin: 0.2rem 0 0.2rem 0;
  }
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

svg {
  margin: 0 0 0 0.4rem; 
  color: v.$KAMGreenDark;
  
  :hover {
    cursor: pointer;
    color: v.$KAMBlue;
  }
}
label {
  letter-spacing: 0.05rem;
  cursor: pointer;
  
  div:first-child div {
    display: block;
  }
}
input[type="text"] {
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  margin: 0.25rem 0.5rem 0.25rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 3rem;
  height: 1.4rem;
  background: v.$KAMGreyLight;
}
input[type="text"]:focus, input[type="select"]:focus, textarea:focus {
  outline: none;
  background: v.$KAMGreenLight;
}
textarea {
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.6rem 0 0.3rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  height: 10.8rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

</style>
