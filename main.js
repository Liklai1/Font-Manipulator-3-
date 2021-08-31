difference = 0;
rightWristX= 0;
leftWristX= 0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas= createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#b1d8fa');
    document.getElementById("sq_sides").innerHTML="width and height of the will be = " + difference+ "px";
    textSize(difference);
    fill('#4aabff');
    stroke('#184e7d');
    text('Liklai', 50, 400);
}
function modelLoaded(){
    console.log('poseNetisinitialized');
}
function gotPoses(results){

    if(results.length>0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);
        console.log("leftWristX="+ leftWristX + "rightWristX=" + rightWristX + "difference="+ difference);
    }
}