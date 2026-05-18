import {Point, Edge, Polygon, Figure} from '../entities';


class HyperbolicCylinder extends Figure {
    constructor(a = 5, b = 5, height = 20, count = 10, color = '#0084ff') {
        super();
        this.pointsLeft = [];
        this.pointsRight = [];
        for (let t = -2; t <= 2; t += 4 / count) {
            for (let z = -height / 2; z <= height / 2; z += height / count) {
                const x1 = a * Math.cosh(t);
                const y1 = b * Math.sinh(t);
                this.pointsRight.push(new Point(x1, y1, z));

                const x2 = -a * Math.cosh(t);
                const y2 = b * Math.sinh(t);
                this.pointsLeft.push(new Point(x2, y2, z));
            }
        }
        this.points = [...this.pointsRight, ...this.pointsLeft];
        // edges
        const n = count + 1;
        for (let b = 0; b < 2; b++) { 
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) { 

                    if (j < n - 1) {
                        this.edges.push(new Edge(this.points[b * n * n + i * n + j], this.points[b * n * n + i * n + j + 1]
                        ));
                    }
                    if (i < n - 1) {
                        this.edges.push(new Edge(this.points[b * n * n + i * n + j], this.points[b * n * n + i * n + j + n]
                        ));
                    }
                }
            }
        }

        // polygons
        for (let lr = 0; lr < 2; lr++) {
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1; j++) {
                    this.polygons.push(new Polygon([
                            this.points[lr * n * n + i * n + j], this.points[lr * n * n + i * n + (j + 1)],
                            this.points[lr * n * n + (i + 1) * n + (j + 1)], this.points[lr * n * n + (i + 1) * n + j]
                        ], color
                    ));
                }
            }
        }

    }
}

export default HyperbolicCylinder;

