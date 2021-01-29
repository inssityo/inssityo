<template>
  <div class="content">  
    <h1>Luo profiilisi</h1>
    <p>Valitse profiili, jota haluat käyttää. JOS EI MITÄÄN VALITTUNA, EI PÄÄSÄ LINKISTÄ</p>
    <div class="container">
      <div class="column column-item--1">
        <input type="checkbox" id="roommate" v-model="roommate" @click="handleChoice('roommate')">
        <label for="roommate">
          <div class="container two" v-bind:class="{ checked: roommate }">
            <div class="column column-item--1 two" v-bind:class="{ checked: roommate }">
              <h2>Kämppis</h2>
              <p>Etsitkö ainoastaan kämppistä?</p>
            </div>
            <div class="column-item--2 two" v-bind:class="{ checked: roommate }">
              <img src="../../assets/images/pexels-ketut-subiyanto-4245957-2.jpg" alt="" />
            </div>
          </div>
          <div v-show="roommate">
            <i class="far fa-check-circle"></i>
          </div>
        </label>
      </div>

      <div class="column column-item--2">
        <!--<router-link :to="{ path: '/profile/editProfiles', hash: '#roommate' }">-->
        <input type="checkbox" id="roommate-apt" v-model="roommate_apt" @click="handleChoice('roommate_apt')">
        <label for="roommate-apt">
          <div class="container two" v-bind:class="{ checked: roommate_apt }">
            <div class="column column-item--1 two" v-bind:class="{ checked: roommate_apt }">
              <h2>Kämppis +<br/>Asunto</h2>
              <p>Etsitkö kämppistä sekä asuntoa?</p>
            </div>
            <div class="column-item--2 two" v-bind:class="{ checked: roommate_apt }">
              <img src="../../assets/images/pexels-polina-zimmerman-3747426.jpg" alt="" />
            </div>
          </div>
          <div v-show="roommate_apt">
            <i class="far fa-check-circle"></i>
          </div>
        </label>
      </div>

      <div class="column column-item--3">
        <input type="checkbox" id="apt" v-model="apt" @click="handleChoice('apt')">
        <label for="apt">
          <div class="container two" v-bind:class="{ checked: apt }">
            <div class="column column-item--1 two" v-bind:class="{ checked: apt }">
              <h2>Asunto</h2>
              <p>Etsitkö ainoastaan asuntoa?</p>
            </div>
            <div class="column-item--2 two" v-bind:class="{ checked: apt }">
              <img src="../../assets/images/pexels-vlada-karpovich-4451937.jpg" alt="" />
            </div>
          </div>
          <div v-show="apt">
            <i class="far fa-check-circle"></i>
          </div>
        </label>
      </div>
    </div>

    <button class="box hover__background--blue">
      <router-link :to="{ name: 'profileform', params: { profileForm: choice }}" class="hover__background--blue">Muokkaa profiilia</router-link>
    </button>
  </div>
</template>

<script>

export default {
  name: 'CreateProfileForm',
  data() {
    return {
      roommate: true,
      roommate_apt: false,
      apt: false,
      choice: 1,
    }
  },
  methods: {
    handleChoice(name) {
      switch(name) {
        case 'roommate':
          this.roommate_apt = false;
          this.apt = false;
          this.choice = 1;
          break;
        case 'roommate_apt':
          this.roommate = false;
          this.apt = false;
          this.choice = 2;
          break;
        case 'apt':
          this.roommate = false;
          this.roommate_apt = false;
          this.choice = 3;
          break;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

p {
  text-align: center;
}

img {
  border-radius: 0 1.5rem 1.5rem 0;
  opacity: 0.8;
}
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 20rem);
  gap: 2%;
  align-items: center;

  p {
    padding: 1rem 1.5rem 2rem 1.5rem;
    text-align: left;
  }
}
.column {
  label {
    position: relative;
    display: table-cell;
    padding: 0.5rem;
  }
  input[type="checkbox"] {
    visibility: hidden;
    height: 0;
    width: 0;
  }
  input[type="checkbox"]:checked + label {
    border-right: 0.25rem solid v.$KAMGreenDark;
    border-top: 0.25rem solid v.$KAMGreenDark;
    border-radius: 1.9rem;
  }
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
}
.column-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
}
.column-item--3 {
  grid-column-start: 3;
  grid-column-end: 4;
}
.container.two {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 15rem);
  cursor: pointer;
  gap: 0;
  align-items: normal;
}
.column-item--1.two {
  grid-column-start: 1;
  grid-column-end: 2;
}
.column-item--2.two {
  grid-column-start: 2;
  grid-column-end: 3;
}
.column.two {
  border-left: 0.15rem solid v.$KAMGreenDark;
  border-bottom: 0.25rem solid v.$KAMGreenDark;
  border-radius: 1.5rem 0 0 1.5rem;
  background: v.$White;

  h2 {
    letter-spacing: 0.1rem;
    padding: 3rem 1.5rem 0 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
.checked {
  height: 17rem;
  img {
    opacity: 1;
  }
}
.fa-check-circle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  width: 2.5rem;
  height: 2.5rem;
  color: v.$KAMGreenDark;
}

</style>
