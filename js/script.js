'use strict';

let title = document.getElementsByTagName('h1').title
let buttonCalculate = document.getElementsByClassName('handler_btn')[0]
let buttonCancel = document.getElementsByClassName('handler_btn')[1]
let buttonPlus = document.querySelector('.screen-btn')

let otherItemsPercent = document.querySelectorAll('.other-items.percent')
let otherItemsNumber = document.querySelectorAll('.other-items.number')

let inputRange = document.querySelector('.rollback input[type = range]')  
let inputRangeValue = document.querySelector('.rollback  span.range-value')  

let total = document.getElementsByClassName('total-input')[0] 
let totalCount = document.getElementsByClassName('total-input')[1]
let totalCountOther = document.getElementsByClassName('total-input')[2]
let fullTotalCount = document.getElementsByClassName('total-input')[3]
let totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')


const appData = {
    title: '', 
    screens: [],
    count: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePercentPrice: 0,
    servicePricesPercent: 0, 
    servicePricesNumber: 0, 
    fullPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function(){
        appData.addTitle()
        buttonCalculate.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
        inputRange.addEventListener('change', appData.viewRange)
    },
    addTitle: function(){
        document.title = title.textContent
    },
    start: function(){
          if (!appData.CheckError()) {
            appData.addScreens()
            appData.addServices()
            appData.addPrices();
            appData.showResult()
         }else{
           alert ("Вы не выбрали тип экрана или не указали их количество!")
         }
    },
    CheckError: function() {
        screens = document.querySelectorAll('.screen')
        console.log(appData.screens)
        // for (let screen of appData.screens) {  ПОЧЕМУ при таком цмкле была ошибка, что screen.querySelector - это не функция, а с ForEach работает? Вроде суть циклов одна...
        screens.forEach( function (screen) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            if (select.value === '' || input.value === '')  {
              appData.isError = true
            } else {
              appData.isError = false
            }
        } ) 
        return appData.isError
    },
    showResult: function() {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice 
        totalCount.value = appData.count;
    },
    addScreens: function(){
        screens = document.querySelectorAll('.screen') //переопределили, чтобы не потерять все значения, обновляем список после каждого добавленного

        screens.forEach(function(screen, index){
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            
            appData.screens.push({
              id: index, 
              name: selectName, 
              price: +select.value * +input.value
            });
            appData.count += +input.value
        })
    },
    addServices: function(){
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked){
                appData.servicesPercent[label.textContent] = +input.value
            } 
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked){
                appData.servicesNumber[label.textContent] = +input.value
            } 
        })

        console.log(appData)
    },
    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },

  // Расчет услуг и экранов
   addPrices: function () { 
        for (let screen of appData.screens) {
          appData.screenPrice += +screen.price
          // appData.count ++
        }
        // сумма всех дополнительных услуг
        for (let key in appData.servicesNumber) {
          appData.servicePricesNumber += appData.servicesNumber[key] 
        } 
        for (let key in appData.servicesPercent) {
          appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100)
        } 

        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = appData.fullPrice - Math.round(appData.fullPrice * (+inputRange.value/100));
   },

    // итоговая стоимость за вычетом процента отката
    // getServicePercentPrices: function () { 
    //   appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100));  
    // },

    viewRange: function () {
        // console.log(inputRangeValue)
        inputRangeValue.textContent = inputRange.value + '%'
        if (fullTotalCount.value != '') {
            appData.servicePercentPrice = appData.fullPrice - Math.round(appData.fullPrice * (+inputRange.value/100));
            appData.showResult()
            console.log(appData.fullPrice + "! " + Math.round(appData.fullPrice * (+inputRange.value/100)))
        }
    },

    logger: function(){
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
      console.log(appData.services);

    }
} 

appData.init();

