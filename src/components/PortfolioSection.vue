<script setup>
import PortfolioCard from "./PortfolioCard.vue";

const portfolios = [
  {
    title: "Freshbite",
    description:
      "Jual produkmu secara online dengan toko modern yang responsif dan aman.",
    link: "https://freshbite-nine.vercel.app",
  },
  {
    title: "Avantis",
    description:
      "Bangun kredibilitas software house-mu dengan website profesional dan modern.",
    link: "",
  },
  {
    title: "Delishmade",
    description:
      "Bagikan resep favoritmu lewat website kuliner interaktif yang menarik dan mudah diakses.",
    link: "",
  },
  {
    title: "LinkBit",
    description:
      "Jual produkmu secara online dengan toko modern yang responsif dan aman.",
    link: "",
  },
];
</script>

<template>
  <div id="portfolio-section"
    class="w-full xl:h-[175vh] flex flex-col xl:flex-row gap-[108px] xl:justify-center relative z-10 pt-[72px]">
    <div class="xl:w-[286px] flex flex-col gap-[45px] text-center xl:text-right mt-[44px]">
      <h4 class="text-[40px] xl:text-[52px] font-goldman" data-aos="fade-right" data-aos-delay="0">Pekerjaan Kami</h4>
      <hr class="hidden xl:inline" data-aos="fade-right" data-aos-delay="100"/>
      <p class="text-[14px] xl:text-[24px]" data-aos="fade-right" data-aos-delay="200">Design Website yang Telah Dikerjakan Unispace</p>
    </div>
    <div id="cards" class="flex flex-col xl:flex-row xl:flex-wrap gap-[51px] xl:w-[771px] self-center xl:self-start">
      <PortfolioCard v-for="(item, index) in portfolios" :key="item.id" :item="item" :index="index" />
    </div>
  </div>
</template>
