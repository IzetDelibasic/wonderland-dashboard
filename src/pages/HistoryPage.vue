<template>
  <div :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')', backgroundSize: 'cover' }" class="min-h-screen">
    <div class="w-full h-full bg-gray-200 text-center text-white">
      <div class="h-[50px] bg-gray-900">
        <div class="h-full px-[20px] flex items-center justify-between">
          <h3 class="font-bold font-montserrat text-[1.5rem] cursor-pointer">Wonderland Dashboard</h3>
          <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
        </div>
      </div>
    </div>
    <div class="w-[40%] flex flex-col justify-center items-center mx-auto mt-[3rem] bg-bluePurple bg-opacity-90 p-[5rem]">
      <div class="xl:h-[25rem]">
        <div v-if="currentCharacter" class="">
          <div v-for="item in currentCharacter.items" :key="item.name" class="flex flex-col justify-center items-center text-center">
            <h3>{{ item.name }}</h3>
            <img :src="requireImage(item.image)" :alt="item.name" class="w-[15rem] h-[15rem]"/>
            <p class="w-[50%] py-[0.5rem]">{{ item.history }}</p>
          </div>
        </div>
        <div v-else>
          <p>No character to display</p>
        </div>
      </div>
      <div class="flex flex-row justify-between w-[40%] pt-[10rem]">
        <CustomButton @click="previousCharacter" :title="buttonOneText" class="bg-bluePurple hover:bg-black text-white font-medium rounded font-workSans ease-out duration-300 w-[40%]"/>
        <CustomButton @click="nextCharacter" :title="buttonTwoText" class="bg-bluePurple hover:bg-black text-white font-medium rounded font-workSans ease-out duration-300 w-[40%]"/>
      </div>
    </div>
  </div>
</template>

<script>
import { characterHistoryConstant } from '@/pages/constants/characterHistoryConstants';
import CustomButton from '@/components/CustomButton.vue'

export default {
  components: {
    CustomButton
  },
  data() {
    return {
      characterHistoryConstant: characterHistoryConstant,
      currentIndex: 0,
      buttonOneText: "Previous",
      buttonTwoText: "Next",
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
