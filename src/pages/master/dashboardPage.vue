<template lang="">
    <div class="w-screen h-screen flex">
        <!-- - Sidebar - -->
        <div class="w-[400px] h-full bg-gray-200 text-center text-white">
            <div class="h-[50px] bg-gray-900 flex justify-start items-center">
                <div class="px-[20px]">
                    <h3 class="font-bold text-[1.5rem]">Admin Dashboard</h3>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-800">
                <div class="py-[20px] hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-start mx-[2rem]">
                    <font-awesome-icon icon="fa-solid fa-house-user" class="px-[10px]"/>
                    <div>
                        Home
                    </div>
                </div>
                <div class="py-[20px] hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-start mx-[2rem]">
                    <font-awesome-icon icon="users" class="px-[10px]"/>
                    <div>
                        Profile
                    </div>
                </div>
                <div class="py-[20px] hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-start mx-[2rem]">
                    <font-awesome-icon icon="message" class="px-[10px]"/>
                    <div>
                        Messages
                    </div>
                </div>
                <div class="py-[20px] hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-start mx-[2rem]">
                    <font-awesome-icon icon="cloud-arrow-down" class="px-[10px]"/>
                    <div>
                        Download
                    </div>
                </div>
                <div class="py-[20px] hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-start mx-[2rem]">
                    <font-awesome-icon icon="sliders" class="px-[10px]"/>
                    <div>
                        Settings
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-gray-900">
                Header sidebar
            </div>
            <div class="h-[calc(100vh-50px)] bg-white"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>