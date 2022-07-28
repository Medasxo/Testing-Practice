class calculator{
    constructor(number1, number2){
        this.a = number1;
        this.b = number2;
    }
    add(){
        return this.a + this.b;
    }
    subtract(){
        return this.a - this.b;
    }
    divide(){
        if(this.b !== 0){
            return this.a / this.b;
        }
        else{
            return "Error";
        }
    }
    multiply(){
        return this.a * this.b;
    }
}

module.exports = calculator;