

var el = document.getElementById("brand-title");  
//아이디를 통해서 요소 선택
console.log(el);

console.log(el.innerHTML); // html태그(h1)만 제거하고 출력된다.
console.log(el.innerText); // 텍스트 자체만 속성값을 출력한다.

el.innerText =  "안녕하세요 :)"
// 실제 실행창에서 내용이 수정된 것을 확인할 수 있다. 