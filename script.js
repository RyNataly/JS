 title = "Мой первый проект"
 screens = "Простые, Сложные, Интерактивные"
 screenPrice = 25
 rollback = Math.random() * 100
 fullPrice = 2546783000
 adaptive = true

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки из переменной screens
console.log("Длина строки " + screens.length);

// Вывести в консоль “Стоимость верстки экранов  (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log((screens.toLowerCase()).split(", "));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log("Процент отката посреднику за работу " + Math.round(fullPrice * (rollback/100)) + "%");