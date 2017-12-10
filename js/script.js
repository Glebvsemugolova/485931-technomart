var buyArray = document.querySelectorAll(".buy");
var modal = document.querySelector(".modal-add-product");
var closemodal = document.querySelector(".modal-close");

for (var i = 0; i <buyArray.length; i++) {
  buyArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add("add-product-active");
  });

}

closemodal.addEventListener("click",function (evt) {
  modal.classList.remove("add-product-active");

});

var  link  = document.querySelector(".enter-write-us");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".close-write-us");

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-active");

  });
}

if (close) {
  close.addEventListener("click", function (evt2) {
    evt2.preventDefault();
    popup.classList.remove("write-us-active");

  });
}

var linkmap = document.querySelector(".map");
var modalmap = document.querySelector(".modal-map");
var closemap = document.querySelector(".map-close");

if (linkmap) {
  linkmap.addEventListener("click",function (evt) {
    evt.preventDefault();
    modalmap.classList.add("modal-map-active");

  });
}

if (closemap) {
  closemap.addEventListener("click",function (evt2) {
    evt2.preventDefault();
    modalmap.classList.remove("modal-map-active");

  });
}

var slideright = document.querySelector(".toogle-right");
var slideleft = document.querySelector(".toogle-left");
var drill = document.querySelector(".drill");
var puncher = document.querySelector(".puncher");
var radio1 = document.querySelector(".radio-btn1");
var radio2 = document.querySelector(".radio-btn2");

if (slideright) {
  slideright.addEventListener("click",function (evt) {
    drill.classList.remove("slide-passive");
    puncher.classList.add("slide-passive");
    radio1.classList.remove("red-dot");
    radio2.classList.add("red-dot");

  });
}

if (slideleft) {
  slideleft.addEventListener("click",function (evt) {
    drill.classList.add("slide-passive");
    puncher.classList.remove("slide-passive");
    radio1.classList.add("red-dot");
    radio2.classList.remove("red-dot");

  });
}

var btnDelivery = document.querySelector(".btn-delivery");
var btnGuarantee = document.querySelector(".btn-guarantee");
var btnCredit = document.querySelector(".btn-credit");
var delivery = document.querySelector(".service-delivery");
var guarantee = document.querySelector(".guarantee");
var credit = document.querySelector(".credit");

if (btnGuarantee) {
  btnGuarantee.addEventListener("click", function (evt) {
    btnGuarantee.classList.add("checked");
    btnDelivery.classList.remove("checked");
    btnCredit.classList.remove("checked");
    guarantee.classList.add("page-active");
    credit.classList.remove("page-active");
    delivery.classList.remove("page-active");

  });
}

if (btnDelivery) {
  btnDelivery.addEventListener("click", function (evt) {
    btnGuarantee.classList.remove("checked");
    btnDelivery.classList.add("checked");
    btnCredit.classList.remove("checked");
    guarantee.classList.remove("page-active");
    credit.classList.remove("page-active");
    delivery.classList.add("page-active");

  });
}

if (btnCredit) {
  btnCredit.addEventListener("click", function (evt) {
    btnGuarantee.classList.remove("checked");
    btnDelivery.classList.remove("checked");
    btnCredit.classList.add("checked");
    guarantee.classList.remove("page-active");
    credit.classList.add("page-active");
    delivery.classList.remove("page-active");

  });
}

if (popup) {
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
}

if (form) {
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
    }
  });
}

if (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-active");
    popup.classList.remove("modal-error");

  });

}
