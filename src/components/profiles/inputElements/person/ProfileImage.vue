<template>
  <label for="profile-img">
    <input style="display: none" id="profile-img" type="file" @change="onFileSelected">
    <p class="box">Valitse profiilikuva</p>
    <img :src="require(`../../../../assets/images/${src}`)" alt="Profile Image" v-on:click="emitToParent">
  </label>
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

p {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0.3rem 0.5rem 0.5rem 0.7rem;
  background: transparent;
  border-bottom: 0.15rem solid transparent;
  text-align: center;
}
label {
  position: relative;
  background: transparent;
  height: 100%;
  border-style: none !important;
  border-color: transparent !important;
}
label:hover {
  p {
    padding: 0.3rem 0.5rem 0.5rem 0.7rem;
    background: v.$White;
    border-bottom: 0.15rem solid v.$KAMGreenDark !important;
    border-radius: 0;
  }
}

</style>
