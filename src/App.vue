<template>
  <Header></Header>
  <!--<Home />-->
  <Footer />
  
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  
</template>

<script>
import Header from './components/Navigation.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
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

// ====== body structure ====== //
body {
  margin: 0;
  font-family: v.$KAMLouis;
}
section {
  width: 100%;
}
.content {
  padding: 5rem 7rem;
}
.content__padding__sides {
  padding-left: 7rem;
  padding-right: 7rem;
}
.content__top__padding {
  padding-top: 5rem;
}
.content__bottom__padding {
  padding-bottom: 5rem;
}
.container {
  display: grid;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.margin__topless {
  margin-top: 0;
}
.margin__bottomless {
  margin-bottom: 0;
}
.margin__nothing {
  margin: 0
}
.flexbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.transparency {
  width: 100%;
  background: v.$White;
  background: rgba(255, 255, 255, 0.8);
}

// ====== headings ====== //
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
label {
  letter-spacing: 0.05rem;
  cursor: pointer;
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
input:focus, select:focus, textarea:focus {
  outline: none;
  background: v.$KAMGreyLight;
}
input:hover, select:hover, textarea:hover {
  background: v.$KAMGreenLight;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img--calc {
  max-height: calc(100vh - 0rem - 4.2rem);
}
.box {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.border__bottom--green {
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  border-radius: 0.5rem;
  background: v.$White;
}

// ====== hover ====== //
.pointer {
  cursor: pointer;
}
.hover--blue__color:hover {
  color: v.$KAMBlue !important;
}
.hover--green__background:hover {
  text-decoration: none;
  background-color: v.$KAMGreenDark;
  color: v.$White;
}
.hover--check__label-only__text:hover {
  background-color: v.$KAMGreenLight !important;
  color: v.$Black !important;
  font-weight: bold;
}

// ====== checkbox and radio button with label only ====== //
.check__label-only {
  display: flex;
  align-items: center;
  margin-top: 0.2rem!important;
  flex-wrap: wrap;
}
.check__label-only label {
  vertical-align: middle;
  text-align: center;
  background-color: v.$KAMGreyDark;
  color: v.$White;
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem!important;
  border-radius: 0.2rem;
}
.check__label-only input {
  visibility: hidden;
  height: 0;
  width: 0;
  margin: 0;
}
.check__label-only input:checked + label {
  background-color: v.$KAMGreenSemiLight;
}


</style>
