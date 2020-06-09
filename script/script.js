
let income = 'Разработка сайтов';
let mission = 100000;
let period = 12;
let money = prompt('Ваш месячный доход?', '');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
console.log(addExpenses.split(','));
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?', '');
let amount1 = +prompt('Во сколько это обойдется?', '');
let expenses2 = prompt('Введите обязательную статью расходов?', '');
let amount2 = +prompt('Во сколько это обойдется?', '');


let showTypeOf = function(data) {
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth() {
    return amount1 + amount2;
}
console.log(getExpensesMonth())

function getAccumulatedMonth() {
    return money - (amount1 + amount2);
}

let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth () {
return Math.ceil(mission / accumulatedMonth);

}
console.log(getTargetMonth());

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Ваш бюджет на день: ' + budgetDay);


let getStatusIncome = function () {
if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
} if (budgetDay >= 600 && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
} if (budgetDay < 600 && budgetDay > 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
} if (budgetDay <= 0) {
    return ('Что-то пошло не так');
};
};
console.log(getStatusIncome());
