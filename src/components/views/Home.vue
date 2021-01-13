<template>
  <section class="hero">  
    <div class="hero-head">
      <MainThumbnails />
    </div>
    <div class="hero-body">
      <section class="search"><SearchButtons /></section>
      <section><SecondaryThumbnails /></section>
      <section class="info"><InfoContainer /></section>
    </div>
    <div class="flaticon">Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
      from 
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </section>
</template>

<script>
import MainThumbnails from '../home/MainThumbnailSection.vue'
import SearchButtons from '../home/SearchSection.vue'
import SecondaryThumbnails from '../home/SecondaryThumbnailSection.vue'
import InfoContainer from '../home/InfoContainer'

export default {
  name: 'Section',
  components: {
    MainThumbnails,
    SearchButtons,
    SecondaryThumbnails,
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
</style>
