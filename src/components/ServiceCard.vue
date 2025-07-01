<script setup>
const props = defineProps(["item", "index"]);
</script>

<template>
  <div id="service-card" class="w-[320px] xl:w-[360px] h-[480px] gap-[50px] relative" data-aos="fade-up" :data-aos-delay="index * 200">
    <img src="../assets/service-card-bg.png" alt="" class="h-full object-cover absolute top-0 left-0"
      :class="props.item.position" />
    <div class="flex flex-col absolute w-full h-full top-0 left-0 items-center text-center pt-[48px]">
      <div class="flex flex-col gap-[38px] items-center">
        <h4 class="text-[30px] font-goldman">{{ props.item.title }}</h4>
        <p class="text-[14px] w-[260px] xl:w-[282px]">{{ props.item.description }}</p>
      </div>
    </div>
    <img :src="'/assets/' + props.item.image + '.png'" alt="" class="absolute bottom-0 left-0 z-30 scale-90">
  </div>
</template>
