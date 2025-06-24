<script setup></script>

<template>
  <div
    id="Navbar"
    class="h-[72px] w-[1303px] px-[44px] bg-gradient-to-b from-grad-1 to-grad-2 rounded-[12px] flex justify-between items-center z-50"
  >
    <div id="logo" class="flex gap-[22px] items-center">
      <img src="../assets/logo.png" alt="" />
      <img src="../assets/logo-text.svg" alt="" />
    </div>
    <ul
      id="menu"
      class="flex gap-[72px] text-[14px] text-white font-orbitron font-medium"
    >
      <li class="cursor-pointer">Home</li>
      <li class="cursor-pointer">About</li>
      <li class="cursor-pointer">Service</li>
      <li class="cursor-pointer">Contact</li>
    </ul>
  </div>
</template>
