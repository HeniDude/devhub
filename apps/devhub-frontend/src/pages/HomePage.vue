<script setup lang="ts">
import Header from "../components/home/Header.vue";
import HeroSection from "../components/home/HeroSection.vue";
import FeaturesSection from "../components/home/FeaturesSection.vue";
import MentorsSection from "../components/home/MentorsSection.vue";
import CTASection from "../components/home/CTASection.vue";
import Footer from "../components/home/Footer.vue";
</script>

<template>
  <div class="home-page">
    <Header />
    <HeroSection />
    <FeaturesSection />
    <MentorsSection />
    <CTASection />
    <Footer />
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  background: white;
}
</style>
