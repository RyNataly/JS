 'use strict';

 let title = prompt("Как называется ваш проект?");
 let screens = prompt("Какие типы экранов нужно разработать?"); //"Простые, Сложные, Интерактивные"
 let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"); 
 let adaptive = confirm("Нужен ли адаптив на сайте?");// == "Да" ? true : false; 
 console.log(adaptive);
 let service1 = prompt("Какой дополнительный тип услуги нужен?");
 let servicePrice1 = +prompt("Сколько это будет стоить?", "10000");
 let service2 = prompt("Какой дополнительный тип услуги нужен?");
 let servicePrice2 = +prompt("Сколько это будет стоить?", "10000");
 let fullPrice = screenPrice + servicePrice1 + servicePrice2;
 let rollback = Math.random() * 100;
 let percent = Math.round(fullPrice * (rollback/100));

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log("Длина строки " + screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");

console.log((screens.toLowerCase()).split(", "));

console.log("Процент отката посреднику за работу " + percent);

let servicePercentPrice = fullPrice - percent;
console.log("Итоговая стоимость за вычетом отката посреднику " + servicePercentPrice);

if (fullPrice >= 30000) console.log("Даем скидку в 10%");
if (fullPrice >= 15000 && fullPrice < 30000) console.log("Даем скидку в 5%");
if (fullPrice > 0 && fullPrice < 15000) console.log("Скидка не предусмотрена");
if (fullPrice <= 0) console.log("Что то пошло не так");

//Другой вариант
switch (true) {
  case fullPrice >= 30000: 
    console.log("Даем скидку в 10%");
    break
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break
  case fullPrice > 0 && fullPrice < 15000:
    console.log("Скидка не предусмотрена");
    break
  case fullPrice <= 0:
    console.log("Что то пошло не так");
}

