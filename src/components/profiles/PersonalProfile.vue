<template>
  <div>  
    <h2>Luo henkilökohtainen profiilisi: harrastukset</h2>

    <form id="personalProfile" class="profile_form">

      <div class="form_group form_group-grid">

        <div class="form_group_item--1">
          <label for="firstname">Etunimi</label>
          <input type="text" id="firstname" v-model="firstname" v-on:keyup="emitToParent">
        </div>
        <div class="form_group_item--2">
          <label for="lastname">Sukunimi</label>
          <input type="text" id="lastname" v-model="lastname">
        </div>

        <div class="form_group_item--3">
          <textarea type="text" id="more_about" placeholder="Kerro vapaasti itsestäsi" v-model="more_about"></textarea>
        </div>

        <div class="form_group_item--4">
          <div class="form_group-basic_details">
            <select id="age" placeholder="age" v-model="age">
              <option value="" selected disabled hidden>Ikä</option>
              <option value="under20">&lt; 20</option>
              <option value="20-24">20-24</option>
              <option value="25-29">25-29</option>
              <option value="30-34">30-34</option>
              <option value="35-39">35-39</option>
              <option value="40-44">40-44</option>
              <option value="45-49">45-49</option>
              <option value="over50">&gt; 50</option>
            </select>
          </div>

          <div class="form_group-basic_details">
            <select id="gender" placeholder="gender" @click="changeDesign" v-model="gender">
              <option value="" selected disabled hidden>Sukupuoli</option>
              <option value="male">Mies</option>
              <option value="female">Nainen</option>
              <option value="other">Muu</option>
            </select>
          </div>
        </div>
        <div class="form_group_item--5">
          <div class="form_group-basic_details">
            <select id="status" @click="changeDesign" v-model="status">
              <option value="" selected disabled hidden>Elämäntilanne</option>
              <option value="male">Työssäkäyvä</option>
              <option value="female">Työtön</option>
              <option value="other">Opiskelija</option>
              <option value="other">Eläkeläinen</option>
              <option value="other">Varusmies</option>
            </select>
          </div>
        </div>
        
        <div class="form_group_item--8">
          <img src="../../assets/images/pexels-jonaorle-3828240.jpg" class="grid_img" alt="Profile Image" >
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

        <div class="form_group_item--9">
          <div class="form_group-character">
            <div>  
              <p>Valitse luonnettasi kuvaavat sanat (max. 7) array</p>
              <div className="text-danger">{{ errors.characters }}</div>
              <div class="without_dot">
                <div v-for="(option, index) in optionsCharacters" :key="index">
                <input type="checkbox" :id="index" :value="option.value" v-model="checkedCharacterList" />
                <label :for="index" @click="handleCharacters()">{{ option.text }}</label>
                </div>
                {{checkedCharacterList}}
                <!-- http://kepeli.metropolia.fi/wp-content/uploads/2019/09/Vahvuuskortit.pdf -->
              </div>
            </div>
          </div>
        </div>
        
        <div class="form_group_item--7">
          <div class="form_group-intoxicants">
            <div>  
              <p>Käytätkö alkoholia päihtymistarkoitukseen?</p>
              <div class="without_dot">
                <input type="radio" id="alcohol_no" checked name="alcohol" value="alcohol_no" v-model="alcohol" />
                <label for="alcohol_no">En lainkaan</label>
                  
                <input type="radio" id="alcohol_sometimes" name="alcohol" value="alcohol_sometimes" v-model="alcohol" />
                <label for="alcohol_sometimes">Silloin tällöin</label>

                <input type="radio" id="alcohol_often" name="alcohol" value="alcohol_often" v-model="alcohol" />
                <label for="alcohol_often">Usein</label>
                  
                <input type="radio" id="alcohol_a_lot" name="alcohol" value="alcohol_a_lot" v-model="alcohol" />
                <label for="alcohol_a_lot">Todella paljon</label>
              </div>
            </div>
            
            <div>
              <p>Tupakoitko?</p>
              <div class="without_dot">
                <input type="radio" id="smoke_no" checked name="smoke" value="smoke_no" v-model="smoke" />
                <label for="smoke_no">En lainkaan</label>
                  
                <input type="radio" id="smoke_sometimes" name="smoke" value="smoke_sometimes" v-model="smoke" />
                <label for="smoke_sometimes">Silloin tällöin</label>

                <input type="radio" id="smoke_often" name="smoke" value="smoke_often" v-model="smoke" />
                <label for="smoke_often">Usein</label>
                  
                <input type="radio" id="smoke_a_lot" name="smoke" value="smoke_a_lot" v-model="smoke" />
                <label for="smoke_a_lot">Todella paljon</label>
              </div>
            </div>
           
            <div>
              <p>Käytätkö huumaavia aineita?</p>
              <div class="without_dot">
                <input type="radio" id="drugs_no" checked name="drugs" value="drugs_no" v-model="drugs" />
                <label for="drugs_no">En lainkaan</label>
                  
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

       
      </div>

    </form>

  </div>
