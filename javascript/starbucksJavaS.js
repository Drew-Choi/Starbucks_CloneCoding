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

