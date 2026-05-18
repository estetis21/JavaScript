import {Point,Figure} from '../entities';

class Ring extends Figure{
    constructor(radius = 20, count = 30) {
        super();

        for (let a = 0; a < Math.PI * 2; a+= Math.PI*2/ count){
            const x = radius * Math.sin(a);
            const y = radius * Math.cos(a);
            const z = 10;


            this.points.push(new Point(x, z, y))

        }

    }
}

export default Ring