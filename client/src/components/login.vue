<script setup>
  import Axios from '@/api/axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router  = useRouter()

  const dataForm = ref({
    email: "",
    password: ""
  })

  const errorMsg = ref("")

  const handleLogin = async (req , res) => {

    try{
      console.log(dataForm.value)
      await Axios.post("/login" , dataForm.value)
      
      router.push("/profile")
      
    }
    catch(e){
      errorMsg.value =  "Login failed";
      console.log(e)
    }
        
  }

</script>

<template>
 
    <h1 class="mt-7 text-center font-bold font-mono text-yellow-600 text-6xl">login</h1>
       
 
      <form @submit.prevent="handleLogin" class=" bg-gradient-to-r from-rose-500 to-sky-500   border-2  hover:border-gray-400 mx-auto mt-6 mb-12  flex w-96 flex-col max-w-fit rounded-xl  bg-clip-border text-gray-300 shadow-md">
         
        <p v-if="errorMsg" class=" text-rose-800 mx-auto my-5 font-bold px-3">{{ errorMsg }}</p>

          <div class=" relative flex flex-col  py-3 px-6 w-full  min-w-[200px]">
            <label for="email" class=" text-[14px] text-gray-700 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500" >Email</label>
            <input v-model="dataForm.email" type="email" id="email" class="peer border-2 rounded-lg  bg-transparent px-3 py-1 font-sans text-sm font-normal  text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 focus:border-2 focus:bg-slate-200   focus:border-green-500">
           
            
          </div>

          <div class=" relative flex flex-col  py-3 px-6 w-full  min-w-[200px]">
            <label for="password" class=" text-[14px] text-gray-700 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500" >Password</label>
            <input v-model="dataForm.password" type="password" id="password" class="peer border-2 rounded-lg  bg-transparent px-3 py-1 font-sans text-sm font-normal  text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 focus:border-2 focus:bg-slate-200   focus:border-green-500">
           
            
          </div>

          <div class="p-6 ">
    <button
      class=" w-full  rounded-lg bg-gradient-to-tr from-sky-700 to-rose-700 py-3 px-6   font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-600/40 "
      type="submit"
      
    >
      Sign In
    </button>
    <p class="mt-6 flex justify-center font-sans text-sm font-light leading-normal text text-gray-600 ">
      Don't have an account?
      <a
        href="/register"
        class="ml-1 block font-sans text-sm font-bold leading-normal text-rose-900 hover:text-rose-400  antialiased"
      >
        Register
      </a>
    </p>
          </div>

        </form>
</template>