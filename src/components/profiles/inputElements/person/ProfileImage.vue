<template>
  <div>
    <label for="profile-img-input">
      <input style="display: none" id="profile-img-input" type="file" @change="onFileSelected">
      <p>Valitse profiilikuva</p>
      <img id="profile-img" :src="require(`../../../../assets/images/${src}`)" class="grid_img" alt="Profile Image" v-on:click="emitToParent">
    </label>
  </div>
</template>

<script>
export default {
  name: 'ProfileImage',

  data() {
    return {
      selectedImage: null,
      src: 'pexels-anna-shvets-4672714-2.jpg',
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.src)
    },
    onFileSelected(event) {
      this.selectedImage = event.target.files[0].name;
      this.src = this.selectedImage;
      this.onUpload();
    },
    onUpload() {
      /*
      let fd = new FormData();
      fd.append('image', this.selectedImage, this.selectedImage.name);
      axios.post('osoite', fd, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
        }
      }).then(res => {
        console.log(res);
      });*/
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

label {
  cursor: pointer;
}
p {
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0.3rem 0.5rem 0.5rem 0.7rem;
  width: -webkit-fill-available;
  border-style: none none solid none !important;
  border-color: transparent !important;
  border-width: 0.25rem;
}
label:hover {
  p {
    padding: 0.3rem 0.5rem 0.5rem 0.7rem;
    background: v.$White;
    border-style: none none solid none !important;
    border-color: v.$KAMGreenDark !important;
    border-width: 0.25rem;
  }
}
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
