let  mic;




function setup(){
createCanvas (windowWidth,windowHeight, WEBGL);

mic = new p5.AudioIn();


mic.start();



}

function draw(){
background(70,255,25);

let vol = mic.getLevel();
let i = map(vol,0,0.5,20,100);
fill(255,0,0);
rect(100,100,i,30);
print(vol);
}




function touchStarted(){
  getAudioContext().resume();
}
