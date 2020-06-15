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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission : 50000,
    period : 12,
    budget : money,
    budgetDay : 0,
    budgetMonth  : 0,
    expensesMonth : 0, 
    asking: function(){
        if(confirm('Есть ли у вас дополнительный источник заработка?', '')) {
            let itemIncome;
            let cashIncome;
            do {
                itemIncome = +prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }
                while (isNumber(itemIncome));   
      
        do {
            cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
        }
            while (!isNumber(cashIncome));   

    appData.income[itemIncome] = cashIncome;

            
    }
    


        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');

        console.log(appData.addExpenses.split(/\s+/).map(item => item[0].toUpperCase() + item.substring(1)).join(', '));
        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
       
        for (let i = 0; i < 2; i++) {
            let expensesName;
            let message;
            do {
                expensesName  = prompt('Введите обязательную статью расходов?', '');
            }
                while (isNumber(expensesName));   
      

            do {
                message = prompt('Во сколько это обойдется?', '');
                console.log(typeof message);
            }
                while (!isNumber(message));   
        
                appData.expenses[expensesName] = +message;
                console.log(appData.expenses);
        } 
    },
     getExpensesMonth : function() {
            let sum = 0;
            for (key in appData.expenses) {
            sum += +appData.expenses[key];
            appData.expensesMonth = sum;
            console.log(appData.expensesMonth);
         }
            

    },
    getBudget: function() {
            appData.budgetMonth = money - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            console.log('Расходы за месяц: ' + appData.expensesMonth);
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
    getInfoDeposit: function () {
        if(appData.deposit) {
           do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }
                while (!isNumber(appData.percentDeposit));   

            do {
                    appData.percentDeposit = prompt('Какая сумма заложена?', 10000);
            }
                while (!isNumber(appData.percentDeposit));        
        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    }       
        
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

appData.getInfoDeposit();
console.log(appData.period, appData.moneyDeposit, appData.calcSaveMoney());

console.log(appData);