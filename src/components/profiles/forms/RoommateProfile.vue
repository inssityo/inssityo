<template>
  <div class="section">  
    <h2>Minkälaista kämppistä etsit:</h2>

    <form id="roommate-profile">
      <div class="form_group-grid--1">

        <div class="form_group_item--1-grid">
          <div class="form_group_item--1">
            <RoommateImage />
          </div>

          <div class="form_group_item--2">
            <Age v-on:childToParent="onChildClickAge" />
          </div>
          <div class="form_group_item--3">
            <Gender v-on:childToParent="onChildClickGender" />
          </div>

          <div class="form_group_item--6" v-bind:class="{'form_group_item--6-2': fromChildStatus ===1}">
            <Status v-on:childToParent="onChildClickStatus" />
          </div>
          <div class="form_group_item--7" v-if="fromChildStatus === 1">
            <WorkType v-on:childToParent="onChildClickWorkType" />
          </div>

          <div class="form_group_item--8">
            <textarea type="text" id="description-r" placeholder="Kerro vapaasti, minkälaista kämppistä haet" v-model="description"></textarea>
          </div>
        </div>

        <div class="form_group_item--2-grid">
          <div class="form_group_item--1">
            <Hobbies id-value="R" v-on:childToParent="onChildClickHobbies" />
          </div>
        </div>

        <div class="form_group_item--3-grid">
          <div class="form_group_item--1">
            <Sociality id-value="R" v-on:childToParent="onChildClickSociality" />
          </div>

          <div class="form_group_item--2">
            <Traits id-value="R" v-on:childToParent="onChildClickTraits"/>
          </div>

          <div class="form_group_item--3">
            <Pets id-value="R" v-on:childToParent="onChildClickPets" />
          </div>

          <div class="form_group_item--4">
            <Intoxicants id-value="R" v-on:childToParent="onChildClickIntoxicants" />
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
      description: '',
      checkedPets: true,
      fromChildAge: null,
      fromChildGender: null,
      fromChildStatus: null,
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

  },

  methods: {
    /*
    emitToParent() {
      this.$emit('childToParent', this.firstname)
    },*/
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
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

.section {
  padding-top: 1rem;
  //padding-bottom: 1rem;
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

//AptImage
.form_group_item--1-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 7;
}
//Age
.form_group_item--1-grid .form_group_item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0.8rem 0.4rem 0 0.8rem;
}
//Gender
.form_group_item--1-grid .form_group_item--3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  align-items: center;
  margin: 0.8rem 0.8rem 0 0.4rem;
}
//Status
.form_group_item--1-grid .form_group_item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
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
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0 0.4rem 0 0.8rem;
}
//WorkType
.form_group_item--1-grid .form_group_item--7 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  display: flex;
  align-items: center;
  margin: 0 0.8rem 0 0.4rem;
}
//Description
.form_group_item--1-grid .form_group_item--8 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 9;
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
//Hobbies
.form_group_item--2-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 14;
  margin-bottom: 0.8rem;
  position: relative;
}
//Sociality
.form_group_item--3-grid .form_group_item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-bottom: 0.8rem;
  position: relative;
}
//Characters
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
