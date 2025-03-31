let title = 'glo academy';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10000;
let rollback = 5;
let fullPrice = 95000;
let adaptive = true;

console.log('typeof title: ' + typeof title);
console.log('typeof fullPrice: ' + typeof fullPrice);
console.log('typeof adaptive: ' + typeof adaptive);

console.log('length of screens: ' + screens.length)

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей')
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей')


console.log(screens.toLocaleLowerCase().split(', '))
console.log(fullPrice * (rollback / 100))

title = prompt('Как называется ваш проект?')
screens = prompt('Какие типы экранов нужно разработать?')
screenPrice = +prompt('Сколько будет стоить данная работа?', '10000')
adaptive = confirm('Нужен ли адаптив на сайте?')

let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?', '5000')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = prompt('Сколько это будет стоить?', '5000')

fullPrice = screenPrice + parseInt(servicePrice1) + parseInt(servicePrice2);

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
console.log(servicePercentPrice)

switch (true) {
	case fullPrice >= 3000:
		console.log('Даем скидку в 10%')
		break

	case fullPrice >= 15000 && fullPrice <= 30000:
		console.log('Даем скидку в 5%')
		break

	case fullPrice <= 15000 && fullPrice >= 0:
		console.log('Скидка не предусмотрена')
		break

	case fullPrice < 0:
		console.log('Что то пошло не так')
		break
}
