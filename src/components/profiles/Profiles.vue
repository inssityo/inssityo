<template>
  <div>
    <div class="profiles-header">
      <div class="profile_img-grid">
        <div class="profile_img_item--1"> 
          <img src="../../assets/images/home-5835289_1920.jpg" alt="">
        </div>
      </div>
      <h1>Hello{{fromChildFirstName}}!</h1> 
    </div>
    <i class="fas fa-sort-down" @click="goTo('personal')"></i>
    <PersonalProfile id="personal" v-on:childToParent="onChildClick" />
    <i class="fas fa-sort-down" @click="goTo('roommate')"></i>
    <RoommateProfile id="roommate" />
    <i class="fas fa-sort-down" @click="goTo('apt')"></i>
    <AptProfile id="apt" />
  </div>
</template>

<script>
import PersonalProfile from '../profiles/PersonalProfile.vue'
import RoommateProfile from '../profiles/RoomMateProfile.vue'
import AptProfile from '../profiles/AptProfile.vue'

const TIMEOUT = 1;

export default {
  name: 'Profiles',
  components: {
    PersonalProfile,
    RoommateProfile,
    AptProfile
  },
  mounted() { 
    //handle url anchors
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
    }
  },
  data () {
    return {
      fromChildFirstName: '', //This value is set to the value emitted by the child
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
      var element = this.$refs[refName];
      console.log(element); //ei toimi
      var top = element.offsetTop;
      window.scrollTo(0, top);
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
  max-height: calc(100vh - 0rem - 7.7rem);
  height: 100%;
  object-fit: cover;
}
.fa-sort-down {
  display: block;
  margin: 0.1rem auto 1rem auto;
  width: 2rem;
  height: 2rem;
  color: v.$KAMGreenDark;
}

</style>
