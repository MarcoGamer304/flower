import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Vector3 } from 'three';

const loader = new GLTFLoader();

let object;

export function modelLoader(scene, renderer, canvasFrame, objToRender, camera) {
    loader.load(
        `models/${objToRender}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;

            object.traverse((child) => {
                if (child.isMesh) {
                    if (!child.material.onBeforeRender) {
                        child.material.onBeforeRender = function () { };
                    }
                }
            });
            scene.add(object);
            canvasFrame.appendChild(renderer.domElement);
            
            const direction = new Vector3();
            camera.getWorldDirection(direction); 

            const distance = 2;
            const cameraPosition = camera.position.clone();
            const flowerPosition = cameraPosition.add(direction.multiplyScalar(distance));
            

            object.position.set(flowerPosition.x, flowerPosition.y+.5, flowerPosition.z);
            object.rotation.z += 0.1;

        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error(error);
            alert(error);
        }
    );
    return object;
}

export function getObject(){
  return object;
}
