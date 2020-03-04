const myHeading = document.querySelector('h1');
myHeading.textContent = 'Eric Choy\'s Lab 4';

/*var para1 = document.createElement("P");
para1.innerText = "my name has 4 characters";
$(".content").appendChild(para1);
/*var node1 = document.createTextNode("my name has 4 characters");
para1.appendChild(node1);*/

//var content = document.getElementById("content");

var para = document.createElement("p");
var node = document.createTextNode("my name has 4 characters");
para.appendChild(node);

var element = document.getElementsByClassName("content")
element[0].appendChild(para);
