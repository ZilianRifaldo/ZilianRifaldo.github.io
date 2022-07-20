window.onscroll = function () {
  myFunction();
};
var widget = document.getElementById("navbar");
var sticky = widget.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    widget.classList.add("sticky");
  }else {
    widget.classList.remove("sticky")
  }
}
