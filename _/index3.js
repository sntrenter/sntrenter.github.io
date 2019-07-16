var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );



numCubes = 12;
cubes = []
for(i=0;i<numCubes;i++){
    cubes[i] = new THREE.Mesh( geometry, material );
    cubes[i].material.transparent = true;
    scene.add(cubes[i])

}



camera.position.z = 5;
camera.position.y = 5;
camera.rotation.x = -1;

var animate = function () {
    requestAnimationFrame( animate );
    for(i=0;i<cubes.length;i++){
        cubes[i].position.x = 3 * Math.sin(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
        cubes[i].position.z = 3 * Math.cos(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
    }


    renderer.render( scene, camera );
};

animate();