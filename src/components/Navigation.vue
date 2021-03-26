<template>
  <header>
    <nav class="navbar flexbox" :class="{ 'navbar-hidden': !showNavbar, 'navbar--white': isHome }">
      <div class="flexbox">
        <router-link to="/" class="kam-logo">Kämpp</router-link> 
        <div class="dropdown">
          <button class="dropbtn"> 
            <i class="fas fa-equals"></i>
          </button>
          <div class="dropdown-content">
            <router-link to="/profile" v-show="isLoggedIn">Profiilit</router-link>
            <router-link to="/roommates" v-show="isLoggedIn">Kämppikset</router-link>
            <router-link to="/apartments">Asunnot</router-link>
            <a href="#">Suomi</a>
            <a href="#" v-if="isLoggedIn" @click="logout">Logout</a> 
            <router-link to="/entry" v-else>Kirjaudu</router-link>
          </div>
        </div>
        <div style="width: 7.5rem;">
        </div>
      </div> 
    </nav>
  </header>
  <router-view />
</template>

<script>

export default {
  name: "NavigationBar",
  inject: ['$store', '$router'],

  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    isLoggedIn(){ 
      return this.$store.getters.isLoggedIn;
    },
    isHome() {
      return this.$route.name === 'home'
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push({name: 'entry'})
      })
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style lang="scss" scoped >
@use '../assets/styles/variables.scss' as v;

.navbar {
  background-color: v.$KAMGreenDark;
  width: 100%; //80%;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 3;
  //left: 50%;
  //margin-left: -40%;
  //box-shadow: 0px 10px 20px -25px black;
}
.navbar--white {
  background-color: v.$KAMGreenDark;
  //border-bottom: 1px solid v.$KAMGreenDark;

  .kam-logo {
    color: v.$White;
  }
  .dropdown .dropbtn {
    color: v.$White;
  }
  .dropdown-content {
    background-color: v.$KAMGreenDark;

    a {
      color: v.$White;
    }
  }
}
.navbar.navbar-hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.flexbox .flexbox {
  height: 2.3rem;
  width: 100vw;
  padding: 1rem 2rem;
}
.kam-logo {
  font-family: v.$KAMQuinn;
  //text-transform: uppercase;
  font-size: 2.1rem;
  color: v.$White;
  letter-spacing: 0.1rem;
  width: 7.5rem;
}
.kam-logo:hover {
  //letter-spacing: 0.05rem;
  text-transform: uppercase;
}
.dropdown {
  overflow: hidden;

  .dropbtn {
    font-size: 1.5rem;  
    border: none;
    outline: none;
    color: v.$White;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }
}
svg {
  font-size: 1.6rem;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: v.$KAMGreenDark;
  //border-radius: 0 0 0 1.5rem;
  min-width: 9rem;
  box-shadow: 0px 10px 30px -25px black;
  border-bottom: 1px solid v.$KAMGreenDark;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -0%);
  width: 15rem;
  padding: 1.35rem 0 0 0;
  
  a {
    float: none;
    color: v.$White;
    padding: 0.75rem 1rem;
    text-decoration: none;
    display: block;
    text-align: center;
    text-transform: uppercase;
    font-family: v.$KAMLouisLight;
    font-weight: bold;
    font-size: 1.2rem;
    letter-spacing: 0.15rem;
  }
}
.dropdown-content a:hover {
  background-color: v.$KAMGrey;
  color: v.$Black;
}
.dropdown-content a:last-child:hover {
  //border-radius: 0 0 0 1.5rem;
}
.dropdown:hover .dropdown-content {
  display: block;
}
a {
  font-size: 1rem;
}

</style>