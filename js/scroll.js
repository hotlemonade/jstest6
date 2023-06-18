function scrollToTop() 
 {window.scrollTo
 ({top: 0,
 behavior: "smooth"
 });
 }

 var button = document.getElementById('top')
 button.addEventListener('click', scrollToTop)

 // 버튼 클릭 시 상단으로 스크롤하는 이벤트 리스너
 const btnScrollToTop = document.querySelector("#btn-scroll-to-top");
 btnScrollToTop.addEventListener("click", scrollToTop);
