<template>
  <div class="section">  
    <h2>Kerro itsestäsi:</h2>

    <form id="personal-profile">
      <div class="form_group-grid--1">

        <div class="form_group_item--1-grid">
          <div class="form_group_item--1">
            <ProfileImage v-on:childToParent="onChildClickProfileImage" />
          </div>
          <div class="form_group_item--2">
            <label for="firstname">Etunimi</label>
            <input type="text" id="firstname" v-model="firstname" v-on:keyup="emitToParent">
          </div>
          <div class="form_group_item--3">
            <label for="lastname">Sukunimi</label>
            <input type="text" id="lastname" v-model="lastname">
          </div>
          <div class="form_group_item--4">
            <Age v-on:childToParent="onChildClickAge" />
          </div>
          <div class="form_group_item--5">
            <Gender v-on:childToParent="onChildClickGender" />
          </div>

          <div class="form_group_item--6" v-bind:class="{'form_group_item--6-2': fromChildStatus === 1}">
            <Status v-on:childToParent="onChildClickStatus" />
          </div>
          <div class="form_group_item--7" v-if="fromChildStatus === 1">
            <WorkType v-on:childToParent="onChildClickWorkType" />
          </div>

          <div class="form_group_item--8">
            <textarea type="text" id="more_about" placeholder="Kerro vapaasti itsestäsi ja hakusi taustoista" v-model="more_about"></textarea>
          </div>
        </div>

        <div class="form_group_item--2-grid">
          <div class="form_group_item--1">
            <Hobbies id-value="P" v-on:childToParent="onChildClickHobbies" />
          </div>
        </div>

        <div class="form_group_item--3-grid">
          <div class="form_group_item--1">
            <Sociality id-value="P" v-on:childToParent="onChildClickSociality" />
          </div>

          <div class="form_group_item--2">
            <Traits id-value="P" v-on:childToParent="onChildClickTraits"/>
             <!--Printtaus ei toimi alaspäin, mutta filter toimii -->
            <li v-for="trait in filteredTraits" :key="trait.value">{{trait.value}}</li>
          </div>

          <div class="form_group_item--3">
            <Pets id-value="P" v-on:childToParent="onChildClickPets" />
          </div>

          <div class="form_group_item--4">
            <Intoxicants id-value="P" v-on:childToParent="onChildClickIntoxicants" />
          </div>

        </div>

      </div>

      
    </form>

  </div>
</template>

<script>
import Age from '../inputElements/person/Age.vue'
import Gender from '../inputElements/person/Gender.vue'
import Status from '../inputElements/person/Status.vue'
import ProfileImage from '../inputElements/person/ProfileImage.vue'
import Traits from '../inputElements/person/Traits.vue'
import Hobbies from '../inputElements/person/Hobbies.vue'
import Pets from '../inputElements/person/Pets.vue'
import Intoxicants from '../inputElements/person/Intoxicants.vue'
import Sociality from '../inputElements/person/Sociality.vue'
import WorkType from '../inputElements/person/WorkType.vue'

//import axios from 'axios';

export default {
  name: 'PersonalProfile',
  el: '#personalProfile',

  components: {
    Age,
    Gender,
    Status,
    ProfileImage,
    Traits,
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
      fromChildCheckedTraitList: [],
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
    filteredTraits() {
      return this.fromChildCheckedTraitList.filter((trait) => { 
        return trait.checked;
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
    onChildClickTraits(value) {
      this.fromChildCheckedTraitList = value;
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

  /*
  
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
@use '../../../assets/styles/variables.scss' as v;

.section {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
input[type="text"] {
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.5rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 100%;
}
input[type="text"]:focus, input[type="select"]:focus {
  outline: none;
  background: v.$KAMGreyLight;
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
  border-width: 0.15rem;
  background: v.$White;
}
.form_group-grid--1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
}
.form_group_item--1-grid {
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGreyLight;
}
.form_group_item--2-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMBeigeLight;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
.form_group_item--3-grid {
  grid-column-start: 3;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGreyLight;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
.form_group_item--1-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 6;
  margin-bottom: 0.8rem;
}
.form_group_item--1-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
.form_group_item--1-grid .form_group_item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
.form_group_item--1-grid .form_group_item--2 label,
.form_group_item--1-grid .form_group_item--3 label {
  background: v.$White;
  padding: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  margin: auto 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
}
.form_group_item--1-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
.form_group_item--1-grid .form_group_item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
.form_group_item--1-grid .form_group_item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  justify-content: space-between;
}
.form_group_item--1-grid .form_group_item--6 div {
  width: 100%;
}
.form_group_item--1-grid .form_group_item--6-2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 9;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
.form_group_item--1-grid .form_group_item--7 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
.form_group_item--1-grid .form_group_item--8 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 14;
  display: flex;
  align-items: center;
  margin: 2rem 0.8rem;
}
.form_group_item--1-grid .form_group_item--8 textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 100%;
  width: -webkit-fill-available;
  width: 100%;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
}
.form_group_item--2-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
  position: relative;
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
  grid-row-end: 10;
  margin-bottom: 0.8rem;
}
.form_group_item--3-grid .form_group_item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
}

</style>
