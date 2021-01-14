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
          <textarea type="text" id="more_about" placeholder="Kerro vapaasti itsestäsi ja hakusi taustoista" v-model="more_about"></textarea>
        </div>

        <div class="form_group_item--4">
          <div class="form_group-basic_details">
            <Age v-on:childToParent="onChildClickAge" />
          </div>
          <div class="form_group-basic_details">
            <Gender v-on:childToParent="onChildClickGender" />
          </div>
        </div>

        <div class="form_group_item--5">
          <div class="form_group-basic_details">
            <Status v-on:childToParent="onChildClickStatus" />
          </div>
        </div>
        
        <div class="form_group_item--8">
          <ProfileImage v-on:childToParent="onChildClickProfileImage" />
          {{fromChildSrc}}
        </div>

        <div class="form_group_item--6">
          <div class="form_group-pets">
            <label>Omistatko lemmikkejä?</label>
            <input type="checkbox" id="pets" v-model="checkedPets" @click="handleCheckedPets">
            <p v-bind:style="{ fontWeight: 'bold'}">{{ checkedPets ? "-kyllä" : "-ei" }}</p>
          </div>
          <div class="pets_list" v-if="checkedPets">
            <Pets v-on:childToParent="onChildClickPets" />
            {{fromChildCheckedPetList}}
          </div>
        </div>

        <div class="form_group_item--9">
          <div class="form_group-character">
            <Characters v-on:childToParent="onChildClickCharacters"/>
            <li v-for="character in filteredCharacters" :key="character.value">{{character.value}}</li>
          </div>
        </div>
        
        <div class="form_group_item--7">
          <div class="form_group-intoxicants">
            <Intoxicants v-on:childToParent="onChildClickIntoxicants" />

          </div>
        </div>
       
      </div>

    </form>

  </div>
</template>

<script>
import Age from './form/Age.vue'
import Gender from './form/Gender.vue'
import Status from './form/Status.vue'
import ProfileImage from './form/ProfileImage.vue'
import Characters from './form/Characters.vue'
import Pets from './form/Pets.vue'
import Intoxicants from './form/Intoxicants.vue'

export default {
  name: 'PersonalProfile',
  el: '#personalProfile',

  components: {
    Age,
    Gender,
    Status,
    ProfileImage,
    Characters,
    Pets,
    Intoxicants
  },
  
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      more_about: '',
      gender: '',

      status: '',
      checkedPets: true,
      fromChildAge: null,
      fromChildGender: null,
      fromChildStatus: null,
      fromChildSrc: '',
      fromChildCheckedCharacterList: [],
      fromChildCheckedPetList: [],
      fromChildCheckedIntoxidantList: [],
      alcohol: true,
      smoke: true,
      drugs: true,
      
      errors: {},
      errorList: {},
      isValid: true,
    }
  },
  computed: {
    filteredCharacters() {
      return this.fromChildCheckedCharacterList.filter((character) => { 
        return character.checked;
      });
    }
  },

  methods: {
    emitToParent () {
      this.$emit('childToParent', this.firstname)
    },
    onChildClickGender (value) {
      this.fromChildGender = value;
    },
    onChildClickAge (value) {
      this.fromChildAge = value;
    },
    onChildClickStatus (value) {
      this.fromChildStatus = value;
    },
    onChildClickPets (value) {
      this.fromChildCheckedPetList = value;
    },
    onChildClickProfileImage (value) {
      this.fromChildSrc = value;
    },
    onChildClickCharacters (value) {
      this.fromChildCheckedCharacterList = value;
    },
    onChildClickIntoxicants (value) {
      this.fromChildCheckedIntoxidantList = value;
    },
    
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h2 {
  margin-left: 3rem;
}
label {
  border-radius: 1.5rem 0 0 1.5rem;
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
