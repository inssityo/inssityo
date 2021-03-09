<template>
  <section class="hero">  
    <div class="hero-head">
      <HeroImage />
      <HeroText />
      <SearchButtons />
    </div>
    <div class="hero-body">
      <section><InfoContainer /></section>
      <section><FrontPageCards /></section>
      
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
import HeroText from '../home/HeroText.vue'

export default {
  name: 'Section',
  components: {
    HeroImage,
    SearchButtons,
    FrontPageCards,
    InfoContainer,
    HeroText
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.hero-head {
  background-size: cover;
  position: relative;
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
