<template>
  <div>
    <div class="flexbox">
      <h3>Piha ja tontti</h3>
      <div class="flexbox">
        <p
          class="margin__topless margin__bottomless switch-no"
          v-bind:class="{ 'switch-yes': showYardDetails }">
          {{ showYardDetails ? "kyllä" : "ei" }}
        </p>
        <label class="switch switch__margin-left">
          <input
            type="checkbox"
            v-model="showYardDetails"
            v-on:click="setYardDetails"
          />
          <span
            class="slider round"
            v-bind:class="{ 'switch-yes': showYardDetails }"
          ></span>
        </label>
      </div>
    </div>
    
    <div id="yard-areas" class="flexbox" v-if="showYardDetails">
      <div class="flexbox margin-bottom__025">
        <label
          for="yardArea"
          class="label__border-bottom--green border-radius__left label__nowrap"
          >Ala m2:</label>
        <input
          type="number"
          min="0"
          oninput="validity.valid||(value=0);"
          v-model="yardArea"
          v-on:input="emitToParent"
          id="yardArea"
          class="border-radius__right"
        />
      </div>

      <div class="flexbox margin-bottom__025">
        <label
          for="yardBuildArea"
          class="label__border-bottom--green border-radius__left label__nowrap">
          Sallittu rakennusala m2:
        </label>
        <input
          type="number"
          min="0"
          oninput="validity.valid||(value=0);"
          v-model="yardBuildArea"
          v-on:input="emitToParent"
          id="yardArea"
          class="border-radius__right"
        />
      </div>
    </div>

    <div v-if="showYardDetails" class="margin-top__025">
      <label for="yard-description" class="label__padding__leftless">Kuvaus:</label>
      <textarea
        v-on:input="emitToParent"
        placeholder="Kuvaile pihaa"
        v-model="yardDescription"
        id="yard-description"
        class="box margin-top__025"
      />
    </div>

    <div v-if="showYardDetails" class="margin-top__025">
      <label for="zoning-description" class="label__padding__leftless">Kaavoitus:</label>
      <textarea
        v-on:input="emitToParent"
        placeholder="Tontin kaavoitustiedot"
        v-model="zoningDescription"
        id="zoning-description"
        class="box margin-top__025"
      />
    </div>

    <div class="flexbox margin-bottom__025" v-if="showYardDetails">
      <p>Tontti on vuokratontti:</p>

      <div class="flexbox">
        <p
          class="margin__topless margin__bottomless switch-no"
          v-bind:class="{ 'switch-yes': showRentalDetails }">
          {{ showRentalDetails ? "kyllä" : "ei" }}
        </p>

        <label class="switch switch__margin-left">
          <input
            type="checkbox"
            v-model="showRentalDetails"
            v-on:click="setRentalDetails"
          />
          <span
            class="slider round"
            v-bind:class="{ 'switch-yes': showRentalDetails }"
          ></span>
        </label>
      </div>
    </div>

    <div v-if="showRentalDetails && showYardDetails" class="flexbox margin-bottom__05">
      <label
        for="yard-owner"
        class="label__border-bottom--green border-radius__left label__nowrap"
        >Tontin omistaja:</label>

      <input
        type="text"
        v-model="yardOwner"
        v-on:input="emitToParent"
        id="yard-owner"
        class="border-radius__right"
      />
      </div>

    <div v-if="showRentalDetails && showYardDetails">
      <div>
        <label
          for="propertyRent"
          class="label__border-bottom--green border-radius__left label__nowrap"
          >Tonttivuokra €/v:
        </label>
        <input
          type="number"
          min="0"
          oninput="validity.valid||(value=0);"
          v-model="propertyRent"
          v-on:input="emitToParent"
          id="yardRentAmt"
          class="border-radius__right"
        />
      </div>

      <div class="flexbox margin-top__025">
        <label for="yardRentUntil" class="label__padding__leftless">Vuokrasopimus voimassa:</label>
        <input
          type="date"
          v-model="propertyRentExpires"
          v-on:input="emitToParent"
          id="yardRentUntil"
          class="border-radius"
        />
      </div>
    </div>
      
  </div>
</template>

<script>
export default {
  name: "yard",
  emits: ["childToParent"],

  data() {
    return {
      showYardDetails: false,
      showRentalDetails: false,
      yardArea: null,
      yardBuildArea: null,
      yardDescription: "",
      zoningDescription: "",
      yardOwner: "",
      propertyRent: null,
      propertyRentExpires:null
    }
  },
  methods: {
    setYardDetails() {
      this.showYardDetails = !this.showYardDetails;
    },
    setRentalDetails() {
      this.showRentalDetails = !this.showRentalDetails;
    },
    emitToParent() {
      this.$emit("childToParent", {
        area: this.yardArea,
        description: this.yardDescription,
        buildArea: this.yardBuildArea,
        zoningDescription: this.zoningDescription,
        propertyIsRental: this.showRentalDetails,
        propertyOwner: this.propertyOwner,
        propertyRent: this.propertyRent,
        propertyRentExpires: this.propertyRentExpires,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@use '../../../../assets/styles/variables.scss' as v;

h3 {
  margin-bottom: 0.8rem;
}
.switch {
  margin: 0.9rem 0 0.5rem 0.5rem;
}
.flexbox:first-of-type .flexbox {
  margin-top: 0.4rem;
}
.flexbox .flexbox .switch {
  margin: 0.5rem 0 0.5rem 0.5rem;
}
#yard-areas .flexbox {
  justify-content: normal;
}
input[type="date"] {
  width: 10rem;
}
input[type="number"] {
  width: 4rem;
}

</style>