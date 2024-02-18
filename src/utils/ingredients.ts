const ingredients: string[] = [
  'alfalfa sprouts',
  'allspice',
  'almond extract',
  'almonds',
  'anchovies',
  'anchovy paste',
  'apples',
  'apricot',
  'artichoke',
  'arugula',
  'asian pear',
  'asparagus',
  'avocado',
  'bacon',
  'baking chocolate',
  'baking powder',
  'baking soda',
  'bananas',
  'barbecue sauce',
  'barley',
  'basil',
  'bay leaves',
  'bean sprouts',
  'beef',
  'beef stock',
  'black beans',
  'black eyed peas',
  'blackberries',
  'blueberries',
  'bok choi',
  'bread',
  'broccoli',
  'brown sugar',
  'brussels sprouts',
  'butter',
  'cabbage',
  'canned chiles',
  'canned tomatoes',
  'cantaloupe',
  'capers',
  'cardamom',
  'carrots',
  'cashews',
  'cauliflower',
  'caviar',
  'cayenne',
  'celery',
  'cheddar cheese',
  'cheese',
  'cherries',
  'cherry tomatoes',
  'chia seeds',
  'chicken',
  'chicken stock',
  'chickpeas',
  'chili powder',
  'chipotle',
  'chocolate chips',
  'chocolate sauce',
  'cilantro',
  'cinnamon',
  'clams',
  'cloves',
  'cocoa',
  'coconut',
  'coconut milk',
  'coffee',
  'coriander',
  'corn chips',
  'corn syrup',
  'corned beef',
  'cornstarch',
  'couscous',
  'crab',
  'cranberries',
  'cream cheese',
  'creme fraiche',
  'crushed red pepper flakes',
  'cumin',
  'currants',
  'curry leaves',
  'curry powder',
  'custard powder',
  'daikon radish',
  'dates',
  'dill',
  'dragonfruit',
  'dried basil',
  'dried bread crumbs',
  'dried parsley',
  'dry mustard',
  'duck',
  'edamame',
  'eggplant',
  'eggs',
  'endive',
  'evaporated milk',
  'fava beans',
  'fennel',
  'feta',
  'fettuccine',
  'figs',
  'fish',
  'fish sauce',
  'five spice powder',
  'flax seeds',
  'flour',
  'fondant',
  'food coloring',
  'garam masala',
  'garlic',
  'garlic powder',
  'gelatin',
  'ghee',
  'ginger',
  'golden syrup',
  'grape tomatoes',
  'grapefruit',
  'grapes',
  'gravy',
  'green onion',
  'ground beef',
  'ground chicken',
  'ground turkey',
  'guava',
  'ham',
  'hazelnuts',
  'heavy cream',
  'hoisin sauce',
  'honey',
  'honeydew',
  'horseradish',
  'hot sauce',
  'icing sugar',
  'instant pudding mix',
  'italian seasoning',
  'jalapenos',
  'jam',
  'kale',
  'ketchup',
  'kidney',
  'kidney beans',
  'kiwi',
  'kohlrabi',
  'kumquat',
  'lamb',
  'lasagna sheets',
  'leek',
  'lemongrass',
  'lemons',
  'lentils',
  'lettuce',
  'limes',
  'linguini',
  'liver',
  'lobster',
  'lychee',
  'macaroni',
  'mangos',
  'maple syrup',
  'marinara sauce',
  'marjoram',
  'marshmallows',
  'marzipan',
  'mascarpone',
  'mayonnaise',
  'milk',
  'mint',
  'mirin',
  'miso',
  'molasses',
  'moose',
  'mozzarella cheese',
  'mushrooms',
  'mustard',
  'mutton',
  'navy beans',
  'nectarines',
  'nori',
  'nougat',
  'nutmeg',
  'oil',
  'okra',
  'olives',
  'onion powder',
  'onions',
  'oranges',
  'oregano',
  'oyster sauce',
  'paprika',
  'parmesan cheese',
  'parsnips',
  'pasta',
  'pastry',
  'peaches',
  'peanut butter',
  'peanuts',
  'pears',
  'peas',
  'pecans',
  'penne',
  'pepper',
  'peppers',
  'persimmon',
  'pesto',
  'pickles',
  'pine nuts',
  'pineapple',
  'pinto beans',
  'pistachios',
  'pomegranate',
  'poppy seeds',
  'pork',
  'potatoes',
  'prunes',
  'puff pastry',
  'quail',
  'quark',
  'quince',
  'quinoa',
  'radishes',
  'raisins',
  'raspberries',
  'ravioli',
  'rhubarb',
  'rice',
  'rocket',
  'rolled oats',
  'rosemary',
  'rotini',
  'saffron',
  'sage',
  'salad dressing',
  'salmon',
  'salsa',
  'salt',
  'saltines',
  'sardines',
  'sausage',
  'scallops',
  'seasoned salt',
  'semolina',
  'sesame oil',
  'sesame seeds',
  'shallots',
  'shrimp',
  'sichaun pepper',
  'soba',
  'soda water',
  'sour cream',
  'soy sauce',
  'spaghetti',
  'spinach',
  'split peas',
  'spring roll wrappers',
  'sprouts',
  'squash',
  'sriracha',
  'star aniseed',
  'steak',
  'strawberries',
  'sugar',
  'sumac',
  'sunflower seeds',
  'sweet potatoes',
  'sweetened condensed milk',
  'swiss chard',
  'taco shells',
  'tahini',
  'tamari',
  'tamarind',
  'tangerine',
  'tapioca',
  'tarragon',
  'tempura',
  'thyme',
  'tofu',
  'tomato paste',
  'tomato sauce',
  'tomatoes',
  'tortellini',
  'tortillas',
  'trout',
  'truffle oil',
  'tuna',
  'turkey',
  'turmeric',
  'turnips',
  'udon',
  'vanilla extract',
  'venison',
  'vine leaves',
  'vinegar',
  'walnuts',
  'wasabi',
  'water chestnuts',
  'watercress',
  'watermelon',
  'white fish',
  'worcestershire sauce',
  'yams',
  'yeast',
  'yogurt',
  'zucchini'
]

export function randomIngredients() {
  const randomIngredients: string[] = []
  const numIngredients = Math.ceil(Math.random() * 5) + 3 // 4-8

  while (randomIngredients.length < numIngredients) {
    const idx = Math.floor(Math.random() * ingredients.length)
    const ingr = ingredients[idx]
    if (!randomIngredients.includes(ingr)) {
      randomIngredients.push(ingr)
    }
  }
  return randomIngredients
}
