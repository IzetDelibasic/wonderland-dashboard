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
      <div class="mt-8 px-4">
        <h4 class="text-2xl font-bold mb-4">Disney Quotes</h4>
        <div class="">
          <p class="text-lg font-semibold">{{ randomQuote.quote }}</p>
          <p class="text-gray-400">{{ randomQuote.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { disneyQuotes } from "@/pages/constants/quotesConstant";

export default {
  data() {
    return {
      disneyQuotes: disneyQuotes,
      randomQuote: {},
    };
  },
  mounted() {
    this.getRandomQuote();
  },
  methods: {
    goToStartPage() {
      this.$router.push("/");
    },
    getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * this.disneyQuotes.length);
      this.randomQuote = this.disneyQuotes[randomIndex];
    },
  },
};
</script>

<style></style>
