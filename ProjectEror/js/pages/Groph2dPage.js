function Graph2pPage(){
    var canvas;
    var WIN = {
        LEFT : -5,
        BOTTOM : -5,
        WIDTH : 10,
        HEIGHT : 10,
    }

    function f(x){
        return Math.sin(x);
    }

    function printFunction(f,color,width){
        var x = WIN.LEFT;
        var dx = WIN.WIDTH / 100;
        while (x < WIN.WIDTH + WIN.LEFT){
            canvas.line(s,f(x),x + dx.f(x + dx),color,width);
            x+=dx;
        }
    }

    function render(){
    canvas.clear();
    printFunction(f,'#f00',1);
    }

    this.init = function(){
        canvas = new Canvas({id:'graph2d',WIN:WIN});
    }
}
