<template>
  <div class="min-h-screen bg-cover bg-gray-200 text-center " :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')' }">
    <div class="w-full bg-gray-900 text-white">
      <div class="h-[50px] px-4 flex items-center justify-between">
        <h3 class="font-bold font-montserrat lg:text-[1.5rem]">Wonderland Dashboard</h3>
        <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
      </div>
    </div>
    <h1 class="py-[1rem] lg:text-[3rem] text-[1.5rem] font-medium font-montserrat text-white">Welcome to Disney World - Search your character</h1>
    <div v-if="loading" class="py-[1rem]">Loading data.</div>
    <div v-else class="lg:grid lg:grid-cols-5 gap-4 lg:mx-0 mx-[1rem]">
      <div v-for="character in characters" :key="character._id" class="flex flex-col items-center my-4 group">
        <div class="flex flex-col items-center bg-gray-50 bg-opacity-75 p-[1rem] rounded-lg hover:opacity-90">
          <img :src="character.imageUrl" :alt="character.name" class="w-[15rem] h-[12rem] rounded-lg mb-[0.5rem]">
          <h2 class="text-[1.5rem] text-center font-medium font-montserrat">{{ character.name }}</h2>
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
