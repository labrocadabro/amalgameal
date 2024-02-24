import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { randomIngredients } from '@/utils/ingredients'

export const useIngredientsStore = defineStore('ingredients', () => {
  const ingredientString = ref('')
  const ingredients = computed(() => ingredientString.value.split(',').map((s) => s.trim()))
  function updateIngredients() {
    ingredientString.value = randomIngredients()
  }

  return { ingredientString, ingredients, updateIngredients }
})
