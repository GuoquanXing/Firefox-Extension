document.body.style.border = "5px solid red";
document.bgColor = "darkblue";

alert("Hello");

// define a new property on the window
window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
window.confirm = function() {
  alert("The page script has also redefined 'confirm'");
}

// add a new element to the DOM
var p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);