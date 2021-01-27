<template>
    <div class="switch-div">
      <div v-bind:class="{'divFlex':idValue === 'ARB'}">
        <p v-if="idValue === 'A'">Etsitkö vuokra-asuntoa vai omistusasuntoa?</p>
        <p v-if="idValue === 'ARB'" >Uusi ilmoitus vuokra-asunnosta vai omistusasunnosta?</p>
        <div>
          <p v-if="idValue === 'A'" v-bind:style="{ fontWeight: 'bold' }">{{ checkedOwner ? "-omistusasuntoa" : "-vuokra-asuntoa" }}</p>
          <p v-if="idValue === 'ARB'" v-bind:style="{ fontWeight: 'bold' }">{{ checkedOwner ? "omistusasunnosta" : "vuokra-asunnosta" }}</p>
          <label class="switch" v-on:click="emitToParent">
            <input type="checkbox" id="checkboxOwner" v-model="checkedOwner">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RentBuy',
  props: ['idValue'],

  data() {
    return {
      checkedOwner: true,
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', !this.checkedOwner);
    },
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/styles/variables.scss' as v;

.switch-div {
  width: 100%;

  div p {
    margin-bottom: 0.2rem;
  }
  div div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.divFlex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    margin: 0;
  }
  div p {
    margin-right: 1rem;
  }
}
.switch-div div:last-child div p{
  margin-top: 0;
  margin-bottom: 0;
}
.switch {
  position: relative;
  display: inline-block;
  width: 3.12rem;
  height: 1.5rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: v.$KAMBlue;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 4px;
  bottom: 4px;
  background-color: v.$White;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: v.$KAMGreenDark;
}
//kehys
input:focus + .slider {
  box-shadow: 0 0 1px v.$KAMBlue;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 1.5rem;
}
.slider.round:before {
  border-radius: 50%;
}

</style>
