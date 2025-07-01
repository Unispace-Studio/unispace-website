<script setup>
const props = defineProps(["item", "index"]);
const formatRupiah = (val) => {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(val);
};
</script>

<template>
  <div id="pricing-table"
    class="w-[350px] xl:w-[385px] xl:h-[807px] bg-gradient-to-b from-grad-1 to-grad-2 p-[2px] rounded-[20px] overflow-hidden" data-aos="fade-up" :data-aos-delay="index * 200">
    <div class="w-full h-full bg-base rounded-[20px] flex flex-col gap-[28px] px-[24px] pt-[65px] pb-[65px] xl:pb-0">
      <div
        class="w-[220px] xl:w-[275px] h-[48px] xl:h-[62px] flex justify-center items-center rounded-r-full bg-gradient-to-b from-grad-1 to-grad-2 ml-[-24px]">
        <h4 class="text-[21px] xl:text-[25px] font-goldman font-bold">
          {{ props.item.category }}
        </h4>
      </div>
      <div class="xl:h-[44px] flex items-center gap-[15px]" :class="[props.item.discount !== 0 ? 'h-[36px] ' : 'h-0']">
        <div class="h-full flex items-center px-[12px] bg-white rounded-[6px]" v-if="props.item.discount !== 0">
          <p class="text-[14px] xl:text-[18px] text-grad-2 font-bold">
            Diskon {{ props.item.discount * 100 }}%
          </p>
        </div>
        <p class="line-through" v-if="props.item.discount !== 0">
          Rp {{ formatRupiah(props.item.price) }}
        </p>
      </div>
      <div class="w-[270px] xl:w-full h-[52px] xl:h-[61px] rounded-full bg-white self-center flex justify-center items-center gap-[4px] text-grad-2">
        <span class="text-[18px] xl:text-[20px] mt-[8px]">Rp</span>
        <span class="text-[28px] xl:text-[40px] font-semibold">{{
          formatRupiah(
            props.item.price - props.item.discount * props.item.price
          )
        }}</span>
      </div>
      <h4 class="text-[16px] xl;text-[20px] font-medium text-center">Keuntungan & Fitur</h4>
      <div class="flex flex-col gap-[10px]">
        <div class="flex items-center gap-[14px]" v-for="item in props.item.features" :key="item.id">
          <img src="/assets/icons/check.svg" alt="" class="scale-80"/>
          <p class="text-[13px] xl:text-[15px]">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
