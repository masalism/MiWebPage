var menu = 0;

function nav() {
  var x = document.getElementById("myNav");
  if (menu == 0) {
    menu = 100;
  } else {
    menu = 0;
  }
  x.style.width = menu + "%";
  console.log(menu);
}