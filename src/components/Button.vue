<script setup lang="ts"></script>

<template>
  <button class="button">
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

  &:hover {
    filter: brightness(0.9);
  }
}
</style>
