'use strict';

const AppData = {
    title: '', 
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePercentPrice: 0,
    allServicePrices: 0, 
    fullPrice: 0,
    service1: '',
    service2: '',

    start: function(){
        AppData.asking();
        AppData.allServicePrices = AppData.getAllServicePrices(); 
        AppData.fullPrice = AppData.getFullPrice ();
        AppData.servicePercentPrice = AppData.getServicePercentPrices();

        AppData.logger();
    },

    isNumber: function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function() {
      AppData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
      AppData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"); //"Простые, Сложные, Интерактивные"

      do { 
          AppData.screenPrice = prompt("Сколько будет стоить данная работа?"); 
      }
      while (!AppData.isNumber(AppData.screenPrice))
      
      AppData.screenPrice = parseFloat(AppData.screenPrice);
      AppData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

// расчет скидки    
    getRollbackMessage: function () { 
      if (AppData.fullPrice >= 30000) 
          return "Даем скидку в 10%"
      else if (AppData.fullPrice >= 15000 && AppData.fullPrice < 30000)
          return "Даем скидку в 5%"
      else if (AppData.fullPrice > 0 && AppData.fullPrice < 15000)
          return "Скидка не предусмотрена"
      if (AppData.fullPrice <= 0) 
          return "Что то пошло не так"
    },

    // сумма всех дополнительных услуг
    getAllServicePrices: function () { 
        let sum = 0;
        let ServicePrice;

        for (let i = 0; i < 2; i++){

          if (i === 0){
              AppData.service1 = prompt("Какой дополнительный тип услуги нужен?");
          } else if (i === 1) {
              AppData.service2 = prompt("Какой дополнительный тип услуги нужен?");
          }

          do { 
            ServicePrice = prompt("Сколько это будет стоить?"); 
          }
          while (!AppData.isNumber(ServicePrice))
          sum += parseFloat(ServicePrice);
        }

        return sum;    
    },

    // сумма стоимости верстки и стоимости дополнительных услуг
    getFullPrice: function () { 
      return AppData.screenPrice + AppData.allServicePrices;   
    },

    getTitle: function () { 
      AppData.title = AppData.title.trim();
      return AppData.title[0].toUpperCase() + AppData.title.slice(1).toLowerCase();
    },

    // итоговая стоимость за вычетом процента отката
    getServicePercentPrices: function () { 
      return AppData.fullPrice - (AppData.fullPrice * (AppData.rollback/100));  
    },

    logger: function(){
      // console.log(AppData.fullPrice);
      // console.log(AppData.servicePercentPrice);
      // console.log(AppData.getRollbackMessage());
      // console.log(AppData.allServicePrices);
      // console.log(AppData.title);

      for (const key in AppData) {
          console.log(AppData[key]);; 
      }
    }
} 

AppData.start();

