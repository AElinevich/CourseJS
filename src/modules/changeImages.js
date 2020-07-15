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

export default changeImages;