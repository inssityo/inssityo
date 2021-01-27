<template>
  <div>
    <div class="profiles-header">
      <div class="profile_img-grid">
        <div class="profile_img_item--1"> 
          <img src="../../assets/images/pexels-maksim-goncharenok-4352247.jpg" alt="">
        </div>
      </div>
      <div v-if="selectedGreeting">
      <h1>{{selectedGreeting }}{{ fromChildFirstName }}!</h1> 
      </div>
    </div>
    
    <form>
      <AptRentBuy v-show="choice === 2 || choice === 3" />

      <i class="fas fa-sort-down" v-show="choice === 1" @click="goTo('personal')"></i> <!-- lisää ankkurit -->
      <PersonalProfile ref="personal" v-show="choice === 1" v-on:childToParent="onChildClick" />

      <i class="fas fa-sort-down" v-show="choice === 1" @click="goTo('apt')"></i>
      <AptProfile ref="apt" v-show="choice === 1" />

      <i class="fas fa-sort-down" v-show="choice === 1" @click="goTo('roommate')"></i>
      <RoommateProfile ref="roommate" v-show="choice === 1" />
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
    // Triggered when 'childToParent' event is emitted by the child.
    onChildClick (value) {
      this.fromChildFirstName = ', ' + value;
    },
    goTo (refName) {
      var element = this.$els[refName];
          element.scrollIntoView();
    },
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
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

.profiles-header {
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
.profile_img-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
.profile_img_item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
}
img {
  width: 100%;
  max-height: calc(100vh - 0rem - 4.2rem);
  height: 100%;
  object-fit: cover;
}
.fa-sort-down {
  display: block;
  margin: 0.1rem auto 1rem auto;
  width: 2rem;
  height: 2rem;
  color: v.$KAMGreenDark;

  :hover {
    cursor: pointer;
    color: v.$KAMBlue;
  }
}

</style>
