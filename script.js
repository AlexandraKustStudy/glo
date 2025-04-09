

const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: false,
	service1: '',
	service2: '',
	fullPrice: 0,
	rollback: 5,
	servicePercentPrice: 0,
	allServicePrices: 0,
	asking: function () {
		appData.title = prompt('Как называется ваш проект?', 'Проект !')
		appData.screens = prompt('Какие типы экранов нужно разработать?', 'Сложные, простые')

		do {
			appData.screenPrice = prompt('Сколько будет стоить данная работа?')
		} while (!appData.isNumber(appData.screenPrice))
		appData.adaptive = confirm('Нужен ли адаптив на сайте?')
	},
	start: function () {
		appData.asking()

		appData.allServicePrices = appData.getAllServicePrices()
		appData.fullPrice = appData.getFullPrice()
		appData.servicePercentPrice = appData.getServicePercentPrices()
		appData.title = appData.getTitle()

		appData.logger()
	},
	getRollbackMessage: function (price) {
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
	},
	getAllServicePrices: function () {
		let sum = 0;

		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
			} else if (i === 1) {
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
			}

			let answer = prompt('Сколько это будет стоить?')

			if (!appData.isNumber(answer))
				sum += +answer
		}

		return sum
	},
	getFullPrice: function () {
		return appData.screenPrice + appData.allServicePrices
	},
	getTitle: function () {
		return appData.title.trim().slice(0, 1).toLocaleUpperCase() + appData.title.trim().slice(1).toLocaleLowerCase()
	},
	getServicePercentPrices: function () {
		return +appData.fullPrice - (+appData.fullPrice * (+appData.rollback / 100))
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num)
	},
	logger: function () {
		for (let key in appData) {
			console.log('Ключ: ' + key + ', значение: ' + appData[key])
		}
	},
}

appData.start()