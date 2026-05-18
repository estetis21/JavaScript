import {Point, Edge, Polygon, Figure} from '../entities';


class HyperboloidOneSheet extends Figure {
    constructor(a = 10, b = 10, c = 10, count = 20, color = '#00bbff') {
        super();
        
        for (let i = 0; i <= count; i++) {
            let v = -2 + (2 * 2 * i) / count;
            for (let j = 0; j < count; j++) {
                let u = (Math.PI * 2 * j) / count;

                const x = a * Math.cosh(v) * Math.cos(u);
                const y = b * Math.cosh(v) * Math.sin(u);
                const z = c * Math.sinh(v);

                this.points.push(new Point(x, y, z));
            }
        }

        // edges
        for (let i = 0; i < this.points.length; i++) {

            if (i + count < this.points.length) {
                this.edges.push(new Edge(this.points[i], this.points[i + count]));
            }

            if ((i + 1) % count === 0) {
                this.edges.push(new Edge(this.points[i], this.points[i + 1 - count]));
            } else {
                this.edges.push(new Edge(this.points[i], this.points[i + 1]));
            }
        }

        // polygons
        for (let i = 0; i < this.points.length - count; i++) {
            if ((i + 1) % count === 0) {
                this.polygons.push(new Polygon([
                    this.points[i],
                    this.points[i + 1 - count],
                    this.points[i + 1],
                    this.points[i + count]
                ], color));
            } else {
                this.polygons.push(new Polygon([
                    this.points[i],
                    this.points[i + 1],
                    this.points[i + 1 + count],
                    this.points[i + count]
                ], color));
            }
        }
    }
}


export default HyperboloidOneSheet;

