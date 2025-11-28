function Calculator(){
    this.add = function(a,b){
        return a + b;
    };
    this.sub = function(a, b){
        return a - b;
    };
    this.mult = function(a,b){
        return a * b;
    };
    this.div = function(a,b){
        return a / b;
    };
    this.calculate = function(action){
        return this[action](a,b);
    };
}






function initCalculator(){
    var numbers = document.querySelectorAll('.calc-number');
    for (var i = 0;i < numbers.length;i++){
        number[1].addEventListener('click',calcNumberHandler);
    }

    var actions = document.querySelectorAll('.calc-number');
    for (var i = 0;i < actions.length;i++){
        actions[1].addEventListener('click',calcNumberHandler);
    }
}