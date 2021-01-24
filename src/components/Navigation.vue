<template>
  <header>
    <nav class="navbar" :class="{ 'navbar-hidden': !showNavbar }">
      <div class="navbar-div">
        <router-link to="/" class="kam_logo">Kämpp</router-link> 
        <div class="dropdown">
          <button class="dropbtn"> 
            <i class="fas fa-equals"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Kirjaudu</a>
            <router-link to="/profile">Profiilit</router-link> 
            <a href="#">Asunnot</a>
            <a href="#">Suomi</a>
          </div>
        </div>
      </div> 
    </nav>
    <router-view />
  </header>
</template>

<script>
export default {
  name: "NavigationBar",

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
  methods: {
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
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
  width: 100%;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 3;
}
.navbar.navbar-hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.navbar-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: 100vw;
  padding: 1rem 2rem;
}
.kam_logo {
  font-family: v.$KAMQuinn;
  text-transform: uppercase;
  font-size: 2.1rem!important;
  color: v.$White;
}
.dropdown {
  overflow: hidden;
}
.dropdown .dropbtn {
  font-size: 1.5rem;  
  border: none;
  outline: none;
  color: v.$White;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  padding: 0;
}
.dropdown:hover .dropbtn {
  cursor: pointer;
}
.fa-equals {
  font-size: 1.6rem;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: v.$KAMGreenDark;
  border-radius: 0 0 0 1.5rem;
  min-width: 9rem;
  box-shadow: 0 0.6rem 1rem 0 rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;
  padding: 1.1rem 0 0 0;
}
.dropdown-content a {
  float: none;
  color: v.$White;
  padding: 0.75rem 1rem;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: v.$KAMGrey;
  color: v.$Black;
}
.dropdown-content a:last-child:hover {
  border-radius: 0 0 0 1.5rem;
}
.dropdown:hover .dropdown-content {
  display: block;
}
a {
  font-size: 1rem;
}
</style>