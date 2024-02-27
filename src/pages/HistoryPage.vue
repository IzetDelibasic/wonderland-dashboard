<template>
    <div>
      <div class="w-full h-full bg-gray-200 text-center text-white">
        <div class="h-[50px] bg-gray-900">
          <div class="h-full px-[20px] flex items-center justify-between">
            <h3 class="font-bold font-montserrat text-[1.5rem] cursor-pointer">Wonderland Dashboard</h3>
            <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
          </div>
        </div>
      </div>
      <div>
        <div v-for="characterData in characterHistoryConstant" :key="characterData.character" class="flex flex-col">
          <h2>{{ characterData.character }}</h2>
          <div v-for="item in characterData.items" :key="item.name">
            <h3>{{ item.name }}</h3>
            <img :src="requireImage(item.image)" :alt="item.name" class="w-[10rem] h-[10rem]"/>
            <p>{{ item.history }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { characterHistoryConstant } from '@/pages/constants/characterHistoryConstants';
  
  export default {
    data() {
      return {
        characterHistoryConstant: characterHistoryConstant
      };
    },
    methods: {
      goToStartPage() {
        this.$router.push('/');
      },
      requireImage(imagePath) {
        return require(`@/assets/images/${imagePath}`);
      }
    }
  }
  </script>
  
  <style>
  </style>
