export var btn = document.getElementById("openGeneralModalBoxButton");
export var span = document.getElementsByClassName("general-modal-box-close")[0];
export var modal = document.getElementById("myGeneralModalBox");

export function buttonOnClick() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}