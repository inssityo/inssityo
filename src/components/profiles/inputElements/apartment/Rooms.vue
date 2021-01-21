<template>
  <div class="rooms">
    <p>Huoneita</p>
    <div class="without_dot">
      <div v-for="(room, index,) in optionRooms" :key="index">
        <input type="checkbox" :id="'r'+index" v-model="room.checked"/>
        <label :for="'r'+index" v-on:click="emitToParent">{{ room.text }}</label>
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

label {
  letter-spacing: 0.05rem;
  cursor: pointer;
}
.without_dot {
  display: flex;
  flex-wrap: wrap;
}
.without_dot div {
  margin: 0.15rem 0.1rem;
}
.without_dot input[type="radio"], .without_dot input[type="checkbox"] {
  visibility: hidden;
  height: 0;
  width: 0;
  margin: 0;
}
.without_dot label {
  vertical-align: middle;
  text-align: center;
  background-color: v.$KAMGreyDark;
  color: v.$White;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.75rem!important;
}
.without_dot input[type="radio"]:checked + label, .without_dot input[type="checkbox"]:checked + label{
  background-color: v.$KAMGreenSemiLight;
}
</style>
