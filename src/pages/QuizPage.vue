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
      <div class="lg:w-[50%] w-[80%] mx-auto mt-[5rem] bg-white rounded-[1rem] lg:p-[3rem] p-[2rem] text-black lg:hover:bg-opacity-90 ease-in-out duration-300">
        <h2 class="text-[1.5rem] font-semibold mb-[1rem] font-montserrat">Quiz Game: Do you know Wonderland?</h2>

        <!-- Questions and Answers -->
        <div v-for="(question, index) in questionsAnswers" :key="index" class="mb-[1.5rem]">
          <p class="font-medium mb-[0.5rem] font-montserrat">{{ 'Q' + (index + 1) + ': ' + question.question }}</p>
          <div class="flex justify-center items-center">
            <input type="radio" id="answer1" name="question1" class="mr-[0.5rem]">
            <label for="answer1">{{ question.trueAnswer }}</label>
          </div>
          <div class="flex justify-center items-center mt-[0.5rem]">
            <input type="radio" id="answer2" name="question1" class="mr-[0.5rem]">
            <label for="answer2">{{ question.wrongAnswer }}</label>
          </div>
        </div>

        <!-- Button for submission -->
        <button class="bg-bluePurple hover:bg-black text-white py-[0.5rem] px-[1rem] rounded-md">Submit Answers</button>
      </div>
    </div>
  </div>
</template>

<script>
import { questionsAnswersConstant } from "@/pages/constants/questionsAnswersConstant";

export default {
  data() {
    return {
      questionsAnswers: questionsAnswersConstant
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
