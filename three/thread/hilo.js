import { getObject } from "../GLTFLoader/modelLoader";

export function thread(scene, camera, renderer){
    const animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
       // getObject().rotation.y += 0.005
    };
    animate();
}