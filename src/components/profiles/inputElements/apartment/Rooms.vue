<template>
  <div>
    <p>Huoneita</p>
    <div class="check__label-only">
      <div v-for="(room, index,) in optionRooms" :key="index">
        <input type="checkbox" :id="'r'+index" v-model="room.checked"/>
        <label :for="'r'+index" class="hover--check__label-only" v-on:click="emitToParent">{{ room.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rooms',

  data() {
    return {
      optionRooms: [
        { text: '1', value: 1, checked: false },
        { text: '2', value: 2, checked: false },
        { text: '3', value: 3, checked: false },
        { text: '4', value: 4, checked: false },
        { text: '5', value: 5, checked: false },
        { text: '6+', value: 6, checked: false }
      ]
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.optionRooms)
    },
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
