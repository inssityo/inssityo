<template>
  <div>
    <h1>Vapaita asuntoja</h1>
    <div class="gallery">
      <div class="gallery_item gallery_item--1">
        <div class="wrapper wrapper--1">
          <figure class="wrapper--1_item--1">
            <img src="../../assets/images/Thumbnail4_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--1_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p v-if="floorPlan.length < 8">
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, {{ floorPlan }}
                </p>
                <p v-else>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, {{ floorPlan.substring(0,8)+'..' }} <!--Katso, että katkaisee ennen + merkkiä-->
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_item gallery_item--2">
        <div class="wrapper wrapper--2">
          <figure class="wrapper--2_item--1">
            <img src="../../assets/images/Thumbnail1_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--2_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, 2h+kk+s
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_item gallery_item--3">
        <div class="wrapper wrapper--1">
          <figure class="wrapper--1_item--1">
            <img src="../../assets/images/Thumbnail3_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--1_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, 2h+kk+s
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_item gallery_item--4">
        <div class="wrapper wrapper--3">
          <figure class="wrapper--3_item--1">
            <img src="../../assets/images/Thumbnail3_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--3_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, 2h+kk+s
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_item gallery_item--5">
        <div class="wrapper wrapper--2">
          <figure class="wrapper--2_item--1">
            <img src="../../assets/images/Thumbnail4_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--2_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, 2h+kk+s
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_item gallery_item--6">
        <div class="wrapper wrapper--1">
          <figure class="wrapper--1_item--1">
            <img src="../../assets/images/Thumbnail1_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--1_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, 2h+kk+s
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_item gallery_item--7">
        <div class="wrapper wrapper--2">
          <figure class="wrapper--2_item--1">
            <img src="../../assets/images/Thumbnail3_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--2_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, 2h+kk+s
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery_item gallery_item--8">
        <div class="wrapper wrapper--1">
          <figure class="wrapper--1_item--1">
            <img src="../../assets/images/Thumbnail3_Large.jpg" class="gallery_img" alt="Image 1">
          </figure>
          <div class="wrapper--1_item--2 apt_details ">
            <div>
              <h3>Aleksanterinkatu 8</h3>
              <p class="location">Keskusta, Oulu</p>
              <div class="details">
                <p>
                  <i class="fas fa-ruler-combined"></i>42m<span>&sup2;</span>, 2h+kk+s
                </p>
                <p>
                  <i class="far fa-building"></i>5/8
                </p>
                <p>
                  <i class="far fa-calendar-alt"></i>02/02/22
                </p>
                <p class="price">
                  <i class="fas fa-coins"></i>2 000 645 €/kk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'SecondaryThumbnails',

  data() {
    return {
      floorPlan: '2h+k+s+2h+k+s+2h+k+s'
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h1 {
  margin-bottom: 0;
}
h3 {
  margin: 0;
}
p {
  margin-bottom: 0;
}
.apt_details {
  line-height: 0.3;
  background: v.$KAMGreyLight;
  padding: 0.4rem 0.7rem 0.1rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.apt_details div {
  width: 100%;
}
.location {
  color: v.$KAMGreySemiDark;
}
.details {
  padding-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.details span {
  font-family: v.$KAMQuinn;
}
svg {
  margin-right: 0.3rem;
  font-size: 0.9rem;
  color: v.$KAMGreenDark;
}

.gallery {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 9vw);
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: auto;
  padding: 2rem;
}
.gallery_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery_item {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}
.gallery_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}
.gallery_item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 6;
}
.gallery_item--3 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 8;
}
.gallery_item--4 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
}
.gallery_item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 8;
}
.gallery_item--6 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.gallery_item--7 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 6;
}
.gallery_item--8 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 8;
}
figure {
  margin: 0;
}
.wrapper {
  display: grid;
  width: 100%;
  height: 100%;
}
.wrapper--1 {
  grid-template-rows: repeat(3, 33.3%);
}
.wrapper--1_item--1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
.wrapper--1_item--2 {
  grid-row-start: 3;
  grid-row-end: 4;
}
.wrapper--2 {
  grid-template-rows: repeat(4, 25%);
}
.wrapper--2_item--1 {
  grid-row-start: 1;
  grid-row-end: 4;
}
.wrapper--2_item--2 {
  grid-row-start: 4;
  grid-row-end: 5;
}
.wrapper--3 {
  grid-template-rows: repeat(5, 20%);
}
.wrapper--3_item--1 {
  grid-row-start: 1;
  grid-row-end: 5;
}
.wrapper--3_item--2 {
  grid-row-start: 5;
  grid-row-end: 6;
}

//Suurenna pienimpiä korkeammaksi, jotta tekstin ympärille enemmän tilaa
@media screen and (max-width: 1280px) {

.gallery {
  display: grid;
  justify-content: center; //space-around;
  //grid-template-columns: calc(27% - 0rem) calc(27% - 0rem) calc(27% - 0rem);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(14, 9vw);
  grid-gap: 0.5rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: auto;
  padding: 2rem;
}
.gallery_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery_item {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}
.gallery_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.gallery_item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 8;
}
.gallery_item--3 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 11;
}
.gallery_item--4 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 11;
  grid-row-end: 15;
}
.gallery_item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
}
.gallery_item--6 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 8;
}
.gallery_item--7 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 12;
}
.gallery_item--8 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 12;
  grid-row-end: 15;
}
.wrapper--1 {
  grid-template-rows: repeat(4, 25%);
}
.wrapper--1_item--1 {
  grid-row-start: 1;
  grid-row-end: 4;
}
.wrapper--1_item--2 {
  grid-row-start: 4;
  grid-row-end: 5;
}
.wrapper--2 {
  grid-template-rows: repeat(5, 20%);
}
.wrapper--2_item--1 {
  grid-row-start: 1;
  grid-row-end: 5;
}
.wrapper--2_item--2 {
  grid-row-start: 5;
  grid-row-end: 6;
}

}
</style>
