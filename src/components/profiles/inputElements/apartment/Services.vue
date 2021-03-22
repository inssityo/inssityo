<template>
  <div>
    <div>
      <p class="margin__nothing margin-top__05 margin-bottom__025">Lähialueen palvelut:</p>

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
        <div v-for="(input, index) in services" :key="index">
          
          <div class="flexbox">
            <div class="margin-top__05">
              <div>
                <label>Nimi:</label>
                <input type="text" class="box margin-top__025" v-model="input.text"/>
              </div>

              <div class="flexbox margin-top__05">
                <div>
                  <label for="services">Palvelun tyyppi:</label>
                  <select id="services" class="margin-top__025 margin-bottom__025" v-model="input.type">
                    <option
                      v-for="(type, index2) in optionServices"
                      :value="type"
                      :key="index + index2"
                    >
                      {{ type }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="meters">Matka m:</label>
                    <input
                      type="number"
                      class="margin-top__025 margin-bottom__025"
                      min="0"
                      oninput="validity.valid||(value=0);"
                      id="meters"
                      v-model="input.distance"
                    />
                </div>
              </div>
            </div>

            <div id="controls" class="margin-top__1">
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
    <label for="description-services">Kerro vapaasti palveluista:</label>
    <textarea
      id="description-services"
      class="box"
      placeholder="Kerro palveluista"
      v-model="description"
    ></textarea>
    
    <button v-on:click.prevent="createServiceObject()" class="margin__nothing margin-top__05 margin-bottom__025">Tallenna</button>
  </div>
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
      this.nearbyServices = {
        publicTransport: [],
        groceries: [],
        healthCare: [],
        dayCare: [],
        education: [],
        excercise: [],
      };
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
  padding: 0;
  margin-bottom: 1em;

  .flexbox {
    height: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.1rem 0;
  }
}
.show-services {
  padding: 0.2rem 0.5rem !important;
  margin: 0 0 1rem 0;
  border-radius: 0 0 0.3rem 0.3rem;
}
.remove__border-radius {
  border-radius: 0.3rem 0.3rem 0 0 !important;
  border-bottom: none !important;
  margin-bottom: 0 !important;
}
select {
  background: v.$KAMGreyLight;
  width:10em;
}
input {
  background: v.$KAMGreyLight;
}
.flexbox p {
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
  height: 1.45em;
}
#controls {
  text-align: center;
  margin: 0 2rem;
}
#controls:nth-child(1) {
  margin-bottom: 0.5em;
}
textarea {
  margin: 0.4rem 0 0.3rem 0;
  height: 8rem;
}
#toggleIcon{
  margin-right: 0.5em;
}
button {
  display: block;
  width: 100% !important;
}

</style>
