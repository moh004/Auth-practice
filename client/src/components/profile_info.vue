<script setup>
      import { ref, onMounted } from 'vue';
      import Axios from '@/api/axios';
      import { useRouter } from 'vue-router';

      const Router = useRouter()

      //  USE COOKIE FOR GETTING DATA  OR  FOR PERMISION 

    let userInfo = ref("")

        
  const checkAuth = async () => {
      try{
        const result = await Axios.get("/check-auth")
        if(result.data.isAuthenticated) {
          userInfo.value = result.data.user 
        }

        else{
          Router.push("/login")
        }
      }
      catch(e){
        console.log(e)
      }    
  }       

        // // i forgot onMounted 👇 and CHAT GPT told me to fix it. so, is it my code or not 🤖 
onMounted(() => {
    checkAuth()
    })

 
</script>

<template>
        <section class="bg-yellow-500 py-20 mb-4">
      <div class=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div class="text-center">
          <p class="text-2xl font-black text-red-900 sm:text-5xl md:text-6xl">
            {{ userInfo.username }}
          </p>
          <p class="my-4 font-bold text-2xl text-green-900 sm:text-5xl md:text-6xl">
            {{ userInfo.email }}
          </p>
          <p class="my-4 font-bold text-4xl text-sky-500" >
            {{ userInfo.score }}
          </p>
        </div>
      </div>
    </section>
</template>