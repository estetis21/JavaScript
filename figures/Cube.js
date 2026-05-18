import {Point, Edge, Polygon, Figure} from '../entities';
class Cube extends Figure {
    constructor(size = 10) {
        super();
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.currentSize = size;
        this.init(size);
    }

    init(size = 10) {
        this.currentSize = size;
        this.clear(); 
        const { x, y, z } = this;

        this.points.push(new Point(x + size, y + size, z + size));
        this.points.push(new Point(x - size, y + size, z + size));
        this.points.push(new Point(x - size, y - size, z + size));
        this.points.push(new Point(x + size, y - size, z + size));
        this.points.push(new Point(x + size, y + size, z - size));
        this.points.push(new Point(x - size, y + size, z - size));
        this.points.push(new Point(x - size, y - size, z - size));
        this.points.push(new Point(x + size, y - size, z - size)); 


        this.edges.push(new Edge(this.points[0], this.points[1]));
        this.edges.push(new Edge(this.points[1], this.points[2]));
        this.edges.push(new Edge(this.points[2], this.points[3]));
        this.edges.push(new Edge(this.points[3], this.points[0]));
        this.edges.push(new Edge(this.points[7], this.points[6]));
        this.edges.push(new Edge(this.points[5], this.points[6]));
        this.edges.push(new Edge(this.points[5], this.points[4]));
        this.edges.push(new Edge(this.points[4], this.points[7]));
        this.edges.push(new Edge(this.points[0], this.points[4]));
        this.edges.push(new Edge(this.points[7], this.points[3]));
        this.edges.push(new Edge(this.points[2], this.points[6]));
        this.edges.push(new Edge(this.points[5], this.points[1]));
        
        this.polygons.push(new Polygon([this.points[0], this.points[1], this.points[2], this.points[3]], '#ff00aa'));
        this.polygons.push(new Polygon([this.points[4], this.points[5], this.points[6], this.points[7]],'#ff00aa' ));
        this.polygons.push(new Polygon([this.points[0], this.points[4], this.points[7], this.points[3]], '#ff00aa'));
        this.polygons.push(new Polygon([this.points[3], this.points[7], this.points[6], this.points[2]], '#ff00aa'));
        this.polygons.push(new Polygon([this.points[1], this.points[2], this.points[6], this.points[5]], '#ff00aa'));
        this.polygons.push(new Polygon([this.points[0], this.points[1], this.points[5], this.points[4]], '#ff00aa'));
    }
    clear() {
        this.points = [];
        this.edges = [];
        this.polygons = [];
    }
    setSize(size) {
        this.clear();
        this.init(size);
    }

    setCenter(x, y, z) {
        if (x !== null) this.x = x;
        if (y !== null) this.y = y;
        if (z !== null) this.z = z;

        this.setSize(this.currentSize);
    }
}
export default Cube;