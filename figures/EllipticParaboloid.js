import {Point, Figure} from '../entities';

class EllipticParaboloid extends Figure {
    constructor(a = 10, b = 10, height = 40, count = 50) {
        super();
        const PI = Math.PI;

        for (let i = 0; i <= count; i++) {
            const z = (height * i) / count;
        

            const currA = a * Math.sqrt(z);
            const currB = b * Math.sqrt(z);

            for (let j = 0; j < count; j++) {
                const phi = (PI * 2 * j) / count;

                const x = currA * Math.cos(phi);
                const y = currB * Math.sin(phi);

                this.points.push(new Point(x, y, z));
            }
        }
    }
}

export default EllipticParaboloid;
