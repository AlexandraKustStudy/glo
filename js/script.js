const title = document.getElementsByTagName('h1')[0]

const calculateBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const addBtn = document.querySelector('.screen-btn')

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const rangeInput = document.querySelector('.rollback input[type="range"]')
const rangeValue = document.querySelector('.rollback .range-value')

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screenCount: 0,
    adaptive: false,
    servicesPercent: {},
    servicesNumber: {},
    fullPrice: 0,
    rollback: 5,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    init: function () {
        appData.addTitle()
        appData.blockedBtn()
        appData.checkInputValue()
        appData.getRollbackProcent()

        calculateBtn.addEventListener('click', appData.start)
        addBtn.addEventListener('click', appData.addScreenBlock)
    },
    start: function () {
        appData.addScreens()
        appData.addServices()

        appData.addPrices()
        appData.showResult()

        appData.updateRollback()

        // appData.logger()
        console.log(appData)
    },
    updateRollback: function () {
        rangeInput.addEventListener('input', function () {
            totalCountRollback.value = +appData.fullPrice - (+appData.fullPrice * (+appData.rollback / 100))
        })
    },
    blockedBtn: function () {
        let disabledBtn = false
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            if (!select.value || !input.value) return disabledBtn = true
        })

        calculateBtn.disabled = disabledBtn
    },

    checkInputValue: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')

            select.addEventListener('change', appData.blockedBtn)
            input.addEventListener('input', appData.blockedBtn)
        })
    },

    getRollbackProcent: function () {
        rangeInput.addEventListener('input', function () {
            rangeValue.textContent = rangeInput.value + '%'
            appData.rollback = rangeInput.value
        })
    },

    addTitle: function () {
        document.title = title.textContent
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCount.value = appData.screenCount
        totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type="checkbox"]')
            const input = item.querySelector('input[type="text"]')
            const label = item.querySelector('label')

            if (check.checked) appData.servicesPercent[label.textContent] = +input.value
        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type="checkbox"]')
            const input = item.querySelector('input[type="text"]')
            const label = item.querySelector('label')

            if (check.checked) appData.servicesNumber[label.textContent] = +input.value
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
        appData.checkInputValue()
        appData.blockedBtn()
    },
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            return sum + item.price
        }, 0)
        appData.screenCount = appData.screens.reduce(function (sum, item) {
            return sum + item.count
        }, 0)

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += +appData.screenPrice * (+appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber
        appData.servicePercentPrice = +appData.fullPrice - (+appData.fullPrice * (+appData.rollback / 100))
    },
    logger: function () {
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.screens)
        console.log(appData.services)
    },
}

appData.init()