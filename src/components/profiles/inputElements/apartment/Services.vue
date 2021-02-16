<template>
  <div>
    <p>Lähipalvelut: <br/>{{ servicesText }}</p>
              
    <label @click="handleServices">
      <div class="flexbox label__border-bottom--green" v-bind:class="{'remove__border-radius': showServices}">
        <p v-show="!showServices">Lisää palveluja</p> 
        <p v-show="showServices">Sulje palvelujen kuvaus</p>

        <div v-show="showServices">
          <i class="fas fa-times hover__color--blue"></i>
        </div>
        <div v-show="!showServices">
          <i class="fas fa-plus hover__color--blue"></i>
        </div>
      </div>
    </label>
    
    <div class="show-services label__border-bottom--green" v-show="showServices"> 
      <div class="flexbox" v-for="(input, index) in services" :key="index">

        <div class="flexbox">
          <label for="services">Palvelu</label>
          <label for="meters">metriä</label>
        </div>

        <div>
          <select id="services" v-model="input.text" v-on:click="emitToParent" @click="createServicesText">
            <option v-for="(type, index2,) in optionServices" :value="type.text" :key="index+index2">{{ type.text }}</option>
          </select>
          
          <input type="text" id="meters" v-model="input.distance" v-on:click="emitToParent" v-on:keyup="createServicesText">
        </div>

        <div>
          <div @click="remove(index)" v-show="index || ( !index && services.length > 1)">
            <i class="fas fa-minus hover__color--blue"></i>
          </div>
          <div @click="add" v-show="index === services.length-1">
            <i class="fas fa-plus hover__color--blue"></i>
          </div>
        </div>
        
      </div>
    </div>
    <label for="description-services">Kerro vapaasti palveluista
      <textarea id="description-services" class="box" placeholder="Kerro palveluista" v-model="description"></textarea>
    </label>
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
      description: '',
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
    }
  },
  methods: {
    emitToParent() { //vie description
      console.log("ser" + JSON.stringify(this.services))
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

label {
  padding: 0;
  
  .flexbox {
    height: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.1rem 0.5rem;
  }
}
.show-services {
  padding: 0.2rem 0.5rem !important;
  margin: 0 0 1rem 0;
  border-radius: 0 0 0.5rem 0.5rem;
  
  .flexbox {
    justify-content: normal;
    
    .flexbox {
      flex-direction: column;
      align-items: flex-start;
      margin-right: 1rem;
      width: 3rem;
      
      label:first-child {
        margin-bottom: 0.8rem;
      }
    }
  }
  .flexbox:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
}
.remove__border-radius {
  border-radius: 0.5rem 0.5rem 0 0 !important;
  border-bottom: none !important;
  margin-bottom: 0 !important;
}
select {
  margin: 0.2rem 0;
  background: v.$KAMGreyLight;
}
p {
  margin-right: 0.5rem;
}
svg {
  margin: 0 0 0 0.5rem; 
  color: v.$KAMGreenDark;
}
label:last-of-type {
  margin-top: 0.5rem;
}
input[type="text"] {
  margin: 0.25rem 0.5rem 0.25rem 0;
  width: 3rem;
  height: 1.4rem;
  background: v.$KAMGreyLight;
}
textarea {
  margin: 0.4rem 0 0.3rem 0;
  height: 8rem;
}

</style>
