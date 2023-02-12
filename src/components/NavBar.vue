<script setup lang="ts">
import Button from './Button.vue';
import NewTransactionForm from './NewTransactionForm.vue';
import Modal from './Modal.vue';
import DtMoneyLogo from '@/assets/logo.svg?component';
import { ref } from 'vue';

const isTransactionFormModalOpen = ref<boolean>(false);

const toggleModal = () => (isTransactionFormModalOpen.value = !isTransactionFormModalOpen.value);
</script>

<template>
  <div v-bind="$attrs" class="navbar-container">
    <div class="navbar container">
      <DtMoneyLogo aria-label="Dt money logo" />
      <Button @click="toggleModal">Nova transação</Button>
    </div>
  </div>

  <Modal v-model:isModalOpen="isTransactionFormModalOpen">
    <NewTransactionForm @onCreateTransaction="toggleModal" />
  </Modal>
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
