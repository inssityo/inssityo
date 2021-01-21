<template>
  <div class="section">  
    <h2>Luo kämppiksen profiilisi:</h2>

    <form id="roommate-profile">
      <div class="form_group-grid--1">

        <div class="form_group_item--1-grid">
          <div class="form_group_item--1">
            <Age v-on:childToParent="onChildClickAge" />
          </div>
          <div class="form_group_item--2">
            <Gender v-on:childToParent="onChildClickGender" />
          </div>
          

          <div class="form_group_item--3">
            <div v-bind:class="{'form_group_item--flex': fromChildStatus ===1}">
              <Status v-on:childToParent="onChildClickStatus" />
            </div>
            <div class="form_group_item--flex" v-if="fromChildStatus === 1">
              <WorkType v-on:childToParent="onChildClickWorkType" />
            </div>
          </div>

          <div class="form_group_item--4">
            <textarea type="text" id="more_about" placeholder="Kerro vapaasti itsestäsi ja hakusi taustoista" v-model="more_about"></textarea>
          </div>
        </div>

        <div class="form_group_item--2-grid">
          <div class="form_group_item--1">
            <Hobbies v-on:childToParent="onChildClickHobbies" />
          </div>
        </div>

        <div class="form_group_item--3-grid">
          <div class="form_group_item--1">
            <Sociality v-on:childToParent="onChildClickSociality" />
          </div>

          <div class="form_group_item--2">
            <Characters v-on:childToParent="onChildClickCharacters"/>
             <!--Printtaus ei toimi alaspäin, mutta filter toimii -->
            <li v-for="character in filteredCharacters" :key="character.value">{{character.value}}</li>
          </div>

          <div class="form_group_item--3">
            <Pets v-on:childToParent="onChildClickPets" />
          </div>

          <div class="form_group_item--4">
            <Intoxicants v-on:childToParent="onChildClickIntoxicants" />
          </div>

        </div>
      </div>

      
    </form>

  </div>
</template>

<script>
import Age from './inputElements/person/Age.vue'
import Gender from './inputElements/person/Gender.vue'
import Status from './inputElements/person/Status.vue'
import Characters from './inputElements/person/Characters.vue'
import Hobbies from './inputElements/person/Hobbies.vue'
import Pets from './inputElements/person/Pets.vue'
import Intoxicants from './inputElements/person/Intoxicants.vue'
import Sociality from './inputElements/person/Sociality.vue'
import WorkType from './inputElements/person/WorkType.vue'

//import axios from 'axios';

export default {
  name: 'RoommateProfile',
  el: '#roommateProfile',

  components: {
    Age,
    Gender,
    Status,
    Characters,
    Hobbies,
    Pets,
    Intoxicants,
    Sociality,
    WorkType
  },
  
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      more_about: '',

      checkedPets: true,
      fromChildAge: null,
      fromChildGender: null,
      fromChildStatus: null,
      fromChildSrc: '',
      fromChildCheckedCharacterList: [],
      fromChildCheckedHobbyList: [],
      fromChildCheckedPets: true,
      fromChildCheckedPetList: [],
      fromChildCheckedIntoxidantList: [],
      fromChildSociality: null,
      fromChildWorkType: null,
      
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
    emitToParent() {
      this.$emit('childToParent', this.firstname)
    },
    onChildClickGender(value) {
      this.fromChildGender = value;
    },
    onChildClickAge(value) {
      this.fromChildAge = value;
    },
    onChildClickStatus(value) {
      this.fromChildStatus = value;
      this.handleWorkType();
    },
    onChildClickPets(value) {
      this.fromChildCheckedPets = !value.tableOne;
      this.fromChildCheckedPetList = value.tableTwo;
    },
    onChildClickProfileImage(value) {
      this.fromChildSrc = value;
    },
    onChildClickCharacters(value) {
      this.fromChildCheckedCharacterList = value;
    },
    onChildClickHobbies(value) {
      this.fromChildCheckedHobbyList = value;
    },
    onChildClickIntoxicants(value) {
      this.fromChildCheckedIntoxidantList = value;
    },
    onChildClickSociality(value) {
      this.fromChildSociality = value;
    },
    onChildClickWorkType(value) {
      this.fromChildWorkType = value;
    },
    handleWorkType() {
      if (this.fromChildStatus !== 1) {
        this.fromChildWorkType = null;
      }
    }
  },
  mounted() {

  }

  /* Tee json, lisää button, pets cats=true jne
  
  {
  "email": "example@internet.com", req
  "password": "secret", req
  "lastActive" req
  "ilmoituksen jättö" req
  "name": "Edwin",
  "surname": "Xample",
  "ageGroup": 3,
  "gender": 1,
  "location": ["Helsinki", "Espoo", "Vantaa"],
  "rentLimit": 900,
  "maxRoomMates": 3,
  "employmentStatus": 3,
  "description": "A perfect example to live with",
  "alcohol": 2,
  "smoking": 1,
  "drugs": 1,
  "personalityTraits": ["Harkitseva", "Sopeutuvainen", "Määrätietoinen"],
  "sociality": 2,
  "pets": false,
  "hobbies": {
    "collecting": 1,
    "crafts": 3,
    "informationTech": 5,
    "sports": 4,
    "music": 1,
    "games": 5,
    "reading": 2,
    "art": 3,
    "culture": 1,
    "cooking": 4,
    "travelling": 1,
    "voluntaryWork": 1
  }
}
  */
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

input[type="text"] {
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.5rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.25rem;
  width: 100%;
}
.form_group_item--flex {
  width: 48.5% !important;
}
select {
  padding: 0 0.2rem !important;
  margin: 0;
  height: 2rem;
  width: -webkit-fill-available;
  width: 100%;
  border-radius: 0.5rem;
  border-style: none none solid none !important;
  border-color: #016361 !important;
  border-width: 0.25rem;
  background: v.$White;
}
.form_group-grid--1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}
.form_group_item--1-grid {
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(12, 4rem);
  background: v.$KAMGreyLight;
}
.form_group_item--2-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(12, 3rem);
  background: v.$KAMBeigeLight;
}
.form_group_item--3-grid {
  grid-column-start: 3;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(15, 3rem);
  background: v.$KAMGreyLight;
}

.form_group_item--1-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  margin: 0 0.35rem 0 0.7rem;
}
.form_group_item--1-grid .form_group_item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  margin: 0 0.7rem 0 0.35rem;
}
.form_group_item--1-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  margin: 0 0.7rem;
  justify-content: space-between;
}
.form_group_item--1-grid .form_group_item--3 div {
  width: 100%;
}
.form_group_item--1-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 2rem 0.7rem;
}
.form_group_item--1-grid .form_group_item--4 textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 100%;
  width: -webkit-fill-available;
  width: 100%;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.25rem;
}
.form_group_item--2-grid {
  padding: 0.5rem;
}
.form_group_item--2-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 13;
  margin-bottom: 0.8rem;
  position: relative;
}
.form_group_item--3-grid {
  padding: 0.5rem;
}
.form_group_item--3-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0.8rem;
  position: relative;
}
.form_group_item--3-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 8;
  margin-bottom: 0.8rem;
}
.form_group_item--3-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 11;
  margin-bottom: 0.8rem;
}
.form_group_item--3-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 11;
  grid-row-end: 15;
  margin-bottom: 0.8rem;
}


</style>
