

function Graph2DPage(){
    var WIN = {
        LEFT : -5,
        BOTTOM : -5,
        WIDTH : 10,
        HEIGHT : 10,
    };


    var canvas;
    var funcs = [
        {f:function (x) {return x * x}, color: '#f00',width: 3},
        {f:function (x) {return Math.sin(x);},color:'#0f0',width: 1},
        {f:function (x) {return Math.cos(x);},color:'#00f'},
        {
            x:function(t) {return 1+3*Math.Sin(t);},
            y:function(t) {return 2+3*Math.cos(t);},
            range:[0,Math.PI*2],
            color:'#00f'
        }
        
    ];

    function wheelHendler(event){
        var delta = (event.wheelDelta > 0)? -0.2:0.2;
        WIN.WIDTH += delta;
        WIN.HEIGHT += delta;
        WIN.LEFT -= delta/2;
        WIN.BOTTOM -=delta/2; 
    }

    function mouseupHendler(){
        canMove = false;
    }
    function mouseleaveHendler(){
        canMove = false;
    }
    function mousedownHendler(){
        canMove = false;
    }
    function mousemoveHendler(event){
        if (canMove) {
            WIN.LEFT -= canvas.sx(event.movementX);
            WIN.BOTTOM -= canvas.sy(event.movementY);
            render();
        }
    }



    function printOXY(){
        var {LEFT, BOTTOM, WIDTH,HEIGHT} = WIN;
        var RIGHT = WIDTH + LEFT;
        var TOP = HEIGHT + WIN.BOTTOM;
        //сетка
        var color = '#ddd';
        for(var i = 1;i < RIGHT; i++){
            canvas.line(i,BOTTOM,i,TOP,color,1);
        }
        for (var i = -1;i > LEFT;i--){
            canvas.line(i,BOTTOM,i,TOP,color,1);
        }
        for(var i = 1;i < TOP; i++){
            canvas.line(LEFT, i ,RIGHT,i,color,1);
        }

        for (var i = -1;i > LEFT;i--){
            canvas.line(LEFT, i ,RIGHT,i,color,1);
        }
        
        
            // оси координат

        canvas.line(LEFT, 0 ,RIGHT,0);
        canvas.line(0, BOTTOM, 0 ,TOP);
    }

    function printParamFunction({x, y, range, color, width}){
        var t = range[0];
        var st = (range[1] - range[0]/100);
        while(t < range[1]){
            canvas.line(x(t),y(t),x(t + dt),y(t + dt),color,width);
            t+=dt;
        }
    }

    function printGraphic(func){
        if (func?.f){
            printFunction(func);
        }
        if (func?.x && func?.y && func?.range){
            printParamFunction(func);
        }
    }

    function render(){
        canvas.clear();
        printOXY();
        for (var i = 0; i < funcs.length;i++) {
            printGraphic(funcs[i]);
        }
        canvas.text(-3,4,'Вася дурак!');
    }

    this.init = function(){
        canvas = new Canvas({id:'graph2d',WIN:WIN});
    }

    this.init = function(){
        canvas = new Canvas({
            id: 'graph2D',
            WIN: WIN,
            callbacks:{
                wheel: whe
            }
        });
        render();
    }
}

