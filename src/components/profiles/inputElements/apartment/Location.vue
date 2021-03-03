<template>
  <div class="margin-top__025">
    <div class="flexbox margin-bottom__05">
      <label
        :for="aptValue + 'city'"
        class="label__border-bottom--green border-radius__left"
        >Kaupunki:*</label
      >
      <input
        type="text"
        :id="aptValue + 'city'"
        class="border-radius__right"
        v-model="city"
        v-on:input="emitToParent"
      />
    </div>
    <div class="flexbox margin-top__05 margin-bottom__05">
      <label
        :for="aptValue + 'neighborhood'"
        class="label__border-bottom--green border-radius__left"
        >Kaupunginosa:*</label
      >
      <input
        type="text"
        :id="aptValue + 'neighborhood'"
        class="border-radius__right"
        v-model="neighborhood"
        v-on:input="emitToParent"
      />
    </div>
    <div class="flexbox margin-top__05 margin-bottom__05">
      <label
        :for="aptValue + 'streetName'"
        class="label__nowrap label__border-bottom--green border-radius__left"
        >Osoitteen nimi:*</label
      >
      <input
        type="text"
        :id="aptValue + 'streetName'"
        class="border-radius__right"
        v-model="streetName"
        v-on:input="emitToParent"
      />
    </div>
    <div class="flexbox margin-top__05 margin-bottom__05">
      <label
        :for="aptValue + 'houseNumber'"
        class="label__nowrap label__border-bottom--green border-radius__left"
        >Talon numero:*</label
      >
      <input
        type="text"
        :id="aptValue + 'houseNumber'"
        class="border-radius__right"
        v-model="houseNumber"
        v-on:input="emitToParent"
      />
    </div>
    <div class="flexbox margin-top__05 margin-bottom__025">
      <label
        :for="aptValue + 'areaCode'"
        class="label__border-bottom--green border-radius__left"
        >Postinumero:*</label
      >
      <input
        type="text"
        :id="aptValue + 'areaCode'"
        class="border-radius__right"
        v-model="areaCode"
        v-on:input="emitToParent"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: ['aptValue'],
  
  data() {
    return {
      city: "",
      neighborhood: "",
      streetName: "",
      houseNumber: "",
      areaCode: ""
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', {
        'city': this.city, 
        'neighborhood': this.neighborhood,
        'streetName': this.streetName,
        'houseNumber': this.houseNumber,
        'areaCode': this.areaCode
      });
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>