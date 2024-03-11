<template>
  <div :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')', backgroundSize: 'cover' }" class="min-h-screen">
    <div class="w-full h-full bg-gray-200 text-center text-white">
      <div class="h-[50px] bg-gray-900">
        <div class="h-full px-[20px] flex items-center justify-between">
          <h3 class="font-bold font-montserrat lg:text-[1.5rem] cursor-default">Wonderland Dashboard</h3>
          <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
        </div>
      </div>
    </div>
    <div class="w-[80%] flex flex-col justify-center items-center mx-auto mt-[3rem] bg-white bg-opacity-80 rounded-[30px] rounded-bl-none rounded-tr-none hover:bg-opacity-65 hover:rounded-[30px] ease-in-out duration-300 p-[5rem]">
      <div class="xl:h-[25rem]">
        <div v-if="currentCharacter" class="">
          <div v-for="item in currentCharacter.items" :key="item.name" class="flex flex-col justify-center items-center text-center">
            <h3 class="text-[26px] pb-[1rem] font-montserrat font-medium">{{ item.name }}</h3>
            <img :src="requireImage(item.image)" :alt="item.name" class="w-[15rem] h-[15rem] rounded-[25px]"/>
            <p class="lg:w-[50%] h-full py-[0.5rem] font-montserrat lg:text-[18px] font-medium">{{ item.history }}</p>
          </div>
        </div>
        <div v-else>
          <p>No character to display</p>
        </div>
      </div>
      <div class="flex lg:flex-row flex-col justify-between lg:w-[50%] w-full xl:pt-[7.5rem]">
        <CustomButton @click="previousCharacter" :title="buttonOneText" class="bg-gray-900 hover:bg-bluePurple text-white font-medium rounded font-workSans ease-out duration-300 lg:w-[45%] mb-[1rem] lg:mb-0"/>
        <CustomButton @click="nextCharacter" :title="buttonTwoText" class="bg-gray-900 hover:bg-bluePurple text-white font-medium rounded font-workSans ease-out duration-300 lg:w-[45%]"/>
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
