import {Point, Edge, Polygon, Figure} from '../entities';

class EllipticCylinder extends Figure {
    constructor(a = 15, b = 10, h = 40, count = 10, hCount = 6, color = '#00ff99') {
        super();
        const PI = Math.PI;

        for (let i = 0; i < hCount; i++) {
            let z = (i / (hCount - 1) - 0.5) * h; 
            for (let j = 0; j < count; j++) {
                let phi = (j / count) * 2 * PI;
                let x = a * Math.cos(phi);
                let y = b * Math.sin(phi);
                this.points.push(new Point(x, y, z));
            }
        }

        //Edges
        for (let i = 0; i < this.points.length; i++) {
            if ((i + 1) % count === 0) {
                this.edges.push(new Edge(this.points[i], this.points[i + 1 - count]));
            } else {
                this.edges.push(new Edge(this.points[i], this.points[i + 1]));
            }

            if (i + count < this.points.length) {
                this.edges.push(new Edge(this.points[i], this.points[i + count]));
            }
        }

        //Polygons
        for (let i = 0; i < this.points.length - count; i++) {

            this.polygons.push(new Polygon([
                this.points[i],
                this.points[(i + 1) % count === 0 ? i + 1 - count : i + 1],
                this.points[((i + 1) % count === 0 ? i + 1 - count : i + 1) + count],
                this.points[i + count]
            ], color));
        }
    }
}


export default EllipticCylinder;

