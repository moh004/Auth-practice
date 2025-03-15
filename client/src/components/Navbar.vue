<script setup>
    import { ref , onMounted } from 'vue';
    import { RouterLink } from 'vue-router';
    import logo from '@/assets/images/logo.png'
    import Axios from '@/api/axios';

   
  const isConnected = ref(false);
  
const checkAuth = async () => {
      try {
          const result = await Axios.get("/check-auth")
          isConnected.value = result.data.isAuthenticated
      }
      catch(e) {
        console.log(e)
      }
}

const logout = async () => {
        try {
              await Axios.delete("/logout")
              window.location.reload(); // ✅ Refresh to apply changes
        }
        catch (e) {
          console.log(e)
        }
    }

onMounted (() => {
  checkAuth()
})

</script>

<template>
    <nav class="bg-gradient-to-r from-blue-900 via-blue-300  to-blue-900  border-b border-blue-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink  class="flex flex-shrink-0 items-center mr-4" to="/">
                  
              <img class="h-10 w-auto  rounded-full"  v-bind:src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >MOH AUTH</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <!-- Home -->
                <RouterLink
                  to="/"
                  class="text-white bg-blue-900 hover:bg-gray-900  rounded-md px-3 py-2"
                  >Home</RouterLink
                >
                <!-- Register -->
                <RouterLink v-if="!isConnected"
                  to="/register"
                  class="text-white hover:bg-green-500  rounded-md px-3 py-2"
                  >Register</RouterLink
                >
                <!-- login -->
                <RouterLink v-if="!isConnected"
                  to="/login"
                  class="text-white hover:bg-green-500  rounded-md px-3 py-2"
                  >LogIn</RouterLink
                >
              <!-- profile -->
              <RouterLink v-if="isConnected"
                  to="/profile"
                  class="text-white hover:bg-gray-900  rounded-md px-3 py-2"
                  >profile</RouterLink
                >
              
              <!-- logout -->
              <button v-if="isConnected"
                  @click="logout"
                  class="text-white hover:bg-red-700  rounded-md px-3 py-2"
                  >Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>