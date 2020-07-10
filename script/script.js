window.addEventListener('DOMContentLoaded', function(){
    'use strict';
let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
    // timer
function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'); 
    let timerMinutes = document.querySelector('#timer-minutes');
    let timerSeconds = document.querySelector('#timer-seconds');
        
function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaining % 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let hours = Math.floor(timeRemaining / 60 / 60);

        if(seconds < 10) {
            seconds = '0' + Math.floor(timeRemaining % 60);
        } if (minutes < 10) {
            minutes = '0' + Math.floor((timeRemaining / 60) % 60);
        } if (hours < 10) {
            hours =  '0' + Math.floor(timeRemaining / 60 / 60);
        }
        return {timeRemaining, hours, minutes, seconds}

}
function updateclock(){
    let timer = getTimeRemaining()
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        

    if(timer.timeRemaining > 0) {
        setInterval(updateclock, 1000)
    }  

    else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    }
    }
    updateclock();

    }
    countTimer('30 july 2020')

     // меню
     const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const menuItems = menu.querySelectorAll('ul>li');
    document.body.addEventListener('click', (event) =>{
    let target = event.target;
//    console.log(target);
    if(target.closest('.menu')) {menu.classList.add('active-menu');
    console.log(target);

}

    if(target.closest('.close-btn')) {menu.classList.remove('active-menu');}
    


    

    
    


    }
    )


    };


    toggleMenu();
  
   // popup 
  
const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupContent = document.querySelector('.popup-content')
        
        
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                let start = Date.now(); 

        let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
        if (timePassed >= 2500) {
            clearInterval(timer); 
            return;
        }
        let width = document.documentElement.clientWidth;
        if(width < 768) {
            clearInterval(timer); 
            popup.style.display = 'block';
            popup.style.margin = 'auto';
            return;
        }  
    
    show(timePassed);

    }, 50);

    function show(timePassed) {
        popupContent.style.left = timePassed / 5 + 'px';
    }           
    });
                
    });

 popup.addEventListener('click', (event) => {
     let target = event.target;
     if(target.classList.contains('popup-close')){
        popup.style.display = 'none';
     } else {
        target = target.closest('.popup-content');

        if(!target) {
            popup.style.display = 'none';
        }
     }
     
 })     
    };

togglePopup()

// плавный скролл по якорям
// const anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
//     anchor.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         const blockID = anchor.getAttribute('href')
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })

//     })
// }
// смена изображений
const changeImages = () => {
    const images = document.querySelectorAll('.command__photo');
    images.forEach((item) => {
        item.addEventListener('mouseenter', (event) => {
            event.target.img = event.target.src;
            event.target.src = event.target.dataset.img;
        })
        item.addEventListener('mouseleave', (event) => {
            event.target.src = event.target.img;   
        })      
    }) 
}
changeImages();
// табы
const tabs = () => {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');
    tabContent[1].classList.add('d-none');
    tabContent[2].classList.add('d-none');
    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++) {
            if(index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }

    }
    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.service-header-tab');
        if(target){
            tab.forEach((item,i) => {
                if(item === target) {
                    toggleTabContent(i);
                }
            })
        }
    })

}


tabs()

// слайдер
const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item');
    const btn = document.querySelectorAll('.portfolio-btn');
    const slider = document.querySelector('.portfolio-content');
    let portfolioDots = document.querySelector('.portfolio-dots');
    slide.forEach(function(elem){
        let dot = document.createElement('li');
        dot.classList.add('dot');
        portfolioDots.insertAdjacentElement('beforeend', dot);
    })

  const dots = portfolioDots.querySelectorAll('.dot');
  let currentSlide = 0;
  let interval
  
  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;
    if(currentSlide >= slide.length) {
        currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
      dots[0].classList.add('dot-active');
      interval = setInterval(autoPlaySlide, time)

  };
  
  const stopSlide = () => {
     clearInterval(interval)

  };

 slider.addEventListener('click', (event) => {
     event.preventDefault();

     let target = event.target;
     if(!target.matches('#arrow-right, #arrow-left, .dot')) {
         return;
     }
     prevSlide(slide, currentSlide, 'portfolio-item-active');
     prevSlide(dots, currentSlide, 'dot-active');

     if(target.matches('#arrow-right')) {
        currentSlide++;
    }
     else if(target.matches('#arrow-left')) {
        currentSlide--;
    } else if (target.matches('.dot')) {
        dots.forEach((elem, index) => {
            if(elem === target) {
                currentSlide = index;
            }
        });

    }
    if(currentSlide >= slide.length) {
        currentSlide = 0;
    }
    if(currentSlide < 0) {
        currentSlide = slide.length-1;
    }
    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');

 })
 slider.addEventListener('mouseover', (event) => {
     if(event.target.matches('.portfolio-btn') ||
     event.target.matches('.dot')) {
         stopSlide();
     };
 });
 slider.addEventListener('mouseout', (event) => {
    if(event.target.matches('.portfolio-btn') ||
    event.target.matches('.dot')) {
        startSlide();
    };
 });
  
  startSlide(1500);
};

slider()

// калькулятор
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');
    const calcBlockIem = calcBlock.querySelectorAll('input');

    calcBlockIem.forEach((item) => {
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
        console.log(typeValue);
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
calc(100);
// send-adjax-form 
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загружается...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[placeholder="Номер телефона"]');
    const nameInputs = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const messageInput = document.querySelector('input[name="user_message"]');
// валидация инпутов
    phoneInputs.forEach(item => {
              item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9+]/g, '');
        });
    });
    
    nameInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яёА-ЯЁ\s]/g, '');
        });
    });
    messageInput.addEventListener('input', () => {
        messageInput.value = messageInput.value.replace(/[^?!.,:\-/;'()*0-9а-яёА-ЯЁ\s]/g, '');
    });

// очистка инпутов
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    statusMessage.style.color = '#ffffff';
    forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};

        // for (let val of formData.entries()){
        //     body[val[0]] = val[1];
        // }
        //альтернативный способ перебора
        formData.forEach((val,key) => {
            body[key] = val;
        });
        console.log(formData);
        postData(body, 
            () => {
                statusMessage.textContent = successMessage;
        }, 
            (error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
        });
               
    });
});
    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            
            if(request.readyState !==4) {
                return;
            }
            if(request.status === 200) {
                outputData();
                clearInputs()
                
            } else {
                errorData(request.status);
                clearInputs()
                
                              
            }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        
        request.send(JSON.stringify(body));

    }

};
sendForm();

});
