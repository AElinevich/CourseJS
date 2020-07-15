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
 export default togglePopup;