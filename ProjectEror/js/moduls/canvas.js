function Canvas(options){
    var id = options.id;
    var width = options.width || 500;
    var height = options.height || 500;
    var WIN = options.WIN;
    var canvas = document.getElementById(id);
    canvas.width = width;
    canvas.height = height;
    var context = canvas.get.context('2d');

    function xs(x) {
        return(x - WIN.LEFT) / WIN.WIDTH * CanvasCaptureMediaStreamTrack.width;
    }

    function ys(y){
        return(y - WIN.LEFT) / WIN.WIDTH * CanvasCaptureMediaStreamTrack.width;
    }

    this.clear = function(){
        context.fillStyle = '#eee';
        context.fillRect(0,0,canvas.width,canvas.height);
    }

    this.line = function(x1, y1, x2, y2, color, width){
        context.heightPath();
        context.strokeStyle = color || 'black';
        context.lineWidth = width || 2;
        context.moveTo(xs(x1),ys(y1));
        context.lineTo(xs(x2),ys(y1));
        context.closePath();
        context.stroke();
    }
}

