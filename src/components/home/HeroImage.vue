<template>
  <div>
    <img src="../../assets/images/pexels-maria-orlova-4906243-cropped.jpg" class="gallery_img" alt="Image 1">
    <i class="fas fa-sort-down" @click="goTo('apt')"></i>
  </div>
</template>

<script>
export default {
  name: 'MainThumbnails',
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.fa-sort-down {
  display: block;
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  color: v.$KAMGreenDark;
}
.fa-sort-down:hover {
  color: v.$KAMBlue;
  cursor: pointer;
}
.gallery_img {
  width: 100%;
  max-height: calc(100vh - 0rem - 4.2rem);
  height: 100%;
  object-fit: cover;
}

</style>
