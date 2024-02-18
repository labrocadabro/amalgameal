<script setup lang="ts">
import type { Recipe } from '@/types/recipe'

const { recipe, image } = defineProps<{
  recipe: Recipe
  image: string
}>()
</script>

<template>
  <div v-if="recipe.success">
    <!-- <button class="btn"></button> -->
    <div class="flex justify-center">
      <div class="card w-1/2 bg-base-100 shadow-xl">
        <figure class="aspect-video">
          <img :src="image" class="w-full" />
        </figure>
        <div class="card-body">
          <h1 class="text-5xl">
            {{ recipe.title }}
          </h1>
          <h2>Description</h2>
          <p>
            {{ recipe.description }}
          </p>
          <h2>Directions</h2>
          <ul>
            <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
              {{ ingredient }}
            </li>
          </ul>
          <h2>Directions</h2>
          <ol>
            <li v-for="(instruction, i) in recipe.instructions" :key="i">
              {{ instruction }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    {{ recipe.message }}
  </div>
</template>
