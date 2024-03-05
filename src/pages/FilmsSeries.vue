<template>
  <div class="min-h-screen bg-cover bg-gray-200 text-center " :style="{ backgroundImage: 'url(' + require('@/images/filmsWallpaper.webp') + ')' }">
    <div class="w-full bg-gray-900 text-white">
      <div class="h-[50px] px-4 flex items-center justify-between">
        <h3 class="font-bold font-montserrat lg:text-[1.5rem]">Wonderland Dashboard</h3>
        <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
      </div>
    </div>

    <div class="mt-8 mx-auto w-[80%] lg:w-[30rem]">
      <input v-model="movieTitle" type="text" class="border border-gray-300 rounded px-[1rem] py-[0.5rem] w-full" placeholder="Enter movie title">
      <button @click="searchMovie" class="bg-bluePurple hover:bg-gray-600 ease-out duration-300 text-white font-bold py-[0.5rem] px-[1rem] rounded mt-[0.5rem]">Search Movie</button>
    </div>

    <!-- Display movie information -->
    <div></div>
    <div v-if="movieInfo" class="mt-[5rem] mx-auto lg:w-[50%] bg-white bg-opacity-85 font-montserrat p-[3rem] rounded-[1rem] rounded-br-none">
      <h4 class="font-bold text-[1.25rem]">{{ movieInfo.Title }}</h4>
      <p>{{ movieInfo.Plot }}</p>
      <div class="flex mx-auto lg:w-[60%] w-[80%] justify-between">
        <div class="flex flex-col font-montserrat font-bold text-start">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: "",
      movieInfo: null 
    };
  },
  methods: {
    goToStartPage() {
      this.$router.push('/');
    },
    async searchMovie() {
      if (this.movieTitle.trim() === "") {
        alert("Please enter a movie title.");
        return;
      }

      try {
        const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(this.movieTitle)}&apikey=a41f95b1`);
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
    }
  },
};
</script>

<style>
</style>
