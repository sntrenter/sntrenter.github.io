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


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



let onButton = document.getElementById("onButton");
let offButton = document.getElementById("offButton");

var animating = null;
onButton.addEventListener('click',(event)=>{
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    numCubes = document.getElementById("number").value;
    cubes = [];
    cubesx = [];
    cubesy = [];
    cubesYOffSet = [];
    upDownSpeed = [];
    for(i=0;i<numCubes;i++){

        var material = new THREE.MeshBasicMaterial( { color: getRandomColor() } );
        cubes[i] = new THREE.Mesh( geometry, material );
        cubes[i].material.transparent = true;
        cubesx[i] = (Math.random() / 10);
        cubesy[i] = (Math.random() / 10);
        cubesYOffSet[i] = (Math.random()*(2*Math.PI));
        upDownSpeed[i] = ((Math.random()*10)/4);
        scene.add(cubes[i])

    
    }
    var size = 100;
    var divisions = 100;

    var gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );
    gridHelper.position.y = -2;
    if(animating == null){animate();animating = true;}
    console.log("on");
});
offButton.addEventListener('click',(event)=>{
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    scene.dispose();
    console.log("off");
});


var animate = function () {
    requestAnimationFrame( animate );
    for(i=0;i<cubes.length;i++){
        cubes[i].position.x = 5 * Math.sin(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
        cubes[i].position.z = 5 * Math.cos(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
        cubes[i].position.y = 3 * Math.sin(upDownSpeed[i]*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI))-cubesYOffSet[i]);
        //cubes[i].rotation.x += 0.03;
        //cubes[i].rotation.y += 0.03;
        cubes[i].rotation.x += cubesx[i];
        cubes[i].rotation.y += cubesy[i];

    }


    renderer.render( scene, camera );
};
