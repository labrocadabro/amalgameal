<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import IconWarning from '@/components/icons/IconWarning.vue'
import type { RecipeData } from '@/types/recipe'
import { useIngredientsStore } from '@/stores/ingredients'
const ingredientsStore = useIngredientsStore()
import { ref } from 'vue'

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
  <div>
    <button class="btn mt-10" @click="getRecipe">Get Recipe</button>
    <div v-if="isFetching" class="flex justify-center mt-24">
      <!-- #4ACACD -->
      <img src="/bowl.gif" alt="Loading..." class="w-32" />
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else-if="recipe">
      <p>
        <IconWarning class="inline" /> WARNING: Prepare at your own risk!
        <IconWarning class="inline" />
      </p>
      <RecipeCard :recipe="recipe.recipe" :image="recipe.image" />
    </div>
  </div>
</template>
