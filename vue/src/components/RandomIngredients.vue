<script setup lang="ts">
import { useIngredientsStore } from '@/stores/ingredients';
const ingredientsStore = useIngredientsStore();
</script>

<template>
  <div>
    <button @click="ingredientsStore.updateIngredients" class="btn">Get Random Ingredients</button>
    <p>
      <ul class="flex gap-2">
        <li v-for="ingredient in ingredientsStore.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        </p>
  </div>
</template>
