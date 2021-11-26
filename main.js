function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(350,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video,0,0,640,480);
}
function take_snapshot(){
    save('use-of-filter-web-app.png');
}