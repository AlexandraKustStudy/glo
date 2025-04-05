let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа?', '10000')
let adaptive = confirm('Нужен ли адаптив на сайте?')

let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?', '5000')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = prompt('Сколько это будет стоить?', '5000')

let fullPrice
let rollback = 5
let servicePercentPrice
let allServicePrices


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
	return servicePrice1 + servicePrice2
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


showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

console.log(screens.toLocaleLowerCase().split(', '))
console.log(getRollbackMessage(fullPrice))
console.log(servicePercentPrice)