<script setup lang="ts">
import { useModal } from "../../../store/modal.store";
import UIModal from "./UIModal.vue";
import { storeToRefs } from "pinia";

const modalStore = useModal();

const { modalList } = storeToRefs(modalStore);
</script>

<template>
  <UIModal
    v-for="modal in modalList"
    :key="modal.id"
    :modal="modal"
    @close="modalStore.closeModal(modal.id)"
  />
</template>
