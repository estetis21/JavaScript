import { Point } from "../entities";
import Sphere from "./Sphere";
import Tor from "./Tor";


const useTorSphereSystem = () => {

    const speed = 0.02

    const tor = new Tor(5, 20, 15);

    tor.secondCenter = new Point(17, 0, 0);

    const sphere = new Sphere(10, 4, new Point(25, 0, 0));

    tor.addAnimation('rotateOy', speed / 2)

    sphere.addAnimation('rotateOy', speed * 2, tor.center);
    sphere.addAnimation('rotateOy', speed * 2, tor.secondCenter);

    return [tor, sphere];
}

export default useTorSphereSystem;