<template lang="">
    <div class="w-screen h-screen flex">
        <!-- - Sidebar - -->
        <div class="w-[400px] h-full bg-gray-200 text-center text-white" v-show="showSide">
            <div class="h-[50px] bg-gray-900 flex justify-start items-center">
                <div class="px-[20px]">
                    <h3 class="font-bold text-[1.5rem]">Disney Dashboard</h3>
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
            <div class="h-[50px] bg-gray-200 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
                <font-awesome-icon icon="bars" @click="toggleSideBar" class="mr-[20px]"/>
                <div class="relative">
                    <input type="text" class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent" placeholder="What you thinking now?" value="" />
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-white">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showSide: true,
        }
    },
    methods: {
        toggleSideBar() {
            this.showSide = !this.showSide;
        }
    }
}
</script>
<style lang="">
    
</style>