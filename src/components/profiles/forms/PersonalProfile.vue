<template>
  <div id="personal-profile">  
    <h2>Kerro itsestäsi:</h2>

    <div class="form_group-grid--1">

      <div class="form_group_item--1-grid">
        <div class="form_group_item--1">
          <ProfileImage v-on:childToParent="onChildClickProfileImage" v-on:click="emitToParent" />
        </div>
        <div class="form_group_item--2">
          <label for="firstname">Etunimi</label>
          <input type="text" id="firstname" v-model="user.name" v-on:keyup="emitToParent">
        </div>
        <div class="form_group_item--3">
          <label for="lastname">Sukunimi</label>
          <input type="text" id="lastname" v-model="user.surname" v-on:keyup="emitToParent">
        </div>
        <div class="form_group_item--4">
          <Age v-on:childToParent="onChildClickAge" v-on:click="emitToParent" />
        </div>
        <div class="form_group_item--5">
          <Gender v-on:childToParent="onChildClickGender" v-on:click="emitToParent" />
        </div>

        <div class="form_group_item--6" v-bind:class="{'form_group_item--6-2': user.employmentStatus === 1}">
          <Status v-on:childToParent="onChildClickStatus" v-on:click="emitToParent"/>
        </div>
        <div class="form_group_item--7" v-show="user.employmentStatus === 1">
          <WorkType v-on:childToParent="onChildClickWorkType" v-on:click="emitToParent" />
        </div>

        <div class="form_group_item--8">
          <textarea type="text" id="description-p" placeholder="Kerro vapaasti itsestäsi ja hakusi taustoista" v-model="user.description" v-on:keyup="emitToParent"></textarea>
        </div>
      </div>

      <div class="form_group_item--2-grid">
        <div class="form_group_item--1">
          <Hobbies id-value="P" v-on:childToParent="onChildClickHobbies" v-on:click="emitToParent" />
        </div>
      </div>

      <div class="form_group_item--3-grid">
        <div class="form_group_item--1">
          <Sociality id-value="P" v-on:childToParent="onChildClickSociality" v-on:click="emitToParent" />
        </div>

        <div class="form_group_item--2">
          <Traits id-value="P" v-on:childToParent="onChildClickTraits" v-on:click="emitToParent" />
            <!--Printtaus ei toimi alaspäin, mutta filter toimii -->
          <li v-for="trait in filteredTraits" :key="trait.value">{{trait.value}}</li>
        </div>

        <div class="form_group_item--3">
          <Pets id-value="P" v-on:childToParent="onChildClickPets" v-on:click="emitToParent" />
        </div>

        <div class="form_group_item--4">
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
      errors: {},
      errorList: {},
      isValid: true,

      user: {
        email: '',
        password: '',
        creationTime: '',
        lastActive: '',
        __v: 0,

        name: '',
        surname: '',
        movingDate: '',
        img: '',

        ageGroup: null,
        gender: null,
        location: [],
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
            _id: ''
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
            _id: ''
          }
        ],

        blockedUsers: [],
        targetProfile: {},
      }
    }
  },
  computed: {
    /*filteredTraits() {
      return this.user.personalityTraits.filter((trait) => { 
        return trait.checked;
      });
    }*/
  },
  

  methods: {
    emitToParent() {
      this.$emit('childToParent', { 'user': this.user, 'firstname': this.user.name });
    },
    onChildClickGender(value) {
      this.user.gender = value;
    },
    onChildClickAge(value) {
      this.user.ageGroup = value;
    },
    onChildClickStatus(value) {
      this.user.employmentStatus = value;
      this.handleWorkType();
    },
    onChildClickPets(value) {
      this.user.pets = value.checked;
      this.user.petTypes = value.petList; //TSEKKAA OIKEA MUOTO
    },
    onChildClickProfileImage(value) {
      this.user.img = value; //TSEKKAA OIKEA MUOTO
    },
    onChildClickTraits(value) {
      this.user.personalityTraits = value; //TSEKKAA OIKEA MUOTO
    },
    onChildClickHobbies(value) {
      this.user.hobbies = value;  //TSEKKAA OIKEA MUOTO
    },
    onChildClickIntoxicants(value) { //Toimii
      this.user.alcohol = value[0].alcohol;
      this.user.smoking = value[0].smoking;
      this.user.drugs = value[0].drugs;
    },
    onChildClickSociality(value) {
      this.user.sociality = value;
    },
    onChildClickWorkType(value) {
      this.user.workType = value;
    },
    handleWorkType() {
      if (this.user.employmentStatus !== 1) {
        this.user.workType = null;
      }
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

input[type="text"] {
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0.5rem 0;
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  width: 100%;
}

.form_group-grid--1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 1rem;
}
.form_group_item--1-grid {
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGrey;
}
.form_group_item--2-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMBeige;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
}
.form_group_item--3-grid {
  grid-column-start: 3;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(13, 3rem);
  background: v.$KAMGrey;
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
