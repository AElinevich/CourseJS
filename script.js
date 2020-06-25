class First  {
    hello () {
        console.log('Привет я метод родителя!')
}
}

class Second extends First {
    hello() {
    super.hello();    
    console.log('Привет я наследуемый метод!')
}
}


const secondTwo = new Second();
console.log(secondTwo.hello());
