<template>
  <header>
    <nav class="navbar">
      <router-link to="/" class="kam_logo">Kämpp</router-link> 
      <div class="dropdown">
        <button class="dropbtn"> 
          <i class="fas fa-equals"></i>
          <!--<i class="fas fa-bars"></i>-->
        </button>
        <div class="dropdown_content">
          <a href="#">Kirjaudu</a>
          <router-link to="/profile">Profiilit</router-link> 
          <a href="#">Asunnot</a>
          <a href="#">Suomi</a>
        </div>
      </div> 
    </nav>
    <router-view />
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
}
</script>

<style lang="scss" scoped >
@use '../assets/styles/_variables.scss' as v;

.navbar {
  overflow: hidden;
  background-color: v.$KAMGreenDark;
  height: 2rem;
  padding: 1rem 2rem;
  display: flex; 
  justify-content: space-between;
  align-items: center;
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
}
.dropdown:hover .dropbtn {
  cursor: pointer;
}
.fa-equals {
  font-size: 1.6rem;
}
.dropdown_content {
  display: none;
  position: absolute;
  background-color: v.$KAMGreenDark;
  border-radius: 0 0 0 1.5rem;
  min-width: 9rem;
  box-shadow: 0 0.6rem 1rem 0 rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;
  padding: 1rem 0 0 0;
}
.dropdown_content a {
  float: none;
  color: v.$White;
  padding: 0.75rem 1rem;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown_content a:hover {
  background-color: v.$KAMGrey;
  color: v.$Black;
}
.dropdown_content a:last-child:hover {
  border-radius: 0 0 0 1.5rem;
}
.dropdown:hover .dropdown_content {
  display: block;
}
a {
  font-size: 1rem;
}
</style>