function basicToggle() {
  var x = document.getElementById("Nigeria");
  var y = document.getElementById("Ghana");
  if(x.style.display === "none"){
    x.style.display = "block"
    y.style.display = "none"
  }
 else {
  x.style.display = "none";
  y.style.display = "none";
 }
}

function intermediateToggle() {
  var x = document.getElementById("Nigeria");
  var y = document.getElementById("Ghana");
  if(y.style.display === "none"){
    y.style.display = "block"
    x.style.display = "none"
  }
else {
  y.style.display = "none"
  x.style.display = "none"
}  
}