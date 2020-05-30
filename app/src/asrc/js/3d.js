
console.log('loading 3d.js ...')

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 )
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.BoxGeometry(50, 50, 50);
var material = new THREE.MeshBasicMaterial({ color : 0x00E16941 });

camera.position.set(0, 0, 3000)
camera.lookAt( 0, 0, 0 );

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

let animate = function () {

	requestAnimationFrame( animate )
	cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    
    renderer.render( scene, camera )
    
}
animate();


let moveCamera = function(x = 0, y = 0, z = 0) {
    camera.position.x += x
    camera.position.y += y
    camera.position.z += z
    camera.lookAt(0,0,0)
}

console.log('load succesfull : 3d.js')