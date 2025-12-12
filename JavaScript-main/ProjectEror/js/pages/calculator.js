var a = 0;
var b = 0;
var action = null;
var calculator = {
    add:function(a,b) {
        return a + b;
    },
    sub:function(a,b){
        return a - b;
    },
    mult:function(a,b){
        return a * b;
    },
    div:function(a,b){
        return a / b;
    },
    calculate:function(action){
        return this[action](a,b);
    },

}


function calcAcrionHandler(event){
    var _action = event.target.dataset.action;
    if (_action === 'calculate'){
        b = Number(input.value);
        if (action && calculator[action]){
            input.value = ca
        }
    }else{
        a = Number(input.value);
        action = _action;
        input.value = '0';
    }
}

function calcNumberHandler(event){
    var number = event.target.dataset.number;
    var input = document.getElementById('calc-input');
    if (input.value === '0'){
        input.value= number;
    } else {
        input.value += number;
    }
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