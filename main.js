var CV = document.getElementById("myCanvas");
var ctx = CV.getContext("2d");
var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";
var greencar_image_tag; 
var greencar_image_width = 75;
var greencar_image_height = 250;
var greencar_X = 5;
var greencar_Y = 225;
var background_image_tag;



function add(){
	background_image_tag = new Image();
	background_image_tag.onload = uploadBackground;
	background_image_tag.src = background_image;

	greencar_image_tag = new Image();
	greencar_image_tag.onload = uploadgreencar;
	greencar_image_tag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_image_tag, 0, 0, CV.width,CV.height)
}

function uploadgreencar() {
	ctx.drawImage(greencar_image_tag, greencar_X, greencar_Y, greencar_image_width, greencar_image_width)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_Y >= 0){
		greencar_Y = greencar_Y - 10;
		console.log("when up arrow is pressed, x =" + greencar_X + "| y=" + greencar_Y)
	  uploadBackground();
	  uploadgreencar();
	}
}

function down()
{
	if(greencar_Y <= 500){
		greencar_Y = greencar_Y + 10;
		console.log("when down arrow is pressed, x =" + greencar_X + "| y=" + greencar_Y)
	  uploadBackground();
	  uploadgreencar();
	}
}

function left()
{
	if(greencar_X >= 0){
		greencar_X = greencar_X - 10;
		console.log("when left arrow is pressed, x =" + greencar_X + "| y=" + greencar_Y)
	  uploadBackground();
	  uploadgreencar();
	}
}

function right()
{
	if(greencar_X <= 700){
		greencar_X = greencar_X + 10;
		console.log("when right arrow is pressed, x =" + greencar_X + "| y=" + greencar_Y)
	  uploadBackground();
	  uploadgreencar();
	}
}
