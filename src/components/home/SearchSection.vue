<template>
  <div class="hero-search-container box">
    <div class="flexbox check__label-only">
      <input type="radio" id="search-buy" checked value="for-sale" name="choice" v-model="buy"/>
      <label class="hover--check__label-only" for="search-buy" @click="handleSearch(true)">Osta</label>
      <input type="radio" id="search-rent" value="rent" name="choice" v-model="buy"/>
      <label class="hover--check__label-only" for="search-rent" @click="handleSearch(false)">Vuokraa</label>
    </div>
    
    <div id="hero-search-bar">
      <i class="fas fa-search"></i>
      <div class="flexbox">
        <input type="text" id="hero-search-input" class="box" @keyup.enter="search" placeholder="Hae">
        <button @click="search">Hae</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchBar',
  inject: ['$router'],

  data() {
    return {
      buy: true,
      route: "/apartments/buy",
    }
  },
  methods: {
    handleSearch(value) {
      if (value) {
        this.buy = true;
        this.route = "/apartments/buy"
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

.hero-search-container {
  background: v.$Black;
  background: v.$KAMBlackTRN9;
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translate(-50%, -0%);
  width: 60%;
  box-shadow: 0px 10px 30px -25px black;
}
.flexbox {
  justify-content: normal;
}
.check__label-only {
  margin-top: 0 !important;
  padding: 0.7rem 1rem 0rem 1rem;

  label {
    color: v.$White;
    letter-spacing: 0.2rem;
    font-size: 1.3rem !important;
    padding: 0;
    margin-right: 3rem;
    text-transform: uppercase;
    border-bottom: 0.3rem solid transparent !important;
    background-color: transparent;
  }
  input:checked + label {
    background-color: transparent;
    color: v.$KAMBlue;
  }
}
  
.hover--check__label-only:hover {
  background-color: transparent !important;
  color: v.$KAMPurple !important;
  font-weight: bold;
  cursor: pointer;
}
#hero-search-bar {
  position: relative;

  .fa-search {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: v.$KAMGreyDark;
  }

  .flexbox {
    margin-top: 0.7rem;
  }
}

#hero-search-input {
  height: 3rem;
  width: 71vw;
  border-radius: 0;
  background: v.$White;
  //background: v.$KAMWhiteTRN7;
  margin: 0 0 1rem 1rem;
  padding: 0.2rem 1rem 0.2rem 3rem;
  font-size: 1.4rem !important;
  letter-spacing: 0.02rem;
  border-bottom: 0.3rem solid transparent !important;
}
#hero-search-input:focus {
  border-bottom: 0.3rem solid v.$KAMBlue !important;
}
#hero-search-input:hover {
  background: v.$KAMWhiteTRN7 !important;
  border-bottom: 0.3rem solid v.$KAMBlue !important;
}
button {
  margin: 0 1rem 1rem 0;
  height: 3rem;
  width: 29vw !important;
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

</style>
