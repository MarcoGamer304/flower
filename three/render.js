import scene from './scene/scene';
import renderer from './render/renderer';
import { setControls } from './controls/controls';
import camera from './camera/camera';
import { light } from './light/ilumination';
import { thread } from './thread/hilo';
import { modelLoader } from './GLTFLoader/modelLoader';
import { Vector3 } from 'three';
import { getObject } from './GLTFLoader/modelLoader';

let objToRender = 'flower';
//const controls = setControls(camera, renderer);
const canvasFrame = document.getElementById('frame');

light(scene);

modelLoader(scene, renderer ,canvasFrame, objToRender, camera);


thread(scene, camera, renderer);