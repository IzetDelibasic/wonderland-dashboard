<template>
  <div>
    <h1>Disney Characters</h1>
    <div v-if="loading">Loading data.</div>
    <div v-else>
      <div v-for="character in characters" :key="character._id">
        <h2>{{ character.name }}</h2>
        <img :src="character.imageUrl" :alt="character.name" style="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      characters: [],
      loading: true
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://api.disneyapi.dev/character');
      this.characters = response.data.data.slice(0,20); 
      this.loading = false;
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }
};
</script>

<style>

</style>
