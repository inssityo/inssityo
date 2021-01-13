<template>
  <div class="some wrapper">  
    <a href="#" class="wrapper_item--1">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#"  class="wrapper_item--2">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="#"  class="wrapper_item--3">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SoMe',
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.some {
  background: v.$KAMGrey;
  height: 3.5rem;
  align-items: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.wrapper_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  margin: auto;
}
.wrapper_item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  margin: auto;
  background-color: v.$KAMBlue;
}
.wrapper_item--3 {
  grid-column-start: 3;
  grid-column-end: 4;
  margin: auto;
}
a {
  font-size: 1rem;
  line-height: 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 36px;
  background-color: v.$KAMBlue;
  color: v.$White;
  margin: 0 3px 3px 0;
  text-align: center;
}
a:hover {
  text-decoration: none;
  background-color: v.$KAMGreenDark;
  color: v.$White;
}
</style>
