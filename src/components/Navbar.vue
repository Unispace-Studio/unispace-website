<script setup>
const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId)
  target?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div id="Navbar"
    class="h-[72px] w-full xl:w-[1303px] px-[44px] bg-gradient-to-b from-grad-1 to-grad-2 xl:rounded-[12px] flex justify-between items-center z-50">
    <div id="logo" class="flex gap-[22px] items-center">
      <img src="../assets/logo.png" alt="" />
      <img src="../assets/logo-text.svg" alt="" />
    </div>
    <ul id="menu" class="hidden xl:flex gap-[72px] text-[14px] text-white font-orbitron font-medium">
      <li class="cursor-pointer" @click="scrollTo('hero-section')">Home</li>
      <li class="cursor-pointer" @click="scrollTo('about-section')">About</li>
      <li class="cursor-pointer" @click="scrollTo('service-section')">Service</li>
      <li class="cursor-pointer" @click="scrollTo('footer')">Contact</li>
    </ul>
  </div>
</template>
