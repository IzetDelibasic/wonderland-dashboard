<template>
    <div>
      <h1>Home</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="team in teams" :key="team.id">
          <h2>{{ team.name }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        teams: [],
        loading: true
      };
    },
    async mounted() {
      try {
        const response = await axios.request({
          method: 'GET',
          url: 'https://api-basketball.p.rapidapi.com/teams',
          params: {
            league: '12',
            season: '2019-2020'
          },
          headers: {
            'X-RapidAPI-Key': '60efaf8409msh8cea9ef9d606876p1b2ea0jsnc0c8807fac58',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
          }
        });
        this.teams = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>
  
  <style>
  /* Stilizirajte prema potrebama */
  </style>
  