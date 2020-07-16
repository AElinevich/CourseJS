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
    //    const spinner = document.createElement('img');
    //    spinner.setAttribute('src', './images/Spin-1s-91px.svg');

    const statusMessage = document.createElement('div');
    statusMessage.innerHTML = 
    `<img src="./images/Spin-1s-91px.svg"`;
    statusMessage.style.cssText = 'font-size: 2rem';

    forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        statusMessage.textContent = loadMessage;
        // let body = {};

        // for (let val of formData.entries()){
        //     body[val[0]] = val[1];
        // }
        //альтернативный способ перебора
        // formData.forEach((val,key) => {
        //     body[key] = val;
        // });
        postData(formData)
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('status network not 200');

            }
console.log(response)
                statusMessage.textContent = successMessage;    
                clearInputs()  
        })
        .catch((error) => {
            console.log(error);
                statusMessage.textContent = errorMessage;
                clearInputs()    
        });   
    });
});
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
    },
            body: 'formData'

}); 
    }

};


export default sendForm; 