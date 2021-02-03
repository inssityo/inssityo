<template>
  <div>
    <p>Huoneita</p>
    <div class="check__label-only">
      <div v-for="(room, index,) in optionRooms" :key="index">
        <input type="checkbox" :id="'r'+index" />
        <label :for="'r'+index" class="hover--check__label-only" @click="handleRooms(room.value)">{{ room.text }}</label>
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
      ],
      rooms: []
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.rooms);
    },
    handleRooms(value) {
      switch(value) {
        case 1:
          this.optionRooms[0].checked = !this.optionRooms[0].checked;
          break;
        case 2:
          this.optionRooms[1].checked = !this.optionRooms[1].checked;
          break;
        case 3:
          this.optionRooms[2].checked = !this.optionRooms[2].checked;
          break;
        case 4:
          this.optionRooms[3].checked = !this.optionRooms[3].checked;
          break;
        case 5:
          this.optionRooms[4].checked = !this.optionRooms[4].checked;
          break;
        case 6:
         this.optionRooms[5].checked = !this.optionRooms[5].checked;
          break;
      }
      this.updateRoomsArr();
    },
    updateRoomsArr() {
      let arr = [];
      this.optionRooms.forEach(room => {
        if (room.checked) {
          arr.push(room.value);
        }
      })
      this.rooms = arr;
      this.emitToParent();
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
