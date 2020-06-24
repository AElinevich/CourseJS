class First  {
    constructor () {}
hello () {
console.log('Привет я метод родителя!')
}
}


class Second extends First {
    constructor(hello) {
    super(hello);    
    }
hello (){
    super.hello(console.log('Привет я наследуемый метод!'))
}
}

const firstTwo = new First();

const secondTwo = new Second();
console.log(secondTwo.hello());
