<template>

  <div>

    <div class="flexbox">
      
      <h3>Piha ja tontti</h3>
      
      <label class="switch">
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
    
    <h4 v-if="showYardDetails" class="description">
      Yleistä tietoa pihasta ja tontista:
    </h4>
    
    <div class="flexbox" v-if="showYardDetails" id="yardParent">
      <div>
        <label
          for="yardArea"
          class="label__border-bottom--green border-radius__left"
          >Ala</label>

        <input
          type="number"
          min="0"
          oninput="validity.valid||(value=0);"
          v-model="yardArea"
          v-on:input="emitToParent"
          id="yardArea"
          class="border-radius__right"
        />
                        <label class="label__border-bottom--green border-radius__right"
          >m2</label>
      </div>

      <div id="buildAreaDiv">
        <label
          for="yardBuildArea"
          class="label__border-bottom--green border-radius__left"
          >Sallittu rakennusala</label
        >
        <input
          type="number"
          min="0"
          oninput="validity.valid||(value=0);"
          v-model="yardBuildArea"
          v-on:input="emitToParent"
          id="yardArea"
          class="border-radius__right"
        />
                <label class="label__border-bottom--green border-radius__right"
          >m2</label>
      </div>
    </div>

    <div class="flexbox" v-if="showYardDetails">
      <label for="yardDesc" class="description"
        >Kuvaus
        <textarea
          v-on:input="emitToParent"
          placeholder="Kuvaile pihaa"
          v-model="yardDescription"
          id="yardDesc"
          class="box"
        />
      </label>
    </div>

    <div class="flexbox" v-if="showYardDetails">
      <label for="zoningDesc" class="description"
        >Kaavoitus
        <textarea
          v-on:input="emitToParent"
          placeholder="Tontin kaavoitustiedot"
          v-model="zoningDescription"
          id="zoningDesc"
          class="box"
        />
      </label>
    </div>

    <div class="flexbox" v-if="showYardDetails">
      <p>Tontti on vuokratontti:</p>
      
      <p
        id="rentalAnswer"
        class="margin__topless margin__bottomless switch-no"
        v-bind:class="{ 'switch-yes': showRentalDetails }">
        {{ showRentalDetails ? "kyllä" : "ei" }}
        </p>

      <label class="switch">
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

    <div v-if="showRentalDetails && showYardDetails"  id="ownerDiv" class="flexbox">
      <label
        for="yardOwner"
        class="label__border-bottom--green border-radius__left"
        >Tontin omistaja:</label>

      <input
        type="text"
        v-model="yardOwner"
        v-on:input="emitToParent"
        id="yardOwner"
        class="border-radius__right"
      />
      </div>
    
    <div id="rentDiv" v-if="showRentalDetails && showYardDetails" >
      
      <div id="rentPriceDiv">
        
        <label
          for="propertyRent"
          class="label__border-bottom--green border-radius__left"
          >Tonttivuokra:</label>

        <input
          type="number"
          min="0"
          oninput="validity.valid||(value=0);"
          v-model="propertyRent"
          v-on:input="emitToParent"
          id="yardRentAmt"
          class="border-radius__right"
        />

        <label class="label__border-bottom--green border-radius__right"
          >€ / vuosi</label>
      </div>
      
      <div id="rentExpiresDiv" v-if="showRentalDetails && showYardDetails">
        
        <label for="yardRentUntil" class="description" id="rentUntil">Vuokrasopimus voimassa:
          <input
          type="date"
          v-model="propertyRentExpires"
          v-on:input="emitToParent"
          id="yardRentUntil"
          class="border-radius"
        /></label>
        

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
    };
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

#yardArea {
  width: 20%;
}

#yardRentUntil{
height: auto;
}

#rentUntil {
  margin-right: 1em;
}

#yardParent {
  margin-bottom: 1em;
}

#yardDesc {
  margin-top: 0.5em;
  width: 100%;
}

#rentalAnswer {
  float: right;
  width: 60%;
}

.description {
  width: 100%;
}

input[type="date"] {
  width: 10em;
}

.switch {
  margin-top: 1em;
  margin-bottom: 1em;
}

#rentDiv {
  margin-top: 1em;
  white-space: nowrap;
}

#rentPriceDiv {
  max-width: 15%;
}

#ownerDiv {
  margin-right: 1em;
  label {
  white-space: nowrap;
}
}

input[type="number"] {
  height: 1.45em;
  width: 5em;
}

#buildAreaDiv {
  white-space: nowrap;
  max-width:16em;
}

#rentExpiresDiv {
  margin-top: 1em;
} 

</style>