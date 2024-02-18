<script setup lang="ts">
import IngredientForm from '@/components/IngredientForm.vue'
import OpenAI from '@/components/OpenAI.vue'
import TitleCard from '@/components/TitleCard.vue'
</script>

<template>
  <main class="flex flex-col min-h-screen justify-center items-center">
    <div class="background"></div>
    <div class="bg-white flex flex-col justify-center items-center p-10 rounded-lg z-10">
      <TitleCard />
      <IngredientForm />
      <OpenAI />
    </div>
  </main>
</template>
