<template>
  <div class="autocomplete">
    <p>Hae kohteita:</p>
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
          @click.prevent="emitToParent(this.results.cityMatch, result,'city')"
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
          @click.prevent="emitToParent(this.results.neighborhoodMatch, result.location.neighborhood ,'neighborhood')"
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
          @click.prevent="emitToParent(this.results.addressMatch, result.location.address ,'address')"
        >
          {{ result.location.address }}, {{ result.location.city }}
        </li>
      </ul>

      <ul v-if="uniqueAreaCodes.length > 0">
        <li class="autocomplete-header">Postinumeroalueet</li>
        <li
          class="autocomplete-result"
          v-for="(result, i) in uniqueAreaCodes"
          :key="i"
          @click.prevent="emitToParent(this.results.areaCodeMatch, result.location.areaCode ,'areaCode')"
        >
          {{ result.location.areaCode }}, {{ result.location.city }}
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: "autocomplete",
  emits:['childToParent'],
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
          !unique[obj.location.city] &&
          (unique[obj.location.city] = true)
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
      return this.results.neighborhoodMatch.filter(
        (obj) =>
          !unique[obj.location.city] &&
          (unique[obj.location.city] = true)
      );
    },
  },
  props: {
    items: {},
  },
  data() {
    return {
      search: "",
      results: {
        cityMatch: [],
        neighborhoodMatch: [],
        addressMatch: [],
        areaCodeMatch: [],
        wantedApts:[]
      },
      isOpen: false,
    };
  },
  methods: {
    onChange() {
      if (this.search) {
        this.isOpen = true;
        this.filterResults();
      } else {
        this.isOpen = false;
      }
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
          item.location.address
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
      emitToParent(filteredApts, optionValue, filterType) {
      console.log("k")
    let selected;
    switch (filterType) {
      case "city":
          console.log("city")
        selected = filteredApts.filter(
            (item => item.location.city === optionValue)
        );
        break;
      case "neighborhood":
        selected = filteredApts.filter(
          (item => item.location.neighborhood === optionValue)
        );
        break;
      case "address":
        selected = filteredApts.filter(
          (item => item.location.address === optionValue)
        );
        break;
      case "areaCode":
        selected = filteredApts.filter(
          (item => item.location.areaCode === optionValue)
        );
        break;
    }
    this.$emit("childToParent", {
      wantedApts: selected,
      filterType:filterType,
      optionValue:optionValue
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
  width: 50em;
}

ul {
  padding-inline-start: 0;
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

.autocomplete-result:hover {
  background-color: #016361;
  color: white;
}
</style>