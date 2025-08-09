<template>
  <div class="toast-container">
    <TransitionGroup name="toast-fade" tag="div">
      <div
          v-for="toast in toasts"
          :key="toast.id"
          class="toast"
          :class="`toast--${toast.type}`"
          @click="removeToast(toast.id)"
      >
        <component
            v-if="typeof toast.content !== 'string'"
            :is="toast.content"
        />
        <p v-else>{{ toast.content }}</p>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "@/composables/useToast";

const { toasts, removeToast } = useToast();
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

.toast {
  min-width: 240px;
  max-width: 320px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.toast:hover {
  transform: scale(1.02);
}

.toast--success { background: #4caf50; }
.toast--error   { background: #f44336; }
.toast--info    { background: #2196f3; }
.toast--warning { background: #ff9800; }

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.4s ease;
}
.toast-fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.toast-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
