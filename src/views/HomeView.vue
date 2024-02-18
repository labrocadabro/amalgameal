<script setup lang="ts">
import IngredientForm from '@/components/IngredientForm.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import TitleCard from '@/components/TitleCard.vue'
import { ref } from 'vue'
import type { RecipeData } from '@/types/recipe'

import { useIngredientsStore } from '@/stores/ingredients'
const ingredientsStore = useIngredientsStore()

const isFetching = ref(false)
const recipe = ref<RecipeData | null>(null)
const error = ref<Error | null>(null)

async function getRecipe() {
  try {
    isFetching.value = true
    const data = await fetch('https://recipe-worker.l-abrocadabro.workers.dev', {
      method: 'POST',
      body: JSON.stringify(ingredientsStore.ingredients),
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => res.json())
    recipe.value = data
  } catch (e) {
    if (e instanceof Error) error.value = e
  } finally {
    isFetching.value = false
  }
}
</script>

<template>
  <main class="flex flex-col min-h-screen justify-center items-center w-1/2 mx-auto">
    <div class="background"></div>
    <div class="gradient-overlay-1"></div>
    <div class="gradient-overlay-2"></div>

    <div class="bg-white flex flex-col justify-center items-center p-10 rounded-lg z-10">
      <TitleCard />
      <div v-if="isFetching" class="flex justify-center mt-24">
        <!-- #4ACACD -->
        <img src="/bowl.gif" alt="Loading..." class="w-32" />
      </div>
      <div v-else-if="error">
        {{ error }}
      </div>
      <div v-else-if="recipe">
        <!-- <p>
          <IconWarning class="inline" /> WARNING: Prepare at your own risk!
          <IconWarning class="inline" />
        </p> -->
        <RecipeCard :recipe="recipe.recipe" :image="recipe.image" />
      </div>
      <div v-else>
        <IngredientForm @triggerFetch="getRecipe" />
      </div>
    </div>
  </main>
</template>
