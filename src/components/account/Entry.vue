<template>
  <div>
    <img v-show="selectedImage" :src="require(`../../assets/images/${selectedImage}`)" class="img--calc" alt="Sea and beach.">
    <div class="container">

      <div id="secondary-column" v-bind:class="{'column-item--1-2': !loginView}" class="column column-item--1 flexbox">
        <div class="transparency">
          <div>
            <div v-if="loginView" class="box">
              <h2>Welcome back!</h2>
              <h3 class="margin__topless">To keep connected with us please login with your personal info</h3>
              <p>Don't have an account?</p>
              <button class="secondary-button" @click="toggleLoginSignup">Sign up</button>
            </div>
            <div v-else class="box">
              <h2>Adventure starts here</h2>
              <h3 class="margin__topless">Create an account to join us</h3>
              <p>Already have an account?</p>
              <button class="secondary-button" @click="toggleLoginSignup">Login</button>
            </div>
          </div>
        </div>
      </div>

      <div id="main-column" v-bind:class="{'column-item--2-2': !loginView}" class="column column-item--2 flexbox">
        <div>
          <h1 v-show="loginView" class="margin__topless">Login</h1>
          <h1 v-show="!loginView" class="margin__topless">Sign up</h1>

          <form v-if="loginView" @submit.prevent="login">
            <div class="flexbox">
              <label for="email-login" class="label__border-bottom--green border-radius__left">Email</label>
              <input id="email-login" class="border-radius__right" type="email" required v-model="email">
            </div>
            <div class="flexbox">
              <label for="password-login" class="label__border-bottom--green border-radius__left">Password</label>
              <input id="password-login" class="border-radius__right" type="password" minlength="5" required v-model="password">
            </div>
            
            <label for="show-password" class="checkmark-label">Show Password
              <input type="checkbox" id="show-password" @click="showPassword">
              <span class="checkmark"></span>
            </label>
            <button type="submit" class="hover__background--blue">Login</button>
          </form>

          <form v-else @submit.prevent="register">
            <div class="flexbox">
              <label for="email-login" class="label__border-bottom--green border-radius__left">Email</label>
              <input id="email-login" class="border-radius__right" type="email" required v-model="email">
            </div>
            <div class="flexbox">
              <label for="password-login" class="label__border-bottom--green border-radius__left">Password</label>
              <input id="password-login" class="border-radius__right" type="password" minlength="8" required v-model="password">
            </div>
            
            <label for="show-password" class="checkmark-label">Show Password
              <input type="checkbox" id="show-password" @click="showPassword">
              <span class="checkmark"></span>
            </label>

            <button type="submit" class="hover__background--blue">Sign up</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'

export default {
  name: 'Entry',

  data() {
    return {
      email: '',
      password: '',
      loginView: true,
      checked: true,

      images: [
        'pexels-pixabay-462162.jpg',
        'pexels-daria-shevtsova-1680140.jpg',
        'pexels-nathan-cowley-1300510.jpg',
        'pexels-rachel-claire-4846515.jpg',
        'pexels-nick-wehrli-5282329.jpg'
      ],
      selectedImage: null
    }
  },
  methods: {
    showPassword() {
      let x = document.getElementById("password-login");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    toggleLoginSignup() {
      this.loginView = !this.loginView;
      if (this.loginView) {
        this.swapSecondaryBefore();
      }
      else {
        this.swapMainBefore();
      }
    },
    swapMainBefore() {
      let secondary = document.getElementById("secondary-column");
      let main = document.getElementById("main-column");
      secondary.insertAdjacentElement('beforebegin', main);
    },
    swapSecondaryBefore() {
      let secondary = document.getElementById("secondary-column");
      let main = document.getElementById("main-column");
      main.insertAdjacentElement('beforebegin', secondary);
    },
    login() {
      const credentials = {
        type: 'landlord',
        email: this.email,
        password: this.password,
      };
      store.dispatch('login', credentials)
      .then(() => router.push('/'))
      .catch(error => console.log("error " + error))
    },
    register() {
      store.dispatch("register", {
        type: 'user',
        email: this.email,
        password: this.password
      })
      .then(() => router.push({name: 'home'}))
      .catch (error => console.log(error))
    },
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images);
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.img--calc {
  max-width: 100%;
  max-height: 100vh;
  position: relative;
}
h1 {
  margin-bottom: 1rem;
}
h2 {
  letter-spacing: 0.1rem;
  padding: 1rem 1.5rem 0 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
.container {
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 20rem); //1fr
  cursor: pointer;
  gap: 0;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-55%, -40%);
  z-index: 1;
  width: 40%;
  height: 60%;

  p {
    padding: 1rem 0 0.5rem 0;
    text-align: center;
  }
}
.column div {
  width: 100%;
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  color: v.$White;
  position: relative;
  text-align: center;
  overflow: hidden;

  h2 {
    color: v.$White;
    margin-bottom: 1rem;
  }
  h3 {
    color: v.$White;
    font-size: 1rem !important;
    text-transform: none;
    margin-bottom: 1.5rem;
  }
}
.column-item--1-2 {
  grid-column-start: 4;
  grid-column-end: 6;
}

.column-item--2 {
  grid-column-start: 3;
  grid-column-end: 6;
  background: v.$White;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: v.$White;
  }
}
.column-item--2-2 {
  grid-column-start: 1;
  grid-column-end: 4;
}
form {
  padding: 0 2%;
}
.transparency {
  background: v.$KAMGreenDark;
  //background: v.$KAMGreenTRN;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 0.5rem;
  }
}
.flexbox .flexbox label, .flexbox .flexbox input {
  background: v.$KAMGrey;
  padding: 0.5rem;
  margin: 0.5rem 0;
}
.checkmark-label {
  margin: 0.5rem 0 1.5rem 0;
  font-size: 0.8rem !important;

  .checkmark {
    top: -0.1rem;
  }
}
button {
  margin: 1rem auto 1rem auto;
  background: v.$KAMGreenDark;
  color: v.$White;
}

.secondary-button {
  border: 1px solid v.$White;
  background: transparent;
}
.secondary-button:hover {
  background: v.$KAMPurple;
  border: 1px solid v.$KAMGreenDark;
}

</style>