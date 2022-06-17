<!DOCTYPE html>

<html lang="en">
<head>

<!-- <title> tag is used to place the title for web page -->

<title>Welcome user</title>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

Enter Name :

<!-- textbox for name -->

<input type="text" id="txtName"/>

<br> <br>

<!-- button -->

<input type="button" value="Submit" onclick="welcomeUser()"/>

<!-- <script> tag is used for javascript -->

<script>

//function

function welcomeUser()

{

//getting name entered by user

var userName=document.getElementById("txtName").value;

//display greet message to the user

console.log("Hello "+userName);

}

</script>

</body>

</html>