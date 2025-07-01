<script setup>
import Navbar from "./Navbar.vue";

const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId);
  target?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div id="hero-section" class="w-full h-screen flex flex-col items-center xl:pt-[50px] overflow-hidden relative z-10">
    <Navbar />
    <img src="../assets/rocket.png" alt="" class="hidden xl:inline absolute right-0 z-0" />
    <img src="/assets/rocket-mb.png" alt="" class="xl:hidden absolute z-0 scale-125 h-auto" />
    <div class="flex gap-[148px] items-center justify-center h-[calc(100%)] xl:ml-[100px] px-[12px]">
      <div class="flex flex-col gap-[52px]">
        <div class="flex flex-col gap-[29px]">
          <h1
            class="text-[36px] xl:text-[68px] text-center xl:text-start font-goldman xl:w-[632px] leading-[52px] xl:leading-[82px]" data-aos="fade-right" data-aos-delay="200">
            Bikin Website Profesional Tanpa Ribet
          </h1>
          <p class="xl:w-[616px] text-[14px] xl:text-[18px] text-center xl:text-start" data-aos="fade-right" data-aos-delay="400">
            Unispace bantu bisnis kamu tampil modern dan terpercaya lewat
            website cepat jadi, responsif, dan langsung siap dipakai
          </p>
        </div>
        <div class="flex flex-col xl:flex-row items-center gap-[29px]">
          <button
            class="bg-gradient-to-b from-grad-1 to-grad-2 w-[280px] xl:w-auto px-[24px] py-[15px] text-[14px] xl:text-[16px] font-medium rounded-[10px] cursor-pointer" data-aos="fade-up" data-aos-delay="600"><a
              href="https://wa.me/628174745070">Konsultasi Gratis via WhatsApp</a>
          </button>
          <button
            class="border border-[#52526E] w-[280px] xl:w-auto px-[24px] py-[15px] text-[14px] xl:text-[16px] text-secondary font-medium rounded-[10px] cursor-pointer" data-aos="fade-up" data-aos-delay="700"
            @click="scrollTo('portfolio-section')">
            Lihat Portofolio
          </button>
        </div>
      </div>
      <img src="../assets/astronaut.png" alt="" class="hidden xl:inline" data-aos="fade-left"/>
    </div>
  </div>
</template>