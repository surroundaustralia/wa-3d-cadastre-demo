import * as THREE from 'three';
import { OrbitControls } from 'controls';

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Scene
const scene = new THREE.Scene();

// Create scene objects
//Base Parcel
const verticesOfBaseParcel = new Float32Array([
    -20.1485, -5.646, 0, // 4097 - 0
    18.5055, -10.432, 0, // 4113 - 1
    18.4175, 7.524, 0, // 4309 - 2
    -16.7745, 8.554, 0 // 4326 - 3
]);

const indicesOfBaseParcelFaces = [
    2, 3, 0,
    2, 0, 1
];

const geometryBaseParcel = new THREE.BufferGeometry();
// itemSize = 3 because there are 3 values (components) per vertex
geometryBaseParcel.setAttribute('position', new THREE.Float32BufferAttribute(verticesOfBaseParcel, 3));
geometryBaseParcel.setIndex(indicesOfBaseParcelFaces);

// Create materials
const baseParcelMaterial = new THREE.MeshBasicMaterial({
    color: '#e6e6e6',
    side: THREE.DoubleSide
});

//Create meshes
const BP_mesh = new THREE.Mesh(geometryBaseParcel, baseParcelMaterial);

// Add mesh to scene
scene.add(BP_mesh);

// Create Surface
const verticesForSurface = new Float32Array([
    -20.1485, -5.646, 22.59, // 1003 - 0
    18.5055, -10.432, 23.7, //1002 - 1
    18.4175, 7.524, 23.5, // 1001 - 2
    -16.7745, 8.554, 22.05, // 1004 - 3
    -13.8195, 6.967, 23.05, // 2001 - 4
    6.1715, 6.383, 23.75, // 2002 - 5
    6.0345, 1.194, 23.85, // 2003 - 6
    5.8995, -3.914, 23.8, // 2004 - 7
    -14.0935, -3.386, 23.05, // 2005 - 8
    -13.9575, 1.744, 23.1 // 2006 - 9
]);

const indicesForSurfaceFaces = [
    4, 5, 3,
    3, 5, 2,
    5, 6, 2,
    2, 6, 1,
    6, 7, 1,
    1, 7, 0,
    0, 7, 8,
    8, 9, 0,
    0, 9, 3,
    3, 9, 4
];

const geometryGroundSurface = new THREE.BufferGeometry();
// itemSize = 3 because there are 3 values (components) per vertex
geometryGroundSurface.setAttribute('position', new THREE.Float32BufferAttribute(verticesForSurface, 3));
geometryGroundSurface.setIndex(indicesForSurfaceFaces);

// Create materials
const surfaceMaterial = new THREE.MeshBasicMaterial({
    color: '#66ff66',
    side: THREE.DoubleSide
});

//Create meshes
const GS_mesh = new THREE.Mesh(geometryGroundSurface, surfaceMaterial);

// Add mesh to scene
scene.add(GS_mesh);

// Duplex 1
const verticesForDuplex1 = new Float32Array([
    -13.8195, 6.967, 22, //	2101 - 0
    -13.8195, 6.967, 23.05, // 2001 - 1
    -13.8195, 6.967, 32, // 2201 - 2
    6.1715, 6.383, 32, // 2202 - 3
    6.1715, 6.383, 23.75, // 2002 - 4
    6.1715, 6.383, 22, // 2102 - 5
    -13.9575, 1.744, 22, // 2106 - 6
    -13.9575, 1.744, 23.1, // 2006 - 7
    -13.9575, 1.744, 32, // 2206 - 8
    6.0345, 1.194, 32, // 2203 - 9
    6.0345, 1.194, 23.85, // 2003 - 10
    6.0345, 1.194, 22, // 2103 - 11
]);

const indicesForDuplex1Faces = [
    7, 8, 9,
    7, 9, 10,
    6, 8, 10,
    6, 10, 11,
    2, 3, 1,
    3, 4, 1,
    1, 4, 5,
    1, 5, 0,
    2, 8, 3,
    8, 9, 3,
    1, 8, 2,
    1, 7, 8,
    0, 7, 1,
    0, 6, 7,
    4, 3, 9,
    4, 9, 10,
    5, 4, 10,
    5, 10, 11,
    0, 5, 11,
    0, 11, 6,
];

const geometryDuplex1 = new THREE.BufferGeometry();
// itemSize = 3 because there are 3 values (components) per vertex
geometryDuplex1.setAttribute('position', new THREE.Float32BufferAttribute(verticesForDuplex1, 3));
geometryDuplex1.setIndex(indicesForDuplex1Faces);

// Create materials
const duplex1Material = new THREE.MeshBasicMaterial({
    color: '#ffa64d'
});

//Create meshes
const D1_mesh = new THREE.Mesh(geometryDuplex1, duplex1Material);

// Add mesh to scene
scene.add(D1_mesh);

const D1_edges = new THREE.EdgesGeometry(geometryDuplex1);
const D1_line = new THREE.LineSegments(D1_edges, new THREE.LineBasicMaterial({
    color: 0xffffff
}));
scene.add(D1_line);

// Duplex 2
const verticesForDuplex2 = new Float32Array([
    -13.9575, 1.744, 22, //	2106 - 0
    -13.9575, 1.744, 23.1, //	2006 - 1
    -13.9575, 1.744, 32, //	2206
    6.0345, 1.194, 32, //	2203
    6.0345, 1.194, 23.85, //	2003
    6.0345, 1.194, 22, //	2103
    -14.0935, -3.386, 22, //	2105
    -14.0935, -3.386, 23.05, //	2005
    -14.0935, -3.386, 32, //	2205
    5.8995, -3.914, 32, //	2204
    5.8995, -3.914, 23.8, //	2004
    5.8995, -3.914, 22, //	2104

]);

const geometryDuplex2 = new THREE.BufferGeometry();
// itemSize = 3 because there are 3 values (components) per vertex
geometryDuplex2.setAttribute('position', new THREE.Float32BufferAttribute(verticesForDuplex2, 3));
geometryDuplex2.setIndex(indicesForDuplex1Faces);

// Create materials
const duplex2Material = new THREE.MeshBasicMaterial({
    color: '#e67300'
});

//Create meshes
const D2_mesh = new THREE.Mesh(geometryDuplex2, duplex2Material);

// Add mesh to scene
scene.add(D2_mesh);

const D2_edges = new THREE.EdgesGeometry(geometryDuplex2);
const D2_line = new THREE.LineSegments(D2_edges, new THREE.LineBasicMaterial({
    color: 0xffffff
}));
scene.add(D2_line);

// Lights
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(-100, 100, 100);
scene.add(light);

// Cameras
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.01, 1000);
//camera.position.z = 100;
camera.position.set(-60,60,60)
camera.zoom = 1;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance"
});
renderer.setSize(sizes.width, sizes.height);
//renderer.setAnimationLoop(animate);
renderer.render(scene, camera);

// controls

const controls = new OrbitControls( camera, renderer.domElement );
controls.listenToKeyEvents( window ); // optional

controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.05;

controls.screenSpacePanning = false;

controls.minDistance = 0.01;
controls.maxDistance = 100;

controls.maxPolarAngle = Math.PI;

function animate() {
    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    render();
}

function render() {
    renderer.render( scene, camera );
}

//Resize
window.addEventListener("resize", () => {
    //Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    //Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop()



