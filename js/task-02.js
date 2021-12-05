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

// ================вариант 2 ===================================
// 1. ищем уникальный элемент ingredients внутри document

// const listRef = document.querySelector('#ingredients');

// 2.перебираем массив элементов ingredients с помощью map
// в памяти ДОМ создаем элемент li
// присваиваем переменной item текстовое значение, равное ingredient
// и добавляем класс item

// const items = ingredients.map((ingredient) => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');

//   return item;
// });

// 3. с помощью append вставляем распыленный массив в документ

// listRef.append(...items);