<template>
  <div
    class="min-h-screen bg-cover bg-gray-200 text-center"
    :style="{
      backgroundImage: 'url(' + require('@/images/filmsWallpaper.webp') + ')',
    }"
  >
    <div class="w-full bg-gray-900 text-white">
      <div class="h-[50px] px-4 flex items-center justify-between">
        <h3 class="font-bold font-montserrat lg:text-[1.5rem] cursor-default">
          Wonderland Dashboard
        </h3>
        <font-awesome-icon
          icon="fa-solid fa-house-user"
          class="cursor-pointer"
          @click="goToStartPage"
        />
      </div>
    </div>

    <div class="mt-8 mx-auto w-[80%] lg:w-[30rem]">
      <input
        v-model="movieTitle"
        type="text"
        class="border border-gray-300 rounded px-[1rem] py-[0.5rem] mb-[1rem] w-full"
        placeholder="Enter movie title"
      />
      <CustomButton
        :title="searchTitle"
        @click="searchMovie"
        class="bg-gray-900 hover:bg-bluePurple border-[1px] border-gray-700 hover:border-bluePurple text-white font-medium rounded font-montserrat ease-out duration-300 lg:w-[45%] mb-[1rem] lg:mb-0 mx-auto"
      />
    </div>

    <!-- Display movie information -->
    <div
      v-if="movieInfo"
      class="mt-[5rem] mx-auto lg:w-[60%] w-[80%] bg-white bg-opacity-85 font-montserrat p-[3rem] rounded-[1rem] rounded-br-none"
    >
      <h4 class="font-bold text-[1.25rem]">{{ movieInfo.Title }}</h4>
      <p>{{ movieInfo.Plot }}</p>
      <div
        class="lg:flex mx-auto lg:w-[90%] xl:w-[80%] lg:justify-center justify-between hidden"
      >
        <div
          class="flex flex-col font-montserrat font-bold text-start mr-[0.2rem]"
        >
          <p>Director:</p>
          <p>Actors:</p>
          <p>Year:</p>
          <p>Rating:</p>
        </div>
        <div class="flex flex-col text-start font-montserrat">
          <p>{{ movieInfo.Director }}</p>
          <p>{{ movieInfo.Actors }}</p>
          <p>{{ movieInfo.Year }}</p>
          <p>{{ movieInfo.imdbRating }}</p>
        </div>
      </div>
      <div class="flex flex-col font-montserrat text-center lg:hidden">
        <p><strong>Director: </strong>{{ movieInfo.Director }}</p>
        <p><strong>Actors: </strong>{{ movieInfo.Actors }}</p>
        <p><strong>Year: </strong>{{ movieInfo.Year }}</p>
        <p><strong>Rating: </strong>{{ movieInfo.imdbRating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  data() {
    return {
      movieTitle: "",
      movieInfo: null,
      searchTitle: "Search your movie",
    };
  },
  components: {
    CustomButton,
  },
  methods: {
    goToStartPage() {
      this.$router.push("/");
    },
    async searchMovie() {
      if (this.movieTitle.trim() === "") {
        alert("Please enter a movie title.");
        return;
      }

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?t=${encodeURIComponent(
            this.movieTitle
          )}&apikey=a41f95b1`
        );
        const data = await response.json();

        if (data.Response === "False") {
          alert("Movie not found.");
          return;
        }
        this.movieInfo = data;
      } catch (error) {
        console.error("Error searching for movie:", error);
        alert("Please try again.");
      }
    },
  },
};
</script>

<style></style>
