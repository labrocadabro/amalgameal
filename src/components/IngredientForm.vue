<script setup lang="ts">
import { useIngredientsStore } from '@/stores/ingredients'
const ingredientsStore = useIngredientsStore()
</script>

<template>
  <div class="text-center">
    <label class="form-control w-96 max-w-xs text-center">
      <input
        type="text"
        name="ingredients"
        class="input input-bordered w-full max-w-xs mb-2"
        v-model="ingredientsStore.ingredientString"
      />
      Choose your ingredients
    </label>

    <p class="text-center font-bold text-2xl py-3">OR</p>
    <button @click="ingredientsStore.updateIngredients" class="btn btn-outline">
      Get random ingredients
    </button>
    <br />
    <button class="btn mt-10" @click="$emit('triggerFetch')">Get Recipe</button>
  </div>
</template>
