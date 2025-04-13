const wrapBook = document.querySelector('.books')
let books = wrapBook.querySelectorAll('.book')
let listOfSecondBook = books[0].querySelectorAll('li')
let listOfFifthBook = books[5].querySelectorAll('li')
let li = document.createElement('li')

wrapBook.prepend(books[1])
wrapBook.append(books[2])
books[0].after(books[4])

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

books[4].querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов'

document.querySelector('.adv').remove()

listOfSecondBook[3].after(listOfSecondBook[6])
listOfSecondBook[6].after(listOfSecondBook[8])

listOfFifthBook[1].after(listOfFifthBook[9])
listOfFifthBook[4].after(listOfFifthBook[2])
listOfFifthBook[7].after(listOfFifthBook[5])

li.textContent = 'Глава 8: За пределами ES6'
books[2].querySelectorAll('li')[8].after(li)