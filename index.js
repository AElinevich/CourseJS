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
let checkBox = document.querySelector('.deposit-check');

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
    check: function() {
        if(salaryAmount.value !== '') {
            start.removeAttribute('disabled'); 
        }
    },
    start: function() {
        // money = prompt('Ваш месячный доход?', '');
        // while (!isNumber(money)) {
        //     money = prompt('Ваш месячный доход?', '');
        // }
        if(salaryAmount.value === '') {
            start.setAttribute('disabled', 'true');
            return;
        }
        let allInput = document.querySelectorAll('.data input[type = text]');
        allInput.forEach(function(item) {
            item.setAttribute('disabled', 'disabled');
        });
        expensesPlus.setAttribute('disabled', 'disabled');
        incomePlus.setAttribute('disabled', 'disabled');
        start.style.display = 'none';
        cancel.style.display = 'block';
           
<<<<<<< HEAD
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.showResult();
=======
            appData.budget = +salaryAmount.value;
            let getExpensesThis = appData.getExpenses.bind(appData);
            getExpensesThis();
            
            appData.getIncome();
            this.getExpensesMonth();
            let getAddExpensesThis = appData.getAddExpenses.bind(appData);
            getAddExpensesThis();

            let getAddIncomeThis = appData.getAddExpenses.bind(appData);
            getAddIncomeThis();

            this.getBudget();
            this.showResult();
            
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
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
<<<<<<< HEAD
        incomePeriodValue.value = this.calcPeriod();            
=======
        incomePeriodValue.value = this.calcPeriod();
     
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
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
<<<<<<< HEAD
=======
        cloneExpensesItem.value = "";
        
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = "none";
<<<<<<< HEAD
        }
=======
            
        } 
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507

    },
    getExpenses: function() {
        expensesItems.forEach(function(item){
           let itemExpenses = item.querySelector('.expenses-title').value;
           let cashExpenses = item.querySelector('.expenses-amount').value;
           if(itemExpenses !== '' && cashExpenses !== '') {
               appData.expenses[itemExpenses] = cashExpenses;
<<<<<<< HEAD
=======
               
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
           }
        });
    },
    getIncome: function() {
        incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = cashIncome;
        }
<<<<<<< HEAD
    });
=======
        console.log(typeof cashIncome);
        

>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
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
<<<<<<< HEAD
=======
            
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
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
<<<<<<< HEAD
            this.expensesMonth = sum; 
=======
            this.expensesMonth = sum;
            
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
         }

    },
    getBudget: function() {
<<<<<<< HEAD
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = Math.floor(this.budgetMonth / 30);
=======
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
            // console.log('Расходы за месяц: ' + this.expensesMonth);
            // console.log('Ваш бюджет на день: ' + appData.budgetDay);
            
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
    }, 
    getTargetMonth: function  () {
            return targetAmount.value / this.budgetMonth;
            
        },
    getStatusIncome: function () {
        
            if (this.budgetDay >= 1200) {
                return ('У вас высокий уровень дохода');
            } if (this.budgetDay >= 600 && this.budgetDay < 1200) {
                return ('У вас средний уровень дохода');
            } if (this.budgetDay < 600 && this.budgetDay > 0) {
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
<<<<<<< HEAD
        return this.budgetMonth * periodSelect.value;
    },
    reset: function () {
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
        cancel.style.display = 'none';
        start.style.display = 'block';
        incomePlus.removeAttribute('disabled');
        expensesPlus.removeAttribute('disabled');

=======
        
        return this.budgetMonth * periodSelect.value
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
    }       
        
}

<<<<<<< HEAD
    start.addEventListener('click', appData.start.bind(appData));
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    salaryAmount.addEventListener('keyup', appData.check);
    cancel.addEventListener('click', appData.reset.bind(appData)); 
=======
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
    expensesPlus.addEventListener('click', function () {
        let addExpensesBlockThis = appData.addExpensesBlock.bind(appData);
        addExpensesBlockThis();
    })
    

    incomePlus.addEventListener('click', function (){
        let addIncomeBlockThis = appData.addIncomeBlock.bind(appData);
        addIncomeBlockThis();
    })
>>>>>>> 68b39fb2e570067b2d785471f235eca770af4507
    periodSelect.addEventListener('input', function(){
        periodAmount.textContent = periodSelect.value;

});
    






appData.getTargetMonth();
appData.getStatusIncome();
  


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
