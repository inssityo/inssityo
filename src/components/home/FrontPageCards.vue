<template>
  <div class="content">
    <h1>Suositeltuja kohteita</h1>
    <Card card-type="single" />
    <div class="container">
      <div v-for="c in cards" :key="c" :class="'column column-item--' + c">
        <Card />
      </div>
    </div>
    
  </div>
</template>

<script>
import ApartmentService from '../../api-services/apartment.service'
import Card from './FrontPageCard.vue';

export default {
  name: 'FrontPageCards',
  components: {
    Card
  },
  data() {
    return {
      cards: [1, 2, 3, 4],
      apartments: {}
    }
  },
  async created() {
    try {
      const response =  await ApartmentService.getAll();
      this.apartments = response.data;
    } catch (err) {
      console.log("apartment card data error: " + err);
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.container {
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1.5rem;
  margin: auto;
  padding: 2rem 2rem 1rem 2rem;
}
.column {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  //background: v.$KAMGreyLight;
  //box-shadow: 0px 5px 40px -25px black;
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.column-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.column-item--3 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
.column-item--4 {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
}

</style>
