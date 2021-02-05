<template>
  <div>
    <h1 class="margin__nothing">Vapaita asuntoja</h1>
    <div class="container">
      <div class="column column-item--1">
        <Card />
      </div>
      <div class="column column-item--2">
        <Card />
      </div>
      <div class="column column-item--3">
        <Card />
      </div>
      <div class="column column-item--4">
        <Card />
      </div>
      <div class="column column-item--5">
        <Card />
      </div>
      <div class="column column-item--6">
        <Card />
      </div>
      <div class="column column-item--7">
        <Card />
      </div>
      <div class="column column-item--8">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'FrontPageCards',
  components: {
    Card
  },
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.container {
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 9vw);
  gap: 1rem;
  margin: auto;
  padding: 2rem 2rem 1rem 2rem;
}
.column {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}
.column-item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 6;
}
.column-item--3 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 8;
}
.column-item--4 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
}
.column-item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 8;
}
.column-item--6 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.column-item--7 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 6;
}
.column-item--8 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 8;
}

@media screen and (max-width: 1280px) {

.container {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(14, 9vw);
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.column-item--2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 8;
}
.column-item--3 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 11;
}
.column-item--4 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 11;
  grid-row-end: 15;
}
.column-item--5 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
}
.column-item--6 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 8;
}
.column-item--7 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 12;
}
.column-item--8 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 12;
  grid-row-end: 15;
}

}
</style>
