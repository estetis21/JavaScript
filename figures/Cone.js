import {Point, Figure} from '../entities';

class Cone extends Figure {
    constructor(radius = 20, height = 40, count = 50) {
        super();
        const PI = Math.PI;

        for (let i = 0; i <= count; i++) {
            
            const h = (height * i) / count;
            const currentRadius = radius * (1 - h / height);

            for (let j = 0; j < count; j++) {
                const phi = (PI * 2 * j) / count;

                const x = currentRadius * Math.cos(phi);
                const y = currentRadius * Math.sin(phi);
                const z = h;

                this.points.push(new Point(x, y, z));
            }
        }
    }
}

export default Cone;
