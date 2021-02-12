<template>
  <div>
    <img src="../../assets/images/pexels-catherine-augustin-3049121.jpg" class="img--calc" alt="">
    <h1>Luo profiili</h1>
    <div class="container">
      <router-link :to="{ name: 'profileform', params: { profileForm: 1 }}"  class="column column-item--1 flexbox">
        <div>
          <h2>Kämppis</h2>
          <p>Etsitkö ainoastaan kämppistä?</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'profileform', params: { profileForm: 2 }}"  class="column column-item--2 flexbox">
        <div>
          <h2>Kämppis + Asunto</h2>
          <p>Etsitkö kämppistä sekä asuntoa?</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'profileform', params: { profileForm: 3 }}" class="column column-item--3 flexbox">
        <div>
          <h2>Asunto</h2>
          <p>Etsitkö ainoastaan asuntoa?</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreateProfileForm',

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
  position: absolute;
  top: 7.3rem;
  left: 50%;
  transform: translate(-50%, -30%);
  color: v.$White;
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 20rem);
  cursor: pointer;
  gap: 0;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 1;
  width: 75%;
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
.column-item--1:hover, .column-item--3:hover {
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
.column-item--3 {
  grid-column-start: 3;
  grid-column-end: 4;
  background: v.$White;
}

</style>
