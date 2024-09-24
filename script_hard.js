 'use strict';
 
 let lang = prompt("Введите значение lang (en, ru)", "ru");


 if (lang == "en") {
   console.log("monday, tuesday, wednesday, thursday, friday, saturday, sunday");
 } else if (lang == "ru"){
   console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
 } else
    console.log("Что-то пошло не так!");

 switch (true){
  case lang == "en":
    console.log("monday, tuesday, wednesday, thursday, friday, saturday, sunday");
    break;
  case lang == "ru":
    console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
    break;
  default: 
    console.log("Что-то пошло не так!");
 }

 //C массивом не заладилось. Есть идея как сделать через ассоциативный массив, а через многомерный - не хватает знаний по выводу, подозреваю, что есть хитрый вывод. Я пока не нашла. 
 let studentsData = [['monday', 'понедельник'], ['tuesday', 'вторник']];

// перебираем элементы массива studentsData
studentsData.forEach((day) => {
        console.log(day[0]);

});

// У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
let namePerson = prompt("Введите имя");
namePerson == "Артем" ? console.log("директор") : namePerson == "Александр" ? console.log("преподаватель") : console.log("студент");
