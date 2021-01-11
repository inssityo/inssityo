<template>
  <div>  
    <h2>Luo etsimäsi asunnon profiili:</h2>

    <form id="personalProfile" class="profile_form">

      <div class="form_group form_group-grid">

        <div class="form_group_item--1">
          <label for="city">Paikkakunta</label>
          <input type="text" id="city" v-model="firstname">
        </div>
        <div class="form_group_item--2">
          <label for="location">Sijainti</label>
          <input type="text" id="location" v-model="lastname">
        </div>

        <div class="form_group_item--3">
          <textarea type="text" id="more_about" placeholder="Kerro vapaasti asunnosta, jota etsit" v-model="more_about"></textarea>
        </div>

        <div class="form_group_item--4">
          <div class="form_group-basic_details">
            <select id="age" placeholder="age" v-model="age">
              <option value="" selected disabled hidden>Talotyyppi</option>
              <option value="20-24">Kerrostalo</option>
              <option value="25-29">Rivitalo</option>
              <option value="30-34">Omakotitalo</option>
              <option value="35-39">Paritalo</option>
              <option value="45-49">Studio</option>
              <option value="40-44">Asumisoikeusasunto</option>
              <!-- Huoneiden lkm -->
            </select>
          </div>

          <div class="form_group-basic_details">
            <select id="gender" placeholder="gender" @click="changeDesign" v-model="gender">
              <option value="" selected disabled hidden>Etsin</option>
              <option value="rent">Vuokra</option>
              <option value="buy">Osto</option>
            </select>
          </div>
        </div>
        <div class="form_group_item--5">
          <div class="form_group-basic_details">
            <select id="status" @click="changeDesign" v-model="status">
              <option value="" selected disabled hidden>Olen..</option>
              <option value="male">Työssäkäyvä</option>
              <option value="female">Työtön</option>
              <option value="other">Opiskelija</option>
              <option value="other">Eläkeläinen</option>
            </select>
          </div>
        </div>
        <div class="form_group_item--6">
          <div class="form_group-pets">
            <label>Omistatko lemmikkejä?</label>
            <input type="checkbox" id="pets" v-model="checkedPets" @click="handleCheckedPets">
            <p v-bind:style="{ fontWeight: 'bold'}">{{ checkedPets ? "-kyllä" : "-ei" }}</p>
          </div>
          <div class="pets_list" v-if="checkedPets">
            <!-- https://codepen.io/huleos/pen/xQaYdK -->
            <div class="petlist" v-for="(option, index) in optionsPets" :key="index">
              <input type="checkbox" :id="index" :value="option.value" v-model="checkedPetList">
              <label :for="index">{{ option.text }}</label>
            </div>
          </div>
        </div>
        
        
        <div class="form_group_item--7">
          <div class="form_group-intoxicants">
            
            <div>
              <div>   
                <p>Käytätkö alkoholia päihtymistarkoitukseen?</p>
              </div>
              <div class="without_dot">
                <input type="radio" id="alcohol_no" checked name="alcohol" value="alcohol_no" v-model="alcohol" />
                <label for="alcohol_no">En ollenkaan</label>
                  
                <input type="radio" id="alcohol_sometimes" name="alcohol" value="alcohol_sometimes" v-model="alcohol" />
                <label for="alcohol_sometimes">Silloin tällöin</label>

                <input type="radio" id="alcohol_often" name="alcohol" value="alcohol_often" v-model="alcohol" />
                <label for="alcohol_often">Usein</label>
                  
                <input type="radio" id="alcohol_a_lot" name="alcohol" value="alcohol_a_lot" v-model="alcohol" />
                <label for="alcohol_a_lot">Todella paljon</label>
              </div>
            </div>
            
            <div>
              <div>
                <p>Tupakoitko?</p>
              </div>
              <div class="without_dot">
                <input type="radio" id="smoke_no" checked name="smoke" value="smoke_no" v-model="smoke" />
                <label for="smoke_no">En ollenkaan</label>
                  
                <input type="radio" id="smoke_sometimes" name="smoke" value="smoke_sometimes" v-model="smoke" />
                <label for="smoke_sometimes">Silloin tällöin</label>

                <input type="radio" id="smoke_often" name="smoke" value="smoke_often" v-model="smoke" />
                <label for="smoke_often">Usein</label>
                  
                <input type="radio" id="smoke_a_lot" name="smoke" value="smoke_a_lot" v-model="smoke" />
                <label for="smoke_a_lot">Todella paljon</label>
              </div>
            </div>
           
            <div>
              <div>
                <p>Käytätkö huumaavia aineita?</p>
              </div>
              <div class="without_dot">
                <input type="radio" id="drugs_no" checked name="drugs" value="drugs_no" v-model="drugs" />
                <label for="drugs_no">En ollenkaan</label>
                  
                <input type="radio" id="drugs_sometimes" name="drugs" value="drugs_sometimes" v-model="drugs" />
                <label for="drugs_sometimes">Silloin tällöin</label>

                <input type="radio" id="drugs_often" name="drugs" value="drugs_often" v-model="drugs" />
                <label for="drugs_often">Usein</label>
                  
                <input type="radio" id="drugs_a_lot" name="drugs" value="drugs_a_lot" v-model="drugs" />
                <label for="drugs_a_lot">Todella paljon</label>
              </div>
            </div>
          </div>
        </div>

        <div class="form_group-name form_group_item--8">
          <img src="../../assets/images/pexels-jonaorle-3828240.jpg" class="grid_img" alt="Profile Image" >
        </div>
       
      </div>

    </form>

  </div>
