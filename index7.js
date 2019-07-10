var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let onButton = document.getElementById("onButton");
let offButton = document.getElementById("offButton");

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

function GRIDHELPER(){
    var size = 100;
    var divisions = 100;
    var gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );
    gridHelper.position.y = -2;
}


function setPosition(cubeObj){
    cubeObj.cube.position.x = 5 * Math.sin(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
    cubeObj.cube.position.z = 5 * Math.cos(.5*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI)));
    cubeObj.cube.position.y = 3 * Math.sin(cubeObj.ySpeed*(new Date().getTime() * .0025)+((i/cubes.length)*(2*Math.PI))-cubeObj.yOffSet);
}
function setRotation(cubeObj){
    cubeObj.cube.rotation.x += cubeObj.rotation.x; 
    cubeObj.cube.rotation.y += cubeObj.rotation.y;
    
}
function setScale(cubeObj){
    cubeObj.cube.scale.set(
        (cubeObj.scaleSpeed*(Math.sin((new Date().getTime() * .0025))/4)+1),
        (cubeObj.scaleSpeed*(Math.sin((new Date().getTime() * .0025))/4)+1),
        (cubeObj.scaleSpeed*(Math.sin((new Date().getTime() * .0025))/4)+1)
        );
}

var animating = null;
onButton.addEventListener('click',(event)=>{
    while(scene.children.length > 0){ scene.remove(scene.children[0]);  }
    numCubes = document.getElementById("number").value;
    cubes = [];
    for(i=0;i<numCubes;i++){
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: getRandomColor() } );
        cubes[i] =  {
            cube : new THREE.Mesh(geometry,material),
            rotation : {x:(Math.random() / 10),y:(Math.random() / 10)},
            yOffSet:(Math.random()*(2*Math.PI)),
            ySpeed:((Math.random()/2)), 
            scaleSpeed: Math.random() / 2,
        }
        cubes[i].cube.material.transparent = true;
        scene.add(cubes[i].cube)
    }
    GRIDHELPER()
    if(animating == null){animate();animating = true;}
    console.log("on");
});

var animate = function () {
    requestAnimationFrame( animate );
    for(i=0;i<cubes.length;i++){
        setPosition(cubes[i]);
        setRotation(cubes[i]);
        setScale(cubes[i]);
    }
    renderer.render( scene, camera );
};

offButton.addEventListener('click',(event)=>{
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    scene.dispose();
    console.log("off");
});