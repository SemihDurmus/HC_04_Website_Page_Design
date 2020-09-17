/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar*icon */
const designLogo=document.getElementById("designLogo")
const cssLogo=document.getElementById("cssLogo")
const htmlLogo=document.getElementById("htmlLogo")

htmlLogo.addEventListener("click",showElement);
cssLogo.addEventListener("click",showElement);
designLogo.addEventListener("click",showElement)

function showElement(e){
      e.target.parentElement.children[2].classList.toggle("showDescription");
      //e--tıklanan eleman img nin parent i sizin small-box small-box un children[2] si icon acıklaması
      //dolayısıyla biz icona tıkladğınızda style.css nin en sonuna eklediğim iki class arasında switchleme yapıyor.
      //alternatif alarak
      // e.target.nextElementSibling.nextElementSibling.classList.toggle("showDescription") de olurdu böyle olunca önce ikonun altındaki yazıya sonra açıklamaya ulaşmış oluyoruz

}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  