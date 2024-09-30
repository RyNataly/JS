'use strict';

const appData = {
    title: '', 
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePercentPrice: 0,
    allServicePrices: 0, 
    fullPrice: 0,
    services: {},

    start: function(){
        appData.asking();
        appData.addPrices();
        appData.getFullPrice ();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },

    isNumber: function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function() {
        do {
          appData.title = prompt("Как называется ваш проект?"); //, "Калькулятор верстки"
        } while (appData.isNumber(appData.title))

        for (let i = 0; i < 2; i++){
          let price = 0;
          let name
          do {
            name = prompt("Какие типы экранов нужно разработать?");
          } while (appData.isNumber(name))
          
          do { 
              price = prompt("Сколько будет стоить данная работа?"); 
          }
          while (!appData.isNumber(price))
          
          appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++){
          let name;
          let price = 0;
          do {
            name = prompt("Какой дополнительный тип услуги нужен?");
          } while (appData.isNumber(name))

          do { 
            price = prompt("Сколько это будет стоить?"); 
          }
          while (!appData.isNumber(price))
          
          // for (let key of appData.services) {
          //   if (name === key){
          //     console.log(key)
          //     appData.services[name + "1"] = +price
          //   } else
          //     appData.services[name] = +price
          // }
           appData.services[name] = +price
        }

      appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

  // Расчет услуг и экранов
   addPrices: function () { 
        for (let screen of appData.screens) {
          appData.screenPrice += +screen.price
        }
        // сумма всех дополнительных услуг
        for (let key in appData.services) {
          appData.allServicePrices += appData.services[key] 
        } 
   },

// расчет скидки    
    getRollbackMessage: function () { 
      if (appData.fullPrice >= 30000) 
          return "Даем скидку в 10%"
      else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000)
          return "Даем скидку в 5%"
      else if (appData.fullPrice > 0 && appData.fullPrice < 15000)
          return "Скидка не предусмотрена"
      if (appData.fullPrice <= 0) 
          return "Что то пошло не так"
    },

    // сумма стоимости верстки и стоимости дополнительных услуг
    getFullPrice: function () { 
      appData.fullPrice = appData.screenPrice + appData.allServicePrices;   
    },

    getTitle: function () { 
      //appData.title = appData.title.trim();
      appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },

    // итоговая стоимость за вычетом процента отката
    getServicePercentPrices: function () { 
      appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100));  
    },

    logger: function(){
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
      console.log(appData.services);

      // console.log(appData.getRollbackMessage());
      // console.log(appData.allServicePrices);
      // console.log(appData.title);

      // for (const key in appData) {
      //     console.log(appData[key]);; 
      // }
    }
} 

appData.start();

