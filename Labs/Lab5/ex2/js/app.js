var content = document.getElementById("content");
var btn = document.getElementById("btn");
var width = 400;
btn.addEventListener("click", function() {
    width +=100;
    content.style.width = width + "px";
});


#content {
    width: 100px;
    height: 50px;
    background: lightblue;
    transition: all 1s ease-in-out
}

#btn {
    width: 100px;
    height: 50px;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
}

a {
    color: white;
    text-decoration: none;
  }



  <><div id="content"></div><div id="btn"><a href="#">Click</a></div></>



}