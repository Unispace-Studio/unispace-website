<script setup>
const socials = [{ name: "facebook", link: "https://www.facebook.com/unispace.id/" }, { name: "instagram", link: "https://www.instagram.com/unispacestudio/" }, { name: "x", link: "" }, { name: "linkedin", link: "" }];
const quickLinks = [
    { name: "Beranda", link: "hero-section" },
    { name: "Tentang Kami", link: "about-section" },
    { name: "Portfolio", link: "portfolio-section" },
    { name: "Kontak", link: "footer" },
];
const layanan = [
    { name: "Layanan Kami", link: "service-section" },
    { name: "Tahapan Kerja", link: "process-section" },
    { name: "Harga Paket", link: "pricing-section" },
];

const scrollTo = (sectionId) => {
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <div id="footer" class="w-full xl:h-[75vh] flex flex-col justify-end items-center relative z-10 px-[12px] xl:px-0">
        <div class="h-full flex flex-col xl:flex-row items-center gap-[80px] xl:gap-[100px]">
            <div class="xl:w-[400px] flex flex-col gap-[24px] items-center xl:items-start">
                <div id="logo" class="flex gap-[22px] items-center">
                    <img src="../assets/logo.png" alt="" class="h-[calc(60/100*56)] xl:h-[56px]" />
                    <img src="../assets/logo-text.svg" alt="" class="h-[calc(60/100*52)] xl:h-[52px]" />
                </div>
                <p class="text-[14px] xl:text-[18px] text-center xl:text-start font-medium">
                    Tampilkan bisnis kamu lebih modern dan terpercaya dengan website cepat
                    jadi dari Unispace.
                </p>
                <div class="flex gap-[8px]">
                    <div class="w-[40px] h-[40px] flex rounded-[5px] justify-center items-center bg-gradient-to-b from-grad-1 to-grad-2 hover:from-white hover:to-white cursor-pointer transition-all duration-150"
                        v-for="item in socials" :key="item.id">
                        <a href=""><img :src="'/assets/icons/' + item.name + '.svg'" alt="" /></a>
                    </div>
                </div>
            </div>
            <div class="flex justify-center xl:justify-start gap-[32px] xl:gap-[45px]">
                <div class="w-[155px] flex flex-col gap-[22px]">
                    <div class="flex flex-col gap-[8px]">
                        <h4 class="text-[24px] font-semibold">Quick Link</h4>
                        <div class="w-[52px] h-[3px] bg-gradient-to-b from-grad-1 to-grad-2 gap-[8px]"></div>
                    </div>
                    <div class="flex flex-col gap-[12px]">
                        <div class="flex items-center gap-[4px] group hover:ml-[8px] cursor-pointer"
                            v-for="item in quickLinks" :key="item.id" @click="scrollTo(item.link)">
                            <svg class=" fill-white group-hover:fill-grad-2" xmlns="http://www.w3.org/2000/svg"
                                width="6" height="12" viewBox="0 0 6 12" fill="none">
                                <path
                                    d="M0.247666 11.7337C0.573851 12.0888 1.10275 12.0888 1.42893 11.7337L5.51127 7.28482C6.16312 6.57452 6.16287 5.42346 5.51077 4.71343L1.42592 0.266342C1.09974 -0.0887806 0.570844 -0.0887806 0.244651 0.266342C-0.0815504 0.621473 -0.0815504 1.19724 0.244651 1.55237L3.74081 5.35862C4.06707 5.71372 4.06707 6.28953 3.74081 6.64463L0.247666 10.4477C-0.0785353 10.8028 -0.0785353 11.3785 0.247666 11.7337Z" />
                            </svg>
                            <p class="medium group-hover:text-grad-2">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="w-[155px] flex flex-col gap-[22px]">
                    <div class="flex flex-col gap-[8px]">
                        <h4 class="text-[24px] font-semibold">Layanan</h4>
                        <div class="w-[52px] h-[3px] bg-gradient-to-b from-grad-1 to-grad-2 gap-[8px]"></div>
                    </div>
                    <div class="flex flex-col gap-[12px]">
                        <div class="flex items-center gap-[4px] group hover:ml-[8px] cursor-pointer"
                            v-for="item in layanan" :key="item.id" @click="scrollTo(item.link)">
                            <svg class="fill-white group-hover:fill-grad-2" xmlns="http://www.w3.org/2000/svg" width="6"
                                height="12" viewBox="0 0 6 12" fill="none">
                                <path
                                    d="M0.247666 11.7337C0.573851 12.0888 1.10275 12.0888 1.42893 11.7337L5.51127 7.28482C6.16312 6.57452 6.16287 5.42346 5.51077 4.71343L1.42592 0.266342C1.09974 -0.0887806 0.570844 -0.0887806 0.244651 0.266342C-0.0815504 0.621473 -0.0815504 1.19724 0.244651 1.55237L3.74081 5.35862C4.06707 5.71372 4.06707 6.28953 3.74081 6.64463L0.247666 10.4477C-0.0785353 10.8028 -0.0785353 11.3785 0.247666 11.7337Z" />
                            </svg>
                            <p class="medium group-hover:text-grad-2">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-[22px] items-center xl:items-start">
                <div class="flex flex-col gap-[8px]">
                    <h4 class="text-[24px] font-semibold">Kontak Kami</h4>
                    <div class="w-[52px] h-[3px] bg-gradient-to-b from-grad-1 to-grad-2 gap-[8px]"></div>
                </div>
                <div class="flex items-center gap-[20px] group cursor-pointer">
                    <div
                        class="w-[50px] h-[50px] rounded-[10px] bg-gradient-to-b from-grad-1 to-grad-2 group group-hover:from-white group-hover:to-white transition-all duration-150 flex justify-center items-center">
                        <img src="/assets/icons/phone.svg" alt="" />
                    </div>
                    <div class="flex flex-col gap-[2px] text-[18px] font-medium">
                        <p>No Telepon:</p>
                        <p class="group-hover:text-grad-2 transition-all duration-150">
                            +62 817 4745 070
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-[20px] group cursor-pointer">
                    <div
                        class="w-[50px] h-[50px] rounded-[10px] bg-gradient-to-b from-grad-1 to-grad-2 group-hover:from-white group-hover:to-white transition-all duration-150 flex justify-center items-center">
                        <img src="/assets/icons/email.svg" alt="" />
                    </div>
                    <div class="flex flex-col gap-[2px] text-[18px] font-medium group">
                        <p>Email:</p>
                        <p class="group-hover:text-grad-2 transition-all duration-150">
                            contact@unispace.id
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center pt-[80px] xl:pt-[20px] pb-[20px]">
            Copyright©2025 <span class="text-grad-2">UNISPACE</span> All rights
            reserved.
        </p>
    </div>
</template>
