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
let cancel = document.querySelector('#cancel');
let checkBox = document.querySelector('#deposit-check');
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

class AppData {
    constructor () {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0; 
}
    check () {
    if(salaryAmount.value !== '') {
        start.removeAttribute('disabled'); 
    }
}
    start () {
    if(salaryAmount.value === '') {
        start.setAttribute('disabled', 'true');
        return;
    }
    let allInput = document.querySelectorAll('.data input[type = text]');
    allInput.forEach(function(item) {
        item.setAttribute('disabled', 'true');
    });
    expensesPlus.setAttribute('disabled', 'true');
    incomePlus.setAttribute('disabled', 'true');
    start.style.display = 'none';
    cancel.style.display = 'block';
       
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
};
   
    showResult () {
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input', function(){
        incomePeriodValue.value = _this.calcPeriod();            
    })
    }
    addExpensesBlock () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.value = "";
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesPlus.style.display = "none";
        }
    }
    addIncomeBlock () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = "none";
        }
    }
    getExpenses () {
        const _this = this;
        expensesItems.forEach(function(item){
           let itemExpenses = item.querySelector('.expenses-title').value;
           let cashExpenses = item.querySelector('.expenses-amount').value;
           if(itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
           }
        });
    }
    getIncome () {
        const _this = this;
        incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;
        }
    });
    }
    getAddExpenses () {
        let addExpenses = additionalExpensesItem.value.split(',');
        const _this = this;
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== '') {
                _this.addExpenses.push(item);
            }
        });
    }
    getAddIncome () {
        const _this = this;
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                _this.addIncome.push(itemValue);
            }
        });
    }
    getExpensesMonth () {
        let sum = 0;
        for (key in this.expenses) {
        sum += +this.expenses[key];
        this.expensesMonth = sum; 
     }
    }
    getBudget () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
    getTargetMonth () {
        return targetAmount.value / this.budgetMonth;
    }
    getStatusIncome () {
        if (this.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } if (this.budgetDay >= 600 && this.budgetDay < 1200) {
            return ('У вас средний уровень дохода');
        } if (this.budgetDay < 600 && this.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } if (this.budgetDay <= 0) {
            return ('Что-то пошло не так');
        };
        }

    getInfoDeposit () {
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
        }

    calcPeriod () {
        return this.budgetMonth * periodSelect.value;
        }
    reset () {
        let inputTextData = document.querySelectorAll('.data input[type = text]');
        let resultInputAll = document.querySelectorAll('.result input[type = text]');
        inputTextData.forEach(function(elem) {
            elem.value = '';
            elem.removeAttribute('disabled');
            periodSelect.value = '0';
            periodAmount.innerHTML = periodSelect.value;
        });
        resultInputAll.forEach(function(elem) {
                elem.value = '';
            });
        for (let i = 1; i < incomeItems.length; i++) {
            incomeItems[i].parentNode.removeChild(incomeItems[i]);
            incomePlus.style.display = "block";
        }
        for (let i = 1; i < expensesItems.length; i++) {
            expensesItems[i].parentNode.removeChild(expensesItems[i]);
            expensesPlus.style.display = "block";
            }
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0; 
        
        cancel.style.display = 'none';
        start.style.display = 'block';
        incomePlus.removeAttribute('disabled');
        expensesPlus.removeAttribute('disabled');
        checkBox.checked = false;
        }

    eventsListeners () {
        const _this = this;
        start.addEventListener('click', appData.start.bind(appData));
        expensesPlus.addEventListener('click', _this.addExpensesBlock);
        incomePlus.addEventListener('click', _this.addIncomeBlock);
        salaryAmount.addEventListener('keyup', _this.check);
        cancel.addEventListener('click', appData.reset.bind(appData)); 
        periodSelect.addEventListener('input', function(){
        periodAmount.textContent = periodSelect.value;        
        });
        }

};



const appData = new AppData();

appData.eventsListeners();   

// if (appData.getTargetMonth() < 0) {
//     console.log('Цель не будет достигнута')
// } else {
//     console.log('Цель будет достигнута через: ' + appData.getTargetMonth() + ' месяцев');
// }};

let addExp = [];
for (let i =0; i < appData.addExpenses.length; i++) {
    let element = appData.addExpenses[i].trim();
    element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    addExp.push(element);
}