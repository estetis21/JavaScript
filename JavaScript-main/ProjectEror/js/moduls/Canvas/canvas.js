function Canvas(options){
    var id = options.id;
    var width = options.width || 500;
    var height = options.height || 500;
    var WIN = options.WIN;
    var canvas = document.getElementById(id);
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    var callbacks = options.callbacks;
    ca

    function xs(x) {
        return(x - WIN.LEFT) / WIN.WIDTH * canvas.width;
    }

    function ys(y){
        return canvas.height - (y - WIN.BOTTOM) / WIN.HEIGHT * canvas.height;
    }

    this.sx = function (x){
        return x * WIN.WIDTH/canvas.width;
    }

    this.sy = function (y){
        return -y * WIN.HEIGHT / canvas.height;
    }

    this.clear = function(){
        context.fillStyle = '#eee';
        context.fillRect(0,0,canvas.width,canvas.height);
    }

    this.line = function(x1, y1, x2, y2, color, width){
        context.beginPath();
        context.strokeStyle = color || 'black';
        context.lineWidth = width || 2;
        context.moveTo(xs(x1),ys(y1));
        context.lineTo(xs(x2),ys(y2));
        context.closePath();
        context.stroke();
    }
}

