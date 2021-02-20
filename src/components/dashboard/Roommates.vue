<template>
  <div class="content">
    <h1>Löydä itsellesi sopiva kämppis</h1>
    <div class="box">
      <div class="roommate-cards flexbox box">
        <RoommateCard :user-data="user" v-for="r in cards" :key="r"/>
      </div>
    </div>
  </div>
</template>

<script>
import RoommateCard from "./cards/RoommateCard.vue";
import axios from 'axios';

export default {
  name: 'Roommates',

  components: {
    RoommateCard
  },

  data() {
    return {
      cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      users: {},
      
      user: {
        _id: '600a9bc0713b7c3b5464f1e9',
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
    }
  },
  async created() {
    let res = await axios.get('/users')
    this.users = res.data
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/variables.scss' as v;

h1 {
  margin-top: 3rem;
  margin-bottom: 4rem;
}
.roommate-cards {
  flex-wrap: wrap;
  justify-content: center;
}


</style>