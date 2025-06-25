<script setup>
import PricingTable from "./PricingTable.vue";

const pricingData = [
  {
    category: "Simple",
    price: 199000,
    discount: 0,
    features: [
      "1–2 Halaman (Homepage, About, dll)",
      "Desain responsif (mobile & desktop)",
      "Gratis hosting (shared plan)",
      "Free .com domain",
      "SEO dasar (title & meta description)",
      "Optimasi kecepatan ringan",
      "1x revisi minor",
      "1–2 hari pengerjaan",
    ],
  },
  {
    category: "Business",
    price: 199000,
    discount: 0.26,
    features: [
      "3–5 Halaman (Homepage, About, dll)",
      "Desain responsif (mobile & desktop)",
      "Gratis hosting (shared plan)",
      "Free .com domain",
      "SEO dasar (title & meta description)",
      "Optimasi kecepatan ringan",
      "2x revisi minor",
      "3–5 hari pengerjaan",
    ],
  },
  {
    category: "Custom",
    price: 199000,
    discount: 0,
    features: [
      "5–10 Halaman (Homepage, About, dll)",
      "Desain responsif (mobile & desktop)",
      "Gratis hosting (shared plan)",
      "Free .com domain",
      "SEO dasar (title & meta description)",
      "Optimasi kecepatan ringan",
      "3x revisi minor",
      "7–10 hari pengerjaan",
    ],
  },
];
</script>

<template>
  <div
    id="pricing-section"
    class="w-full h-[calc(175vh)] flex flex-col gap-[76px] pt-[72px] relative z-10"
  >
    <div class="w-full flex flex-col items-center gap-[32px]">
      <h2 class="text-[52px] font-goldman">
        Paket Website yang Bisa Kamu Pilih
      </h2>
      <p class="text-[20px] w-[960px] text-center">
        Pilih paket yang sesuai dengan kebutuhan bisnismu — mulai dari kehadiran
        online sederhana hingga website lengkap siap pakai.
      </p>
    </div>
    <div class="w-full flex justify-center gap-[38px]">
      <PricingTable v-for="item in pricingData" :key="item.id" :item="item" />
    </div>
  </div>
</template>
