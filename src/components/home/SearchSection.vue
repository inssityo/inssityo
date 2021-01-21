<template>
  <div id="find" class="section">
    <h1>Etsi ja löydä</h1>
    <div class="gallery">
      <div class="find_item gallery_item--1">
        <p class="gallery_item">Löydä kämppis</p>
      </div>
      <figure class="gallery_item gallery_item--2">
        <img src="../../assets/images/pexels-savannah-dematteo-2346701.jpg" class="gallery_img" alt="Image 2">
      </figure>
      <figure class="gallery_item gallery_item--3">
        <img src="../../assets/images/home-5835289_1920.jpg" class="gallery_img" alt="Image 3">
      </figure>
      <div class="find_item gallery_item--4">
        <p class="gallery_item">Löydä asunto</p>
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
}
.section {
  padding-left: 8rem;
  padding-right: 8rem;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 4vw);
  grid-gap: 0px;
}
.gallery_img, .find_item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.find_item {
  background: v.$KAMBlue;
  color: v.$White;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  border-radius: 1.5rem 0 0 0;
}
.gallery_item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 8;
}
.gallery_item--3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 7;
}
.gallery_item--4 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  border-radius: 0 0 1.5rem 0;
}
.gallery_item--2 img {
  border-radius: 0 0 0 1.5rem;
}
.gallery_item--3 img {
  border-radius: 0 1.5rem 0 0;
}
figure {
  margin: 0;
}
</style>
