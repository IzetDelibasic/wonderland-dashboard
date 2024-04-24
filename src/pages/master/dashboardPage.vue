<template>
  <div class="min-w-screen min-h-screen flex">
    <!-- Sidebar -->
    <div
      class="w-[400px] h-full bg-gray-200 text-center text-white"
      v-show="showSide"
    >
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold font-montserrat lg:text-[1.2rem] cursor-default">
            Wonderland Dashboard
          </h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 font-montserrat">
        <!-- Dynamically generate sidebar items -->
        <div
          v-for="category in sidebarConstant"
          :key="category.title"
          class="py-[20px] hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-start cursor-pointer"
          @click="navigateTo(category.items[0].href)"
        >
          <font-awesome-icon
            :icon="category.items[0].icon"
            class="px-2 sm:ml-[1rem] mr-2 ml-2"
          />
          <div class="text-[10.5px] sm:text-[1rem]">{{ category.title }}</div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div
        class="h-[50px] bg-gray-200 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
      >
        <font-awesome-icon
          icon="bars"
          @click="toggleSideBar"
          class="mr-[20px]"
        />
        <div class="relative">
          <input
            type="text"
            class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
            placeholder="What you thinking now?"
            value=""
          />
        </div>
      </div>
      <div
        class="h-[calc(100vh-50px)] flex justify-center items-center"
        :style="{
          backgroundImage:
            'url(' + require('@/images/dashboardBackground.webp') + ')',
          backgroundSize: 'cover',
        }"
      >
        <div
          class="flex flex-col justify-center text-center font-medium text-3xl bg-white hover:bg-bluePurple bg-opacity-80 hover:bg-opacity-30 p-4 lg:py-10 lg:px-[10rem] ml-4 mr-4 lg:m-0 rounded-[25px] ease-in-out duration-300"
        >
          <div class="flex flex-col justify-center items-center">
            <div
              class="w-[12rem] h-[15rem] border-none mb-[1rem]"
              :style="{
                backgroundImage:
                  'url(' + require('@/images/disneyGoofy.webp') + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="pb-[1rem] font-montserrat font-medium">
              Welcome to Disney World!
            </div>
          </div>
          <CustomButton
            @click="goToHome"
            :title="buttonText"
            className="bg-black hover:bg-bluePurple text-white font-medium rounded ease-out duration-300 w-[95%] sm:w-[60%] text-[1rem] font-montserrat mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sidebarConstant } from "../constants/sidebarConstants";
import CustomButton from "@/components/CustomButton.vue";

export default {
  data() {
    return {
      buttonText: "Dive into Disney World",
      showSide: true,
      sidebarConstant: sidebarConstant,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    navigateTo(href) {
      this.$router.push(href);
    },
    goToHome() {
      this.$router.push("/home");
    },
  },
  components: { CustomButton },
};
</script>

<style></style>
