import {Point, Edge, Polygon, Figure} from '../entities';

class KleinBottle extends Figure {
    constructor(size = 5, count = 20) {
        super();
        this.count = count;
        this.size = size;
        this.init();
    
    }
    init() {
        this.clear();
        const { count, size } = this;

        for (let u = 0; u < 2 * Math.PI; u += 2 * Math.PI / count) {
            for (let v = 0; v < 2 * Math.PI; v += 2 * Math.PI / count) {
                let x, y, z;

                const cosU = Math.cos(u);
                const sinU = Math.sin(u);
                const cosV = Math.cos(v);
                const sinV = Math.sin(v);
                x = -2/15 * cosU * (3 * cosV - 30 * sinU + 90 * Math.pow(cosU, 4) * sinU - 60 * Math.pow(cosU, 6) * sinU + 5 * cosU * cosV * sinU);
                y = -1/15 * sinU * (3 * cosV - 3 * Math.pow(cosU, 2) * cosV - 48 * Math.pow(cosU, 4) * cosV + 48 * Math.pow(cosU, 6) * cosV - 60 * sinU + 5 * cosU * cosV * sinU - 5 * Math.pow(cosU, 3) * cosV * sinU - 80 * Math.pow(cosU, 5) * cosV * sinU + 80 * Math.pow(cosU, 7) * cosV * sinU);
                z = 2/15 * (3 + 5 * cosU * sinU) * sinV;

                this.points.push(new Point(
                    x * size, 
                    y * size, 
                    z * size
                ));
            }
        }


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

        for (let i = 0; i < this.points.length - count; i++) {
            if ((i+1) % count === 0){
                this.polygons.push(new Polygon(
                [this.points[i],this.points[i + 1 - count],this.points[i + 1],this.points[ i + count]], '#ff0099'));
            } else {
                this.polygons.push(new Polygon(
                [this.points[i],this.points[i + 1],this.points[i + 1 + count],this.points[ i + count]], '#ff0099'));
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

    setCount(count){
        this.count = count;
        this.init();
    }

}

export default KleinBottle;

