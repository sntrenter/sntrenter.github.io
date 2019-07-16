
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var cube0 = new THREE.Mesh( geometry, material );
cube0.material.transparent = true;
scene.add( cube0 );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var cube1 = new THREE.Mesh( geometry, material );
cube1.material.transparent = true;
scene.add( cube1 );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var cube2 = new THREE.Mesh( geometry, material );
cube2.material.transparent = true;
scene.add( cube2 );


camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );
    //orbit numbers
    x = 1 * Math.sin(new Date().getTime() * .0025);
    z = 1 * Math.cos(new Date().getTime() * .0025);

    x1 = 1 * Math.sin(new Date().getTime() * .0025+(.5*Math.PI));
    z1 = 1 * Math.cos(new Date().getTime() * .0025+(.5*Math.PI));

    cube0.rotation.x += 0.01;
    cube0.rotation.y += 0.01;
    cube1.rotation.x -= 0.01;
    cube1.rotation.y -= 0.01;

    cube0.position.x = -1*x;
    cube0.position.z = -1*z;
    cube1.position.x = x;
    cube1.position.z = z;
    cube2.position.x = x1;
    cube2.position.z = z1;



    cube0.material.opacity = (1.3+ Math.sin(new Date().getTime() * .0025))/2;
    cube1.material.opacity = (1.3+ Math.cos(new Date().getTime() * .0025))/2;

    renderer.render( scene, camera );
};

animate();