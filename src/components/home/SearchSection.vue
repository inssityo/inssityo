<template>
  <div class="content">
    <h1 class="margin__topless">Etsi ja löydä</h1>
    
    <div class="container">
      <div class="column column-item--1 pointer">
        <div class="transparency box">
          <p>Löydä kämppis</p>
        </div>
        <img src="../../assets/images/pexels-anna-tarazevich-4850290.jpg" alt="Image 2">
      </div>
      <div class="column column-item--2 pointer">
        <div class="transparency box">
          <p>Löydä asunto</p>
        </div>
        <img src="../../assets/images/pexels-kelly-ritta-4377192-2.jpg" alt="Image 3">
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

p {
  font-size: 1.4rem !important;
  font-weight: normal;
  letter-spacing: 0.03rem;
}
.content {
  padding-top: 3rem;
}
.container {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 32vw);
}
.column {

}
.column:hover {
  img {
    filter:brightness(70%);
  }
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0.7rem 1.1rem;
    border-bottom: 0.15rem solid v.$KAMGreenDark;
    
    p {
      margin: 0;
    }
  }
  img {
    border-radius: 1.5rem 0 0 1.5rem;
  }
}
.column-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  position: relative;
  overflow: hidden;
  
  div {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0.7rem 1.1rem;
    border-top: 0.15rem solid v.$KAMGreenDark;
    text-align: right;
    
    p {
      margin: 0;
    }
  }
  img {
    border-radius: 0 1.5rem 1.5rem 0;
  }
}

</style>
