window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
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
        // setInterval(updateclock, 1000)
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
    
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('active-menu');
        })

        menu.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('close-btn')){
                menu.classList.remove('active-menu');
                 } else {target = target.classList.contains('active-menu');
                 if(!target) {
                     console.log(target);
                    menu.classList.remove('active-menu');
                }}
                 
               
})

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
        
        if (timePassed >= 3500) {
            clearInterval(timer); 
            return;
        }
        let width = document.documentElement.clientWidth;
        if(width < 768) {
            clearInterval(timer); 
            popup.style.display = 'block';
            return;
        }  
    
    show(timePassed);

    }, 10);

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
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', (evt) => {
        evt.preventDefault();
        const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })

    })
}

// табы
const tabs = () => {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');
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

});
