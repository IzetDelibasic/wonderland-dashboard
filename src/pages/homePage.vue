<template>
  <div class="" :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')', backgroundSize: 'cover' }">
    <div class="w-full h-full bg-gray-200 text-center text-white" >
      <div class="h-[50px] bg-gray-900">
        <div class="h-full px-[20px] flex items-center justify-between">
          <h3 class="font-bold font-montserrat lg:text-[1.5rem]">Wonderland Dashboard</h3>
          <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
        </div>
      </div>
    </div>
    <h1 class="text-center font-medium lg:text-[3rem] text-[1.5rem] text-white font-montserrat">Welcome to Disney World - Search your character</h1>
    <div v-if="loading">Loading data.</div>
    <div v-else class="lg:grid lg:grid-cols-5 flex flex-col lg:mx-[0rem] lg:w-full sm:w-[70%] mx-auto">
      <div v-for="character in characters" :key="character._id" class="flex flex-col items-center my-[1rem] group  lg:w-full lg:h-full">
        <div class="flex flex-col items-center bg-gray-50 bg-opacity-65  p-[1rem] lg:rounded-[10px] rounded-br-none lg:rounded-tl-none lg:hover:rounded-tl-[10px] lg:hover:rounded-br-[10px] duration-300 ease-in-out lg:hover:opacity-90">
          <img :src="character.imageUrl" :alt="character.name" style="" class="w-[15rem] h-[12rem] rounded-[10px] lg:rounded-br-none lg:rounded-tl-none lg:hover:rounded-tl-[10px] lg:hover:rounded-br-[10px] duration-300 ease-in-out lg:hover:opacity-90">
          <h2 class="text-[1.1rem] text-center font-medium font-montserrat">{{ character.name }}</h2>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      characters: [],
      loading: true
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://api.disneyapi.dev/character');
      this.characters = response.data.data.slice(0,20); 
      this.loading = false;
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
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
