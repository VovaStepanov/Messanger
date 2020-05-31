
console.log('loading 3d.js ...')


console.log('loading 3d.js ...')

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 )
let renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
let geometry = new THREE.BoxGeometry(50, 50, 50);
let material = new THREE.MeshBasicMaterial({ color : 0x00E16941 });
// let cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
camera.position.z = 5;

let geometry2 = new THREE.BoxGeometry(10000, 0, 10000);
let material1 = new THREE.MeshBasicMaterial({color : 0x8B888E});

let cube1 = new THREE.Mesh( geometry2, material1 )

cube1.position.x = 0
cube1.position.y = -1
cube1.position.z = 0 

scene.add(cube1)
// renderer.setClearColor(0xEEEEEE);

camera.position.set(3, 0, 5)
camera.lookAt( 0, 0, 0 );

let points = []
points.push( new THREE.Vector3( - 100, 0, 0))
points.push( new THREE.Vector3( 100, 0, 0))
points.push( new THREE.Vector3( 0, 0, -100))
points.push( new THREE.Vector3( 0, 0, 100))

let geometry1 = new THREE.BufferGeometry().setFromPoints(points)

let line = new THREE.Line( geometry1, material1 );


scene.add(line);

var sphere_geometry = new THREE.SphereGeometry(300)
var sphere_texture = new THREE.MeshNormalMaterial()
var sphere = new THREE.Mesh(sphere_geometry, sphere_texture)
scene.add(sphere)

let moveCamera = function(x = 0, y = 0, z = 0) {
    camera.position.x += x
    camera.position.y += y
    camera.position.z += z
    camera.lookAt(0,0,0)
}


let animate = function () {

	requestAnimationFrame( animate )
	sphere.rotation.x += 0.01
    sphere.rotation.y += 0.01
    
    renderer.render( scene, camera )
    
}
animate();

let setBlock = function(x, y, z, color) {
    let newMaterial = new THREE.MeshBasicMaterial(color)
    let cube1 = new THREE.Mesh( geometry, material1 )

}
moveCamera(400, 800, 100)
sphere.position.y += 100

function animation() {
    requestAnimationFrame(animation)

    for (let i = 0; i < 100; i++) {
        let cube = new THREE.Mesh( geometry, material );
        cube.position.x = Math.random()*700 - 350;
        cube.position.y = Math.random()*700 - 350;
        cube.position.z = Math.random()*900 - 450;
        cube.position.z = Math.random()*360*180/Math.PI;
        group.add(cube);
    }
    scene.add(group);
    camera.position.z -= 1;
    renderer.render(scene, camera)
}
console.log('load succesfull : 3d.js')

console.log('load succesfull : 3d.js')