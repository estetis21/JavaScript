import {Point, Edge, Polygon, Figure} from '../entities';


class ParabolicCylinder extends Figure {
    constructor(a = 0.2, size = 10, length = 20, count = 20, color = '#ff7700') {
        super();


        for (let i = 0; i < count; i++) {
            let x = ((i / (count - 1)) - 0.5) * size * 2; 
            for (let j = 0; j < count; j++) {
                let y = ((j / (count - 1)) - 0.5) * length;
                let z = a * Math.pow(x, 2);
                this.points.push(new Point(x, y, z));
            }
        }

        //Edges
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                let current = i * count + j;

                if (i + 1 < count) {
                    this.edges.push(new Edge(
                        this.points[current], 
                        this.points[(i + 1) * count + j]
                    ));
                }

                if (j + 1 < count) {
                    this.edges.push(new Edge(
                        this.points[current], 
                        this.points[current + 1]
                    ));
                }
            }
        }

        //Polygons
        for (let i = 0; i < count - 1; i++) {
            for (let j = 0; j < count - 1; j++) {
                this.polygons.push(new Polygon([
                    this.points[i * count + j],
                    this.points[(i + 1) * count + j],
                    this.points[(i + 1) * count + (j + 1)],
                    this.points[i * count + (j + 1)]
                ], color));
            }
        }
    }
}


export default ParabolicCylinder;

