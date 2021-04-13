<template>
  <div class="card-carousel">
    <div class="card-img">
      <img :src="currentImage" class="img--calc" alt="">
     
      <span @click="nextImage">
        <i class="fas fa-caret-right pointer"></i>
      </span>
      <span @click="prevImage">
        <i class="fas fa-caret-left pointer"></i>
      </span>
     
    </div>
    <div class="thumbnails">
      <div 
        v-for="(image, index) in  imagesData"
        :key="image.id"
        :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img :src="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],

  data() {
    return {
      imagesData: [],
      activeImage: 0
    }
  },
  computed: {
    //currentImage gets called whenever activeImage changes
    currentImage() {
      return this.imagesData[this.activeImage];
    }
  },
  created() {
    if (this.images !== null) {

      let imgArr = this.images;
      imgArr.forEach((element, index) => {
        let data = element;
        let buff = Buffer.from(data, "base64");
        imgArr[index] = buff.toString("ascii");
      });
      this.imagesData = imgArr;
    }
  },
  methods: {
    //go forward on the images array or go at the first image
    nextImage() {
        let active = this.activeImage + 1;
        if (active >= this.imagesData.length) {
          active = 0;
        }
        this.activateImage(active);
    },
    //go backwards on the images array or go at the last image
    prevImage() {
      let active = this.activeImage - 1;
      if (active < 0) {
        active = this.imagesData.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
        this.activeImage = imageIndex;
    },
}

}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.img--calc {
  max-height: calc(100vh - 0rem - 1rem);
}

.fa-caret-left, .fa-caret-right {
  position: absolute;
  top: 50%;
  bottom: 50%;
  width: 3rem;
  height: 3rem;
  opacity: 0.7;
  background: v.$White;
  width: auto;
  transition: 0.5s ease;
  border-radius: 0.3rem;
  text-decoration: none;
  user-select: none;
}
.fa-caret-left {
  left: 0.5rem;
  padding: 0 1rem 0 0.7rem;
}
.fa-caret-right {
  right: 0.5rem;
  padding: 0 0.7rem 0 1rem;
}
.fa-caret-left:hover, .fa-caret-right:hover {
  opacity: 1;
  color: v.$White;
  background-color: v.$Black;
  transition: all 250ms;
}
.fa-caret-left:hover {
  left: 0.2rem;
}
.fa-caret-right:hover {
  right: 0.2rem;
}

.card-carousel {
  user-select: none;
  position: relative;

  .thumbnails {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .thumbnail-image {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.3rem;
  }
  .thumbnail-image > img {
    width: 100%;
    max-height: 6rem;
    transition: all 250ms;
  }
  .thumbnail-image:hover > img {
    //max-height: 100%;
    //filter: brightness(110%);
    filter: brightness(50%);
  }
  .thumbnail-image.active > img {
    filter: brightness(50%);
  }
  
  .card-img {
    position: relative;
    margin-bottom: 1rem;

    img {
      display: block;
      margin: 0 auto;
    }
  }
} 


</style>