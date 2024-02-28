<template lang="">
    <div class="" :style="{ backgroundImage: 'url(' + require('@/images/dashboardBackground.webp') + ')', backgroundSize: 'cover' }">
    <div class="w-full h-full bg-gray-200 text-center text-white" >
      <div class="h-[50px] bg-gray-900">
        <div class="h-full px-[20px] flex items-center justify-between">
          <h3 class="font-bold font-montserrat lg:text-[1.5rem]">Wonderland Dashboard</h3>
          <font-awesome-icon icon="fa-solid fa-house-user" class="cursor-pointer" @click="goToStartPage"/>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },  
  methods: {
    goToStartPage() {
      this.$router.push('/');
    }
  },
};
</script>
<style lang="">
    
</style>