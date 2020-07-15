     const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const menuItems = menu.querySelectorAll('ul>li');
    document.body.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.closest('.menu')) {menu.classList.add('active-menu');
    console.log(target);
}

    if(target.closest('.close-btn')) {menu.classList.remove('active-menu');}
    


    

    
    


    }
    )


    };

    export default toggleMenu;