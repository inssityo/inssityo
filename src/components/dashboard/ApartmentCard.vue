<template>
  <div class="card pointer">
    <div class="card-info">
      <div class="transparency">
        <p>Aleksanterinkatu 22 G 222</p>
        <p>Keskusta, Oulu</p>
      </div>
    </div>
    <div class="card-info">
      <div class="transparency flexbox">
        <p><i class="fas fa-ruler-combined"></i>42m</p>
        <p><i class="far fa-building"></i>5/8</p>
        <p><i class="far fa-calendar-alt"></i>02/02/22</p>
        <p><i class="fas fa-coins"></i>2000</p>
      </div>
    </div>
    <img src="../../assets/images/pexels-catherine-augustin-3049121.jpg" class="box" alt="">
  </div>
</template>

<script>
export default {
  name: 'ApartmentCard'
  
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.card {
  height: 21rem;
}
.card .card-info {
    height: auto;
}
.card .card-info:first-of-type p {
  margin: 0;
  padding: 0.5rem 0.5rem 0 0.5rem;
}
.card .card-info:first-of-type p:first-of-type {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-size: 1.1rem !important;
  color: v.$KAMGreenDark;
}
.card .card-info:first-of-type p:last-of-type {
  padding: 0.2rem 0.5rem 0.5rem 0.5rem;
}

.card .card-info:last-of-type p {
  text-align: center;
}

</style>