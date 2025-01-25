import { PerspectiveCamera} from "three";

const camera = new PerspectiveCamera(75, 350 / 350, 0.1, 2000);

camera.position.set(10, 5, 5);

export default camera;