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
      <div
        class="mt-8 px-4 flex flex-col justify-center items-center lg:pt-[10rem] font-montserrat"
      >
        <h4 class="text-2xl font-bold mb-4">Disney Quotes</h4>
        <div
          class="bg-gray-100 bg-opacity-90 w-[70%] lg:w-[55%] h-[10rem] flex flex-col justify-center items-center rounded-[10px]"
        >
          <p class="text-lg font-semibold text-black">
            {{ randomQuote.quote }}
          </p>
          <p class="text-black">{{ randomQuote.author }}</p>
        </div>
        <CustomButton
          :title="searchQuote"
          @click="getRandomQuote"
          class="bg-bluePurple hover:bg-gray-900 text-white font-medium rounded font-montserrat ease-out duration-300 lg:w-[15%] p-10 mt-10 lg:mb-0 mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import { disneyQuotes } from "@/pages/constants/quotesConstant";

export default {
  data() {
    return {
      disneyQuotes: disneyQuotes,
      randomQuote: {},
      searchQuote: "Search Quote",
    };
  },
  mounted() {
    this.getRandomQuote();
  },
  components: {
    CustomButton,
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
