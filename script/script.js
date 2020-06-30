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
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
const handlerMenu = () => {
    menu.classList.toggle('active-menu');
    
}
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        
        
        menuItems.forEach((elem) => {elem.addEventListener('click', handlerMenu)})
       

      
      

    };
    
    toggleMenu();
  
   // popup 
  
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');
        const popupContent = document.querySelector('.popup-content');
        let count = 0;
         
        const togglePopup = () => {
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                count++;
                popup.style.display = 'block';
                popupContent.style.left = count * 2 + 'px';
                let width = document.documentElement.clientWidth;
                if(width < 768) {
                    popup.style.display = 'none';}
                
                       
            });
            
        });
      
    };

    setInterval(togglePopup, 10)
   popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});


});