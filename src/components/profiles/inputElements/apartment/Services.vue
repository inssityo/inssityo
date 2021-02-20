<template>
  <div>
    <p>Lähialueen palvelut: <br /></p>

    <label @click="handleServices">
      <div
        class="flexbox label__border-bottom--green"
        v-bind:class="{ 'remove__border-radius': showServices }"
      >
        <p v-show="!showServices">Lisää palveluja</p>
        <p v-show="showServices">Sulje palvelujen kuvaus</p>

        <div id="toggleIcon" v-show="showServices">
          <i class="fas fa-times hover__color--blue"></i>
        </div>
        <div id="toggleIcon" v-show="!showServices">
          <i class="fas fa-plus hover__color--blue"></i>
        </div>
      </div>
    </label>

    <div
      class="show-services label__border-bottom--green"
      v-show="showServices"
    >
      <div id="selectServices" v-for="(input, index) in services" :key="index">
        
        <div id="listing" class="flexbox">
          <div>
          <label for="services">Palvelun tyyppi:</label>
          <select
            id="services"
            v-model="input.type"
          >
            <option
              v-for="(type, index2) in optionServices"
              :value="type"
              :key="index + index2"
            >
              {{ type }}
            </option>
          </select>
          </div>
                      <label class="description"> Nimi:
          <input type="text" v-model="input.text"/>
                      </label>
                      <div id="distanceDiv">
            <label  for="meters">Matka(m)</label>
          <input
            type="number"
            min="0"
            oninput="validity.valid||(value=0);"
            id="meters"
            v-model="input.distance"
          />
                      </div>
                                <div id="controls">
                    <div
            @click="remove(index)"
            v-show="index || (!index && services.length > 1)"
          >
            <i class="fas fa-minus hover__color--blue"></i>
          </div>
          <div @click="add()" v-show="index === services.length - 1">
            <i class="fas fa-plus hover__color--blue"></i>
          </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    <label for="description-services"
      >Kerro vapaasti palveluista:
      <textarea
        id="description-services"
        class="box"
        placeholder="Kerro palveluista"
        v-model="description"
      ></textarea>
    </label>
    <button v-on:click.prevent="createServiceObject()">Tallenna</button>
</template>

<script>
export default {
  name: "Services",
  emits: ["childToParent"],

  data() {
    return {
      services: [{ type: null, text: null, distance: null }],
      showServices: false,
      nearbyServices: {
        publicTransport: [],
        groceries: [],
        healthCare: [],
        dayCare: [],
        education: [],
        excercise: [],
      },
      description: "",
      optionServices: [
        "Liikenneyhteys",
        "Ruokakauppa",
        "Terveydenhoito",
        "Päivähoito",
        "Koulu tai opisto",
        "Liikuntapaikka",
      ],
    };
  },
  methods: {
    emitToParent() {
      //vie description
      console.log("ser" + JSON.stringify(this.nearbyServices));
      this.$emit("childToParent", {
        nearbyServices: this.nearbyServices,
        description: this.description,
      });
    },
    add() {
      this.services.push({ type: null, text: null, distance: null });
    },
    remove(index) {
      this.services.splice(index, 1);
    },
    createServiceObject() {
      this.services.forEach((item) => {
        if (item.type && item.text && item.distance) {
          switch (item.type) {
            case "Liikenneyhteys":
              this.nearbyServices.publicTransport.push({
                text: item.text,
                distance: item.distance,
              });
              break;
            case "Ruokakauppa":
              this.nearbyServices.groceries.push({
                text: item.text,
                distance: item.distance,
              });
              break;
            case "Terveydenhoito":
              this.nearbyServices.healthCare.push({
                text: item.text,
                distance: item.distance,
              });
              break;
            case "Päivähoito":
              this.nearbyServices.dayCare.push({
                text: item.text,
                distance: item.distance,
              });
              break;
            case "Koulu tai opisto":
              this.nearbyServices.education.push({
                text: item.text,
                distance: item.distance,
              });
              break;
            case "Liikuntapaikka":
              this.nearbyServices.excercise.push({
                text: item.text,
                distance: item.distance,
              });
              break;
          }
        }
      });
      this.emitToParent();
      this.services = [{ type: null, text: null, distance: null }];
    },
    handleServices() {
      this.showServices = !this.showServices;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

label {
  margin-bottom: 1em;

  .flexbox {
    height: 1.5rem;
  }
}

#listing > div {
  margin-right: 1em;
  margin-left: 1em;
}
.show-services {
  padding: 0.2rem 0.5rem !important;
  margin: 0 0 1rem 0;
  border-radius: 0 0 0.5rem 0.5rem;

  .flexbox {

    .flexbox {
      flex-direction: column;
      margin-right: 1rem;
    }
  }
  .flexbox:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
}
.remove__border-radius {
  border-radius: 0.5rem 0.5rem 0 0 !important;
  border-bottom: none !important;
  margin-bottom: 0 !important;
}
select {
  background: v.$KAMGreyLight;
  width:10em;
}
p {
  margin-left: 0.5em;
  margin-right: 0.5rem;
}
svg {
  color: v.$KAMGreenDark;
}
label:last-of-type {
  margin-top: 0.5rem;
}
input[type="number"] {
  width: 5rem;
  height: 2em;
}

input[type="text"] {
  width: 20em;
  height: 2em;
}

#selectServices {
  width: 15em;
}

#controls {
  margin-left: 1.5em;
}

#controls :nth-child(1) {
  margin-bottom: 0.5em;
}

#distanceDiv {
  margin-left: 1em;
}

textarea {
  margin: 0.4rem 0 0.3rem 0;
  height: 8rem;
}

button {bottom: 2em;}

#toggleIcon{
  margin-right: 0.5em;
}

</style>
