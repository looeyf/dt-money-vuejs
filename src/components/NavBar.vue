<script setup lang="ts">
import Button from './Button.vue';
import DtMoneyLogo from '@/assets/logo.svg?component';

interface Props {
  handleToggleModal: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div v-bind="$attrs" class="navbar-container">
    <div class="navbar container">
      <DtMoneyLogo aria-label="Dt money logo" />
      <Button @click="props.handleToggleModal">Nova transação</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  background-color: var(--blue);
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 12rem;
}
</style>
