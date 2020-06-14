let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}


let money;
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

let appData = {
    income : {},
    addIncome : [],
    expenses : {},
    addExpenses : [],
    deposit : false,
    mission : 50000,
    period : 12,
    budget : money,
    budgetDay : 0,
    budgetMonth  : 0,
    expensesMonth : 0, 
    asking: function(){
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
        appData.addExpenses.split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');


       
       
        for (let i = 0; i < 2; i++) {
        appData.expenses[i] = prompt('Введите обязательную статью расходов?', '');
           
            do {
                message = prompt('Во сколько это обойдется?', '');
            }
                while (!isNumber(message));   
        
        
            
            appData.expenses[appData.expenses[i]] = +message;
console.table(appData.expenses);
    
        } 
       
       

    },
     getExpensesMonth : function() {
        let sum = 0;
         for (key in appData.expenses) {
            
            sum += appData.expenses.message;
            
         }
         console.log(sum);
return sum
    },
     getAccumulatedMonth : function() {
        return money - expensesAmount;
    }, 
    getTargetMonth: function  () {
        return Math.ceil(appData.mission / accumulatedMonth);
        },
    getStatusIncome: function () {
            if (appData.budgetDay >= 1200) {
                return ('У вас высокий уровень дохода');
            } if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
                return ('У вас средний уровень дохода');
            } if (appData.budgetDay < 600 && appData.budgetDay > 0) {
                return ('К сожалению у вас уровень дохода ниже среднего');
            } if (appData.budgetDay <= 0) {
                return ('Что-то пошло не так');
            };
            },
           

}

console.log(appData.getExpensesMonth);
appData.asking()

 console.log(appData.getStatusIncome());

// let showTypeOf = function(data) {
//     console.log(data, typeof(data));
// }
// showTypeOf(money);
// showTypeOf(appData.income);
// showTypeOf(appData.deposit);



let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);



let accumulatedMonth = appData.getAccumulatedMonth();
console.log(accumulatedMonth);



if (appData.getTargetMonth() < 0) {
    console.log('Цель не будет достигнута')
} else {
    console.log('Цель будет достигнута через: ' + appData.getTargetMonth());
};

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Ваш бюджет на день: ' + appData.budgetDay);


