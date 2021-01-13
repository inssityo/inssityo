<template>
  <div class="section">  
    <h1>Luo profiilisi</h1>
    <p>Valitse profiili, jota haluat käyttää.</p>
    <div class="wrapper">
      <div class="wrapper_item wrapper_item--1">
        <input type="checkbox" id="roommate" v-model="roommate" @click="handleChoice('roommate')">
        <label for="roommate">
          <div class="wrapper_container" v-bind:class="{ checked: roommate }">
            <div class="wrapper_container_item--left wrapper_container_item--1" v-bind:class="{ checked: roommate }">
              <h2>Kämppis</h2>
              <p>Etsitkö ainoastaan kämppistä?</p>
            </div>
            <div class="wrapper_container_item--right wrapper_container_item--2" v-bind:class="{ checked: roommate }">
              <img src="../../assets/images/pexels-helena-lopes-697244.jpg" alt="" />
            </div>
          </div>
          <div v-if="roommate">
            <i class="far fa-check-circle"></i>
          </div>
        </label>
      </div>

      <div class="wrapper_item wrapper_item--2">
        <!--<router-link :to="{ path: '/profile/editProfiles', hash: '#roommate' }">-->
        <input type="checkbox" id="roommate_apt" v-model="roommate_apt" @click="handleChoice('roommate_apt')">
        <label for="roommate_apt">
          <div class="wrapper_container" v-bind:class="{ checked: roommate_apt }">
            <div class="wrapper_container_item--left wrapper_container_item--1" v-bind:class="{ checked: roommate_apt }">
              <h2>Kämppis +<br/>Asunto</h2>
              <p>Etsitkö kämppistä sekä asuntoa?</p>
            </div>
            <div class="wrapper_container_item--right wrapper_container_item--2" v-bind:class="{ checked: roommate_apt }">
              <img src="../../assets/images/pexels-daria-shevtsova-1054974_cropped.jpg" alt="" />
            </div>
          </div>
          <div v-if="roommate_apt">
            <i class="far fa-check-circle"></i>
          </div>
        </label>
      </div>

      <div class="wrapper_item wrapper_item--3">
        <input type="checkbox" id="apt" v-model="apt" @click="handleChoice('apt')">
        <label for="apt">
          <div class="wrapper_container" v-bind:class="{ checked: apt }">
            <div class="wrapper_container_item--left wrapper_container_item--1" v-bind:class="{ checked: apt }">
              <h2>Asunto</h2>
              <p>Etsitkö ainoastaan asuntoa?</p>
            </div>
            <div class="wrapper_container_item--right wrapper_container_item--2" v-bind:class="{ checked: apt }">
              <img src="../../assets/images/pexels-joanna-bogacz-4138152.jpg" alt="" />
            </div>
          </div>
          <div v-if="apt">
            <i class="far fa-check-circle"></i>
          </div>
        </label>
      </div>
    </div>

    <!--Vie true tietokantaan ja hae se profiilien editointi sivulla -->
    <div class="edit_profiles">
      <router-link to="/profile/editProfiles">Muokkaa profiilia</router-link>
    </div>
  </div>
</template>

<script>
//import PersonalProfile from '../profiles/PersonalProfile.vue'

export default {
  name: 'Profile',
  data() {
    return {
      roommate: true,
      roommate_apt: false,
      apt: false,
    }
  },
  methods: {
    handleChoice(name) {
      switch(name) {
        case 'roommate':
          console.log(this.roommate, this.roommate_apt, this.apt);
          this.roommate_apt = false;
          this.apt = false;
          console.log(this.roommate, this.roommate_apt, this.apt);
          break;
        case 'roommate_apt':
          console.log(this.roommate, this.roommate_apt, this.apt);
          this.roommate = false;
          this.apt = false;
          console.log(this.roommate, this.roommate_apt, this.apt);
          break;
        case 'apt':
          console.log(this.roommate, this.roommate_apt, this.apt);
          this.roommate = false;
          this.roommate_apt = false;
          console.log(this.roommate, this.roommate_apt, this.apt);
          break;
      }
    },
  }
  /*components: {
    PersonalProfile
  }*/
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h1 {
  margin-top: 0;
}
.wrapper_container_item--left h2 {
  letter-spacing: 0.1rem;
  padding: 3rem 1.5rem 0 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}
p {
  text-align: center;
}
.wrapper p {
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: v.$White;
  text-align: left;
}
a {
  background: v.$KAMGreenDark;
  color: v.$White;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
}
a:hover {
  background: v.$KAMYellow;
}
.edit_profiles {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 1.5rem 1.5rem 0;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 20rem);
  grid-gap: 2%;
  align-items: center;
}
.wrapper_div {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wrapper_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  //grid-row-start: 1;
  //grid-row-end: 9;
}
.wrapper_item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
}
.wrapper_item--3 {
  grid-column-start: 3;
  grid-column-end: 4;
}
.wrapper_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 15rem);
  cursor: pointer;
}
.wrapper_container_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
}
.wrapper_container_item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
}

.wrapper_container_item--left {
  border-radius: 1.5rem 0 0 1.5rem;
  background: rgba(248,215,45,1);
}
.wrapper_container_item--left h2 {
  color: v.$White;
}

.wrapper_item input[type="checkbox"]{
  visibility: hidden;
  height: 0;
  width: 0;
}
.wrapper_item label {
  display: table-cell;
  padding: 0.5rem;
}
.wrapper_item input[type="checkbox"]:checked + label{
  background-color: v.$KAMGreenDark;
  border-radius: 1.9rem;
}
.checked {
  height: 17rem;
}
label {
  position: relative;
}
.fa-check-circle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  width: 2rem;
  height: 2rem;
  color: v.$KAMGreenDark;
}

</style>
