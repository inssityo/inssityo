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
svg {
  display: block;
  margin: 0 auto;
  width: 2rem !important;
  height: 2rem;
  color: v.$KAMGreenDark;
}

</style>
