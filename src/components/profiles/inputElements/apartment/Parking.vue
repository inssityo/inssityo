<template>
  <div>
    <div class="flexbox">
      <h3>Pysäköinti</h3>
      <div class="flexbox">
      <p
        class="margin__topless margin__bottomless switch-no"
        id="parkingText"
        v-bind:class="{ 'switch-yes': exists }"
      >
        {{ exists ? "kyllä" : "ei" }}
      </p>
      <label class="switch switch__margin-left">
        <input
          type="checkbox"
          v-model="exists"
          v-on:click="setParkingDetails"
        />
        <span
          class="slider round"
          v-bind:class="{ 'switch-yes': exists }"
        ></span>
      </label>
      </div>
    </div>

    <div v-if="exists" class="multiselect">
      <div class="select-box pointer" @click="showCheckboxes()">
        <select v-bind:class="{ 'background--green': expanded }">
          <option>Tyyppi</option>
        </select>
        <div class="over-select"></div>
        </div>

        <div
          :id="idValue+'checkboxes-option'"
          class="checkboxes check__label-only"
        >
          <div
            v-for="(option, index) in parkingOptions"
            :key="index"
            class="flexbox pointer"
          >
            <input type="checkbox" :id="idValue+'parking'+index" />
            <label
              :for="idValue+'parking'+index"
              @click="handleOptions(option.value-1)"
              >{{ option.text }}</label
            >
          </div>
        </div>
    </div>
    </div>

    <div class="flexbox" v-if="exists">
      <p>Sähköauton latauspiste:</p>
      <div class="flexbox">

        <p
          class="margin__topless margin__bottomless switch-no"
          id="parkingText"
          v-bind:class="{ 'switch-yes': supportsElectric }"
        >
        {{ supportsElectric ? "kyllä" : "ei" }}
      </p>
      <label class="switch switch__margin-left">
        <input
          type="checkbox"
          v-model="supportsElectric"
          v-on:click="setSupportsElectric "
        />
        <span
          class="slider round"
          v-bind:class="{ 'switch-yes': supportsElectric }"
        ></span>
      </label>
      </div>
    </div>

    <div v-if="exists">
      <label for="description-parking" class="label__padding__leftless">
        Kuvaus:
        <textarea
          id="description-parking"
          class="box"
          placeholder="Tietoa kohteen pysäköintimahdollisuuksista."
          v-model="description"
        ></textarea>
      </label>
    </div>
</template>

<script>
export default {
  name: "Parking",
  emits: ["childToParent"],

  data() {
    return {
      exists: false,
      description: "",
      supportsElectric: false,
      parkingOptions: [
        { text: "Parkkipaikka", value: 1, checked: false },
        { text: "Autokatos", value: 2, checked: false },
        { text: "Autotalli", value: 3, checked: false },
        { text: "Yhteinen parkkihalli", value: 4, checked: false },
      ],
      options: [],
      expanded: false,
    };
  },
  methods: {
    emitToParent() {
      this.$emit("childToParent", {
        exists: this.exists,
        options: this.options,
        description: this.description,
        supportsElectric: this.supportsElectric,
      });
    },
    setParkingDetails() {
      this.exists = !this.exists;
      this.emitToParent()
    },
    setSupportsElectric(){
        this.supportsElectric = !this.supportsElectric
        this.emitToParent()
    },
    handleOptions(value) {
      this.parkingOptions[value].checked = !this.parkingOptions[value].checked;
      this.updateOptionsArr();
    },
    updateOptionsArr() {
      let arr = [];
      this.parkingOptions.forEach(option => {
        if (option.checked) {
          arr.push(option.value);
        }
      })
      this.options = arr;
      this.emitToParent();
    },
    showCheckboxes() {
      let checkboxes = document.getElementById(
        this.idValue+"checkboxes-option"
      );
      if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
      } else {
        checkboxes.style.display = "none";
        this.expanded = false;
      }
      this.emitToParent();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

h3 {
  margin-bottom: 0.8rem;
}
.flexbox .flexbox {
  margin-top: 0.4rem;
}
.multiselect {
  margin-top: 0.5rem;
}
textarea {
  margin-top: 0.5em;
  height: 5em;
}

</style>