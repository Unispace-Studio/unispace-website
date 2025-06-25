<script setup>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ServiceSection from "../components/ServiceSection.vue";
import ProcessSection from "../components/ProcessSection.vue";
import PortfolioSection from "../components/PortfolioSection.vue";
import CallToActionSection from "../components/CallToActionSection.vue";
import WhyChooseUsSection from "../components/WhyChooseUsSection.vue";
import PricingSection from "../components/PricingSection.vue";
</script>
<template>
  <div
    id="home"
    class="font-poppins text-white bg-base overflow-hidden relative"
  >
    <div
      class="w-[1510px] h-[1510px] bg-[radial-gradient(50%_50%_at_50%_50%,_#6c3eff26_0%,_#6c3eff00_100%)] absolute z-0 top-[-634px] left-[-576px]"
    ></div>
    <div
      class="w-[1024px] h-[1024px] bg-[radial-gradient(50%_50%_at_50%_50%,_#6c3eff26_0%,_#6c3eff00_100%)] absolute z-0 top-[986px] left-[856px]"
    ></div>
    <div
      class="w-[1024px] h-[1024px] bg-[radial-gradient(50%_50%_at_50%_50%,_#6c3eff26_0%,_#6c3eff00_100%)] absolute z-0 top-[2274px] left-[-431px]"
    ></div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProcessSection />
    <PortfolioSection />
    <PricingSection />
    <WhyChooseUsSection />
    <CallToActionSection />
  </div>
</template>
