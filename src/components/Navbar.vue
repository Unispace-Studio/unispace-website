<script setup>
import { ref } from 'vue'

const menuToggle = ref(false)

const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId)
  target?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div id="Navbar"
    class="h-[72px] w-full xl:w-[1303px] xl:px-[44px] bg-gradient-to-b from-grad-1 to-grad-2 xl:rounded-[12px] flex justify-between items-center z-50 px-[20px]">
    <div id="logo" class="flex gap-[2px] xl:gap-[22px] items-center">
      <img src="../assets/logo.png" alt="" class="scale-[85%]" />
      <img src="../assets/logo-text.svg" alt="" class="scale-[85%]" />
    </div>
    <button @click="menuToggle = true" class="w-[42px] h-[42px] xl:hidden">
      <img src="/assets/icons/menu.svg" alt="" />
    </button>
    <ul id="menu" class="hidden xl:flex gap-[72px] text-[14px] text-white font-orbitron font-medium">
      <li class="cursor-pointer" @click="scrollTo('hero-section')">Home</li>
      <li class="cursor-pointer" @click="scrollTo('about-section')">About</li>
      <li class="cursor-pointer" @click="scrollTo('service-section')">Service</li>
      <li class="cursor-pointer" @click="scrollTo('footer')">Contact</li>
    </ul>
    <teleport to='body'>
      <div id="menu-mb"
        class="xl:hidden w-[280px] h-screen bg-base fixed top-0 z-[150] transition-all duration-500 font-poppins text-white"
        :class="[menuToggle ? 'right-0 block' : 'right-[-280px] hidden']">
        <div class="w-full h-[72px] flex justify-end items-center px-[12px]">
          <button @click="menuToggle = false">
            <img src="/assets/icons/menu.svg" alt="" class="w-[42px]" />
          </button>
        </div>
        <ul class="flex flex-col gap-[20px] text-[20px] font-medium pl-[28px] pt-[30px]">
          <li class="cursor-pointer" @click="scrollTo('hero-section'), menuToggle = false">> Home</li>
          <li class="cursor-pointer" @click="scrollTo('about-section'), menuToggle = false">> About</li>
          <li class="cursor-pointer" @click="scrollTo('service-section'), menuToggle = false">> Service</li>
          <li class="cursor-pointer" @click="scrollTo('portfolio-section'), menuToggle = false">> Portfolio</li>
          <li class="cursor-pointer" @click="scrollTo('pricing-section'), menuToggle = false">> Pricing</li>
          <li class="cursor-pointer" @click="scrollTo('footer'), menuToggle = false">> Contact</li>
        </ul>
      </div>
    </teleport>
  </div>
</template>
