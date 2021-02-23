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
        :for="aptValue + 'address'"
        class="label__border-bottom--green border-radius__left"
        >Osoite:*</label
      >
      <input
        type="text"
        :id="aptValue + 'address'"
        class="border-radius__right"
        v-model="address"
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
      address: "",
      areaCode: ""
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', {
        'city': this.city, 
        'neighborhood': this.neighborhood,
        'address': this.address,
        'areaCode': this.areaCode
      });
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;


</style>