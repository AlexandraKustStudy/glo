const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: false,
    services: {},
    fullPrice: 0,
    rollback: 5,
    servicePercentPrice: 0,
    allServicePrices: 0,
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?', 'Проект 1')
        } while (appData.isNumber(appData.title))

        for (let i = 0; i < 2; i++) {
            let name
            let price = 0

            do {
                name = prompt('Какие типы экранов нужно разработать?')
            } while (appData.isNumber(name))

            do {
                price = +prompt('Сколько будет стоить данная работа?')
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name
            let price = 0

            do {
                name = prompt('Какой дополнительный тип услуги нужен?')
            } while (appData.isNumber(name))

            do {
                price = +prompt('Сколько это будет стоить?')
            } while (!appData.isNumber(price))

            appData.services[name + '_' + i] = +price
        }


        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },
    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()

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
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            return sum + item.price
        }, 0)

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },
    getTitle: function () {
        appData.title = appData.title.trim().slice(0, 1).toLocaleUpperCase() + appData.title.trim().slice(1).toLocaleLowerCase()
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = +appData.fullPrice - (+appData.fullPrice * (+appData.rollback / 100))
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    logger: function () {
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.screens)
        console.log(appData.services)
    },
}

appData.start()