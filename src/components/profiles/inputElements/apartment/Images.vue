<template>
  <div class="flexbox">
    <p v-if="invalidMessage !== ''" class="alert-danger">{{ invalidMessage }}</p>
    <div class="info-text margin-top__025">
      <i class="fas fa-info-circle"></i>
      <p>
      Kuvat jpg tai png formaatissa.<br/>
      Max kuvakoko 16MB.
      </p>
    </div>
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
      <div v-for="(image, index) in images" :key="index">
        <div v-if="images.length">
          <div class="image-row">
            <div>
              <button type="button" @click="moveImageInArray(index, index - 1)">
                <i class="fas fa-chevron-up"></i>
              </button>
              <button type="button" @click.prevent="images.splice(index, 1)">
                <i class="far fa-times-circle"></i>
              </button>
              <button type="button" @click="moveImageInArray(index, index + 1)">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
            <img :src="image" :key="index" />
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
      invalidMessage: ""
    };
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.images);
    },
    uploadAndPreviewImage() {
      const files = this.$refs.file.files;
      this.invalidMessage = "";
      console.log(files)

      files.forEach((e, i) => {
        let msg = this.validate(files[i]);
        if (msg !== "") {
          msg = "Error:\n" + "One or more of the images were\n" + msg.concat(".\n");
        }
        this.invalidMessage = this.invalidMessage.concat(msg);

        //push the images that have passed the validation
        if (msg === "") {
          //this.images.push(URL.createObjectURL(this.$refs.file.files[i]));
          this.images.push(this.$refs.file.files[i]);
        }
      });

      this.emitToParent();
    },
    moveImageInArray(from, to) {
      var moved = this.images.splice(from, 1)[0];
      this.images.splice(to, 0, moved);
      this.emitToParent()
    },
    validate(file) {
      console.log("validate ", file.size, file.type)
      const MAX_SIZE = 16000000;
      const allowedTypes = ["image/jpeg", "image/png"];

      if (file.size > MAX_SIZE) {
        return `too large. Max size: ${MAX_SIZE/1000}Kb`; //16 000 kB = 16 MB
      }
      if (!allowedTypes.includes(file.type)) {
        return "not in jpg or png format";
      }
      return "";
    }
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
