<template>
  <img v-show="selectedImage" :src="require(`../../../../assets/images/${selectedImage}`)" alt="Apartment Profile Image">
</template>

<script>
export default {
  name: 'AptImage',

  data() {
    return {
      images: [
        'pexels-julia-kuzenkov-1974596.jpg',
        'pexels-vlada-karpovich-4451937.jpg',
        'pexels-kate-trifo-4123921.jpg',
        'pexels-thgusstavo-santana-2102587.jpg',
        'pexels-the-lazy-artist-gallery-1642125.jpg'
      ],
      selectedImage: null
    }
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images);
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>
