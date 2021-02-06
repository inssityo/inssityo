<template>
  <router-link to="/roommates/id" class="card pointer">
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

  data() {
    return {
      user: {
        email: '',
        password: '',
        creationTime: '',
        lastActive: '',
        name: 'Emilia',
        surname: 'Esimerkki',
        movingDate: '',
        img: null,
        ageGroup: 1,
        gender: 2,
        location: [],
        rentLimit: 500,
        maxRoomMates: 4,
        employmentStatus: 4,
        workType: null,
        description: '',
        alcohol: 1,
        smoking: 1,
        drugs: 1,
        personalityTraits: {type:[],validate:[]},
        sociality: 1,
        pets: true,
        petTypes: {
          dogs: false,
          cats: false,
          rodents: false,
          birds: false,
          fishes: false,
          terrarium: false,
          other: false
        },
        hobbies: [
          { text: 'Lukeminen', value: 'reading', level: 1 },
          { text: 'Musiikki', value: 'music', level: 1 },
          { text: 'Kädentaidot', value: 'handcrafts', level: 1 },
          { text: 'Urheilu', value: 'sport',level:1},
          { text: 'Kulttuuri', value: 'culture',level:1},
          { text: 'Taide', value: 'art', level: 1 },
          { text: 'Keräily', value: 'collecting', level: 1 },
          { text: 'Ruuanlaitto', value: 'cooking', level: 1 },
          { text: 'Pelaaminen', value: 'playing', level: 1 },
          { text: 'Vapaaehtoistyö', value: 'volunteering', level: 1 },
          { text: 'Matkustelu', value: 'traveling', level: 1 },
          { text: 'Tietotekniikka', value: 'it', level: 1 }
        ],
        blockedUsers: [],
        targetProfile: []
      },
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

a {
  color: v.$Black;
}

</style>