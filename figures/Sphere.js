import {Point, Edge, Polygon, Figure} from '../entities';

class Sphere extends Figure {
    constructor(count = 16, radius = 10, center = new Point()){
        super();
        this.center = center;
        this.count = count;
        this.radius = radius;
        this.init();
    }

    init() {
        this.clear();
        const { count, radius } = this;

        for (let teta = 0; teta <= Math.PI; teta+= Math.PI / count ) {
            for (let phi = 0; phi < Math.PI * 2; phi+= Math.PI * 2 / count ) {
                const x = this.center.x + radius * Math.sin(teta) * Math.cos(phi);
                const y = this.center.y + radius * Math.sin(teta) * Math.sin(phi);
                const z = this.center.z + radius * Math.cos(teta);
                this.points.push(new Point(x, z, y));
            }
        }
        // edges
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
        for (let i = 0; i < this.points.length - count; i++) {
            if ((i+1) % count === 0){
                this.polygons.push(new Polygon(
                [this.points[i],this.points[i + 1 - count],this.points[i + 1],this.points[ i + count]], '#ff00ff'));
            } else {
                this.polygons.push(new Polygon(
                [this.points[i],this.points[i + 1],this.points[i + 1 + count],this.points[ i + count]], '#ff00ff'));
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

export default Sphere;