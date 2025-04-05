let title
let screens
let screenPrice
let adaptive

let service1
let service2
let fullPrice
let rollback = 5
let servicePercentPrice
let allServicePrices

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
	title = prompt('Как называется ваш проект?', 'Проект !')
	screens = prompt('Какие типы экранов нужно разработать?', 'Сложные, простые')

	do {
		screenPrice = prompt('Сколько будет стоить данная работа?')
	} while (!isNumber(screenPrice)) {

	}
	adaptive = confirm('Нужен ли адаптив на сайте?')
}


let showTypeOf = function (variable) {
	console.log(variable, typeof variable)
}

let getRollbackMessage = function (price) {
	switch (true) {
		case price >= 3000:
			return 'Даем скидку в 10%'
			break

		case price >= 15000 && price <= 30000:
			return 'Даем скидку в 5%'
			break

		case price <= 15000 && price >= 0:
			return 'Скидка не предусмотрена'
			break

		case price < 0:
			return 'Что то пошло не так'
			break
	}
}

let getAllServicePrices = function () {
	let sum = 0;

	for (let i = 0; i < 2; i++) {
		if (i === 0) {
			service1 = prompt('Какой дополнительный тип услуги нужен?')
		} else if (i === 1) {
			service2 = prompt('Какой дополнительный тип услуги нужен?')
		}

		let answer = prompt('Сколько это будет стоить?')

		if (!isNumber(answer))
			sum += +answer
	}

	return sum
}

function getFullPrice() {
	return screenPrice + allServicePrices
}

function getTitle() {
	return title.trim().slice(0, 1).toLocaleUpperCase() + title.trim().slice(1).toLocaleLowerCase()
}

function getServicePercentPrices() {
	return fullPrice - (fullPrice * (rollback / 100))
}

asking()

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(screens.toLocaleLowerCase().split(', '))
console.log(getRollbackMessage(fullPrice))
console.log(servicePercentPrice)