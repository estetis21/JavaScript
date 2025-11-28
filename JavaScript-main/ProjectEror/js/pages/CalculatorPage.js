function CalculatorPage(){
    var a = 0;
    var b = 0;
    var action = null;

    function calcAcrionHandler(event){
        var input = document.getElementById('calc-input');
        var _action = event.target.dataset.action;
        if (_action === 'calculate'){
            var calculator = new Calculator();
            b = Number(input.value);
            if (action && calculator[action]){
                input.value = calculator[action](a,b);
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

    
}