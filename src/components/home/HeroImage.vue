<template>
  <div>
    <img src="../../assets/images/pexels-maria-orlova-4906243-cropped.jpg" class="img--calc" alt="Image 1">
    <i class="fas fa-sort-down pointer hover--blue__color" @click="goTo('apt')"></i>
  </div>
</template>

<script>
export default {
  name: 'MainThumbnails',
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

svg {
  display: block;
  margin: 0 auto;
  width: 2rem !important;
  height: 2rem;
  color: v.$KAMGreenDark;
}

</style>
