<script setup lang="ts">
import CloseIcon from '@/assets/close.svg?component';
import { nextTick, watch } from 'vue';

interface Props {
  isModalOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: 'update:isModalOpen', value: boolean): void;
}>();

const handleCloseModal = () => {
  emit('update:isModalOpen', false);
};

watch(
  () => props.isModalOpen,
  async (newValue) => {
    await nextTick();
    const modalElement = document.getElementById('modal');
    if (newValue) {
      modalElement?.focus();
    } else {
      modalElement?.blur();
    }
  }
);
</script>

<template>
  <transition name="fade" appear>
    <div class="modal" v-if="props.isModalOpen">
      <div id="modal" class="modal-content" @keydown.esc="handleCloseModal" tabindex="0">
        <slot />
        <CloseIcon
          class="close"
          src="@/assets/close.svg"
          aria-label="Close modal"
          @click="handleCloseModal"
        />
      </div>

      <div class="modal-overlay" @click="handleCloseModal"></div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &-content {
    position: relative;
    background-color: var(--background);
    padding: 4rem 3rem;
    border-radius: 4px;
    z-index: 2;

    .close {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }

  &-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}
</style>
