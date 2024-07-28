//함수 정의 시작
function LoadNAVBAR() {
    const allElements = document.getElementsByTagName('*');     //HTML 문서 내의 요소를 선택하는 작업 수행.
                                                //doucument.getElementsByTagName('*')은 현재 문서에 있는 모든 요소를 선택함.
    for(var i=0;i<allElements.length;i++){      //HTML 문서 내의 모든 요소를 반복적으로 검사하는 반복문.
        var el = allElements[i];        //반복문 내에서 현재 요소를 'el'변수에 할당함.
        var navpath = el.getAttribute("nav-include-path");      //현재 요소에서 "nav-include-path" 속성 값을 가져와 'navpath' 변수에 저장함.
        if(navpath){        //nav-include-path 속성이 존재하는 경우에만 아래 코드 실행.
            var xhttp=new XMLHttpRequest();     //새로운 xhttp라는 객체를 생성.
            xhttp.onreadystatechange = function (){       //xhttp 객체의 상태가 변경될 때마다 호출되는 콜백함수.
                if(this.readyState==4 && this.status==200){     //this를 사용함으로써 현재 xhttp 객체를 참조할 수 있음.
                    //this.readyState는 xhttp의 상태가 4 (요청이 완료됨)인지, this.status==200은 http 응답코드가 200(성공)인지 확인하는 역할.
                    el.innerHTML = this.responseText;       //받아온 응답 데이터를 현재 요소의 내부 HTML로 설정함.
                    el.removeAttribute("nav-include-path");     //nav-include-path 속성을 제거하여 중복 방지.
                    LoadNAVBAR();
                }
            }
            xhttp.open("GET", navpath, true);   //XMLHttpRequest 객체의 open 매서드를 호출하여 요청을 준비.
            // GET : http 요청의 매서드를 지정. 서버에 데이터를 요청함.
            //navpath : 요청을 보낼 url을 지정함. 이 url은 navpath 변수에 저장된 값.
            //true : bool 값.
            xhttp.send(); //XMLHttpRequest 객체의 send 매서드를 호출하여 요청을 서버로 보냄.
            //send를 사용함으로써 미리 설정한 url로 GET 요청이 전송됨.
            //이 코드가 navpath에 지정된 url로 GET 요청을 보내고, 서버로부터의 응답을 기다림.

            return ;

        }
    }
}

