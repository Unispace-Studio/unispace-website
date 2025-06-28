<script setup>
const props = defineProps(["item"]);
</script>

<template>
  <div id="portfolio-card"
    class="w-[320px] xl:w-[360px] h-[415px] rounded-[16px] bg-white/10 flex flex-col justify-center items-center gap-[32px]">
    <div class="h-[calc(270/290*163px)] xl:h-[163px] w-[270px] xl:w-[290px] rounded-[10px] overflow-hidden bg-white">
      <img :src="'/assets/' + props.item.title.toLowerCase() + '.png'" alt="" />
    </div>
    <div class="flex flex-col gap-[28px] justify-center w-[270px] xl:w-[290px]">
      <div class="flex flex-col gap-[12px] justify-center text-center">
        <h4 class="text-[30px] font-goldman">{{ props.item.title }}</h4>
        <p class="text-[14px]">
          {{ props.item.description }}
        </p>
      </div>
      <button
        class="p-[1px] bg-gradient-to-b from-grad-1 to-grad-2 rounded-[6px] overflow-hidden self-center group cursor-pointer">
        <div class=" bg-[#272732] group-hover:bg-white/0 rounded-[6px] transition-all duration-150">
          <a :href="props.item.link" class="px-[20px] py-[7px] flex gap-[8px]">
            <img src="/assets/icons/view.svg" alt="" />
            <p class="text-[14px] font-medium">Live Preview</p>
          </a>
        </div>
      </button>
    </div>
  </div>
</template>
