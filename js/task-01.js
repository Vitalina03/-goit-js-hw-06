const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories:${itemEl.length} `);

itemEl.forEach(el => {
console.log(
    `Category: ${el.firstElementChild.textContent},
     Elements: ${el.lastElementChild.children.length}`,
  );
});






 

