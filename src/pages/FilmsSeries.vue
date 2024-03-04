<template>
  <div class="min-h-screen bg-cover bg-gray-200 text-center " :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')' }">
    <div class="w-full bg-gray-900 text-white">
      <div class="h-[50px] px-4 flex items-center justify-between">
        <h3 class="font-bold font-montserrat lg:text-[1.5rem]">Wonderland Dashboard</h3>
        <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
      </div>
    </div>

    <div class="mt-8 mx-auto max-w-md">
      <input v-model="movieTitle" type="text" class="border border-gray-300 rounded px-[1rem] py-[0.5rem] w-full" placeholder="Enter movie title">
      <button @click="searchMovie" class="bg-bluePurple hover:bg-blue-400 text-white font-bold py-[0.5rem] px-[1rem] rounded mt-[0.5rem]">Search Movie</button>
    </div>

    <!-- Display movie information -->
    <div v-if="movieInfo" class="mt-[2rem] mx-auto w-[30rem] bg-white">
      <h4 class="font-bold text-[1.25rem]">{{ movieInfo.Title }}</h4>
      <p>{{ movieInfo.Plot }}</p>
      <p><strong>Director:</strong> {{ movieInfo.Director }}</p>
      <p><strong>Actors:</strong> {{ movieInfo.Actors }}</p>
      <p><strong>Year:</strong> {{ movieInfo.Year }}</p>
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