</template>

<script>
//import PersonalProfile from '../profiles/PersonalProfile.vue'
/*
function showPetsCheckboxes() {
  return ()
    if(this.checkedPets) {
      return (
        <div>
            <input type="checkbox" id="dogs" value="Dog" v-model="checkedPetsList" />
            <label for="dogs">Dogs</label>
            <input type="checkbox" id="cats" value="Cats" v-model="checkedPetsList" />
            <label for="cats">Cats</label>
            <input type="checkbox" id="foo" value="Foo" v-model="checkedPetsList" />
            <label for="foo">Foo</label>
            <br />
            <span>Checked pets: {{ checkedPetsList }}</span>
        </div>
      );
      
    }
  }*/

export default {
  name: 'PersonalProfile',
  el: '#personalProfile',

  
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
      checkedCharacterList: [],
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
          text: 'Muita eläimiä',
          value: 'other_animals'
        }
      ],
      optionsCharacters: [
        {
          text: 'Kokeilunhaluinen',
          value: 'experimental'
        },
        {
          text: 'Luotettava',
          value: 'trustworthy'
        },
        {
          text: 'Huumorintajuinen',
          value: 'humorous'
        },
        {
          text: 'Ennakkoluuloton',
          value: 'open_minded'
        },
        {
          text: 'Puhelias',
          value: 'talkative'
        },
        {
          text: 'Hiljainen',
          value: 'quiet'
        },
        {
          text: 'Sosiaalinen',
          value: 'social'
        },
        {
          text: 'Vastuuntuntoinen',
          value: 'responsible'
        },
        {
          text: 'Rauhallinen',
          value: 'calm'
        },
        {
          text: 'Vilkas',
          value: 'lively'
        },
        {
          text: 'Levoton',
          value: 'restless'
        },
        {
          text: 'Huolehtiva',
          value: 'caring'
        },
        {
          text: 'Ymmärtäväinen',
          value: 'understanding'
        },
        {
          text: 'Harkitseva',
          value: 'prudent'
        },
        {
          text: 'Määrätietoinen',
          value: 'determined'
        },
        {
          text: 'Itsenäinen',
          value: 'independent'
        },
        {
          text: 'Huolellinen',
          value: 'careful'
        },
        {
          text: 'Rohkea',
          value: 'brave'
        },
        {
          text: 'Seikkailunhaluinen',
          value: 'adventurous'
        },
        {
          text: 'Yhteistyökykyinen',
          value: 'cooperative'
        },
        {
          text: 'Pohdiskeleva',
          value: 'contemplative'
        },
        {
          text: 'Järjestelmällinen',
          value: 'systematic'
        },
        {
          text: 'Tavoitteellinen',
          value: 'goal_oriented'
        },
        {
          text: 'Sopeutuvainen',
          value: 'adaptable'
        },
        {
          text: 'Tunteellinen',
          value: 'emotional'
        },
        {
          text: 'Luova',
          value: 'creative'
        },
        {
          text: 'Optimisti',
          value: 'optimistic'
        },
        {
          text: 'Herkkä',
          value: 'sensitive'
        },
        {
          text: 'Tunnollinen',
          value: 'conscientious'
        },
        {
          text: 'Huomionhaluinen',
          value: 'attention_seeking'
        }
      ],
      errors: {},
      errorList: {},
      isValid: true,
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
    handleCharacters() {
      this.forceRerenderCharactersList();
      console.log(this.checkedCharacterList.length);
      if (this.checkedCharacterList.length > 3) {
        this.isValid = false;
        this.errorList["characters"] = "Max 7 characters can be chosen.";
        this.errors = this.errorList;
      } else {
        this.isValid = true;
        this.errors = {};
      }
    },
    forceRerenderCharactersList() {
      this.checkedCharacterList.length = this.checkedCharacterList.length + 1;
      this.$nextTick (() => {
        this.checkedCharacterList.length = this.checkedCharacterList.length - 1;
      });
    },
    /*
    onCheck(val) {
      this.selected = val;
    }*/
  }
    /*
    selectAll: function() {
      this.checkedFilters = [];
      this.selectAllText = this.selectAllText == "Select All" ? 'Clear All' : 'Select All';
      if (this.allSelected) { 
        for (filter in this.filters) {
          this.checkedFilters.push(this.filters[filter].toString());
        }
      }
    },
    showDropdown: function(){
      if(this.dropdown == false){
        this.dropdown = true;
        this.activeTrigger = true;
        TweenMax.fromTo(
          "#dropdown",
          0.55,
          {
            autoAlpha: 0,
            y: -10
          },
          {
            autoAlpha: 1,
            y: 0,
            ease: Power2.easeOut
          }
        );
      }else{
        this.dropdown = false;
        this.activeTrigger = false;
         TweenMax.to(
          "#dropdown",
          0.2,
          {
            autoAlpha: 0,
            y: -10,
            ease: Power2.easeOut
          });
      }

    }
  },
  
  created: function () {
          const customScroll = new SimpleBar(document.getElementById('customScroll'));
  }*/
  
  /*
  render: function (createElement) {
    return createElement('h1', this.picked);
  }*/

}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/_variables.scss' as v;

