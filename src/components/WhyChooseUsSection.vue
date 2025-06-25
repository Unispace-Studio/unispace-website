<script setup>
const values = [
  {
    title: "Design Modern & Responsif",
    description:
      "Website yang kami bangun tampil optimal di berbagai perangkat, dari smartphone hingga desktop, dengan desain yang clean dan profesional.",
    image: "personalization",
  },
  {
    title: "Proses Cepat & Terstruktur",
    description:
      "Kami menggunakan workflow yang efisien untuk memastikan proyek selesai tepat waktu tanpa mengorbankan kualitas.",
    image: "clock",
  },
  {
    title: "Custom Sesuai Kebutuhan",
    description:
      "Setiap website kami rancang berdasarkan kebutuhan spesifik klien. Bukan template asal tempel.",
    image: "settings",
  },
];
</script>

<template>
  <div
    id="whychooseus-section"
    class="w-full h-[calc(150vh)] flex flex-col gap-[76px] pt-[72px] relative z-10"
  >
    <div class="w-full flex flex-col items-center gap-[32px]">
      <h2 class="text-[52px] font-goldman">Mengapa Memilih Kami</h2>
      <p class="text-[20px] w-[960px] text-center">
        Kenali keunggulan kami dan lihat bagaimana kami bisa bantu bisnis Anda
        tumbuh lewat website yang efektif.
      </p>
    </div>
    <img
      src="/assets/whychooseus-illustration.png"
      alt=""
      class="absolute right-0 top-[100px] z-10"
    />
    <div class="absolute right-0"></div>
    <div class="flex flex-col gap-[50px] ml-[142px] relative z-40">
      <div
        class="flex flex-col gap-[25px]"
        :class="index === 1 ? 'w-[650px]' : 'w-[750px]'"
        v-for="(item, index) in values"
        :key="item.id"
      >
        <div class="flex items-center gap-[30px]">
          <div
            class="w-[76px] h-[76px] rounded-full flex justify-center items-center bg-gradient-to-b from-grad-1 to-grad-2"
          >
            <img :src="'/assets/icons/' + item.image + '.svg'" alt="" />
          </div>
          <h4 class="text-[32px] font-goldman">{{ item.title }}</h4>
        </div>
        <p class="text-[20px]">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
