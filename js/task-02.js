const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

ingredients.forEach(ingredient => {
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.classList.add('item');
  ingredientsListEl.textContent = ingredient;
  ingredientsEl.append(ingredientsListEl);
  console.log(ingredientsListEl);
});