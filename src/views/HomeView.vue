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
const ingredientsError = ref(false)

async function getRecipe() {
  try {
    if (!ingredientsStore.ingredientString) {
      ingredientsError.value = true
      return
    }
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
    console.log(e)
    if (e instanceof Error) error.value = e
  } finally {
    isFetching.value = false
  }
}

function resetRecipe() {
  ingredientsStore.ingredientString = ''
  recipe.value = null
  ingredientsError.value = false
}
function resetError() {
  ingredientsError.value = false
}
</script>

<template>
  <main class="flex flex-col min-h-screen justify-center items-center mx-auto">
    <div class="background"></div>
    <div class="gradient-overlay-1"></div>
    <div class="gradient-overlay-2"></div>

    <div
      class="bg-white flex flex-col justify-center items-center p-10 m-10 w-1/2 rounded-lg z-10 shadow-xl"
    >
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
        <RecipeCard :recipe="recipe.recipe" :image="recipe.image" @resetRecipe="resetRecipe" />
      </div>
      <div v-else>
        <IngredientForm
          @triggerFetch="getRecipe"
          :error="ingredientsError"
          @resetError="resetError"
        />
      </div>
    </div>
  </main>
</template>
