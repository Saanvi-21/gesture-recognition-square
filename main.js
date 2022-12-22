function setup(){
    video = createCapture(VIDEO);
    video.size(450,450);

    canvas = createCanvas(550, 500);
    canvas.position(410, 150); 
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function draw(){
    document.getElementById("square_sides").innerHTML = "Width and Height of a Square will be "+ difference+ "px"
    background("gray");
    fill("#9400D3");
    stroke("#9400D3");
    square(noseX, noseY, difference);
      
}
function modelLoaded(){
    console.log("Pose Is Initialized!");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +"rightWristX = " + rightWristX);

    }
}