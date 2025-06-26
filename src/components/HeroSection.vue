<script setup>
import Navbar from "./Navbar.vue";

const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId);
  target?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div id="hero-section" class="w-full h-screen flex flex-col items-center pt-[50px] overflow-hidden relative z-10">
    <Navbar />
    <img src="../assets/rocket.png" alt="" class="absolute right-0 z-0" />
    <div class="flex gap-[148px] items-center justify-center h-[calc(100%)] ml-[100px]">
      <div class="flex flex-col gap-[52px]">
        <div class="flex flex-col gap-[29px]">
          <h1 class="text-[68px] font-goldman w-[632px] leading-[82px]">
            Bikin Website Profesional Tanpa Ribet
          </h1>
          <p class="w-[616px] text-[18px]">
            Unispace bantu bisnis kamu tampil modern dan terpercaya lewat
            website cepat jadi, responsif, dan langsung siap dipakai
          </p>
        </div>
        <div class="flex gap-[29px]">
          <button
            class="bg-gradient-to-b from-grad-1 to-grad-2 px-[24px] py-[15px] font-medium rounded-[10px] cursor-pointer">
            Konsultasi Gratis via WhatsApp
          </button>
          <button
            class="border border-[#52526E] px-[24px] py-[15px] text-secondary font-medium rounded-[10px] cursor-pointer"
            @click="scrollTo('portfolio-section')">
            Lihat Portofolio
          </button>
        </div>
      </div>
      <img src="../assets/astronaut.png" alt="" />
    </div>
  </div>
</template>
