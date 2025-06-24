<script setup>
const scrollingTexts = [
  "Bikin Website Profesional Tanpa Ribet",
  "Desain Futuristik, Performa Realistis",
  "Tampil Modern, Siap Online Cepat",
  "Solusi Digital untuk Bisnismu",
  "Dari Konsep ke Launching, Kami yang Urus",
  "Unispace: Co-Pilot Digital Bisnismu",
  "Website Powerful, Desain Memikat",
  "Digital Presence yang Bekerja Untukmu",
  "Cerdas, Cepat, dan Tanpa Drama",
  "Website Modern, Bisa Langsung Online",
  "Bangun Identitas Online yang Kuat",
];
</script>

<template>
  <div id="about-section" class="w-full h-screen">
    <div class="w-full h-[90px] bg-white/10 overflow-hidden">
      <div
        id="slider"
        class="h-full flex gap-[72px] items-center pl-[58px] whitespace-nowrap w-max"
      >
        <template v-for="item in scrollingTexts" :key="item.id">
          <p class="text-[20px] font-medium w-auto">
            {{ item }}
          </p>
          <img src="../assets/rocket.gif" alt="" class="size-[72px]" />
        </template>
        <template v-for="item in scrollingTexts" :key="item.id">
          <p class="text-[20px] font-medium w-auto">
            {{ item }}
          </p>
          <img src="../assets/rocket.gif" alt="" class="size-[72px]" />
        </template>
      </div>
    </div>
    <div
      class="w-full h-[calc(100%-90px)] px-[146px] flex flex-col justify-center"
    >
      <div class="flex gap-[25px] items-center whitespace-nowrap">
        <div class="w-full h-[2px] bg-white"></div>
        <h2 class="text-[52px] font-goldman">Tentang Kami</h2>
      </div>
      <div class="flex items-center justify-between mt-[-20px]">
        <div class="relative ml-[130px]">
          <img src="../assets/dashboard.png" alt="" />
          <img
            src="../assets/astronaut2.png"
            alt=""
            class="absolute top-[-95px] left-[-130px]"
          />
        </div>
        <div class="flex flex-col gap-[25px] items-end">
          <div class="p-[1px] bg-main-grad rounded-[6px] overflow-hidden">
            <h4
              class="px-[18px] py-[10px] bg-base rounded-[6px] text-[20px] font-medium"
            >
              Misi Kami : Bantu Bisnismu Tampil Maksimal Secara Digital
            </h4>
          </div>
          <p class="text-[20px] text-right w-[657px]">
            Di <span class="text-secondary font-medium">UNISPACE</span>, kami
            percaya bahwa setiap bisnis—besar maupun kecil—berhak untuk memiliki
            tampilan online yang profesional, modern, dan efisien. Dengan
            pengalaman membangun berbagai website untuk berbagai industri, kami
            hadir sebagai co-pilot digital untuk mengantar bisnismu ke level
            berikutnya.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

#slider {
  animation: scroll 60s linear infinite;
}

#slider:hover {
  animation-play-state: paused;
}
</style>
