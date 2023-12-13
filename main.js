noseX = 0;
noseY = 0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    fill('#F90093');
textSize(diffrence);
text('Ernesto',100,100)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose = "+ noseX +" noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX +" rightWristX = "+rightWristX+" diffrence = "+ diffrence);

    }
}

