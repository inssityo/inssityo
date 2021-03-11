<template>
  <div>
    <div class="flexbox check__label-only">
      <input type="radio" id="search-buy" checked value="for-sale" name="choice" v-model="buy"/>
      <label class="hover--check__label-only" for="search-buy" @click="handleSearch(true)">Osta</label>
      <input type="radio" id="search-rent" value="rent" name="choice" v-model="buy"/>
      <label class="hover--check__label-only" for="search-rent" @click="handleSearch(false)">Vuokraa</label>
    </div>
    <input type="text" id="hero-search-input" @keyup.enter="search" placeholder="Hae">
  </div>
</template>

<script>

export default {
  name: 'SearchButtons',
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

.flexbox {
  justify-content: normal;
}

.check__label-only label {
  color: v.$White;
  letter-spacing: 0.15rem;
  font-size: 2rem !important;
  padding: 0;
  margin-right: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 0.3rem solid transparent !important;
  background-color: transparent;
}

.check__label-only input:checked + label {
  background-color: transparent;
  color: v.$KAMPurple;
}
  
.hover--check__label-only:hover {
  background-color: transparent !important;
  border-bottom: 0.3rem solid v.$KAMPurple !important;
  color: v.$White !important;
  font-weight: bold;
  cursor: pointer;
}
#hero-search-input {
  height: 3rem;
  border-radius: 0;
  background: v.$White;
  background: v.$KAMWhiteTRN7;
  padding: 0.2rem 1rem;
  font-size: 1.4rem !important;
  letter-spacing: 0.02rem;
  margin-top: 1.5rem;
  border-bottom: 0.3rem solid v.$KAMGreenDark !important;
}
#hero-search-input:focus {
  border-bottom: 0.3rem solid v.$KAMPurple !important;
}
#hero-search-input:hover {
  background: v.$KAMBlackTRN !important;
}

</style>
