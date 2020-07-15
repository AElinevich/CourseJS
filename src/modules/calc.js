const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');
    const calcBlockIem = calcBlock.querySelectorAll('input');

    calcBlockIem.forEach((item) => {
        let isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        }
        item.addEventListener('input', ()=> {
            if (!isNumber(item.value)){
                return item.value = "";
            }
        })   
    })
    
    const countSum = () => {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;
    
        if(calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if(calcDay.value && calcDay.value <= 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value <= 10){
            dayValue *= 1,5;
        }

        if (typeValue && squareValue) {
          total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
        } 
        function numAnimate () {
            let number = 1;
      let timeId = setInterval(function () {
                number++;
                if (number<=total) { 
                    totalValue.textContent = number;
                    timeId
                    calcType.addEventListener('change', () => {
                        clearInterval(timeId)
                    })
                    }
            }       
    , 0,1);
    } 
        numAnimate()
   
    };
    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        // if(target.matches('.calc-type') || target.matches('.calc-square') || 
        // target.matches('.calc-day') || target.matches('.calc-count')) {
        //     console.log(1);
        // }
        

        // if(target === calcType || target === calcSquare || target === calcDay || target === calcCount){
        //     console.log(1);
        // }

        if(target.matches('select') || target.matches('input')) {
          
            countSum()
        }
    })
    

}

export default calc;