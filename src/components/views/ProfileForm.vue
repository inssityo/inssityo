<template>
  <div>
    <div>
      <img src="../../assets/images/pexels-maksim-goncharenok-4352247.jpg" class="img--calc" alt="">
      <h1 v-show="selectedGreeting">{{ selectedGreeting }}{{ fromChildFirstName }}!</h1> 
    </div>

    <form
      id="profileForm"
      @submit.prevent="handleSubmit"
      action=""
      method="post"
      class="content__padding-sides content__padding-bottom"
    >
      <a v-show="choice === 2 || choice === 3" href="#apt-rent-buy">
        <i class="fas fa-sort-down pointer hover__color--blue"></i>
      </a>
      <AptRentBuy id="apt-rent-buy" v-show="choice === 2 || choice === 3" />

      <a v-show="choice === 1" href="#personal">
        <i class="fas fa-sort-down pointer hover__color--blue"></i>
      </a>
      <PersonalProfile id="personal" v-show="choice === 1" v-on:childToParent="onChildClick" />

      <a v-show="choice === 1" href="#apt">
        <i class="fas fa-sort-down pointer hover__color--blue"></i>
      </a>
      <AptProfile id="apt" v-show="choice === 1" />

      <a v-show="choice === 1" href="#roommate">
        <i class="fas fa-sort-down pointer hover__color--blue"></i>
      </a>
      <RoommateProfile id="roommate" v-show="choice === 1" />

      <div class="flexbox">
        <button type="submit" class="is-danger hover__background--blue">Submit</button>
        <button class="hover__background--blue">Cancel</button>
      </div>
    </form>

  </div>
</template>

<script>
import PersonalProfile from '../profiles/forms/PersonalProfile.vue'
import RoommateProfile from '../profiles/forms/RoommateProfile.vue'
import AptProfile from '../profiles/forms/AptProfile.vue'
import AptRentBuy from '../profiles/forms/AptRentBuy.vue'

//const TIMEOUT = 1;

export default {
  name: 'ProfileForm',
  components: {
    PersonalProfile,
    RoommateProfile,
    AptProfile,
    AptRentBuy
  },
  data() {
    return {
      choice: 1,
      selectedGreeting: null,
      greetings: [
        'Hello', //English
        'Hei', //Finnish
        'Huomenta', //Finnish
        'Bonjour', //French
        'Salve', //Italian
        'Hola', //Spanish
        'Guten Tag', //German
        'Konnichiwa'],  //Japanese
      fromChildFirstName: '',

      user: null,
    }
  },
  /*
  mounted() { 
    //handle url anchors
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
    }
  },*/
  methods: {
    /*
    //handle url anchors
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT)
    },*/
    onChildClick (value) {
      if (value !== null || value !== '') { //Ei toimi
        this.fromChildFirstName = ', ' + value.firstname; //hello text
      }
      else {
        this.fromChildFirstName = '';
      }
      this.user = value.user;
      //console.log(JSON.stringify(this.user))
    },
    //random hello text
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    handleSubmit() {

    }
  },
  created() {
    this.selectedGreeting = this.randomItem(this.greetings);

    //create the correct form
    if (this.$route.params.profileForm) {
      this.choice = parseInt(this.$route.params.profileForm);
    }
  }
}

</script>


<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h1 {
  position: absolute;
  top: 4rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.fa-sort-down {
  display: block;
  margin: 0.1rem auto 1rem auto;
  width: 2rem;
  height: 2rem;
  color: v.$KAMGreenDark;
}
.flexbox {
  justify-content: center;

  button {
    margin: 4rem 1rem 0 0;
  }
  button:last-of-type {
    background: v.$KAMGreySemiDark;
  }
  button:last-of-type:hover {
    background: v.$KAMGreyDark;
  }
}

</style>
