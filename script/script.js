
let income = 'Разработка сайтов';
let mission = 100000;
let period = 12;


// Task 3
// 2
let money = prompt('Ваш месячный доход?', '');
console.log(money);
// 3
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
console.log(addExpenses);
//4
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);
// 5
let expenses1 = prompt('Введите обязательную статью расходов?', '');
console.log(expenses1);

let amount1 = +prompt('Во сколько это обойдется?', '');
console.log(amount1);

let expenses2 = prompt('Введите обязательную статью расходов?', '');
console.log(expenses2);

let amount2 = +prompt('Во сколько это обойдется?', '');
console.log(amount2);

// 6
let budgetMonth = money - (amount1 + amount2);
console.log('Ваш бюджет на месяц: ' + budgetMonth);
// 7
console.log('Ваша цель будет достигнута через:' + Math.ceil(mission / budgetMonth)); 
// 8
budgetDay = Math.floor(budgetMonth / 30);
console.log('Ваш бюджет на день: ' + budgetDay);

// 9
if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} if (budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} if (budgetDay <= 0) {
    console.log('Что-то пошло не так');
};
