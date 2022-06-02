function drawblackcircle()

{

var x=100;

for ( var i=0; i<1250;i+=50)

{

fill(0); // For Circle, fill parameter is 0

ellipse(i,x,50,50); // As given the condition divisible by 3 to draw a purple circle.

if(i%3==0) // Iterand is divisible by 3 to draw a purple circle

{

fill(153,30,240);

ellipse(i,x,50,50); // Here we using ellipse for purple circle

}

if(i%5==0)   // Iterand is divisible by 5 to draw a green square

{

fill(0,255,0); // For green color use r,g, and b color is 0, 255, and 0. For Green color we have to write 255 and in other color mention is 0

// The default color space is RGB, with each value in the range from 0 to 255

square(i+25,x-25,50);

}

if(i%3==0 && i%5==0) // Iterand is divisible by 3 and 5 to draw a blue square

{

fill(0,0,255); // For blue color use r,g, and b color is 0, 0, and 255. For Blue color we have to write 255 and in other color mention is 0

// The default color space is RGB, with each value in the range from 0 to 255

square(i+25,x-25,50);

}

}

}