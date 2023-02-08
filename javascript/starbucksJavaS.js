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



// window.addEventListener('scroll', () => { 
//   //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
//   console.log(window.scrollX, window.scrollY);
// });

// 스크롤이벤트1 엘살바도르
document.addEventListener("scroll", () => {
  const Elsal = document.querySelector('.elsalvador__item');
  const ElsalCon = document.querySelector('.elsalvador__content');
  if (window.pageYOffset > 70) {
    Elsal.classList.add("on"), ElsalCon.classList.add("on");
   } else {
    Elsal.classList.remove("on"), ElsalCon.classList.remove("on");
   }
});


// 스크롤이벤트2 에티오피아
document. addEventListener("scroll", () => {
  const Ethi = document.querySelector('section.ethiopia');
  const EthiItem = document.querySelector('img.ethiopia__item')
  if (window.pageYOffset > 750) {
    Ethi.classList.add("on"), EthiItem.classList.add("on");
  }
  else {
    Ethi.classList.remove("on"), EthiItem.classList.remove("on");
  }
});

// 스크롤이벤트3 FAVORITE
document.addEventListener("scroll", () => {
  const FavTitle = document.querySelector(".fav__title");
  const FavDesc = document.querySelector(".fav__descript");
  if (window.pageYOffset > 1200) {
    FavTitle.classList.add("on"), FavDesc.classList.add("on");
  }
  else {FavTitle.classList.remove("on"), FavDesc.classList.remove("on");

  }
});

// 스크롤이벤트4 MAGAZINE
document.addEventListener("scroll", () => {
  const MagaImage = document.querySelector('.maga__mainimage');
  if (window.pageYOffset > 2000) {
    MagaImage.classList.add("on");
  }
  else {
    MagaImage.classList.remove("on");
  }
});

// 스크롤이벤트5 STORE
document.addEventListener("scroll", () => {
  const StoreText1 = document.querySelector(".store__text1");
  const StoreText2 = document.querySelector(".store__text2");
  const StoreImage1 = document.querySelector(".store__image1");
  const StoreImage2 = document.querySelector(".store__image2");
  const StoreImage3 = document.querySelector(".store__image3");
  const StoreImage4 = document.querySelector(".store__image4");
  const BTN = document.querySelector(".store .inner .btn.btn--black");
  let Group = [StoreText1, StoreText2, StoreImage1, StoreImage2, StoreImage3, StoreImage4, BTN];
  
  if (window.pageYOffset > 2200) {
    for (let value of Group) {
      value.classList.add("on");
    };
  }
  else {
    for (let value of Group) {
      value.classList.remove("on");
    };
  }
});