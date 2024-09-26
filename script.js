'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?"); //"Простые, Сложные, Интерактивные"
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"); 
let adaptive = confirm("Нужен ли адаптив на сайте?");// == "Да" ? true : false; 
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", "10000");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", "10000");
let rollback = 10;
let servicePercentPrice, allServicePrices, fullPrice;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
 }

// расчет скидки
const getRollbackMessage = function (price) { 
  if (price >= 30000) 
      return "Даем скидку в 10%"
  else if (price >= 15000 && fullPrice < 30000)
      return "Даем скидку в 5%"
  else if (price > 0 && fullPrice < 15000)
      return "Скидка не предусмотрена"
  if (price <= 0) 
      return "Что то пошло не так"
}

// сумма всех дополнительных услуг
const getAllServicePrices = function (price1, price2) { 
  return price1 + price1;  
}

// сумма стоимости верстки и стоимости дополнительных услуг
function getFullPrice (price1, price2) { 
  return price1 + price1;   
}

const getTitle = function (title) { 
  title = title.trim();
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

// итоговая стоимость за вычетом процента отката
const getServicePercentPrices = function (price, rollback) { 
  return price - Math.round(fullPrice * (rollback/100));  
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2); 
fullPrice = getFullPrice (screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log((screens.toLowerCase()).split(", "));
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая стоимость за вычетом отката посреднику " + servicePercentPrice);
