//tells the computer what to do when the button is clicked
window.onclick = myFunction;
function myFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "aquamarine";
  document.getElementById("display_text").style.color = "red";
  document.getElementById("display_text").innerHTML = Date() + " Welcome to ChicTech!";
}
