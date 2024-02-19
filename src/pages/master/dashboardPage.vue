<template>
  <div class="w-screen h-screen flex">
    <!-- Sidebar -->
    <div class="w-[400px] h-full bg-gray-200 text-center text-white" v-show="showSide">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-[1.5rem]">Wonderland Dashboard</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800">
        <!-- Dynamically generate sidebar items -->
        <div v-for="category in sidebarConstant" :key="category.title" class="py-[20px] hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-start mx-[2rem]">
          <font-awesome-icon :icon="category.items[0].icon" class="px-[10px]"/>
          <div>{{ category.title }}</div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div class="h-[50px] bg-gray-200 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
        <font-awesome-icon icon="bars" @click="toggleSideBar" class="mr-[20px]"/>
        <div class="relative">
          <input type="text" class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" placeholder="What you thinking now?" value="" />
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] flex justify-center items-center" :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')', backgroundSize: 'cover' }">
        <div class="text-center font-medium text-3xl">
          <h1 class="pb-[1rem]">Welcome to Disney World!</h1>
          <button type="button" class="bg-gray-800 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded" @click="goToHome">{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sidebarConstant } from '../constants/sidebarConstants'; 

export default {
  data() {
    return {
      buttonText: "Dive into Disney World",
      showSide: true,
      sidebarConstant: sidebarConstant,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    goToHome() {
      this.$router.push('/home');
    }
  },
};
</script>

<style>
</style>
