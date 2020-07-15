     const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const menuItems = menu.querySelectorAll('ul>li');
        const anchors = document.querySelectorAll('a[href*="#"]');
        
        for (let anchor of anchors) {
        anchor.addEventListener('click', (evt) => {
        evt.preventDefault();
        const blockID = anchor.getAttribute('href');
        menu.classList.remove('active-menu');
        document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })

    })
}

    document.body.addEventListener('click', (event) =>{
        event.preventDefault();
    let target = event.target;
    if(target.closest('.menu')) {
        menu.classList.add('active-menu');

}
    if(target.closest('.close-btn')) {
        menu.classList.remove('active-menu');
        
}  
    
    }
    )


    };

    export default toggleMenu;