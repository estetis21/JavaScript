import {Point, Figure} from '../entities';


class Saddle extends Figure {
    constructor(a = 5, b = 5, range = 20, count = 50) {
        super();

        for (let i = 0; i <= count; i++) {

            const x = -range + (2 * range * i) / count;

            for (let j = 0; j <= count; j++) {

                const y = -range + (2 * range * j) / count;
                const z = (x * x) / (a * a) - (y * y) / (b * b);

                this.points.push(new Point(x, y, z));
            }
        }
    }
}

export default Saddle;

