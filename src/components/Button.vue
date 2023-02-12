<script setup lang="ts">
interface Props {
  variant?: 'blue' | 'green';
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'blue',
});

const isGreen = props.variant === 'green';
</script>

<template>
  <button :class="['button', { 'button--green': isGreen }]">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 4px;

  color: var(--shape);
  font-weight: 600;
  line-height: 1.5rem;
  font-size: 1rem;

  padding: 0.75rem 2rem;
  background-color: var(--blue-light);
  transition: 0.3s filter ease;

  &--green {
    background-color: var(--green);
  }

  &:hover {
    filter: brightness(0.9);
  }
}
</style>
