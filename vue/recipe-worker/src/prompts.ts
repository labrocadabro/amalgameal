export function generateTextPrompt(ingredients: string[]) {
	return `Generate a recipe using the following ${ingredients.length} ingredients: ${ingredients.join(', ')}. You can use any additional ingredients you like, and you can change the form or type of any of the provided ingredients. For example, if given 'beef'  you can change it to 'steak'; if given 'cheese' you can specify the type of cheese. The recipe should include a title, description, full ingredients list with measurements, and instructions on how to cook the recipe.

  The response should be in JSON format. Use the keys exactly as specified in the example. Here is an example:

  {
    "success": true,
    "title": "Tangy Tangerine Chicken with Green Onion Almond Pilaf",
    "description": "This recipe combines the bright flavors of tangerines with savory chicken and nutty almond pilaf, enhanced by the freshness of green onions. It's a dish that's both comforting and refreshing, perfect for a cozy dinner at home.",
    "ingredients": [
      "4 boneless, skinless chicken breasts",
      "3 tangerines (juice and zest)",
      "1/2 cup chicken broth",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
    ],
    "instructions": [
      "Marinate the chicken: In a bowl, combine the juice and zest of 2 tangerines, minced garlic, grated ginger, soy sauce, honey, salt, and pepper. Place the chicken breasts in the marinade, making sure they are well coated. Cover and refrigerate for at least 30 minutes.",
      "Cook the chicken: Heat olive oil in a skillet over medium-high heat. Remove the chicken breasts from the marinade, shaking off any excess, and place them in the skillet. Cook for 6-7 minutes on each side or until fully cooked through. Remove from the skillet and set aside.",
      "Prepare the pilaf: In a saucepan, toast the sliced almonds over medium heat until lightly golden, then remove and set aside. In the same saucepan, add a bit of olive oil if needed, then sauté the green onions until softened."
    ]
  }

  If given any ingredients that are not food, return a JSON object politely declining the request. It should follow this example:
  {
    "success": false,
    "message": "I'm sorry, but I can't make a recipe from the ingredients provided."
  }`;
}

export function generateImagePrompt(title: string, description: string) {
	return `Return a photo-realistic image of the recipe titled ${title} with the description ${description}.`;
}
