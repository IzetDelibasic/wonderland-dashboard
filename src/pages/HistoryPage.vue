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
    <div class="w-[40%] flex flex-col justify-center items-center mx-auto mt-[10rem] bg-bluePurple">
      <div v-if="currentCharacter" class="">
        <div v-for="item in currentCharacter.items" :key="item.name" class="flex flex-col justify-center items-center text-center">
          <h3>{{ item.name }}</h3>
          <img :src="requireImage(item.image)" :alt="item.name" class="w-[10rem] h-[10rem]"/>
          <p class="w-[50%]">{{ item.history }}</p>
        </div>
      </div>
      <div v-else>
        <p>No character to display</p>
      </div>
      <div>
        <button @click="previousCharacter" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
        <button @click="nextCharacter" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { characterHistoryConstant } from '@/pages/constants/characterHistoryConstants';

export default {
  data() {
    return {
      characterHistoryConstant: characterHistoryConstant,
      currentIndex: 0
    };
  },
  computed: {
    currentCharacter() {
      return this.characterHistoryConstant[this.currentIndex];
    }
  },
  methods: {
    goToStartPage() {
      this.$router.push('/');
    },
    requireImage(imagePath) {
      return require(`@/images/${imagePath}`);
    },
    nextCharacter() {
      if(this.currentIndex < this.characterHistoryConstant.length - 1){
        this.currentIndex++;
      }
    },
    previousCharacter(){
      if(this.currentIndex > 0){
        this.currentIndex--;
      }
    },
  }
}
</script>

<style>
</style>
