<template>
  <div id="find" class="section">
    <h1>Etsi ja löydä</h1>
    
    <div class="gallery">
      <div class="gallery_item--1">
        <div class="transparency">
          <p class="gallery_item">Löydä kämppis</p>
        </div>
        <img src="../../assets/images/pexels-anna-tarazevich-4850290.jpg" class="gallery_img" alt="Image 2">
      </div>
      <div class="gallery_item--2">
        <div class="transparency">
          <p class="gallery_item">Löydä asunto</p>
        </div>
        <img src="../../assets/images/pexels-kelly-ritta-4377192-2.jpg" class="gallery_img" alt="Image 3">
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'SearchButtons',
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h1 {
  margin-top: 0;
}
p {
  font-size: 1.4rem !important;
  font-weight: normal;
  letter-spacing: 0.03rem;
}
.section {
  padding-left: 8rem;
  padding-right: 8rem;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 32vw);
}
.gallery_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  position: relative;
}
.gallery_item--1 img {
  border-radius: 1.5rem 0 0 1.5rem;
}
.gallery_item--1 .transparency {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0.7rem 1.1rem;
  border-bottom: 0.15rem solid v.$KAMGreenDark;
  width: -webkit-fill-available;
  width: 100%;
  background: v.$White;
  background: rgba(255, 255, 255, 0.7);
  p {
    margin: 0;
  }
}
.gallery_item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  position: relative;
  overflow: hidden;
}
.gallery_item--2 img {
  border-radius: 0 1.5rem 1.5rem 0;
}
.gallery_item--2 .transparency {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0.7rem 1.1rem;
  border-top: 0.15rem solid v.$KAMGreenDark;
  text-align: right;
  width: -webkit-fill-available;
  width: 100%;
  background: v.$White;
  background: rgba(255, 255, 255, 0.7);
  p {
    margin: 0;
  }
}
.gallery_item--1:hover, .gallery_item--2:hover {
  cursor: pointer;
}

</style>
