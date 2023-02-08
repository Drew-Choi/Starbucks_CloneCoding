// 검색창
function Toggleclick () {
  const Clickline = document.querySelector('.material-symbols-outlined');
  const Inputline = document.querySelector('.search-extend');
  
  Clickline.onclick = () => {
    Inputline.classList.toggle('on');
  if (Inputline.classList.contains('on')) {
      Inputline.setAttribute("placeholder", "통합검색")
  }
  else {
       Inputline.removeAttribute("placeholder", "통합검색")
  };
 };
};


// 스크롤이벤트1 엘살바도르
const Elsal = document.querySelector('.elsalvador__item')

document.addEventListener("scroll" () => {
  if (window.pageYOffset > 5) {
    Elsal.classList.add("on");
   } else {
    Elsal.classList.remove("on");
   }
});