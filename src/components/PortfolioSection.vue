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
  <div
    id="portfolio-section"
    class="w-full h-[175vh] flex gap-[108px] justify-center relative z-10 pt-[72px]"
  >
    <div class="w-[286px] flex flex-col gap-[45px] text-right mt-[44px]">
      <h4 class="text-[52px] font-goldman">Pekerjaan Kami</h4>
      <hr />
      <p class="text-[24px]">Design Website yang Telah Dikerjakan Unispace</p>
    </div>
    <div id="cards" class="flex flex-wrap gap-[51px] w-[771px] self-start">
      <PortfolioCard v-for="item in portfolios" :key="item.id" :item="item" />
    </div>
  </div>
</template>
