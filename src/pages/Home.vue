<script setup>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ServiceSection from "../components/ServiceSection.vue";
import ProcessSection from "../components/ProcessSection.vue";
import PortfolioSection from "../components/PortfolioSection.vue";
import CallToActionSection from "../components/CallToActionSection.vue";
import WhyChooseUsSection from "../components/WhyChooseUsSection.vue";
import PricingSection from "../components/PricingSection.vue";
import Footer from "../components/Footer.vue";

import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId)
  target?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <div id="home" class="font-poppins text-white bg-base overflow-hidden relative">
    <!-- <div
      class="w-[1510px] h-[1510px] bg-[radial-gradient(50%_50%_at_50%_50%,_#6c3eff26_0%,_#6c3eff00_100%)] absolute z-0 top-[-634px] left-[-576px]">
    </div>
    <div
      class="w-[1024px] h-[1024px] bg-[radial-gradient(50%_50%_at_50%_50%,_#6c3eff26_0%,_#6c3eff00_100%)] absolute z-0 top-[986px] left-[856px]">
    </div>
    <div
      class="w-[1024px] h-[1024px] bg-[radial-gradient(50%_50%_at_50%_50%,_#6c3eff26_0%,_#6c3eff00_100%)] absolute z-0 top-[2274px] left-[-431px]">
    </div>
    <div
      class="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-b from-grad-1 to-grad-2 fixed bottom-[40px] right-[40px] z-50 cursor-pointer transition-all duration-150"
      v-show="showButton" @click="scrollTo('hero-section')">
      <img src="/assets/icons/up.svg" alt="">
    </div> -->
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProcessSection />
    <PortfolioSection />
    <PricingSection />
    <WhyChooseUsSection />
    <CallToActionSection />
    <Footer />
  </div>
</template>
