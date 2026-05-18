import {Point, Edge, Polygon, Figure} from '../entities';

class Heart extends Figure {
    constructor(radius = 10, count = 20 ) {
        super();
        this.radius = radius;
        this.count = count;
        this.init()

    }

    init() {
        this.clear();
        const { count, radius} = this;

        for (let u = -Math.PI; u < Math.PI; u += (2 * Math.PI) / count) {
            for (let v = 0; v < Math.PI; v += Math.PI / count) {
                const x = 16 * Math.pow(Math.sin(u), 3) * Math.sin(v);
                const y = (13 * Math.cos(u) - 5 * Math.cos(2 * u) - 2 * Math.cos(3 * u) - Math.cos(4 * u)) * Math.sin(v);
                const z = radius * Math.cos(v);

                this.points.push(new Point(x * (radius / 10), y * (radius / 10), z));
            }
        }
        //edges
        for (let i = 0; i < this.points.length; i++) {
            if (this.points[i + 1]){
                if (( i + 1) % count === 0) {
                    if (this.points[i - count]){
                        this.edges.push(new Edge(this.points[i], this.points[i + 1 - count]))
                    }
                } else {
                    this.edges.push(new Edge(this.points[i], this.points[i + 1]));
                }
            }
            if (this.points[i + count]) {
                this.edges.push(new Edge(this.points[i], this.points[i + count]));
            }
        }
        // polygons
        for (let i = 0; i < count; i++) { 
            for (let j = 0; j < count - 1; j++) {            
                this.polygons.push(new Polygon([
                    this.points[i * count + j],
                    this.points[((i + 1) % count) * count + j],
                    this.points[((i + 1) % count) * count + j + 1],
                    this.points[i * count + j + 1]
                ], '#ff0073'));
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

    setRadius(radius){
        this.radius = radius;
        this.init();
    }
}

export default Heart;
