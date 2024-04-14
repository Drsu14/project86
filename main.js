var mouseEvent = "empty";
var last_position_of_X, last_position_of_Y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener( "mousedown", my_mousedown);
 function my_mousedown(e) {
	color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener( "mouseleave", my_mouseleave);
 function my_mouseleave(e) {
	
    mouseEvent="mouseleave";
}
canvas.addEventListener( "mouseup", my_mouseup);
 function my_mouseup(e) {
	
    mouseEvent="mouseUP";
}
canvas.addEventListener( "mousemove", my_mousemove);
 function my_mousemove(e) {
	current_position_of_mouse_X=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown") {
        console.log("current position of x and y coordinates = ");
        console.log("x = "+current_position_of_mouse_X + " y = "+current_position_of_mouse_Y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_X , current_position_of_mouse_Y, 10, 0, 2*Math.PI);
       
        
        ctx.stroke();  
    }
    
    last_position_of_X=current_position_of_mouse_X;
    last_position_of_Y=current_position_of_mouse_Y;
}
 