<template>
  <router-link :to="{ name: 'roommate-bio', params: { id: id, user: userUrl }}" class="card pointer">
    <div class="card-info">
      <div class="transparency flexbox">
        <p>{{ user.name }}</p>
        <p>{{ handleAge }}</p>
        <p> {{ handleGender }}</p>
      </div>
    </div>
    <div class="card-info">
      <div class="transparency flexbox">
        <p><i class="fas fa-coins"></i>{{ user.rentLimit }}€</p>
        <p><i class="fas fa-door-open"></i>{{ handleStatus }}</p>
        <p><i class="fas fa-walking"></i>{{ user.maxRoomMates }}</p>
      </div>
    </div>
    <img src="../../../assets/images/pexels-catherine-augustin-3049121.jpg" class="box" alt="">
  </router-link>
</template>

<script>
export default {
  name: 'RoommateCard',
  props: ['userData'],

  data() {
    return {
      user: this.userData,
      id: this.userData._id,
      userUrl: JSON.stringify(this.userData),
      
      modifiedAge: '',
      modifiedGender: '',
      modifiedStatus: ''
    }
  },
  computed: {
    handleAge() {
      let age = '';
      switch(this.user.ageGroup) {
        case 1:
          age = 'under 20';
          break;
        case 2:
          age = '20-24';
          break;
        case 3:
          age = '25-29';
          break;
        case 4:
          age = '30-34';
          break;
        case 5:
          age = '35-39';
          break;
        case 6:
          age = '40-44';
          break;
        case 7:
          age = '45-49';
          break;
        case 8:
          age = 'over 50';
          break;
      }
      return age;
    },
    handleGender() {
      let gender = '';
      switch(this.user.gender) {
        case 1:
          gender = 'mies';
          break;
        case 2:
          gender = 'nainen';
          break;
        case 3:
          gender = 'muu';
          break;
      }
      return gender;
    },
    handleStatus() {
      let status = '';
      switch(this.user.employmentStatus) {
        case 1:
          status = 'työssäkäyvä';
          break;
        case 2:
          status = 'työtön';
          break;
        case 3:
          status = 'opiskelija';
          break;
        case 4:
          status = 'eläkeläinen';
          break;
      }
      return status;
    }
  },

}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;


</style>