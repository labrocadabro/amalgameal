<script setup lang="ts">
import type { Recipe } from '@/types/recipe'

const { recipe } = defineProps<{
  recipe: Recipe
  image: string | null
}>()
</script>

<template>
  <div v-if="recipe.success" class="flex flex-col">
    <p class="text-center">
      <button class="btn w-30" @click="$emit('resetRecipe')">New Recipe</button>
    </p>
    <div class="flex justify-center p-16">
      <div class="bg-base-100">
        <figure v-if="image">
          <img :src="image" class="w-full rounded-lg aspect-video object-cover" />
        </figure>
        <h1 class="text-5xl my-6">
          {{ recipe.title }}
        </h1>
        <h2>Description</h2>
        <p>
          {{ recipe.description }}
        </p>
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
            {{ ingredient }}
          </li>
        </ul>
        <h2>Directions</h2>
        <ol class="list-decimal ml-4">
          <li v-for="(instruction, i) in recipe.instructions" :key="i" class="pl-2">
            {{ instruction }}
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div v-else>
    {{ recipe.message }}
  </div>
</template>

<style scoped>
h2 {
  @apply mt-4 mb-2;
}
</style>
