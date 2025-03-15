<script setup> // script tag was 👇 CHAT GPT 🤖 
      import { ref } from 'vue';
      import Axios from '@/api/axios';
      import { useRouter } from 'vue-router';

      const router = useRouter()

        const dataForm = ref({
          username: "",
          email: "",
          password: ""
        })

        const errorMsg = ref("") // error message

        const handleRegister = async (req , res) => {
          try{
            await Axios.post("/register" , dataForm.value);
            window.location.reload(); // ✅ Refresh to apply changes
              router.push("/profile") // Redirect to login page
           
          }
          catch(e){
                errorMsg.value =  e.response.data.message;
                console.log(e)
                
          }
        }
</script>

<template>
   <h1 class="mt-7 text-center font-bold font-mono text-yellow-600 text-6xl">Register</h1>
      
     <!-- 👇 CHAT GPT -->   
      <form @submit.prevent="handleRegister"  class=" bg-gradient-to-r from-blue-300 to-red-300 border-2  hover:border-gray-400 mx-auto mt-6 mb-12  flex w-96 flex-col max-w-fit rounded-xl  bg-clip-border text-gray-300 shadow-md">
        <!-- 👇 CHAT GPT -->
        <p v-if="errorMsg" class=" text-rose-800 mx-auto my-5 font-bold px-3">{{ errorMsg }}</p>

          <div class=" relative flex flex-col  py-3 px-6 w-full  min-w-[200px]">
            <label for="username" class=" text-[14px] text-gray-700 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500" >Username</label>
            <input v-model="dataForm.username" type="text" id="username" class="peer border-2 rounded-lg  bg-transparent px-3 py-1 font-sans text-sm font-normal  text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 focus:border-2 focus:bg-slate-200   focus:border-green-500" required>
           
            
          </div>

          <div class=" relative flex flex-col  py-3 px-6 w-full  min-w-[200px]">
            <label for="email" class=" text-[14px] text-gray-700 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500" >Email</label>
            <input v-model="dataForm.email" type="email" id="email" class="peer border-2 rounded-lg  bg-transparent px-3 py-1 font-sans text-sm font-normal  text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 focus:border-2 focus:bg-slate-200   focus:border-green-500" required>
           
            
          </div>


          <div class=" relative flex flex-col  py-3 px-6 w-full  min-w-[200px]">
            <label for="password" class=" text-[14px] text-gray-700 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500" >Password</label>
            <input v-model="dataForm.password" type="password" id="password" class="peer border-2 rounded-lg  bg-transparent px-3 py-1 font-sans text-sm font-normal  text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 focus:border-2 focus:bg-slate-200   focus:border-green-500" required>
           
            
          </div>
          
          <div class="p-6 ">
    <button
      class=" w-full  rounded-lg bg-gradient-to-tr from-red-600 to-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 "
      type="submit"
      
    >
      Sign In
    </button>
    <p class="mt-6 flex justify-center font-sans text-sm font-light leading-normal text text-gray-600 ">
      you have an account?
      <a
        href="/login"
        class="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500  hover:text-cyan-300 antialiased"
      >
        Log in
      </a>
    </p>
          </div>
      </form>
      
    
</template>