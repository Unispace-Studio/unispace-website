<script setup>
const steps = [
  {
    title: "Konsultasi Awal",
    description:
      "Client menghubungi tim Unispace, menjelaskan kebutuhan, dan diskusi awal.",
    image: "consultation", // tambahkan path ikon konsultasi
  },
  {
    title: "Penawaran & Pemilihan Paket",
    description:
      "Tim kasih rekomendasi paket + estimasi harga sesuai kebutuhan client.",
    image: "offering", // tambahkan path ikon penawaran/paket
  },
  {
    title: "Briefing & Riset",
    description:
      "Client isi form brief atau meeting detail → tim mulai riset UI, UX, kompetitor, dsb.",
    image: "briefandresearch", // tambahkan path ikon riset
  },
  {
    title: "Desain & Pengembangan",
    description: "Proses desain (Figma, dsb) dan coding (frontend/backend).",
    image: "designanddevelopment", // tambahkan path ikon desain/dev
  },
  {
    title: "Revisi & Finalisasi",
    description: "Client beri feedback, revisi dilakukan sampai selesai.",
    image: "revision", // tambahkan path ikon revisi
  },
  {
    title: "Peluncuran & Support",
    description:
      "Website di-launching + support selama beberapa minggu pertama.",
    image: "launch", // tambahkan path ikon peluncuran
  },
];
</script>

<template>
  <div id="process-section" class="w-full h-[calc(175vh)] flex flex-col gap-[76px] pt-[72px] relative z-10">
    <div class="w-full flex flex-col items-center gap-[32px]">
      <h2 class="text-[52px] font-goldman">Tahapan Kerja</h2>
      <p class="text-[20px] w-[960px] text-center">
        Proses kerja yang kami susun secara sistematis untuk memastikan hasil
        akhir yang maksimal dan sesuai ekspektasi Anda
      </p>
    </div>
    <div class="flex justify-center gap-[80px]">
      <div>
        <div class="flex items-center gap-[48px]" :class="[index !== steps.length - 1 ? '' : 'mt-[-23px]']"
          v-for="(item, index) in steps" :key="item.id">
          <div class="flex flex-col items-center group">
            <div id="box1"
              class="w-[69px] h-[64px] bg-white/10 hover:bg-gradient-to-b from-grad-1 to-grad-2 rounded-[10px] flex justify-center items-center">
              <img :src="'/assets/icons/' + item.image + '.svg'" alt="" />
            </div>
            <div id="box2" v-if="index !== steps.length - 1"
              class="w-[6px] h-[70px] bg-white/10 group-hover:bg-gradient-to-b from-grad-2 to-white/10"></div>
          </div>
          <div class="flex flex-col gap-[15px]" :class="[index !== steps.length - 1 ? 'mt-[-50px]' : '']">
            <h4 class="text-[32px] font-goldman">{{ item.title }}</h4>
            <p class="w-[488px]">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="w-[400px] h-[400px] rounded-[16px] bg-white"></div>
    </div>
  </div>
</template>
