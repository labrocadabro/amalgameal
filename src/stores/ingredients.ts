import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomIngredients } from '@/utils/ingredients'

export const useIngredientsStore = defineStore('ingredients', () => {
  const ingredients = ref<string[]>([])
  function updateIngredients() {
    ingredients.value = randomIngredients()
  }

  return { ingredients, updateIngredients }
})
