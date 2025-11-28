function Graph2pPage(){
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
    ];

    function wheelHendler(event){
        var delta = event.wheel
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

    function printFunction(f,color,width){
        var x = WIN.LEFT;
        var dx = WIN.WIDTH / 100;
        while (x < WIN.WIDTH + WIN.LEFT){
            canvas.line(s,f(x),x + dx.f(x + dx),color,width);
            x+=dx;
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

    function render(){
        canvas.clear();
        canvas.printOXY();
        for (var i = 0; i < funcs.length;i++) {
            var func = funcs[i];
            printFunction(func.f,func.color,func.width);
        }
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

