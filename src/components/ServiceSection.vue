<script setup>
import ServiceCard from "./ServiceCard.vue";

const service = [
  {
    title: "E-Commerce",
    description:
      "Jual produkmu secara online dengan toko modern yang responsif dan aman.",
    image: "e-commerce", // tambahkan path ke gambar
    position: "object-left",
  },
  {
    title: "Personal Website",
    description:
      "Tampilkan karya dan branding personalmu lewat website yang unik dan profesional.",
    image: "personal",
    position: "object-center",
  },
  {
    title: "Business Dashboard",
    description:
      "Kelola data dan operasional bisnismu lewat dashboard yang rapi dan mudah digunakan.",
    image: "business-dashboard",
    position: "object-right",
  },
  {
    title: "Company Profile",
    description:
      "Bangun citra profesional untuk bisnismu lewat website profil yang modern dan informatif.",
    image: "personal",
    position: "object-left",
  },
  {
    title: "Landing Page",
    description:
      "Tingkatkan konversi dengan landing page yang fokus, cepat, dan menarik perhatian.",
    image: "business-dashboard",
    position: "object-center",
  },
  {
    title: "Blog",
    description:
      "Bagikan ide, berita, atau artikel informatif lewat platform blog yang rapi dan SEO-friendly.",
    image: "e-commerce",
    position: "object-right",
  },
];
</script>

<template>
  <div id="service-section"
    class="w-full xl:h-[calc(200vh)] flex flex-col gap-[76px] pt-[72px] relative z-10 px-[12px] xl:px-0">
    <div class="w-full flex flex-col items-center gap-[32px]">
      <h2 class="text-[40px] xl:text-[52px] font-goldman" data-aos="fade-up" data-aos-delay="0">Layanan Kami</h2>
      <p class="text-[14px] xl:text-[20px] xl:w-[960px] text-center" data-aos="fade-up" data-aos-delay="200">
        Kami menyediakan berbagai solusi pembuatan website yang disesuaikan
        dengan kebutuhan bisnis dan personal Anda.
      </p>
    </div>
    <div class="flex justify-center gap-[50px] flex-wrap">
      <ServiceCard :item="item" :index="index" v-for="(item, index) in service" :key="item.id" />
    </div>
  </div>
</template>
