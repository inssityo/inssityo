<template>
  <div class="tooltip chat-icon pointer">
    <i :class="icon"></i>
    <span class="tooltiptext">{{ tooltipText }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChatIcon',
  props: ['icon', 'tooltipText']
  
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/variables.scss' as v;

.tooltip {
  //width: 6rem;

  .tooltiptext {
    opacity: 0.7;
  }
}
.tooltip:not(:last-of-type) {
  padding-right: 1rem;
}
svg {
  padding: 1rem;
  background: v.$KAMPurple;
  border-radius: 50%;
  width: 1.7rem !important;
  height: 1.7rem;
  color: v.$White;
}

  
</style>