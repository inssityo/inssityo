<template>
  <div>  
    <div class="switch-div">
      <div>
        <p v-if="idValue === 'P'">Omistatko lemmikkejä?</p>
        <p v-if="idValue === 'R'">Saako kämppiksellä olla lemmikkejä?</p>
        <p v-bind:style="{ fontWeight: 'bold' }">{{ checkedPets ? "-kyllä" : "-ei" }}</p>
      </div>
      <label class="switch" @click="handleCheckedPets" v-on:click="emitToParent">
        <input type="checkbox" :id="idValue+'checkboxPet'" checked v-model="checkedPets">
        <span class="slider round"></span>
      </label>
    </div>
   
    <div class="without_dot" v-if="checkedPets">
      <div v-for="(pet, index,) in optionsPets" :key="index">
        <input type="checkbox" :id="idValue+'p'+index" v-model="pet.checked"/>
        <label :for="idValue+'p'+index" v-on:click="emitToParent">{{ pet.text }}</label>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Pets',
  props: ['idValue'],

  data() {
    return {
      checkedPets: true,
      optionsPets: [
        { text: 'Koiria', value: 'dogs', checked: false },
        { text: 'Kissoja', value: 'cats', checked: false },
        { text: 'Jyrsijöitä', value: 'rodents', checked: false },
        { text: 'Lintuja', value: 'birds', checked: false },
        { text: 'Kaloja', value: 'fish', checked: false },
        { text: 'Terraarioeläimiä', value: 'terrarium', checked: false },
        { text: 'Muita eläimiä', value: 'other_animals', checked: false }
      ],
    }
  },
  methods: {
    emitToParent () {
      console.log("con" + this.checkedPets)
      this.$emit('childToParent', {'tableOne':this.checkedPets, 'tableTwo':this.optionsPets});
    },
    handleCheckedPets() {
      if(!this.checkedPets) {
        this.optionsPets.forEach(pet => {
          pet.checked = false;
        });
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.switch-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.switch-div div {
  display: flex;
  align-items: center;
  p {
    margin: 0 0.5rem 0 0;
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

//======================
label {
  letter-spacing: 0.05rem;
  cursor: pointer;
}
.without_dot {
  display: flex;
  margin-top: 0.2rem!important;
  flex-wrap: wrap;
}
.without_dot div {
  margin: 0.15rem 0.1rem;
}
.without_dot input[type="radio"], .without_dot input[type="checkbox"] {
  visibility: hidden;
  height: 0;
  width: 0;
  margin: 0;
}
.without_dot label {
  vertical-align: middle;
  text-align: center;
  background-color: v.$KAMGreyDark;
  color: v.$White;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.75rem!important;
}
.without_dot label:hover {
  background-color: v.$KAMBeigeLight;
  color: v.$Black;
  font-weight: bold;
}
.without_dot input[type="checkbox"]:checked + label{
  background-color: v.$KAMGreenSemiLight;
}

</style>
