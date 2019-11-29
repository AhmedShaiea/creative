let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu nav");
let appBar = document.querySelector(".menu");
let sticky = appBar.offsetTop;
let links = document.querySelectorAll('#links li');


links.forEach(function(item){
  item.addEventListener('click',function(){
    menu.classList.remove("shown-nav");
  });
})

burger.addEventListener("click", function() {
  menu.classList.toggle("shown-nav");
  burger.classList.toggle("opened-nav");
});

window.addEventListener("resize", function() {
  menu.classList.remove("shown-nav");
  burger.classList.remove("opened-nav");
});

window.onscroll = function() {
  if (window.pageYOffset > sticky) {
    appBar.classList.add("scroll-menu");
  } else {
    appBar.classList.remove("scroll-menu");
  }
};

