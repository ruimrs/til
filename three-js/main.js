import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // allows you to control to scene using our mouse

// to use the threejs we will always need a scene, a camera and a renderer

// a scene is a container that holds all your objects, cameras and lights
const scene = new THREE.Scene();

// a camera is used to look inside the scene - most used is the perspectivecamera, it mimics what the human eyeball sees
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// the renderer, renders all the graphics - make magic hpn, needs to know what DOM element to use.
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
});

renderer.setPixelRatio(window.devicePixelRatio);

// making a full screen canvas
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff); //A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb.
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff); //This light globally illuminates all objects in the scene equally.

scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight); //helps you to see the position and direction of the light source
const gridHelper = new THREE.GridHelper(200, 5); //draws a grid
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement); //this will listen to DOM events on the mouse and will update the camera pos

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  // to add stars to random positions
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

//how to create a texture with an image
const spaceTexture = new THREE.TextureLoader().load("nebula.jpeg");
scene.background = spaceTexture;

//create a 3d element with your own image
const pokeballTexture = new THREE.TextureLoader().load("pokeball.png");
const pokeball = new THREE.Mesh(
  new THREE.BoxGeometry(5, 5, 5),
  new THREE.MeshBasicMaterial({ map: pokeballTexture })
);
scene.add(pokeball);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

animate();
