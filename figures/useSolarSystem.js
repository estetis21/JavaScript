import { Point } from "../entities";
import Sphere from "./Sphere";


const useSolarSystem = () => {
    
    const speed = 0.02

    const sun = new Sphere (20, 10);
    const earth = new Sphere(10, 5, new Point(30, 0, 0));
    const moon = new Sphere(20, 2, new Point(20, 0, 0));

    sun.addAnimation('rotateOz', speed / 2)

    earth.addAnimation('rotateOy', speed, sun.center);

    moon.addAnimation('rotateOy', speed, sun.center);
    moon.addAnimation('rotateOy', speed * 2, earth.center);

    return [sun, earth, moon]
}

export default useSolarSystem;