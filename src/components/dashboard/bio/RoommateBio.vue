<template>
   <div>
    <img src="../../../assets/images/pexels-nathan-cowley-1300510.jpg" class="img--calc" alt="">
    <div class="container">
      <div  class="column column-item--1 flexbox">
        <img src="../../../assets/images/pexels-philip-warp-6142740.jpg" class="profile-img" alt="">

        <div class="tooltip chat-icon pointer">
          <i class="fas fa-dove"></i>
          <span class="tooltiptext">Aloita chat</span>
        </div>
      </div>
      <div class="column column-item--2">

        <h1>{{ user.name }}, 20-24</h1>
        <div class="details box">
          <p class="description">{{ user.description }}</p>

          <div class="flexbox">
            <p>nainen > työssäkäyvä > kokopäivätyö > > ></p>
            <p>
              <i class="far fa-calendar-alt"></i>{{ user.movingDate }} 
              <i class="fas fa-coins"></i>{{ user.rentLimit }} 
              <i class="fas fa-walking"></i>{{ user.maxRoomMates}}
            </p>
          </div>
          <p>Helsinki > Kamppi, Punavuori</p>

          <p>Luonne: kokeilunhaluinen, luotettava, huumorintajuinen, ennakkoluuloton, puhelias </p>
          <p>Harrastukset: Lukeminen, Urheilu, Ruuanlaitto, Matkustelu </p>
          <p><i class="fas fa-paw"></i> kissat, koirat</p>

          <p>
            <i class="fas fa-smoking"></i>1 
            <i class="fas fa-glass-cheers"></i>1 
            <i class="fas fa-cannabis"></i>1
          </p>
          
        </div>
   
      </div>
    </div>
   </div>

  
</template>

<script>
export default {

  name: 'RoommateDetails',

  data() {
    return {
      user: {
        email: '',
        password: '',
        creationTime: '',
        lastActive: '',
        name: 'Emilia',
        surname: 'Esimerkki',
        movingDate: '1.1.2021',
        img: null,
        ageGroup: 1,
        gender: 2,
        location: [],
        rentLimit: 500,
        maxRoomMates: 4,
        employmentStatus: 4,
        workType: null,
        description: '"Olen kotoisin Pirkanmaalta, ja minulla on sanottu olevan sisua pienen kylän verran. Ystäväni kutsuvat minua empaattiseksi duracell-pupuksi. Minusta on mukavampi olla yhteydessä ihmisiin livenä kuin netin kautta. Olen tyytyväinen elämääni ja osaan kääntää vastoinkäymiset voimavaroiksi. Pidän maastopyöräilystä, vuorilla vaeltelusta ja matkustelusta"',
        alcohol: 1,
        smoking: 1,
        drugs: 1,
        personalityTraits: { type:[], validate:[] },
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
          { text: 'Lukeminen', value: 'reading', level: 7 },
          { text: 'Musiikki', value: 'music', level: 1 },
          { text: 'Kädentaidot', value: 'handcrafts', level: 1 },
          { text: 'Urheilu', value: 'sport',level: 5},
          { text: 'Kulttuuri', value: 'culture',level: 1},
          { text: 'Taide', value: 'art', level: 1 },
          { text: 'Keräily', value: 'collecting', level: 1 },
          { text: 'Ruuanlaitto', value: 'cooking', level: 5 },
          { text: 'Pelaaminen', value: 'playing', level: 1 },
          { text: 'Vapaaehtoistyö', value: 'volunteering', level: 1 },
          { text: 'Matkustelu', value: 'traveling', level: 5 },
          { text: 'Tietotekniikka', value: 'it', level: 1 }
        ],
        blockedUsers: [],
        targetProfile: []
      }

    }
  },
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

.img--calc {
  max-width: 100%;
  max-height: 100vh;
  position: relative;
  opacity: 0.5;
  filter: brightness(50%);
}
.profile-img {
  height: 113%;
  width: 100%;
}
h1 {
  letter-spacing: 0.1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
a {
  color: v.$Black;
}
.container {
  grid-template-columns: 28rem 37rem;
  grid-template-rows: repeat(1, 33rem);
  gap: 0;
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 55%;
  height: 60%;
}
.column-item--1 {
  grid-column-start: 1;
  grid-column-end: 2;
  background: v.$White;
  position: relative;

  .chat-icon {
    position: absolute;
    bottom: -0.5rem;
    right: 0.8rem;
  }
  svg {
    padding: 1.2rem;
    background: v.$KAMPurple;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    color: v.$White;
  }
  .pointer:hover {
    bottom: 0;
  }
}
.column-item--2 {
  grid-column-start: 2;
  grid-column-end: 3;
  background: v.$KAMGreenDark;
  color: v.$White;

  h1 {
    color: v.$White;
    margin-bottom: 0.5rem;
  }
  .details {
    padding: 1rem;

    p {
      margin-top: 0;
    }
    svg {
      margin-right: 0.4rem;
    }
    p:last-of-type svg:not(:first-of-type) {
      margin-left: 1rem;
    }
    .description {
      font-size: 1.2rem !important;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid v.$White;
      margin-bottom: 1rem;
    }
  }
}
.tooltip {
  width: 6rem;

  .tooltiptext {
    opacity: 0.7;
  }
}

</style>