</template>

<script>

export default {
  name: 'AptProfile',
  el: '#aptProfile',
  
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      more_about: '',
      gender: '',
      age: '',
      status: '',
      checkedPets: true,
      checkedOther: true,
      otherAnimals: '',
      checkedPetList: [],
      alcohol: true,
      smoke: true,
      drugs: true,

      show: false,
      selected: [],
      optionsPets: [
        {
          text: 'Koiria',
          value: 'dogs'
        },
        {
          text: 'Kissoja',
          value: 'cats'
        },
        {
          text: 'Jyrsijöitä',
          value: 'rodents'
        },
        {
          text: 'Lintuja',
          value: 'birds'
        },
        {
          text: 'Kaloja',
          value: 'fish'
        },
        {
          text: 'Terraarioeläimiä',
          value: 'terrarium_animals'
        },
        {
          text: 'Muita kotieläimiä',
          value: 'domestic_animal'
        }
      ]
    }
  },
  computed: {
    filteredList() {
      return this.filters.filter(item => {
        return item.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },

  methods: {
    emitToParent () {
      this.$emit('childToParent', this.firstname)
    },
    handleCheckedPets () {
      if(!this.checkedPets) {
        this.checkedPetList = []
      }
    },
    getOtherAnimals () {
      console.log(this.otherAnimals)
    },
    showDropdown() {
      this.show = !this.show
    },
  }

}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/_variables.scss' as v;

h2 {
  margin-left: 3rem;
}
label {
  color: v.$White;
  border-radius: 1.5rem 0 0 1.5rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
}
.profile_form {
  margin: 2rem 4rem;
}
.form_group {
  margin: 0 1rem 2rem 1rem;
  border-radius: 1.5rem;
}
.form_group-grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 2.9rem);
  background: v.$KAMBlue;
}
.form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 1rem 0.7rem 1rem 1.7rem;
  display: flex;
}
.form_group_item--2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 1rem 0.7rem 1rem 0;
  display: flex;
}
.form_group_item--1 label, .form_group_item--2 label {
  color: black;
  background: white;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: #016361 !important;
}
.form_group_item--2 input {
  margin-right: 5.9rem;
}
.form_group_item--1 input, .form_group_item--2 input {
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: auto 0.9rem auto 0;
  border-style: none none solid none !important;
  border-color: #016361 !important;
  border-width: unset;
  width: 100%;
}
.form_group_item--3 {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 10;
  padding: 1.5rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
}
.form_group_item--3 textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 1.7rem 0.5rem 0;
  border-style: none none solid none !important;
  border-color: #016361 !important;
  width: -webkit-fill-available;
  border-width: unset;
}
.form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 0 1.6rem 0 1.7rem;
  display: flex;
  justify-content: space-between;
}
.form_group_item--4 .form_group-basic_details:first-child {
  margin-right: 1.5rem;
}
.form_group_item--5 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 0 0.7rem 1rem 0;
}
.form_group_item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 10;
  padding: 1rem 0.7rem 1rem 1.7rem;
}
.form_group_item--7 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 10;
  padding: 1rem 1.6rem 1rem 0;
}
.form_group_item--8 {
  grid-column-start: 7;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 10;
}
.form_group-basic_details {
  display: block;
  width: -webkit-fill-available;
}
.form_group-basic_details div {
  display: block;
  margin: 1.2rem 1rem;
}
.form_group-basic_details label {
  display: block;
}
input, select {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  border-style: none none solid none!important;
  border-color: v.$KAMGreenDark!important;
}
.form_group-basic_details input:focus {
  background: v.$White;
}
#gender, #age, #status {
  padding: 0.1rem;
  margin: 0;
  border: none;
  width: -webkit-fill-available;
}

