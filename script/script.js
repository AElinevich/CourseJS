let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let income = 'Разработка сайтов';
let mission = 100000;
let period = 12;
let money;
let message;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
console.log(addExpenses.split(','));
let deposit = confirm('Есть ли у вас депозит в банке?');

// 1
let start = function() {
    // money = prompt('Ваш месячный доход?', '');
    // while (!isNumber(money)) {
    //     money = prompt('Ваш месячный доход?', '');
    // }
    do {
        money = prompt('Ваш месячный доход?', '');
    }
        while (!isNumber(money));   
};
start();

let showTypeOf = function(data) {
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

function getExpensesMonth() {
    let sum = 0;
   
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?', '');
       
        do {
            message = prompt('Во сколько это обойдется?', '');
        }
            while (!isNumber(message));   
    
        sum += +message;} 
    
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

function getAccumulatedMonth() {
    return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth () {
return Math.ceil(mission / accumulatedMonth);
}

if (getTargetMonth() < 0) {
    console.log('Цель не будет достигнута')
} else {
    console.log('Цель будет достигнута через: ' + getTargetMonth());
};

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
