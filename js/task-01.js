const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}.
  Elements: ${item.querySelectorAll('li').length}`);

});
// ===============вариант 2 =============================
// 1.ищем коллекцию элементов внутри document  с одинаковым селектором .item

// const itemEl = document.querySelectorAll('.item');
// // console.log(itemEl);

// // 2.выводим количество элементов массива

// console.log(`Number of categories: ${itemEl.length}`);

// // 3. перебираем элементы массива itemEl с помощью forEach и ищем один уникальный
// //  элемент h2 и все элементы li в массиве 

// itemEl.forEach(element => {
//     const titleOfCategoryRef = element.querySelector('h2');
//     const numberOfElementsRef = element.querySelectorAll('li');
//     // console.log (titleOfCategoryRef);
//     // console.log (numberOfElementsRef);

//     // 4.выводим текстовое содержимое textContent переменной titleOfCategoryRef 
//     // кол-во элементов массива numberOfElementsRef
    
//     console.log(`Category: ${titleOfCategoryRef.textContent}.
//     Elements: ${numberOfElementsRef.length}`);
    
// });

// ==========================вариант 3 =======================================

// сonst list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');
// console.log(`В списке ${items.length} категории:`);
// items.forEach(node => {
// const h2 = node.querySelector('h2');
// const nodeItems = node.querySelectorAll('li');
// console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
// });





