var  link  = document.querySelector(".enter-write-us");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".close-write-us");

link.addEventListener("click",function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-active");

});

close.addEventListener("click",function (evt2) {
  evt2.preventDefault();
  popup.classList.remove("write-us-active");

});
