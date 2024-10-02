'use strict'

const Books = document.querySelectorAll('.book') 
Books[0].before(Books[1])
Books[5].after(Books[2])
Books[3].before(Books[4])


const bgImage = document.body
bgImage.style.backgroundImage = "url('./image/adv.jpg')"

const Book4 = Books[4].children[0].children[0]   //Почему то через Books[4].h2  не работает, почему?
Book4.textContent = "\n            Книга 3. this и Прототипы Объектов"

const adv = document.querySelector('.adv')
adv.remove()

const Book2 = Books[0].querySelectorAll('li') 
Book2[4].before(Book2[6])
Book2[4].before(Book2[8])

const Book5 = Books[5].querySelectorAll('li') 
Book5[2].before(Book5[9])
Book5[4].after(Book5[2])

const ulBook6 = Books[2].querySelectorAll('ul')
const Book6List = Books[2].querySelectorAll('li')
const Book6 = Books[2].querySelectorAll('li')[2].cloneNode(true)
Book6.textContent = "Глава 8: За пределами ES6"
ulBook6[0].append(Book6)
// Book6List[9].before(Book6List[10])
Book6List[8].insertAdjacentElement("beforeEnd", Book6)

console.log(Book6List)
console.log(Book6)