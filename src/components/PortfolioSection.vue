<script setup>
import PortfolioCard from "./PortfolioCard.vue";

const portfolios = [
  {
    title: "Freshbite",
    description:
      "Jual produkmu secara online dengan toko modern yang responsif dan aman.",
    image: "",
  },
  {
    title: "Avantis",
    description:
      "Jual produkmu secara online dengan toko modern yang responsif dan aman.",
    image: "",
  },
  {
    title: "QuickPick",
    description:
      "Jual produkmu secara online dengan toko modern yang responsif dan aman.",
    image: "",
  },
  {
    title: "LinkBit",
    description:
      "Jual produkmu secara online dengan toko modern yang responsif dan aman.",
    image: "",
  },
];
</script>

<template>
  <div id="portfolio-section"
    class="w-full xl:h-[175vh] flex flex-col xl:flex-row gap-[108px] xl:justify-center relative z-10 pt-[72px]">
    <div class="xl:w-[286px] flex flex-col gap-[45px] text-center xl:text-right mt-[44px]">
      <h4 class="text-[40px] xl:text-[52px] font-goldman">Pekerjaan Kami</h4>
      <hr class="hidden xl:inline" />
      <p class="text-[14px] xl:text-[24px]">Design Website yang Telah Dikerjakan Unispace</p>
    </div>
    <div id="cards" class="flex flex-col xl:flex-row xl:flex-wrap gap-[51px] xl:w-[771px] self-center xl:self-start">
      <PortfolioCard v-for="item in portfolios" :key="item.id" :item="item" />
    </div>
  </div>
</template>
