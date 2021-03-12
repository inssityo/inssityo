<template>
  <div>  
    <h2>Kerro itsestäsi:</h2>

    <div class="container">

      <div class="column column-item--1 container">
        <div class="row-item--1">
          <ProfileImage v-on:childToParent="onChildClickProfileImage" v-on:click="emitToParent" />
        </div>
        <div class="row-item--2">
          <label for="firstname" class="label__border-bottom--green border-radius__left">Etunimi</label>
          <input type="text" id="firstname" class="border-radius__right" v-model="user.name" v-on:keyup="emitToParent">
        </div>
        <div class="row-item--3">
          <label for="lastname" class="label__border-bottom--green border-radius__left">Sukunimi</label>
          <input type="text" id="lastname" class="border-radius__right" v-model="user.surname" v-on:keyup="emitToParent">
        </div>
        <div class="row-item--4">
          <Age id-value="P" v-bind:age-group="user.ageGroup" v-on:childToParent="onChildClickAge" v-on:click="emitToParent" v-model="user.ageGroup" />
        </div>
        <div class="row-item--5">
          <Gender id-value="P" v-bind:gender-choice="user.gender" v-on:childToParent="onChildClickGender" v-on:click="emitToParent" v-model="user.gender" />
        </div>
        <div class="row-item--6" v-bind:class="{'row-item--6-2': user.employmentStatus === 1}">
          <Status id-value="P" v-bind:current-status="user.employmentStatus" v-on:childToParent="onChildClickStatus" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--7" v-show="user.employmentStatus === 1">
          <WorkType id-value="P" :employment-status-p="user.employmentStatus" v-bind:workTypeChoice="user.workType" v-on:childToParent="onChildClickWorkType" v-on:click="emitToParent" />
        </div>
        <div class="row-item--8">
          <label for="description-p">Kuvaus itsestäsi</label>
          <textarea id="description-p" class="box" placeholder="Kerro vapaasti itsestäsi ja hakusi taustoista." v-model="user.description" v-on:keyup="emitToParent"></textarea>
        </div>
      </div>

      <div class="column column-item--2 container">
        <div class="row-item--1">
          <Hobbies id-value="P" v-bind:currentHobbies="user.hobbies" v-on:childToParent="onChildClickHobbies" v-on:click="emitToParent" />
        </div>
      </div>

      <div class="column column-item--3 container">
        <div class="row-item--1">
          <Sociality id-value="P" v-bind:found-sociality="user.sociality" v-on:childToParent="onChildClickSociality" v-on:click="emitToParent" />
        </div>
        <div class="row-item--2">
          <Traits id-value="P" :found-traits="user.personalityTraits" v-on:childToParent="onChildClickTraits" v-on:click="emitToParent" />
        </div>
        <div class="row-item--3">
          <Pets id-value="P" v-on:childToParent="onChildClickPets" v-on:click="emitToParent" />
        </div>
        <div class="row-item--4">
          <Intoxicants id-value="P" v-on:childToParent="onChildClickIntoxicants" v-on:click="emitToParent" />
        </div>
      </div>
    </div>
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
import LocalStorageService from '../../../plugins/localStorage.service.js'

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
      errors: {},
      errorList: {},
      isValid: true,

      user: {
        name: '',
        surname: '',
        img: '',

        ageGroup: null,
        gender: null,
        employmentStatus: null,
        workType: null, //komponentissa '', kumpi?

        description: '', //Aseta max merkkimäärä!!
        alcohol: 1,
        smoking: 1,
        drugs: 1,

        personalityTraits: [],
        sociality: 1,
        pets: false,
        petTypes: [ //Miten handlataan tällainen vastaus?
          {
            dogs: false,
            cats: false,
            rodents: false,
            birds: false,
            fishes: false,
            terrarium: false,
            other: false,
          }
        ],
        hobbies: [
          {
            collecting: 1,
            crafts: 1,
            informationTech: 1,
            sports: 1,
            music: 1,
            games: 1,
            reading: 1,
            art: 1,
            culture: 1,
            cooking: 1,
            travelling: 1,
            voluntaryWork: 1,
          }
        ],
      }
    }
  },
  computed: {

  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', { 'user': this.user, 'firstname': this.user.name });
    },
    onChildClickGender(value) {
      this.user.gender = value.genders;
    },
    onChildClickAge(value) {
      this.user.ageGroup = value.ages;
    },
    onChildClickStatus(value) {
      this.user.employmentStatus = value.statuses;
      this.handleWorkType();
    },
    onChildClickPets(value) {
      this.user.pets = value.checked;
      this.user.petTypes = value.petList;
    },
    onChildClickProfileImage(value) {
      this.user.img = value; //TSEKKAA OIKEA MUOTO
      console.log(JSON.stringify(this.user))
    },
    onChildClickTraits(value) {
      this.user.personalityTraits = value;
    },
    onChildClickHobbies(value) {
      this.user.hobbies = value;
    },
    onChildClickIntoxicants(value) {
      this.user.alcohol = value.alcohol;
      this.user.smoking = value.smoking;
      this.user.drugs = value.drugs;
    },
    onChildClickSociality(value) {
      this.user.sociality = parseInt(value);
    },
    onChildClickWorkType(value) {
      this.user.workType = value.types;
    },
    handleWorkType() {
      if (this.user.employmentStatus !== 1) {
        this.user.workType = null;
      }
    }
  },
   mounted: function () {
    let loggedIn = LocalStorageService.getLoggedInUser();
    if (loggedIn) {
      console.log("user found");
      this.user = JSON.parse(loggedIn);
      console.log("USER", this.user)
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

h2 {
  padding-top: 1rem;
}
input[type="text"] {
  padding: 0.5rem;
  margin: 0.5rem 0;
}

.container {
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 1rem;
}
.column {
  margin-top: 0;
  gap: 0;
}
.column-item--1.container {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGrey;
}
.column-item--2.container {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMBeige;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
.column-item--3.container {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGrey;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
.column-item--1.container .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 6;
  margin-bottom: 0.8rem;
}
.column-item--1.container .row-item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
.column-item--1.container .row-item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
}
.column-item--1.container .row-item--2 label,
.column-item--1.container .row-item--3 label {
  background: v.$White;
  padding: 0.5rem;
  margin: auto 0;
}
.column-item--1.container .row-item--4 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
.column-item--1.container .row-item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
.column-item--1.container .row-item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  justify-content: space-between;
}
.column-item--1.container .row-item--6 div {
  width: 100%;
}
.column-item--1.container .row-item--6-2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 9;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
.column-item--1.container .row-item--7 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 10;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
.column-item--1.container .row-item--8 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 14;
  margin: 0.8rem;
}
.column-item--1.container .row-item--8 textarea {
  margin-top: 0.4rem;
  height: 8rem;
}
.column-item--2.container .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
  position: relative;
}
.column-item--3.container .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0.8rem;
  position: relative;
}
.column-item--3.container .row-item--2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 8;
  margin-bottom: 0.8rem;
}
.column-item--3.container .row-item--3 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 10;
  margin-bottom: 0.8rem;
}
.column-item--3.container .row-item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
}

</style>