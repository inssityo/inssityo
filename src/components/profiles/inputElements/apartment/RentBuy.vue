<template>
  <div>  
    <div class="switch-div">
      <div>
        <div>
          <p>Etsitkö vuokra-asuntoa?</p>
          <p v-bind:style="{ fontWeight: 'bold' }">{{ checkedRent ? "-kyllä" : "-ei" }}</p>
        </div>
        <label class="switch" v-on:click="emitToParent">
          <input type="checkbox" id="checkboxRent" @click="handleChoice('rent')" v-model="checkedRent">
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        <div>
          <p>Etsitkö omistusasuntoa?</p>
          <p v-bind:style="{ fontWeight: 'bold' }">{{ checkedBuy ? "-kyllä" : "-ei" }}</p>
        </div>
        <label class="switch" v-on:click="emitToParent">
          <input type="checkbox" id="checkboxBuy" @click="handleChoice('buy')" v-model="checkedBuy">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'RentBuy',

  data() {
    return {
      checkedRent: true,
      checkedBuy: false,
    }
  },
  methods: {
    emitToParent() {
      console.log("hei", this.checkedRent , this.checkedBuy) //päivittyy viiveellä
      this.$emit('childToParent', {'rent':this.checkedRent, 'buy':this.checkedBuy});
    },
    handleChoice(name) {
      switch(name) {
        case 'rent':
 
          this.checkedBuy = false;
          
          break;
        case 'buy':

          this.checkedRent = false;
          
          break;
      }
      
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.switch-div div:last-child div p{
  margin-top: 0;
  margin-bottom: 0;
}
.switch-div div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-right: 0.5rem;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 3.12rem;
  height: 1.5rem;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: v.$KAMBeigeLight;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 4px;
  bottom: 4px;
  background-color: v.$White;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: v.$KAMGreenDark;
}
//kehys
input:focus + .slider {
  box-shadow: 0 0 1px v.$KAMBeigeLight;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 1.5rem;
}
.slider.round:before {
  border-radius: 50%;
}

</style>
