
let start = document.getElementById('start');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let depositCheck  = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetMonthValue = document.querySelector('.budget_month-value');
let budgetDayValue = document.querySelector('.budget_day-value');
let expensesMonthValue = document.querySelector('.expenses_month-value');
let additionalIncomeValue = document.querySelector('.additional_income-value');
let additionalExpensesValue = document.querySelector('.additional_expenses-value');
let incomePeriodValue = document.querySelector('.income_period-value');
let targetMonthValue = document.querySelector('.target_month-value');
let salaryAmount = document.querySelector('.salary-amount');

let expensesTitle = document.querySelector('input.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let incomeItems = document.querySelectorAll('.income-items');
let periodAmount = document.querySelector('.period-amount');

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}


let appData = {
    income : {},
    incomeMonth: 0,
    addIncome : [],
    expenses : {},
    addExpenses : [],
    deposit : false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget : 0,
    budgetDay : 0,
    budgetMonth  : 0,
    expensesMonth : 0, 
    start: function() {
        // money = prompt('Ваш месячный доход?', '');
        // while (!isNumber(money)) {
        //     money = prompt('Ваш месячный доход?', '');
        // }
           
            appData.budget = +salaryAmount.value;

            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();
            appData.showResult();
    },
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', function(){
            incomePeriodValue.value = appData.calcPeriod();
            
});
        
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.value = "";
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        
        console.log(expensesItems.value);
        if(expensesItems.length === 3) {
            expensesPlus.style.display = "none";
        }
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = "none";
        }

    },
    getExpenses: function() {
        expensesItems.forEach(function(item){
           let itemExpenses = item.querySelector('.expenses-title').value;
           let cashExpenses = item.querySelector('.expenses-amount').value;
           if(itemExpenses !== '' && cashExpenses !== '') {
               appData.expenses[itemExpenses] = cashExpenses;
           }
        });
    },
    getIncome: function() {
        let itemIncome = document.querySelector('input.income-title').value;
        let cashIncome = document.querySelector('input.income-amount').value;
        if(itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = cashIncome;
        }
        console.log(typeof cashIncome);

    for (let key in appData.income) {
        appData.incomeMonth += +appData.income[key];
    }

    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                appData.addIncome.push(itemValue);
            }

        });
    },

    //     appData.deposit = confirm('Есть ли у вас депозит в банке?');
       
    //     for (let i = 0; i < 2; i++) {
    //         let expensesName;
    //         let message;
    //         do {
    //             expensesName  = prompt('Введите обязательную статью расходов?', '');
    //         }
    //             while (isNumber(expensesName));   
      

    //         do {
    //             message = prompt('Во сколько это обойдется?', '');
    //             console.log(typeof message);
    //         }
    //             while (!isNumber(message));   
        
    //             appData.expenses[expensesName] = +message;
    //             console.log(appData.expenses);
    //     } 
    // },
     getExpensesMonth : function() {
            let sum = 0;
            for (key in appData.expenses) {
            sum += +appData.expenses[key];
            appData.expensesMonth = sum;
            console.log(appData.expensesMonth);
         }
            

    },
    getBudget: function() {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            console.log('Расходы за месяц: ' + appData.expensesMonth);
            // console.log('Ваш бюджет на день: ' + appData.budgetDay);

    }, 
    getTargetMonth: function  () {
            return targetAmount.value / appData.budgetMonth;
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
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    }       
        
}

if(salaryAmount.value === '') {
    start.setAttribute('disabled', 'true');
}
salaryAmount.addEventListener('input', () => {
    if (salaryAmount.value === ''){
        start.setAttribute('disabled', 'true');
    } else {
        start.removeAttribute('disabled', 'true');
        start.addEventListener('click', appData.start);
    }
})
    expensesPlus.addEventListener('click', appData.addExpensesBlock);

    incomePlus.addEventListener('click', appData.addIncomeBlock);

    periodSelect.addEventListener('input', function(){
            periodAmount.textContent = periodSelect.value;
});

appData.getTargetMonth();
appData.getStatusIncome();
console.log(appData.getStatusIncome())


if (appData.getTargetMonth() < 0) {
    console.log('Цель не будет достигнута')
} else {
    console.log('Цель будет достигнута через: ' + appData.getTargetMonth() + ' месяцев');
};


// for(key in appData)
// {
//     console.log('Наша программа включает в себя данные: ' +  key + appData[key]);
// }

appData.getInfoDeposit();



