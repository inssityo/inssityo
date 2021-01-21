<template>
  <div v-if="selectedImage">
    <img style="width:100%" :src="require(`../../../../assets/images/${selectedImage}`)" class="grid_img" alt="Roommate Profile Image">
  </div>
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

div {
  height: 100%;
  position: relative;
}
.grid_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
