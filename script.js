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