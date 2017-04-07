document.getElementById("toggle").addEventListener("click",function (e) {
  e.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");

})

var lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  if (currentScroll > lastScrollTop) {
    console.log("down");
  } else{
    console.log("up");
  }
  lastScrollTop = currentScroll;
})
