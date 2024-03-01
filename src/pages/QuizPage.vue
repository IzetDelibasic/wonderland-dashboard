<template lang="">
  <div :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')', backgroundSize: 'cover' }" class="min-h-screen">
    <div class="w-full h-full text-center text-white">
      <div class="h-[3rem] bg-gray-900">
        <div class="h-full px-[2rem] flex items-center justify-between">
          <h3 class="font-bold font-montserrat text-[1.25rem] lg:text-[1.5rem]">Wonderland Dashboard</h3>
          <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer text-xl" @click="goToStartPage"/>
        </div>
      </div>

      <!-- Quiz Section -->
      <div class="max-w-md mx-auto mt-[2rem] bg-white shadow-md rounded-md p-[1.5rem] text-black">
        <h2 class="text-lg font-semibold mb-4">Quiz Game: Do you know Wonderland?</h2>

        <!-- Question 1 -->
        <div class="mb-[1.5rem]">
          <p class="font-medium mb-[0.5rem]">Q1: Who is the author of the book "Alice's Adventures in Wonderland"?</p>
          <div class="flex items-center">
            <input type="radio" id="answer1" name="question1" class="mr-[0.5rem]">
            <label for="answer1">Lewis Carroll</label>
          </div>
          <div class="flex items-center mt-[0.5rem]">
            <input type="radio" id="answer2" name="question1" class="mr-[0.5rem]">
            <label for="answer2">J.K. Rowling</label>
          </div>
        </div>
        <!-- Button for submission -->
        <button class="bg-bluePurple hover:bg-black text-white py-[0.5rem] px-[1rem] rounded-md">Submit Answers</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },  
  methods: {
    goToStartPage() {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="">
    
</style>
