<template>
  <section class="hero">  
    <div class="hero-head">
      <HeroImage />
      <a href="#search-section">
        <i class="fas fa-sort-down pointer hover__color--blue"></i>
      </a>
    </div>
    <div class="hero-body">
      <section><SearchButtons id="search-section" /></section>
      <section><FrontPageCards /></section>
      <section><InfoContainer /></section>
    </div>
    <div class="flaticon">Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
      from 
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </section>
</template>

<script>
import HeroImage from '../home/HeroImage.vue'
import SearchButtons from '../home/SearchSection.vue'
import FrontPageCards from '../home/FrontPageCards.vue'
import InfoContainer from '../home/InfoContainer'

export default {
  name: 'Section',
  components: {
    HeroImage,
    SearchButtons,
    FrontPageCards,
    InfoContainer
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;
.hero-head {
  background-size: cover;
}
.hero-body {
  background: v.$White;
}
.flaticon {
  font-size: 0.2rem; //Siirrä flaticon teksti muualle
}
svg {
  display: block;
  margin: 0 auto;
  width: 2rem !important;
  height: 2rem;
  color: v.$KAMGreenDark;
}

</style>
