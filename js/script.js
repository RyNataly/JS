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
        this.addTitle()
        buttonCalculate.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', this.addScreenBlock)
        inputRange.addEventListener('change', appData.viewRange)
        buttonCancel.addEventListener('click', appData.reset)
    },
    addTitle: function(){
        document.title = title.textContent
    },
    start: function(){
          if (!appData.checkError()) {
            appData.addScreens()
            appData.addServices()
            appData.addPrices();
            appData.showResult()
            appData.stop();
         }else{
           alert ("Вы не выбрали тип экрана или не указали их количество!")
         }
 
    },
    stop: function() {
        screens = document.querySelectorAll('.screen')
        //console.log(this.screens)
        screens.forEach( (screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input[type=text]');
            select.setAttribute("disabled", "");
            input.setAttribute("disabled", "");
        } ) 
        buttonCalculate.setAttribute('style', 'display: none;')
        buttonCancel.style.removeProperty('display')

    },
    checkError: function() {
        screens = document.querySelectorAll('.screen')
        console.log(this.screens)
        // for (let screen of appData.screens) {  ПОЧЕМУ при таком цмкле была ошибка, что screen.querySelector - это не функция, а с ForEach работает? Вроде суть циклов одна...
        screens.forEach( (screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            if (select.value === '' || input.value === '')  {
              this.isError = true
            } else {
              this.isError = false
            }
        } ) 
        return this.isError
    },

    showResult: function() {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice 
        totalCount.value = this.count;
    },
    addScreens: function(){
        screens = document.querySelectorAll('.screen') //переопределили, чтобы не потерять все значения, обновляем список после каждого добавленного

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            
            this.screens.push({
              id: index, 
              name: selectName, 
              price: +select.value * +input.value
            });
            this.count += +input.value
        })
    },
    addServices: function(){
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked){
                this.servicesPercent[label.textContent] = +input.value
            } 
        })
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked){
                this.servicesNumber[label.textContent] = +input.value
            } 
        })

        console.log(this)
    },
    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },

  // Расчет услуг и экранов
    addPrices: function () { 
        for (let screen of this.screens) {
          this.screenPrice += +screen.price
          // appData.count ++
        }
        // сумма всех дополнительных услуг
        for (let key in this.servicesNumber) {
          this.servicePricesNumber += this.servicesNumber[key] 
        } 
        for (let key in this.servicesPercent) {
          this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100)
        } 

        this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.servicePercentPrice = this.fullPrice - Math.round(this.fullPrice * (+inputRange.value/100));
    },

    // итоговая стоимость за вычетом процента отката
    // getServicePercentPrices: function () { 
    //   appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100));  
    // },

    viewRange: function () {
        // console.log(inputRangeValue)
        inputRangeValue.textContent = inputRange.value + '%'
        if (fullTotalCount.value != '') {
            this.servicePercentPrice = this.fullPrice - Math.round(this.fullPrice * (+inputRange.value/100));
            appData.showResult()
            console.log(this.fullPrice + "! " + Math.round(this.fullPrice * (+inputRange.value/100)))
        }
    },
    reset: function(){
        buttonCancel.setAttribute('style', 'display: none;')
        buttonCalculate.style.removeProperty('display')

        screens = document.querySelectorAll('.screen')
        screens.forEach( (screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input[type=text]');
            select.removeAttribute("disabled");
            input.removeAttribute("disabled");
            select.value = "";
            input.value = "";
        } ) 
 
        //this.screens.splice(1, 1);
        this.screens.pop();   //не понимаю, почему не хочет работать. говорит не может прочитать свойство. Ошибка типов. Но Screens это же массив 
        console.log(screens);
    },
    logger: function(){
      console.log(this.fullPrice);
      console.log(this.servicePercentPrice);
      console.log(this.screens);
      console.log(this.services);

    }
} 

appData.init();

