<script setup>
   /*  import { defineProps } from "vue"; */

    defineProps({
      title:{
        type: String,
        default: ""
      },
      subTitle:{
        type: String,
        default: ""
      }
    }); 
</script>

<template>
    <section class="bg-yellow-500 py-20 mb-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div class="text-center">
          <h1 class="text-4xl font-black text-red-900 sm:text-5xl md:text-6xl">
            {{ title }}
          </h1>
          <p class="my-4 font-bold text-4xl text-green-900">
            {{ subTitle }}
          </p>
        </div>
      </div>
    </section>
</template>

