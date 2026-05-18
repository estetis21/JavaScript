import {Point, Figure} from '../entities';

class Ellipsoid extends Figure {
    constructor(radiusX = 20, radiusY = 15, radiusZ = 10, count = 50) {
        super();
        const PI = Math.PI;

        for (let ksi = -PI / 2; ksi <= PI / 2; ksi += PI / count) {
            for (let phi = 0; phi < PI * 2; phi += (PI * 2) / count) {
                const x = radiusX * Math.cos(ksi) * Math.cos(phi);
                const y = radiusY * Math.cos(ksi) * Math.sin(phi);
                const z = radiusZ * Math.sin(ksi);

                this.points.push(new Point(x, y, z));
            }
        }
    }
}
export default Ellipsoid;