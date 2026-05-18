import { Point, Edge, Polygon, Figure } from '../entities';

class Tor extends Figure {
    constructor(radius = 10, count = 20, R = 20, center = new Point()) {
        super();
        this.center = center;
        this.count = count;
        this.radius = radius;
        this.R = R;
        this.init();
    }

    init() {
        this.clear();
        const { count, radius, R } = this;

        //points
        for (let ksi = -Math.PI; ksi < Math.PI; ksi += Math.PI / count) {
            for (let phi = 0; phi < Math.PI * 2; phi += Math.PI * 2 / count) {
                const x = this.center.x + (R + radius * Math.cos(ksi)) * Math.cos(phi);
                const y = this.center.y + (R + radius * Math.cos(ksi)) * Math.sin(phi);
                const z = this.center.z + radius * Math.sin(ksi);
                this.points.push(new Point(x, y, z));
            }
        }
        //edges
        for (let i = 0; i < this.points.length; i++) {
            // кольца
            this.edges.push(new Edge(this.points[i], this.points[(i + count) % this.points.length]));
            // линии между колец
            if ((i + 1) % count === 0) {
                this.edges.push(new Edge(this.points[i], this.points[i + 1 - count]));
            } else {
                this.edges.push(new Edge(this.points[i], this.points[i + 1]));
            }
        }
        // polygons
        for (let i = 0; i < this.points.length; i++) {
            if ((i + 1) % count === 0) {
                this.polygons.push(new Polygon([
                    this.points[i],
                    this.points[i + 1 - count],
                    this.points[(i + 1) % this.points.length],
                    this.points[(i + count) % this.points.length]
                ], '#ff0099'));
            } else {
                this.polygons.push(new Polygon([
                    this.points[i],
                    this.points[i + 1],
                    this.points[(i + 1 + count) % this.points.length],
                    this.points[(i + count) % this.points.length]
                ], '#ff0099'));
            }
        }
    }

    clear() {
        this.points = [];
        this.edges = [];
        this.polygons = [];
    }

    setSize(count) {
        this.count = count;
        this.init();
    }

    setRadius(radius) {
        this.radius = radius;
        this.init();
    }

    setR(R) {
        this.R = R;
        this.init();
    }
}

export default Tor;

