<template lang="">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang=""></style>
