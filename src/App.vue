<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import NewTransactionForm from '@/components/NewTransactionForm.vue';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

const isTransactionFormModalOpen = ref<boolean>(false);
const toggleModal = () => (isTransactionFormModalOpen.value = !isTransactionFormModalOpen.value);
</script>

<template>
  <div>
    <NavBar :handleToggleModal="toggleModal" />
    <router-view />
    <Modal v-model:isModalOpen="isTransactionFormModalOpen">
      <NewTransactionForm @onCreateTransaction="toggleModal" />
    </Modal>
  </div>
</template>

<style scoped></style>
