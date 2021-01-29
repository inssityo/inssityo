<template>
  <img v-show="selectedImage" style="width:100%" :src="require(`../../../../assets/images/${selectedImage}`)" alt="Roommate Profile Image">
</template>

<script>
export default {
  name: 'RoommateImage',

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
