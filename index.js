let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
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
let inputName = document.querySelectorAll('input');

inputName.forEach(item => {
    if (item.placeholder === 'Наименование') {
    item.addEventListener('input', () => {
      const symbol = item.value[item.value.length - 1];
  
      if (/[А-Яа-яЁё,.!?;: ]/.test(symbol)) {
        return;
      } else {
        
        item.value = item.value.substring(0, [item.value.length - 1]);
      }
    });
}
if (item.placeholder === 'Сумма') {
    item.addEventListener('input', () => {
        if (!isNumber(item.value)){
            return item.value = "";
        }
        
    })
    
}
});

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
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input', function(){
        incomePeriodValue.value = this.calcPeriod();
            
});
        
    },
    addExpensesBlock: function() {
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        cloneExpensesItem.setAttribute("value", "");
        
    
        if(expensesItems.length === 3) {
            expensesPlus.style.display = "none";
        }
        cloneExpensesItem.value = "";
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
            this.income[itemIncome] = cashIncome;
        }
        console.log(typeof cashIncome);

    for (let key in this.income) {
        this.incomeMonth += +this.income[key];
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
            for (key in this.expenses) {
            sum += +this.expenses[key];
            this.expensesMonth = sum;
         }
            

    },
    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
            console.log('Расходы за месяц: ' + this.expensesMonth);
            // console.log('Ваш бюджет на день: ' + appData.budgetDay);
            
    }, 
    getTargetMonth: function  () {
            return targetAmount.value / this.budgetMonth;
        },
    getStatusIncome: function () {
            if (this.budgetDay >= 1200) {
                return ('У вас высокий уровень дохода');
            } if (this.budgetDay >= 600 && appData.budgetDay < 1200) {
                return ('У вас средний уровень дохода');
            } if (this.budgetDay < 600 && appData.budgetDay > 0) {
                return ('К сожалению у вас уровень дохода ниже среднего');
            } if (this.budgetDay <= 0) {
                return ('Что-то пошло не так');
            };
            },
    getInfoDeposit: function () {
        if(this.deposit) {
           do {
            this.percentDeposit = prompt('Какой годовой процент?', '10');
            }
                while (!isNumber(this.percentDeposit));   

            do {
                this.percentDeposit = prompt('Какая сумма заложена?', 10000);
            }
                while (!isNumber(this.percentDeposit));        
        }
    },
    calcPeriod: function () {
        return this.budgetMonth * periodSelect.value
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
        start.addEventListener('click', function() {
        inputName.forEach(item => {
        if (item.type === 'text'){
            item.setAttribute('disabled', 'true');
            let cancel = document.querySelector('#cancel');
            start.style.display = "none";      
            cancel.style.display = "block";
            cancel.addEventListener('click', () => {
                location.reload(true)})      
    }
    appData.start();
   
    })    
    })
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



