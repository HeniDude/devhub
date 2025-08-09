<script setup lang="ts">
import UIModalContainer from "./components/ui/modal/UIModalContainer.vue";
import UIToast from "@/components/ui/toast/UIToast.vue";
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
  <teleport to="body">
    <UIModalContainer />
    <UIToast/>
  </teleport>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: var(--text-dark);
  background: white;
}

@media (max-width: 768px) {
  .app {
    padding: 0 1rem;
  }
}
</style>
