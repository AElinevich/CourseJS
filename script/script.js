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
            let expensesName = prompt('Введите обязательную статью расходов?', '');
           
            do {
                message = prompt('Во сколько это обойдется?', '');
            }
                while (!isNumber(message));   
        
                appData.expenses[expensesName] = +message;
        } 
    },
     getExpensesMonth : function() {
            let sum = 0;
            for (key in appData.expenses) {
            sum += appData.expenses[key];
            appData.expensesMonth = sum;
         }
            

    },
    getBudget: function() {
            appData.budgetMonth = money - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.expensesMonth / 30);
            console.log('Расходы за месяц: ' + appData.budgetMonth);
            // console.log('Ваш бюджет на день: ' + appData.budgetDay);

    }, 
    getTargetMonth: function  () {
            return Math.ceil(appData.mission / appData.budgetMonth);
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

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log(appData.getStatusIncome())


if (appData.getTargetMonth() < 0) {
    console.log('Цель не будет достигнута')
} else {
    console.log('Цель будет достигнута через: ' + appData.getTargetMonth() + ' месяцев');
};


for(key in appData)
{
    console.log('Наша программа включает в себя данные: ' +  key + appData[key]);
}
