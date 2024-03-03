<template>
    <div class="min-h-screen bg-cover bg-gray-200 text-center " :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')' }">
      <div class="w-full bg-gray-900 text-white">
        <div class="h-[50px] px-4 flex items-center justify-between">
          <h3 class="font-bold font-montserrat lg:text-[1.5rem]">Wonderland Dashboard</h3>
          <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {

    },
    methods: {
      goToStartPage() {
        this.$router.push('/');
      }
    },
  };
  </script>
  
  <style>
  
  </style>
  