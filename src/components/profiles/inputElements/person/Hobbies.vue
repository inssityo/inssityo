<template>
  <div>
    <div class="flexbox">
      <p>Harrastukset</p>
      <p>Ei harrasta<span> . . . </span>Himoharrastaja</p>
    </div>
    <div
      class="flexbox"
      v-for="(value, propertyName, index) in hobbies"
      :key="'h' + index"
      :id="idValue + 'h' + index"
    >
      <p class="margin__nothing">{{ handlePropertyName(propertyName) }}</p>
      <div class="check__label-only">
        <div v-for="(level, index2) in 7" :key="'l' + level">
          <input
            type="radio"
            :id="index + idValue + 'h' + index2"
            :value="level"
            :checked="level === value"
            @change="updateLevel(propertyName, level)"
          />
          <label :for="index + idValue + 'h' + index2"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hobbies",
  props: {
    idValue: {
      type: String,
    },
    currentHobbies: {
      type: Object,
    },
  },

  data() {
    return {
      hobbies: {
        reading: 4,
        music: 4,
        crafts: 4,
        sports: 4,
        culture: 4,
        art: 4,
        collecting: 4,
        cooking: 4,
        games: 4,
        voluntaryWork: 4,
        travelling: 4,
        informationTech: 4,
      },
    };
  },
  mounted: async function () {
    console.log("mounted")
    let found = await localStorage.getItem("loggedIn");
    const parsedFound = JSON.parse(found);
    if (parsedFound.hobbies !== undefined && parsedFound.hobbies[0] !== undefined) {
      delete parsedFound.hobbies[0]._id;
      this.hobbies = parsedFound.hobbies[0];
    }
  },

  methods: {
    handlePropertyName: function (given) {
      switch (given) {
        case "collecting": {
          return "Keräily";
        }
        case "crafts": {
          return "Käsityöt";
        }
        case "informationTech": {
          return "Tietotekniikka";
        }
        case "sports": {
          return "Urheilu";
        }
        case "music": {
          return "Musiikki";
        }
        case "games": {
          return "Pelit";
        }
        case "reading": {
          return "Lukeminen";
        }
        case "art": {
          return "Taide";
        }
        case "culture": {
          return "Kulttuuri";
        }
        case "cooking": {
          return "Ruuanlaitto";
        }
        case "travelling": {
          return "Matkailu";
        }
        case "voluntaryWork": {
          return "Vapaaehtoistyö";
        }
      }
      return "ei tunnettu";
    },
    emitToParent() {
      this.$emit("childToParent", [this.hobbies]);
    },
    updateLevel(propertyName, level) {
      this.$nextTick(function () {});
      this.handleHobbies(propertyName, level);
    },
    handleHobbies(propertyName, level) {
      switch (propertyName) {
        case "reading":
          this.hobbies.reading = level;
          break;
        case "music":
          this.hobbies.music = level;
          break;
        case "crafts":
          this.hobbies.crafts = level;
          break;
        case "sports":
          this.hobbies.sports = level;
          break;
        case "culture":
          this.hobbies.culture = level;
          break;
        case "art":
          this.hobbies.art = level;
          break;
        case "collecting":
          this.hobbies.collecting = level;
          break;
        case "cooking":
          this.hobbies.cooking = level;
          break;
        case "games":
          this.hobbies.games = level;
          break;
        case "voluntaryWork":
          this.hobbies.voluntaryWork = level;
          break;
        case "travelling":
          this.hobbies.travelling = level;
          break;
        case "informationTech":
          this.hobbies.informationTech = level;
          break;
      }
      this.emitToParent();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

p {
  padding-right: 0.2rem;
  padding-bottom: 0.5rem;
}
span {
  display: inline-block;
  width: 2.1rem;
  text-align: center;
}
.check__label-only label {
  margin: 0.2rem 0 0.2rem 0.2rem;
  padding: 0.3rem;
  width: 1rem;
  height: 1rem;
  background-color: v.$White;
  display: inline-block;
  border-radius: 50%;
}
.check__label-only div {
  margin-bottom: 0.56rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.check__label-only div:first-child label,
.check__label-only div:last-child label {
  width: 0.9rem;
  height: 0.9rem;
}
.check__label-only div:nth-child(2) label,
.check__label-only div:nth-child(6) label {
  width: 0.75rem;
  height: 0.75rem;
}
.check__label-only div:nth-child(3) label,
.check__label-only div:nth-child(5) label {
  width: 0.5rem;
  height: 0.5rem;
}
.check__label-only div:nth-child(4) label {
  border: 0.1rem solid v.$KAMGreySemiDark;
  width: 0.35rem;
  height: 0.35rem;
}
.check__label-only div:nth-child(4) label:hover,
.check__label-only div:nth-child(4) input[type="radio"]:checked + label {
  background: v.$KAMGreenSemiLight;
  border: 0.1rem solid v.$KAMGreenSemiLight;
}
.check__label-only div:first-child label,
.check__label-only div:nth-child(2) label,
.check__label-only div:nth-child(3) label {
  border: 0.1rem solid v.$KAMGreyDark;
}
.check__label-only div:nth-child(5) label,
.check__label-only div:nth-child(6) label,
.check__label-only div:last-child label {
  border: 0.1rem solid v.$KAMGreenDark;
}
.check__label-only div:first-child label:hover,
.check__label-only div:nth-child(2) label:hover,
.check__label-only div:nth-child(3) label:hover,
.check__label-only div:first-child input[type="radio"]:checked + label,
.check__label-only div:nth-child(2) input[type="radio"]:checked + label,
.check__label-only div:nth-child(3) input[type="radio"]:checked + label {
  background: v.$KAMGreyDark;
  border: 0.1rem solid v.$KAMGreyDark;
}
.check__label-only div:nth-child(5) label:hover,
.check__label-only div:nth-child(6) label:hover,
.check__label-only div:last-child label:hover,
.check__label-only div:nth-child(5) input[type="radio"]:checked + label,
.check__label-only div:nth-child(6) input[type="radio"]:checked + label,
.check__label-only div:last-child input[type="radio"]:checked + label {
  background: v.$KAMGreenDark;
  border: 0.1rem solid v.$KAMGreenDark;
}
.check__label-only label:last-child {
  margin-right: 0;
}
</style>