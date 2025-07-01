<script setup>
import PricingTable from "./PricingTable.vue";

const pricingData = [
  {
    category: "Simple",
    price: 1500000,
    discount: 0.2,
    features: [
      "1–2 Halaman (Homepage, About, dll)",
      "Desain responsif (mobile & desktop)",
      "Gratis hosting (shared plan)",
      "Free .com domain",
      "SEO dasar (title & meta description)",
      "Optimasi kecepatan ringan",
      "2x revisi minor",
      "3 hari pengerjaan",
    ],
  },
  {
    category: "Business",
    price: 3000000,
    discount: 0.15,
    features: [
      "3–5 Halaman (Homepage, About, dll)",
      "Desain responsif (mobile & desktop)",
      "Gratis hosting (shared plan)",
      "Free .com domain",
      "SEO dasar (title & meta description)",
      "Optimasi kecepatan ringan",
      "5x revisi minor",
      "7 hari pengerjaan",
    ],
  },
  {
    category: "Custom",
    price: 4500000,
    discount: 0,
    features: [
      "5–10 Halaman (Homepage, About, dll)",
      "Desain responsif (mobile & desktop)",
      "Gratis hosting (shared plan)",
      "Free .com domain",
      "SEO dasar (title & meta description)",
      "Optimasi kecepatan ringan",
      "10x revisi minor",
      "14 hari pengerjaan",
    ],
  },
];
</script>

<template>
  <div id="pricing-section"
    class="w-full xl:h-[calc(175vh)] flex flex-col gap-[76px] pt-[72px] relative z-10 px-[12px] xl:px-0">
    <div class="w-full flex flex-col items-center gap-[32px] text-center xl:text-start">
      <h2 class="text-[40px] xl:text-[52px] font-goldman" data-aos="fade-up" data-aos-delay="0">
        Paket Website yang Bisa Kamu Pilih
      </h2>
      <p class="text-[14px] xl:text-[20px] xl:w-[960px] text-center" data-aos="fade-up" data-aos-delay="200">
        Pilih paket yang sesuai dengan kebutuhan bisnismu — mulai dari kehadiran
        online sederhana hingga website lengkap siap pakai.
      </p>
    </div>
    <div class="w-full flex flex-col xl:flex-row xl:justify-center items-center xl:items-start gap-[38px]">
      <PricingTable v-for="(item, index) in pricingData" :key="item.id" :item="item":index="index" />
    </div>
  </div>
</template>
