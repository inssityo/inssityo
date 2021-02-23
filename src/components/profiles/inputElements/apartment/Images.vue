<template>
  <div class="flexbox">
    <input
      type="file"
      id="file"
      ref="file"
      accept="image/*"
      @change="uploadAndPreviewImage"
      style="display: none"
      multiple
    />
    <label for="file" class="margin-bottom__025">Lisää kuvia</label>
    <div v-bind:class="{'image-container margin-top__05' : images.length !== 0}">
      <div v-for="(image, imgIndex) in images" :key="imgIndex">
        <div v-if="images.length">
          <div class="image-row">
            <div>
              <button type="button" @click="moveImageInArray(imgIndex, imgIndex - 1)">
                <i class="fas fa-chevron-up"></i>
              </button>
              <button type="button" @click="removeImage(imgIndex)">
                <i class="far fa-times-circle"></i>
              </button>
              <button type="button" @click="moveImageInArray(imgIndex, imgIndex + 1)">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
            <img :src="image" :key="imgIndex" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",

  data() {
    return {
      images: [],
    };
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.images);
    },
    uploadAndPreviewImage() {
      this.$refs.file.files.forEach((e, i) =>
        this.images.push(
          URL.createObjectURL(this.$refs.file.files[i])
        )
      );
      this.emitToParent();
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    moveImageInArray(from, to) {
      var moved = this.images.splice(from, 1)[0];
      this.images.splice(to, 0, moved);
    },
  }
};
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.flexbox {
  display: contents;
}
.image-container {
  max-height: 500px;
  overflow: scroll;
  overflow-x: hidden;
}
.image-row {
  display: inline-block;
  margin-top: 0.5em;
  position: relative;
  width: 100%;

  div {
    margin-top: 1em;
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 3%;
  }
}
img {
  width: 100%;
  height: auto;
  overflow: auto;
} 
button {
  margin: 10% auto 10% auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
//upload image button
label[for="file"] {
  background-color: v.$KAMGreenDark;
  color: v.$White;
  padding: 0.5rem 0.8rem;
  border-radius: 0.3rem;
  text-align: center;
  margin-top: 1rem;
}

</style>
