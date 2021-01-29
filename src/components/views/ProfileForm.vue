<template>
  <div>
    <div class="header">
      <img src="../../assets/images/pexels-maksim-goncharenok-4352247.jpg" class="img--calc" alt="">
      <h1 v-show="selectedGreeting">{{ selectedGreeting }}{{ fromChildFirstName }}!</h1> 
    </div>

    <i class="fas fa-sort-down pointer hover__color--blue" v-show="choice === 1" @click="goTo('personal')"></i> <!-- lisää ankkurit, ja asuntolinkki-->

    <form
      id="profileForm"
      @submit.prevent="handleSubmit"
      action=""
      method="post"
      class="content"
    >
      <AptRentBuy v-show="choice === 2 || choice === 3" />

      <PersonalProfile ref="personal" v-show="choice === 1" v-on:childToParent="onChildClick" />

      <i class="fas fa-sort-down pointer hover__color--blue" v-show="choice === 1" @click="goTo('apt')"></i>
      <AptProfile ref="apt" v-show="choice === 1" />

      <i class="fas fa-sort-down pointer hover__color--blue" v-show="choice === 1" @click="goTo('roommate')"></i>
      <RoommateProfile ref="roommate" v-show="choice === 1" />

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

const TIMEOUT = 1;

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
  mounted() { 
    //handle url anchors
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
    }
  },
  methods: {
    //handle url anchors
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT)
    },
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
    goTo (refName) {
      var element = this.$els[refName];
          element.scrollIntoView();
    },
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    handleSubmit() {

    }
  },
  created() {
    this.selectedGreeting = this.randomItem(this.greetings);

    if (this.$route.params.profileForm) {
      this.choice = parseInt(this.$route.params.profileForm);
    }
  }
}

</script>


<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

.header {
  position: relative;
}
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
