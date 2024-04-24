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

      <!-- Quotes -->
      <div class="mt-[10rem] px-4">
        <h4 class="text-2xl font-bold mb-4 font-workSans">Disney Quotes</h4>
        <div
          class="bg-white bg-opacity-90 hover:bg-opacity-75 ease-in-out duration-300 w-[80%] lg:w-[60%] mx-auto rounded-xl shadow-2xl p-4 font-montserrat"
        >
          <div class="mb-6">
            <p class="text-lg font-semibold text-black">
              {{ currentQuote.quote }}
            </p>
            <p class="text-black">{{ currentQuote.author }}</p>
          </div>

          <CustomButton
            :title="getQuote"
            @click="getRandomQuote"
            class="bg-bluePurple hover:bg-gray-900 text-white font-medium rounded font-montserrat ease-out duration-300 md:w-[20%] w-[50%] mb-[1rem] lg:mb-0 mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { disneyQuotes } from "@/pages/constants/quotesConstant";
import CustomButton from "@/components/CustomButton.vue";

export default {
  data() {
    return {
      currentQuote:
        disneyQuotes[Math.floor(Math.random() * disneyQuotes.length)],
      getQuote: "Get Quote",
    };
  },

  components: {
    CustomButton,
  },
  methods: {
    goToStartPage() {
      this.$router.push("/");
    },
    getRandomQuote() {
      this.currentQuote =
        disneyQuotes[Math.floor(Math.random() * disneyQuotes.length)];
    },
  },
};
</script>

<style></style>
