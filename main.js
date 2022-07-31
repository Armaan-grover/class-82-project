var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var colour = "green";
var width = "1";
var radius = "3"
var mouseEvent = "";
var currentX, currentY, lastX, lastY;


canvas.addEventListener("mousedown", myMouseDown)

function myMouseDown(e) {
    colour = document.getElementById("colour").value
    width = document.getElementById("width").value
    radius=document.getElementById("radius").value
    mouseEvent = "myMouseDown";
}

canvas.addEventListener("mouseup", myMouseUp)

function myMouseUp(e) {
    mouseEvent="myMouseUp"
}
canvas.addEventListener("mouseleave", myMouseUp)

function myMouseUp(e) {
    mouseEvent="mouseLeave"
}





canvas.addEventListener("mousemove", mouseMoveFunc)
function mouseMoveFunc(e) {
    colour = document.getElementById("colour").value
    width = document.getElementById("width").value
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc = (currentX, currentY, radius, 0, 2 * Math.PI)
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}

function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}