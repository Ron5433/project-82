var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouseevent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_x=e.clientX - canvas.offsetLeft;
current_y=e.clientY - canvas.offsetTop;
if(mouseevent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;

console.log("last position of x and y");
console.log("x="+lastx+"y="+lasty);
ctx.moveTo(lastx,lasty);

console.log("current position of x and y");
console.log("x="+current_x+"y="+current_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();

}
lastx=current_x;
lasty=current_y;

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseleave";
}

function clear_canvas(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}