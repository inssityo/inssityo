<template>
  <div>
    <img src="../../assets/images/pexels-daria-shevtsova-1680140.jpg" class="img--calc" alt="">
    <div class="container">
      <router-link to="/apartments/rent"  class="column column-item--1 flexbox">
        <div>
          <h2>Vuokra-asunnot</h2>
          <p>Etsitkö vuokrattavaa asuntoa?</p>
        </div>
      </router-link>
      <router-link to="/apartments/for-sale" class="column column-item--2 flexbox">
        <div>
          <h2>Myytävät asunnot</h2>
          <p>Etsitkö ostettavaa asuntoa?</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Apartments',

}

</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.img--calc {
  max-width: 100%;
  max-height: 100vh;
  position: relative;
}
h2 {
  letter-spacing: 0.1rem;
  padding: 1.5rem 1.5rem 0 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
a {
  color: v.$Black;
}

.container {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 20rem);
  cursor: pointer;
  gap: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 1;
  width: 55%;
  height: 60%;

  p {
    padding: 1rem 1.5rem 2rem 1.5rem;
    text-align: center;
  }
}
.column div {
  width: 100%;
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  background: v.$White;
}
.column-item--1:hover {
  background: rgba(255, 255, 255, 0.4);
  
  h2 {
    font-size: 2rem;
  }
}
.column-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  background: v.$KAMGreenDark;
  color: v.$White;

  h2 {
    color: v.$White;
  }
}
.column-item--2:hover {
  background: rgba(16, 105, 104, 0.6);

  h2 {
    font-size: 1.8rem;
  }
}

</style>
