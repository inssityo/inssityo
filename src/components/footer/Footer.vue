<template>
  <footer>
    <SoMe />  
    <div class="content">
      <div class="container">
        <div class="column column-item--1">
          <div class="row">
            <a href="#">Vuokranantajille</a>
          </div>
          <div class="row">
            <a href="#">Asunnonmyyjille</a>
          </div>
          <div class="row">
            <a href="#">Yhteistyökumppaneille</a>
          </div>
        </div>
        <div class="column column-item--2">
          <div class="row">
            <a href="#">Usein kysyttyä</a>
          </div>
          <div class="row">
            <a href="#">Käyttöehdot</a>
          </div>
          <div class="row">
            <a href="#">Tietosuojaseloste</a>
          </div>
          <div class="row">
            <a href="#">Meistä</a>
          </div>
        </div>
      </div>
      <p class="copyright margin__bottomless">&#169;<span>KÄMPP</span>{{date}}</p>
    </div>
  </footer>
</template>

<script>
import SoMe from './SoMe.vue'

export default {
  name: 'Footer',
  components: {
    SoMe
  },
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}

</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

footer {
  background: v.$KAMGreenDark;
}
.container {
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 4%;
}
.column {
  width: 100%;
  height: 100%;
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
}
.column-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
}
.row {
  margin: 0.8rem 0;
}
a {
  color: v.$KAMGreenLight;
  font-weight: normal;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
}
.copyright {
  color: v.$KAMGreenLight;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
}
.copyright span {
  font-family: v.$KAMQuinn;
}
</style>
