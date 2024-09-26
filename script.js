'use strict';

let title 
let screens
let screenPrice 
let adaptive 
let rollback = 10;
let servicePercentPrice, allServicePrices, fullPrice;
let service1;
let service2;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"); //"Простые, Сложные, Интерактивные"

  do { 
      screenPrice = prompt("Сколько будет стоить данная работа?"); 
  }
  while (!isNumber(screenPrice))
  
  screenPrice = parseFloat(screenPrice);
  adaptive = confirm("Нужен ли адаптив на сайте?");// == "Да" ? true : false;
}

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
const getAllServicePrices = function () { 
    let sum = 0;
    let ServicePrice;

    for (let i = 0; i < 2; i++){

      if (i === 0){
          service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
          service2 = prompt("Какой дополнительный тип услуги нужен?");
      }
      // sum += prompt("Сколько это будет стоить?", 10000);
      do { 
        ServicePrice = prompt("Сколько это будет стоить?"); 
      }
      while (!isNumber(ServicePrice))
      sum += parseFloat(ServicePrice);
    }

    return sum;    
  //return price1 + price1;  
}

// сумма стоимости верстки и стоимости дополнительных услуг
function getFullPrice (price1, price2) { 
  return price1 + price2;   
}

const getTitle = function (title) { 
  title = title.trim();
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

// итоговая стоимость за вычетом процента отката
const getServicePercentPrices = function (price, rollback) { 
  return price - (fullPrice * (rollback/100));  
}

asking();
allServicePrices = getAllServicePrices(); 
fullPrice = getFullPrice (screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log((screens.toLowerCase()).split(", "));
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая стоимость за вычетом отката посреднику " + servicePercentPrice);
