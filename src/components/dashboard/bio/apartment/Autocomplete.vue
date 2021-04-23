<template>

<div class="flexbox">
  <p>Hae kohteita:</p>
  <div class="autocomplete">
    
    <input
      type="text"
      placeholder="Kirjoita sijainti..."
      v-model="search"
      @input="onChange"
    />
    <ul class="autocomplete-results" v-show="isOpen">
      <ul v-if="uniqueCities.length > 0">
        <li class="autocomplete-header">Kaupungit</li>
        <li
          class="autocomplete-result"
          v-for="(result, i) in uniqueCities"
          :key="i"
          @click.prevent="
            emitToParent(this.results.cityMatch, result, 'Kaupunki')
          "
        >
          {{ result }}
        </li>
      </ul>

      <ul v-if="uniqueNeighborhoods.length > 0">
        <li class="autocomplete-header">Kaupunginosat</li>
        <li
          class="autocomplete-result"
          v-for="(result, i) in uniqueNeighborhoods"
          :key="i"
          @click.prevent="
            emitToParent(
              this.results.neighborhoodMatch,
              result.location.neighborhood,
              'Asuinalue',
              result.location.city
            )
          "
        >
          {{ result.location.neighborhood }}, {{ result.location.city }}
        </li>
      </ul>

      <ul v-if="uniqueAddresses.length > 0">
        <li class="autocomplete-header">Katuosoitteet</li>
        <li
          class="autocomplete-result"
          v-for="(result, i) in uniqueAddresses"
          :key="i"
          @click.prevent="
            emitToParent(
              this.results.addressMatch,
              result.location.address.streetName,
              'Osoite',
              result.location.city
            )
          "
        >
          {{ result.location.address.streetName }}, {{ result.location.city }}
        </li>
      </ul>

      <ul v-if="uniqueAreaCodes.length > 0">
        <li class="autocomplete-header">Postinumeroalueet</li>
        <li
          class="autocomplete-result"
          v-for="(result, i) in uniqueAreaCodes"
          :key="i"
          @click.prevent="
            emitToParent(
              this.results.areaCodeMatch,
              result.location.areaCode,
              'Postinumero',
              result.location.city
            )
          "
        >
          {{ result.location.areaCode }}, {{ result.location.city }}
        </li>
      </ul>
    </ul>
  </div>
  <div class="multiselect">
  <div class="selectBox pointer" @click="showCheckboxes()">
    <select v-bind:class="{ 'background--green': expanded }">
      <option @click="emitOnlyType">Kaikki talotyypit</option>
    </select>
    <div class="overSelect"></div>
  </div>

  <div :id="idValue + 'checkboxes-option'" class="checkboxes check__label-only">
    <div
      v-for="(option, index) in optionBuildingTypes"
      :key="index"
      class="flexbox pointer"
    >
      <input type="checkbox" :id="idValue + 'type' + index" />
      <label
        :for="idValue + 'type' + index"
        @click="handleOptions(option.value - 1)"
        >{{ option.text }}</label
      >
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "autocomplete",
  emits: ["childToParent"],
  computed: {
    uniqueCities: function () {
      return [
        ...new Set(this.results.cityMatch.map((obj) => obj.location.city)),
      ];
    },
    uniqueNeighborhoods: function () {
      //keep all parameters to show city
      let unique = {};
      return this.results.neighborhoodMatch.filter(
        (obj) =>
          !unique[obj.location.city] && (unique[obj.location.city] = true)
      );
    },
    uniqueAddresses: function () {
      let unique = {};
      return this.results.addressMatch.filter(
        (obj) =>
          !unique[obj.location.city] && (unique[obj.location.city] = true)
      );
    },
    uniqueAreaCodes: function () {
      let unique = {};
      return this.results.areaCodeMatch.filter(
        (obj) =>
          !unique[obj.location.city] && (unique[obj.location.city] = true)
      );
    },
  },
  props: {
    items: {},
  },
  data() {
    return {
            buildingType: "",
      expanded: false,
      optionBuildingTypes: [
        { text: "Kerrostalo", value: 1, checked: false }, //High-Rise
        { text: "Rivitalo", value: 2, checked: false }, //Terraced house
        { text: "Paritalo", value: 3, checked: false }, //Detached house
        { text: "Omakotitalo", value: 4, checked: false }, //Terraced House
        { text: "Ketjutalo", value: 5, checked: false }, //Semi-Detached House
        { text: "Luhtitalo", value: 6, checked: false }, //Luhtitalo
        { text: "Puutalo-osake", value: 7, checked: false }, //Wooden house share
        { text: "Muu", value: 8, checked: false }, //Other
      ],
      search: "",
      results: {
        cityMatch: [],
        neighborhoodMatch: [],
        addressMatch: [],
        areaCodeMatch: [],
        wantedApts: [],
        options:[],
      },
      isOpen: false,
    };
  },
  methods: {
        showCheckboxes() {
      let checkboxes = document.getElementById(
        this.idValue + "checkboxes-option"
      );
      if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
      } else {
        checkboxes.style.display = "none";
        this.expanded = false;
      }
    },
    handleOptions(value) {
      this.optionBuildingTypes[value].checked = !this.optionBuildingTypes[value].checked;
      this.updateOptionsArr();
    },
    updateOptionsArr() {
      let arr = [];
      this.optionBuildingTypes.forEach((option) => {
        if (option.checked) {
          arr.push(option.value);
        }
      });
      this.options = arr;
      this.emitOnlyType();
    },

    emitOnlyType() {
      if (this.wantedApts) {
        this.emitToParent(this.filterByType(this.wantedApts))
      } else {
      this.$emit('childToParent', {wantedApts: this.filterByType(this.items), HouseFilterType:"Talotyyppi",houseOptionValue:this.options})
      }
    },
    filterByType(arr) {
      if(this.options && this.options.length > 0) {
      return arr.filter((item) => this.options.includes(item.apartmentType))
      }
      return arr
    },
    onChange() {
      if (this.search.length > 1) {
        this.isOpen = true;
        this.filterResults();
      } else {
        console.log("close");
        this.isOpen = false;
        this.emitClose();
      }
    },
    emitClose() {
      this.$emit("childToParent", { wantedApts: null });
    },
    filterResults() {
      this.results.cityMatch = this.items.filter(
        (item) =>
          item.location.city.toLowerCase().indexOf(this.search.toLowerCase()) >
          -1
      );
      this.results.neighborhoodMatch = this.items.filter(
        (item) =>
          item.location.neighborhood
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
      );
      this.results.addressMatch = this.items.filter(
        (item) =>
          item.location.address.streetName
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
      );
      this.results.areaCodeMatch = this.items.filter(
        (item) =>
          item.location.areaCode
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
      );
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
      }
    },
    emitToParent(filteredApts, optionValue, filterType, givenCity) {
      let selected;
      switch (filterType) {
        case "Kaupunki":
          selected = filteredApts.filter(
            (item) => item.location.city === optionValue
          );

          this.filterByType(selected)
          break;
        case "Asuinalue":
          console.log(optionValue, givenCity);
          selected = filteredApts.filter(
            (item) =>
              item.location.neighborhood === optionValue &&
              item.location.city === givenCity
          );
          this.filterByType(selected)

          break;
        case "Osoite":
          selected = filteredApts.filter(
            (item) =>
              item.location.address.streetName === optionValue.streetName &&
              item.location.city === givenCity
          );
          this.filterByType(selected)
          break;
        case "Postinumero":
          selected = filteredApts.filter(
            (item) =>
              item.location.areaCode === optionValue &&
              item.location.city === givenCity
          );
          break;
      }
      this.isOpen=false
      this.$emit("childToParent", {
        wantedApts: selected,
        filterType: filterType,
        optionValue: optionValue,
        givenCity: givenCity,
        typeOptions: this.options
      });
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style>
.autocomplete {

  width: 25em;
}
ul {
  padding-inline-start: 0;
}

.multiselect{
  margin-bottom: 0;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  max-height: 10em;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-results::-webkit-scrollbar {
  display: none;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-header {
  background-color: lavender;
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
  font-weight: bold;
}

p {
  white-space: nowrap;
}

.autocomplete-result:hover {
  background-color: #016361;
  color: white;
}
</style>