.grid_img {
  width: 100%;
  max-height: calc(100vh - 0rem - 7.7rem);
  height: 100%;
  object-fit: cover;
  border-radius: 0 1.5rem 1.5rem 0;
}

// -- pets -- //
.form_group-pets {
  margin: 0;
}
.pets_list {
  margin: 1.2rem 0.7rem;
}
.form_group-pets p {
  margin: 0.7rem 0 0 0;
}
.form_group-pets label {
  cursor: default;
  display: block;
}
.form_group-pets input {
  float: left;
}
#pets[type="checkbox"]{
  border: 0.1rem solid v.$KAMGreenDark;
  background: v.$KAMGrey;
  border-radius: 50%; 
  display: inline-block;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0.7rem 0.7rem 0 0;
  position: relative;
  -webkit-appearance: none;
}
#pets [type="checkbox"]:checked, #pets[type="checkbox"]:checked {
  border: 0.25rem solid v.$KAMGreenDark;
  background: v.$White;
}
.petlist {
  margin: 0.2rem 0;
  display: flex;
  align-items: center;
}
.petlist label {
  margin-left: 0.6rem;
}
.petlist [type="checkbox"]{
  border: 0.1rem solid v.$KAMGreenDark;
  background: v.$KAMGrey;
  border-radius: 50%; 
  display: inline-block;
  height: 1rem;
  width: 1rem;
  margin: 0 0 0 0.5rem;
  position: relative;
  -webkit-appearance: none;
}
.petlist [type="checkbox"]:checked, .petlist [type="checkbox"]:checked {
  border: 0.25rem solid v.$KAMGreenDark;
  background: v.$White;
  width: 1.2rem;
  margin: 0;
}
.petlist [type="checkbox"]:checked + label{
  color: v.$KAMGreenDark;
  font-weight: bold;
}

// -- intoxicants -- //

.form_group-intoxicants div {
  margin-top: 1rem;
}
.form_group-intoxicants div:first-child {
  margin-top: 0;
}
.form_group-intoxicants div div {
  margin-bottom: 0;
}
.form_group-intoxicants div div p {
  margin: 0;
  color: v.$White;
}
.without_dot {
  display: flex;
  margin-top: 0.5rem!important;
  justify-content: space-between;
}
.without_dot input[type="radio"]{
  visibility: hidden;
  height: 0;
  width: 0;
}
.without_dot label {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-color: v.$KAMGreyDark;
  color: v.$White;
  padding: 0.2rem 0.4rem;
  margin-right: 0.5rem;
  border-radius: 0.2rem;
  font-size: 0.75rem!important;
}
.without_dot label:last-child {
  margin-right: 0;
}
.without_dot input[type="radio"]:checked + label{
  background-color: v.$KAMGreenSemiLight;
}

@media screen and (max-width: 1280px) {

.form_group-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(12, 2.9rem);
  background: v.$KAMBlue;
}
.form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 0 0.7rem 0 1.7rem;
}
.form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 0 0.7rem 0 1.7rem;
}
.form_group_item--2 label, .form_group_item--2 input {
  margin-top: 0;
}
.form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 7;
  padding: 1rem 0 1rem 1.7rem;
  display: flex;
}
.form_group_item--4 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 4;
  padding: 1.75rem 0.7rem 0 0;
  display: block;
}
.form_group-basic_details {
  margin-right: 1rem !important;
}
.form_group_item--4 .form_group-basic_details:last-child {
  margin-top: 2.5rem;
}
.form_group_item--5 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 7;
  padding: 1rem 0.75rem 0 0;
  display: flex;
  justify-content: space-between;
}
#status {
  margin-top: 0.2rem;
}

.form_group_item--6 {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 7;
  grid-row-end: 13;
  padding: 0 0.7rem 1rem 0;
}
.form_group_item--7 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 7;
  grid-row-end: 13;
  padding: 0 1.7rem 1rem 1.7rem;
}
.form_group_item--8 {
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 13;
}
}

</style>
