var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );



camera.position.z = 10;
camera.position.y = 10;
camera.rotation.x = -1;




let onButton = document.getElementById("onButton");
let offButton = document.getElementById("offButton");






onButton.addEventListener('click',(event)=>{
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    numCubes = document.getElementById("number").value;
    cubes = []
    for(i=0;i<numCubes;i++){
        cubes[i] = new THREE.Mesh( geometry, material );
        cubes[i].material.transparent = true;
        scene.add(cubes[i])
    
    }
    animate();
    console.log("on");
});
offButton.addEventListener('click',(event)=>{
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    console.log("off");
});


var animate = function () {
    animation = window.requestAnimationFrame(animate);
    requestAnimationFrame( animate );
    for(i=0;i<cubes.length;i++){
        cubes[i].position.x = 5 * Math.sin(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
        cubes[i].position.z = 5 * Math.cos(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
        cubes[i].rotation.x += 0.03;
        cubes[i].rotation.y += 0.03;
    }


    renderer.render( scene, camera );
};

