<template>
  <div
    :style="{
      backgroundImage:
        'url(' + require('@/images/dashboardBackground.webp') + ')',
      backgroundSize: 'cover',
    }"
    class="min-h-screen"
  >
    <div class="w-full h-full text-center text-white">
      <div class="h-[3rem] bg-gray-900">
        <div class="h-full px-[2rem] flex items-center justify-between">
          <h3 class="font-bold font-montserrat lg:text-[1.5rem] cursor-default">
            Wonderland Dashboard
          </h3>
          <font-awesome-icon
            icon="fa-solid fa-house-user"
            class="cursor-pointer text-xl"
            @click="goToStartPage"
          />
        </div>
      </div>

      <!-- Quiz Section -->
      <div
        class="lg:w-[50%] w-[80%] mx-auto mt-[5rem] bg-white rounded-[1rem] lg:p-[3rem] p-[2rem] text-black lg:hover:bg-opacity-90 ease-in-out duration-300"
      >
        <h2 class="text-[1.5rem] font-semibold mb-[1rem] font-montserrat">
          Quiz Game: Do you know Wonderland?
        </h2>

        <!-- Questions and Answers -->
        <div
          v-for="(question, index) in questionsAnswers"
          :key="index"
          class="mb-[1.5rem]"
        >
          <p class="font-medium mb-[0.5rem] font-montserrat">
            {{ "Q" + (index + 1) + ": " + question.question }}
          </p>
          <div class="flex justify-center items-center">
            <input
              type="radio"
              :id="'answer1' + index"
              :name="'question' + index"
              class="mr-[0.5rem]"
              @click="checkAnswer(index, question.trueAnswer)"
            />
            <label :for="'answer1' + index">{{ question.trueAnswer }}</label>
          </div>
          <div class="flex justify-center items-center mt-[0.5rem]">
            <input
              type="radio"
              :id="'answer2' + index"
              :name="'question' + index"
              class="mr-[0.5rem]"
              @click="checkAnswer(index, question.wrongAnswer)"
            />
            <label :for="'answer2' + index">{{ question.wrongAnswer }}</label>
          </div>
        </div>
        <!-- Button for submission -->
        <CustomButton
          :title="submitTitle"
          class="bg-gray-900 hover:bg-bluePurple text-white font-medium rounded font-montserrat ease-out duration-300 lg:w-[45%] mb-[1rem] lg:mb-0 mx-auto"
          @click="showResult = true"
        />
        <!-- Display quiz result -->
        <p v-if="showResult" class="font-medium my-[0.5rem] font-montserrat">
          Quiz Result: {{ correctAnswers }}/{{ questionsAnswers.length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { questionsAnswersConstant } from "@/pages/constants/questionsAnswersConstant";
import CustomButton from "@/components/CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      questionsAnswers: this.shuffleQuestions(questionsAnswersConstant),
      submitTitle: "Submit Answer",
      userAnswers: [],
      correctAnswers: 0,
      showResult: false,
    };
  },
  methods: {
    goToStartPage() {
      this.$router.push("/");
    },
    checkAnswer(index, selectedAnswer) {
      if (this.questionsAnswers[index].trueAnswer === selectedAnswer) {
        this.correctAnswers++;
      }
    },
    shuffleQuestions(questions) {
      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }
      return questions;
    },
  },
};
</script>

<style></style>
