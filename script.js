'use strict'

const books = document.querySelectorAll('.book') 
const bgImage = document.body
const book4 = books[4].children[0].children[0] 
const adv = document.querySelector('.adv')
const book2 = books[0].querySelectorAll('li') 
const book5 = books[5].querySelectorAll('li') 
const ulBook6 = books[2].querySelectorAll('ul')
const book6List = books[2].querySelectorAll('li')
const book6 = books[2].querySelectorAll('li')[2].cloneNode(true)


books[0].before(books[1])
books[5].after(books[2])
books[3].before(books[4])

bgImage.style.backgroundImage = "url('./image/adv.jpg')"

book4.textContent = "\n            Книга 3. this и Прототипы Объектов"

adv.remove()

book2[4].before(book2[6])
book2[4].before(book2[8])
book2[10].before(book2[2])
 
book5[2].before(book5[9])
book5[4].after(book5[2])
book5[7].after(book5[5])

book6.textContent = "Глава 8: За пределами ES6"
ulBook6[0].append(book6)
book6List[8].insertAdjacentElement("beforeEnd", book6)

console.log(book6List)
console.log(book6)