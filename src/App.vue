<template>
  <Header></Header>
  <!--<Home />-->
  <Footer />
  
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  
</template>

<script>
import Header from './components/Navigation.vue'
//import Home from './components/views/Home.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    //Home,
    Footer
  }
}
</script>

<style lang="scss">
@use './assets/styles/variables.scss' as v;

//muuta em
$desktop: 960px;
$tablet: 768px;
$mobile-large: 640px;
$mobile: 480px;
$mobile-small: 300px;

body {
  margin: 0;
  font-family: v.$KAMLouis;
}
.section {
  padding: 5rem 4rem;
}
h1 {
  color: v.$KAMGreenDark;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: v.$KAMLouis;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
h2 {
  font-size: 1.4rem;
  margin: 0;
  font-weight: bold;
  color: v.$KAMGreenDark;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}
h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: v.$KAMGreenDark;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}
p, label, input, select, textarea {
  font-size: 1rem!important;
}
input, select, textarea, button {
  font-family: v.$KAMLouis;
  font-size: 0.85rem;
  cursor: pointer;
}
a, a:hover  {
  text-decoration: none;
  cursor: pointer;
  color: v.$Black;
}

</style>
