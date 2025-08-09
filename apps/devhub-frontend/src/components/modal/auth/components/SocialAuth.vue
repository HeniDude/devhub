<script setup lang="ts">
const emit = defineEmits<{
  (e: 'github-auth'): void;
  (e: 'google-auth'): void;
}>();

function handleGithubAuth() {
  emit('github-auth');
}

function handleGoogleAuth() {
  emit('google-auth');
}
</script>

<template>
  <div class="social-auth">
    <div class="divider">
      <span class="divider-text">или</span>
    </div>

    <div class="social-buttons">
      <button class="social-btn github-btn" type="button" @click="handleGithubAuth">
        <span class="social-icon">🐙</span>
        <span class="social-text">GitHub</span>
      </button>
      <button class="social-btn google-btn" type="button" @click="handleGoogleAuth">
        <span class="social-icon">🔍</span>
        <span class="social-text">Google</span>
      </button>
    </div>
  </div>
</template>