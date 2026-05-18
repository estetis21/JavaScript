import {Point, Figure} from '../entities';


class HyperboloidTwoSheet extends Figure {
    constructor(a = 10, b = 10, c = 15, umax = 2, count = 50) {
        super();
        const PI = Math.PI;
        const stepU = umax / count;
        const stepV = (2 * PI) / count;    

        for (let u = stepU; u <= umax; u += stepU) {
            const sh = Math.sinh(u);
            const ch = Math.cosh(u);
            for (let v = 0; v < 2 * PI; v += stepV) {
                const x = a * sh * Math.cos(v);
                const y = b * sh * Math.sin(v);
                // верхняя полость 
                this.points.push(new Point(x, y, c * ch));
                // нижняя полость 
                this.points.push(new Point(x, y, -c * ch));
            }
        }
    }
}

export default HyperboloidTwoSheet;