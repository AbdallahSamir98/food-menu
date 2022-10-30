let userName = document.querySelector(".name");
function userNameValid() {
  let regex = /^[a-zA-Z ]+$/;
  return regex.test(userName.value);
}
$(".name").keyup(function () {
  if (userNameValid() == true) {
    $(".name").css("borderBottom", "5px solid green");
    $(".alertName").addClass("d-none");
    chekBtn();
  } else {
    $(".name").css("borderBottom", "5px solid red");
    $(".alertName").removeClass("d-none");
    chekBtn();
  }
});

// email regex
let email = document.querySelector(".email");
function emailValid() {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.value);
}

$(".email").keyup(function () {
  if (emailValid() == true) {
    $(".email").css("borderBottom", "5px solid green");
    $(".alertMail").addClass("d-none");
    chekBtn();
  } else {
    $(".email").css("borderBottom", "5px solid red");
    $(".alertMail").removeClass("d-none");
    chekBtn();
  }
});

// phone number regex
let phoneNumber = document.querySelector(".phoneNumber");

function phoneValid() {
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return regex.test(phoneNumber.value);
}
$(".phoneNumber").keyup(function () {
  if (phoneValid() == true) {
    $(".phoneNumber").css("borderBottom", "5px solid green");
    $(".alertNumber").addClass("d-none");
    chekBtn();
  } else {
    $(".phoneNumber").css("borderBottom", "5px solid red");
    $(".alertNumber").removeClass("d-none");
    chekBtn();
  }
});

// age regex

let age = document.querySelector(".age");

function ageValid() {
  let regex = /^[1-9][0-9]?$|^100$/;
  return regex.test(age.value);
}
$(".age").keyup(function () {
  if (ageValid() == true) {
    $(".age").css("borderBottom", "5px solid green");
    $(".alertAge").addClass("d-none");
    chekBtn();
  } else {
    $(".age").css("borderBottom", "5px solid red");
    $(".alertAge").removeClass("d-none");
    chekBtn();
  }
});

// password regex

let pass = document.querySelector(".pass");

function passValid() {
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(pass.value);
}
$(".pass").keyup(function () {
  if (passValid() == true) {
    $(".pass").css("borderBottom", "5px solid green");
    $(".alertPass").addClass("d-none");
    chekBtn();
  } else {
    $(".pass").css("borderBottom", "5px solid red");
    $(".alertPass").removeClass("d-none");
    chekBtn();
  }
});

// repass regex
let repass = document.querySelector(".repass");
function repassValid() {
  return repass.value == pass.value;
}

$(".repass").keyup(function () {
  if (repassValid() == true) {
    $(".repass").css("borderBottom", "5px solid green");
    $(".alertRepass").addClass("d-none");
    chekBtn();
  } else {
    $(".repass").css("borderBottom", "5px solid red");
    $(".alertRepass").removeClass("d-none");
    chekBtn();
  }
});

function chekBtn() {
  if (
    userNameValid() &&
    emailValid() &&
    phoneValid() &&
    ageValid() &&
    passValid() &&
    repassValid()
  ) {
    $(".btn").removeClass("disabled");
    $(".btn").addClass("btn-success");
    $(".btn").removeClass("btn-outline-danger");
  } else {
    $(".btn").addClass("disabled");
    $(".btn").removeClass("btn-success");
    $(".btn").addClass("btn-outline-danger");
  }
}
var hiddenSlide = $(".hiddenSlide").innerWidth();

$(".open").click(function () {
  if ($(".slide").css("left") == "0px") {
    $(".hiddenSlide").animate({ left: "0%" }, 1000, function () {
      $(".list-unstyled").css("transform", "translateY(0%)");
    });

    $(".slide").animate({ left: hiddenSlide }, 1000);
    document.querySelector(".open").innerHTML = `
          <i class="fa-solid fa-xmark fa-2x"></i>
    
    `;
  } else {
    $(".hiddenSlide").animate({ left: -hiddenSlide }, 1000, function () {
      $(".list-unstyled").css("transform", "translateY(-100%)", 500);
    });
    $(".slide").animate({ left: 0 }, 1000);
    document.querySelector(".open").innerHTML = `
          <i class="fa-solid fa-bars fa-2x"></i>

    `;
  }
});

// loading page

$(document).ready(function () {
  $(".loadingLayer").fadeOut(1000, function () {
    $("document,body").css("overflowY", "visible");
  });
});
