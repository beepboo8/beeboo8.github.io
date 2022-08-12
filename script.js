/* .js files add interaction to your website */
//Close PopUp
var proceed = document.getElementById("proceed");
proceed.addEventListener("click", closeOverlay);

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
