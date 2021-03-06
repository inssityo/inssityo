<template>
  <Header></Header>
  <Footer v-if="!isLogin"/>
</template>

<script>
import Header from './components/Navigation.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    isLogin() {
      return this.$route.name === 'entry'
    }
  },
  mounted() {
    console.log(`Working on '${process.env.VUE_APP_MODE}' mode`)
  },
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
.content__padding-sides {
  padding-left: 7rem;
  padding-right: 7rem;
}
.content__padding-top {
  padding-top: 5rem;
}
.content__padding-bottom {
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
.margin-top__1 {
  margin-top: 1rem !important;
}
.margin-top__05 {
  margin-top: 0.6rem;
}
.margin-top__025 {
  margin-top: 0.3rem;
}
.margin-bottom__1 {
  margin-bottom: 1rem !important;
}
.margin-bottom__05 {
  margin-bottom: 0.6rem !important;
}
.margin-bottom__025 {
  margin-bottom: 0.3rem !important;
}
.flexbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.width__50 {
  width: 48.5%;
}

// ====== headings ====== //
h1 {
  color: v.$KAMGreenDark;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: v.$KAMLouis;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
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
  color: v.$KAMGreenDark;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}
h4 {
  font-family: v.$KAMLouisLight;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}
p {
  white-space: normal !important;
}

.alert-danger {
  color: #e60020;
  font-weight: bold;
  letter-spacing: 0.05rem;
}
.info-text {
  color: v.$KAMGreyDark;
  display: flex;

  .fa-info-circle {
    color: v.$KAMGreySemiDark;
    margin-right: 0.5rem;
    padding-top: 0.2rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
}

// ====== label, input, select, textarea ====== //
p, label, input, select, textarea, button {
  font-size: 1rem!important;
}
.label__padding__leftless {
  padding: 0.2rem 0.4rem 0.2rem 0;
}
.label__nowrap {
  white-space: nowrap;
}
label, textarea {
  letter-spacing: 0.03rem;
  cursor: pointer;
}
label, input[type="text"], input[type="date"], input[type="number"], textarea {
  padding: 0.2rem 0.4rem;
}
select {
  margin: 0;
  padding: 0 0.2rem !important;
  height: 2rem;
  letter-spacing: 0.03rem;
}
input, select, textarea, button { //Muuta buttonin font-size
  font-family: v.$KAMLouis;
  cursor: pointer;
  width: 100%;
}
a, a:hover  {
  text-decoration: none;
  cursor: pointer;
  color: v.$Black;
}
input:focus, select:focus, textarea:focus {
  outline: none;
}
input:hover, select:hover, textarea:hover {
  text-decoration: none;
  background: v.$KAMGreenLight !important;
}

input, select, textarea {
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  border-radius: 0.3rem;
  background: v.$White;
}
.label__border-bottom--green {
  border-style: none none solid none !important;
  border-color: v.$KAMGreenDark !important;
  border-width: 0.15rem;
  border-radius: 0.3rem;
  background: v.$White;
}
.border-radius__right {
  border-radius: 0 0.3rem 0.3rem 0 !important;
}
.border-radius__left {
  border-radius: 0.3rem 0 0 0.3rem !important;
}

// ====== image ====== //
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img--calc {
  max-height: calc(100vh - 0rem - 4.2rem);
  display: block;
}
.transparency {
  width: 100%;
  background: v.$White;
  background: v.$KAMWhiteTRN8;
  z-index: 1;
}

// ====== hover ====== //
.pointer {
  cursor: pointer;
}
.hover__color--blue:hover {
  color: v.$KAMBlue !important;
  cursor: pointer;
}
.hover__background--green--dark:hover {
  text-decoration: none;
  background-color: v.$KAMGreenDark;
  color: v.$White;
  cursor: pointer;
}
.hover__background--blue:hover {
  text-decoration: none;
  background-color: v.$KAMBlue;
  color: v.$White;
  cursor: pointer;
}
.hover--check__label-only:hover {
  background-color: v.$KAMGreenLight !important;
  color: v.$Black !important;
  font-weight: bold;
  cursor: pointer;
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
  font-size: 0.75rem !important;
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

// ====== checkmark checkbox ====== //
.checkmark-label {
  display: block;
  position: relative;
  padding: 0 0 0 1.8rem;
  margin: 0.3rem 0;
  
  input {
    -webkit-appearance: none;
    width: auto;
  }
  input:checked ~ .checkmark {
    background-color: v.$KAMGreenDark;
  }
  //Show the checkmark when checked
  input:checked ~ .checkmark:after { 
    display: block;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.2rem;
    width: 1.2rem;
    background-color: v.$KAMGreySemiDark;
    border-radius: 0.2rem;
  }
  .checkmark:after {
    left: 0.5rem;
    top: 0.3rem;
    width: 0.3rem;
    height: 0.6rem;
    border: solid v.$White;
    border-width: 0 0.2rem 0.2rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

    //Hidden when not checked 
    content: "";
    position: absolute;
    display: none;
  }
}
.checkmark-label:hover input ~ .checkmark {
  background-color: v.$KAMGreyDark;
}

// ====== Multiselect dropdown ==== //
.multiselect {
  width: 100%;
  z-index: 3;

  .select-box select:hover {
    background-color: v.$KAMGreenLight !important; //ei toimi
  }
  .background--green {
    background: v.$KAMGreenLight;
  }
  .select-box {
    position: relative;
  }
  .over-select {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .check__label-only {
    margin-top: 0 !important;

    label {
      background-color: transparent;
      color: v.$Black;
      font-size: 1rem !important;
      border-radius: 0;
      margin-left: -0.8rem;
      text-align: left;
      padding: 0 0 0 0.4rem;
      width: 100%;
    }
  }
  .checkboxes {
    display: none;
    background: v.$KAMGreenLight;
    box-shadow: 0.2rem 0.2rem 0.6rem -0.3rem v.$KAMGreyDark;
    border: 1px solid v.$KAMGreySemiDark;

    label {
    display: block;
    }
    div input:checked + label{
      color: v.$White;
      background: v.$KAMGreenDark;
    }
    .flexbox {
      justify-content: normal;
    }
    .flexbox:hover {
      background-color: v.$KAMGreyLight;
    }
    input {
      width: unset;
    }
  }
}

// ====== button ====== //
button {
  margin: 4rem auto 0 auto;
  padding: 0.5rem 0.8rem;
  display: flex;
  border: none;
  border-radius: 0.3rem;
  background: v.$KAMGreenDark;
  width: auto !important;
  color: v.$White;

  a {
    color: v.$White;
  }
}
button:focus {
  outline: none;
}

// ====== switch ====== //
.switch-yes {
  color: v.$KAMGreenDark !important;
}
.switch-no {
  font-weight: bold;
  color: v.$KAMBlue;
}
.switch__margin-left {
  margin-left: 1rem !important;
}
.switch {
  position: relative;
  display: inline-block;
  width: 3.12rem;
  height: 1.5rem;
  padding: 0;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + .slider {
    background-color: v.$KAMGreenDark;
  }
  //kehys
  input:focus + .slider {
    box-shadow: 0 0 1px v.$KAMBlue;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: v.$KAMBlue;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: v.$White;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider.round {
    border-radius: 1.5rem;
  }
  .slider.round:before {
    border-radius: 50%;
  }
}

// ====== cards ====== //

.card {
  margin: 1.5rem;
  height: 18rem;
  width: 18rem;
  position: relative;

  .card-info:first-of-type {
    top: 0;

    .transparency{
      border-bottom: 0.15rem solid v.$KAMGreenDark;
    }
  }
  .card-info:last-of-type {
    bottom: 0;

    .transparency:last-of-type {
      border-top: 0.15rem solid v.$KAMGreenDark;
    }
  }
  .card-info {
    height: auto;
    width: 100%;
    position: absolute;
    z-index: 1;

    .transparency {
      height: 100%;
      width: 100%;

      svg {
        padding: 0 0.3rem 0 0.2rem;
      }
      span {
        font-family: v.$KAMQuinn;
      }
    }
    p {
      margin: 0;
      padding: 0.5rem;
    }
  }
  img {
    display: inline-block;
    width: 100%;
  }
}
.card:hover {
  margin-top: 1rem;
  img {
    filter: brightness(70%);
  }
}

// ====== tooltip ====== //
.tooltip {
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  
  .tooltiptext {
    visibility: hidden;
    width: auto;
    background: v.$Black;
    color: #fff;
    text-align: center;
    border-radius: 0.3rem;
    padding: 0.1rem 0.5rem 0.17rem 0.5rem;
    position: absolute;
    z-index: 1;
    bottom: 115%;
    //left: 50%;
    //margin-left: -60px;
    //transition: opacity 0.3s;
  }
  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: v.$Black transparent transparent transparent;
  }
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>
