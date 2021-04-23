<template>
  <div>  
    <h2>Minkälaista kämppistä etsit:</h2>

    <div class="container">

      <div class="column column-item--1 container">
        <div class="row-item--1">
          <RoommateImage />
        </div>
        <div class="row-item--2" v-bind:class="{'remove__align-center': showAge}">
          <Age id-value="R" v-on:childToParent="onChildClickAge" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--3" v-bind:class="{'remove__align-center': showGender}">
          <Gender id-value="R" v-on:childToParent="onChildClickGender" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--4" v-bind:class="{'row-item--4-2': employed, 'remove__align-center': showStatus}">
          <Status id-value="R" v-on:childToParent="onChildClickStatus" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--5" v-show="employed" v-bind:class="{'remove__align-center': showWorkType}">
          <WorkType id-value="R" :employment-status-r="targetProfile.employed" v-on:childToParent="onChildClickWorkType" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--6">
          <label for="description-r">Kuvaus kämppiksestä</label>
          <textarea id="description-r" class="box" placeholder="Kerro vapaasti, minkälaista kämppistä haet" v-model="targetProfile.description" v-on:keyup="emitToParent"></textarea>
        </div>
      </div>

      <div class="column column-item--2 container">
        <div class="row-item--1">
          <Hobbies id-value="R" v-on:childToParent="onChildClickHobbies" v-on:click="emitToParent"/>
        </div>
      </div>

      <div class="column column-item--3 container">
        <div class="row-item--1">
          <Sociality id-value="R" v-on:childToParent="onChildClickSociality" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--2">
          <Traits id-value="R" v-on:childToParent="onChildClickTraits" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--3">
          <Pets id-value="R" v-on:childToParent="onChildClickPets" v-on:click="emitToParent"/>
        </div>
        <div class="row-item--4">
          <Intoxicants id-value="R" v-on:childToParent="onChildClickIntoxicants" v-on:click="emitToParent"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Age from '../inputElements/person/Age.vue'
import Gender from '../inputElements/person/Gender.vue'
import Status from '../inputElements/person/Status.vue'
import RoommateImage from '../inputElements/person/RoommateImage.vue'
import Traits from '../inputElements/person/Traits.vue'
import Hobbies from '../inputElements/person/Hobbies.vue'
import Pets from '../inputElements/person/Pets.vue'
import Intoxicants from '../inputElements/person/Intoxicants.vue'
import Sociality from '../inputElements/person/Sociality.vue'
import WorkType from '../inputElements/person/WorkType.vue'

//import axios from 'axios';

export default {
  name: 'RoommateProfile',
  el: '#roommateProfile',

  components: {
    Age,
    Gender,
    Status,
    RoommateImage,
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

      showAge: false,
      showGender: false,
      showStatus: false,
      employed: false,
      showWorkType: false,

      targetProfile: {  
        id: '',
        ageGroup: [],
        gender: [],
        location: [], //kaupunkeja ja kaupunginosia voi olla monia
        rentLimit: null,
        maxRoomMates: null,
        employmentStatus: null,
        workType: null,

        description: '',
        alcohol: 1,
        smoking: 1,
        drugs: 1,

        personalityTraits: [],
        sociality: 1,
        pets: true,
        petTypes: [
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
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.targetProfile);
    },
    onChildClickGender(value) {
      this.targetProfile.gender = value.genders;
      this.showGender = value.show;
    },
    onChildClickAge(value) {
      this.targetProfile.ageGroup = value.ages;
      this.showAge = value.show;
    },
    onChildClickStatus(value) {
      this.targetProfile.employmentStatus = value.statuses;
      this.showStatus = value.show;

      this.employed = this.targetProfile.employmentStatus.includes(1);
      this.handleWorkType();
    },
    onChildClickPets(value) {
      this.targetProfile.pets = value.checked;
      this.targetProfile.petTypes = value.petList;
    },
    onChildClickTraits(value) {
      this.targetProfile.personalityTraits = value;
    },
    onChildClickHobbies(value) {
      this.targetProfile.hobbies = value;
    },
    onChildClickIntoxicants(value) {
      this.targetProfile.alcohol = value.alcohol;
      this.targetProfile.smoking = value.smoking;
      this.targetProfile.drugs = value.drugs;
    },
    onChildClickSociality(value) {
      this.targetProfile.sociality = value;
    },
    onChildClickWorkType(value) {
      this.targetProfile.workType = value.types;
      this.showWorkType = value.show;
    },
    handleWorkType() {
      if (!this.employed) {
        this.targetProfile.workType = null;
      }
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

h2 {
  padding-top: 1rem;
}
.remove__align-center {
  align-items: normal !important;
  margin-top: 0.9rem !important;
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

//AptImage
.column-item--1.container .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 7;
}
//Age
.column-item--1.container .row-item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0.8rem 0.4rem 0 0.8rem;
  z-index: 2;
}
//Gender
.column-item--1.container .row-item--3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0.8rem 0.8rem 0 0.4rem;
  z-index: 2;
}
//Status large
.column-item--1.container .row-item--4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0.8rem 0.8rem 0 0.8rem;
  justify-content: space-between;
  z-index: 1;
}
//Status
.column-item--1.container .row-item--4-2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0.8rem 0.4rem 0 0.8rem;
}
//WorkType
.column-item--1.container .row-item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0.8rem 0.8rem 0 0.4rem;
  z-index: 1;
}
//Description
.column-item--1.container .row-item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 14;
  margin: 1rem 0.8rem 0.8rem 0.8rem;
}
.column-item--1.container .row-item--6 textarea {
  margin-top: 0.4rem;
  height: 10.7rem;
}
//Hobbies
.column-item--2.container .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
  position: relative;
}
//Sociality
.column-item--3.container .row-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0.8rem;
  position: relative;
}
//Characters
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