h2 {
  margin-left: 3rem;
}
label {
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
  grid-template-rows: repeat(10, 2.9rem);
  background: v.$KAMGrey;
}
.form_group_item--1 { //firstname
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 1rem 0.7rem 1rem 1.7rem;
  display: flex;
}
.form_group_item--2 { //lastname
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 0 0.7rem 0 1.7rem;
  display: flex;
}
.form_group_item--1 label, .form_group_item--2 label {
  background: v.$White;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
}
.form_group_item--2 input {
  margin-right: 5.9rem;
}
.form_group_item--1 input, .form_group_item--2 input {
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: auto 0.9rem auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: unset;
  width: 100%;
}
.form_group_item--3 { //other textarea
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 11;
  padding: 1.5rem 0 1rem 1.7rem;
  display: flex;
  justify-content: space-between;
}
.form_group_item--3 textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem 1.7rem 0.5rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  width: -webkit-fill-available;
  border-width: unset;
}
.form_group_item--4 { //age and gender
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  padding: 1.5rem 1.7rem 0 1.7rem;
  display: flex;
  justify-content: space-between;
}
.form_group_item--4 .form_group-basic_details:first-child {
  margin-right: 1.5rem;
}
.form_group_item--5 { //life status
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  padding: 1.5rem 1.7rem 1rem 1.7rem;
}
.form_group_item--6 { //pets
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 11;
  padding: 1rem 0.7rem 1rem 0;
}
.form_group_item--9 { //
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 6;
  padding: 1rem 1.6rem 1rem 0;
}
.form_group_item--7 { //drugs
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 6;
  grid-row-end: 11;
  padding: 1rem 1.6rem 1rem 0;
}
.form_group_item--8 { //profile img
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 5;
  padding: 1.5rem 1.7rem 0 0;
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
  border-radius: 1.5rem;
}

// -- pets -- //
.form_group-pets {
  margin-top: 0.6rem;
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
  background: v.$KAMGreySemiDark;
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
  background: v.$KAMGreySemiDark;
  border-radius: 50%; 
  display: inline-block;
  height: 1rem;
  width: 1.1rem;
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

.form_group-intoxicants div, .form_group-character div {
  margin-top: 0.2rem;
}
.form_group-intoxicants div div, .form_group-character div div {
  margin-bottom: 0;
}
.form_group-intoxicants div .without_dot {
  margin-top: 0.2rem !important;
}
.form_group-intoxicants div p, .form_group-character div p {
  margin: 0;
}
.without_dot {
  display: flex;
  margin-top: 0.5rem!important;
  //justify-content: space-between;
  flex-wrap: wrap;
}
.without_dot input[type="radio"], .without_dot input[type="checkbox"] {
  visibility: hidden;
  height: 0;
  width: 0;
}
.without_dot label {
  //display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-color: v.$KAMGreyDark;
  color: v.$White;
  padding: 0.2rem 0.4rem;
  margin: 0.2rem 0 0.2rem 0.2rem;
  border-radius: 0.2rem;
  font-size: 0.75rem!important;
}
.without_dot label:last-child {
  margin-right: 0;
}
.without_dot input[type="radio"]:checked + label, .without_dot input[type="checkbox"]:checked + label{
  background-color: v.$KAMGreenSemiLight;
}

@media screen and (max-width: 1280px) {

.form_group-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(12, 2.9rem);
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
