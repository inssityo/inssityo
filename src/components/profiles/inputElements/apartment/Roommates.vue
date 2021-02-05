<template>
  <div>
    <p>Kämppiksiä*</p>
    <div class="check__label-only">
      <div v-for="(mate, index,) in optionRoomMates" :key="index">
        <input type="radio" :id="'rm'+index" :value="mate.value" v-model="roommates"/>
        <label :for="'rm'+index" class="hover--check__label-only" v-on:click="emitToParent(mate.value)">{{ mate.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roommates',

  data() {
    return {
      optionRoomMates: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6+', value: 6 }
      ],
      roommates: null
    }
  },
  methods: {
    emitToParent(value) {
      this.roommates = value;
      this.$emit('childToParent', this.roommates);
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

p {
  margin-right: 0.5rem;
}
.check__label-only div {
  margin: 0.15rem 0.1rem;
}

</style>
