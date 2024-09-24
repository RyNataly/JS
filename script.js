 'use strict';

 //Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title

 let title = prompt("Как называется ваш проект?");


 //Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")

 let screens = prompt("Какие типы экранов нужно разработать?"); //"Простые, Сложные, Интерактивные"

//  Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
 let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"); 

//  Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)

let adaptive = prompt("Нужен ли адаптив на сайте?", "Да") == "Да" ? true : false; 

//Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", "10000");

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", "10000");

// Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let rollback = Math.random() * 100

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

//------------
// Вывести в консоль длину строки из переменной screens
console.log("Длина строки " + screens.length);

// Вывести в консоль “Стоимость верстки экранов  (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log((screens.toLowerCase()).split(", "));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

let percent = Math.round(fullPrice * (rollback/100));
console.log("Процент отката посреднику за работу " + percent);

// Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.

let servicePercentPrice = fullPrice - percent;
console.log("Итоговая стоимость за вычетом отката посреднику " + servicePercentPrice);
