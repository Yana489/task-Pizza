

// 1. Створи сторінку, на якій користувач може замовити піцу за допомогою форми.
//В піцерії є різні типи піц, розміри та додаткові інгредієнти. Необхідно підрахувати загальну вартість замовлення.
// 1. Створи форму, що містить наступні поля:
// - вибір типу піци (наприклад, Маргарита, Пепероні тощо) через випадаючий список;
// - вибір розміру піци (наприклад, маленька, cередня, велика) через випадаючий список;
// - можливість обрати додаткові інгредієнти (наприклад, гриби, салямі, оливки) за допомогою чекбоксів.
// 2. Розрахуй загальну вартість замовлення з урахуванням вибраного типу піци та розміру.
// Додаткові інгредієнти можуть додавати додаткову вартість до замовлення.
// 3. Виведи результат на сторінку, показавши обрану піцу, розмір, додаткові інгредієнти та загальну вартість.
// 4. Додай кнопку “Замовити”, яка виведе повідомлення з підтвердженням замовлення разом із деталями.

let ingredients = document.querySelectorAll('[data-price]');
let selectedPizza;
let selected;
let selectedText;
let ingredientsValues;
let priceTotal = 0;

document.body.addEventListener('change', (event) => {
   let target= event.target;
   
   if (target.getAttribute('type') === "checkbox"){
      for(let i = 0; i < ingredients.length; i++){
         if (ingredients[i].checked){
            const price = target.dataset.price;
            priceTotal += +price;
         };
      };
   };

   ingredientsValues = Array.from(ingredients)
   .filter(checkbox => checkbox.checked)
   .map(checkbox => checkbox.value);
   
   selectedPizza = Array.from(pizza.options)
   .filter(option => option.selected)
   .map(option => option.text);
   
   selected = Array.from(size.options)
   .filter(option => option.selected)
   .map(option => option.value);

   selectedText = Array.from(size.options)
   .filter(option => option.selected)
   .map(option => option.text);
   
document.querySelector('.result').innerHTML ='Ви обрали піцу: ' + selectedPizza + ',<br> Розмір піци: ' + selectedText + ',<br>Додаткові інгредієнти: '+ ingredientsValues + ',<br>Загальна вартість: ' + (priceTotal + +selected) + '$'
});

document.querySelector('.sendBtn').addEventListener('click', (event) => {
   if(!document.querySelector('.result').innerHTML) {
      event.preventDefault();
   } else {
      alert('Замовлення підтвердженно! Ви обрали піцу: ' + selectedPizza + '; розмір піци: ' + selectedText + '; додаткові інгредієнти: '+ ingredientsValues + '; загальна вартість: ' + (priceTotal + +selected) + '$')
   }
});