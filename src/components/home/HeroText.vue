<template>
  <div class="hero-text-container box">
    <div class="flexbox">
      <h4>Saunalahti, Espoo</h4>
      <h4>920 000€</h4>
      <button>Tutustu kohteeseen</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeroText',
  inject: ['$router'],

  data() {
    return {
      buy: true,
      route: "/apartments/for-sale",
    }
  },
  methods: {
    handleSearch(value) {
      if (value) {
        this.buy = true;
        this.route = "/apartments/for-sale"
      } else {
        this.buy = false;
        this.route = "/apartments/rent"
      }
      console.log("search " + value)
    },
    search() {
      this.$router.push(this.route);
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.hero-text-container {
  background: v.$Black;
  background: v.$KAMBlackTRN9;
  position: absolute;
  bottom: 7rem;
  left: 50%;
  transform: translate(-50%, -0%);
  width: 60%;

  h4 {
    color: v.$White;
    text-align: left;
    margin: 0;
    letter-spacing: 0.15rem;
    width: 35vw;
    padding-left: 1rem;
    text-transform: unset;
  }
  p {
    color: v.$White;
  }
  button {
    margin: 0;
    height: 3rem;
    width: 30vw !important;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    font-family: v.$KAMLouisLight;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: bold;
  }
  button:hover {
    background: v.$KAMBlue;
  }
}


</style>
