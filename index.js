var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var cube1 = new THREE.Mesh( geometry, material );
cube1.material.transparent = true;
scene.add( cube1 );

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube1.rotation.x += 0.03;
    cube1.rotation.y += 0.03;
    cube1.material.opacity = (1+ Math.sin(new Date().getTime() * .0025))/2;
    //console.log((1+ Math.sin(new Date().getTime() * .0025))/2);
    renderer.render( scene, camera );
};

animate();