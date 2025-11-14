var matrix = {
    getZeroMatrix:function (size){
        var arr = this;
        for (var i = 0;i < size;i++){
            arr.push([]);
            for (var j = 0;j < size;j++){
                arr[i][j] = 0;
            }
        } 
        return arr;
    },
    getOneMatrix:function(size){
        var arr = getZeroMatrix;
        for (var i = 0;i < size;i++){
                arr[i][j] = 1;
        } 
        return arr;
    },
};
    function maatrixGetHandler(event){
        var size = Number(document.getElementById('matrix-size').value)
        if (size > 0){

        
            var method =event.target.dataset.method

            var result = matrix[mathod](10);
            var str = '';
            for (var i = 0; i< result.length;i++){
                str += '[' + result[i].join(', ') + ']<br>';
            }
            document.getElementById('matrix-result').innerHTML = str;
        }
}

function initMatrix(){
    var buttons = document.querySelectorAll('.matrix-get')
    for (var i = 0;i<buttons.length; i++){
        buttons [i].addEventListener('click',maatrixGetHandler)
    }
}