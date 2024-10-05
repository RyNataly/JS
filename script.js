 'use strict'

const btn = document.getElementById('btn')
const e_btn = document.getElementById('e_btn')
const inputText = document.getElementById('text')
const square = document.getElementById('square')

const rangeClick = function(event) {
    document.getElementById('circle').style.height = event.target.value + "%"
    document.getElementById('circle').style.width = event.target.value + "%"
    document.getElementById('range-span').textContent = event.target.value
}

const btnClick = function() {
   if (inputText.value != '') {
      square.style.backgroundColor = inputText.value
   }else 
      alert ("Введите название цвета в строку ввода!")
}

// inputText.addEventListener('change', squareColor)
btn.onclick = btnClick
e_btn.style.display = "none";
document.getElementById('range').addEventListener('change', rangeClick)

console.dir(inputText)
console.dir(document.getElementById('circle').style)