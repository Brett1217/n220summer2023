//The given array of objects
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
    
    { color: "#FFFF00", height: 200, width: 200 },
    
    { color: "#ff0000", height: 300, width: 100 },
    
    ];
    
    //Here, I am using the forEach loop which will iterate through each of the elements of the array 'objects'
    objects.forEach((obj) => {
    
    /*Here, obj will be passed as an element of the array: 'objects'
    With every iteration, the value of obj will be changed to the next element
    and it will go upto to last element of the array: 'objects'
    */
    let div = document.createElement("div"); //Creating a div element
    div.setAttribute('color', obj.color); //Setting the color attribute of the div element to the obj.color
    div.setAttribute('height', obj.height); //Setting the height attribute of the div element to the obj.height
    div.setAttribute('width', obj.width); //Setting the width attribute of the div element to the obj.width
    
    document.body.appendChild(div); //Finally appending the div elements to the body
    });
    
    
    
    