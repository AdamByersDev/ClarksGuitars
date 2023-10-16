var headerOpen = false;

function navOpen() {
  var header = document.getElementById("header");
  var hamburger = document.getElementById("hamburger");

  if (headerOpen == false) {
    header.style.height = "300px";
    hamburger.style.transform = "rotate(90deg)"
    headerOpen = true;
  }else{
    header.style.height = "105px"
    hamburger.style.transform = "rotate(0)"
    headerOpen = false;
  }
}
function resize() {
  if (headerOpen == true){
    header.style.height = "105px"
    hamburger.style.transform = "rotate(0)"
    headerOpen = false;
  }
}