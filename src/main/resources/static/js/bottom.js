function LoadFOOTER() {
    const allElements = document.getElementsByTagName('*');
    for(var i=0;i<allElements.length;i++){
        var el = allElements[i];
        var footpath = el.getAttribute("footer-include-path");
        if(footpath){
            var xhttp=new XMLHttpRequest();     //새로운 xhttp라는 객체를 생성.
            xhttp.onreadystatechange = function (){
                if(this.readyState==4 && this.status==200){
                    el.innerHTML = this.responseText;
                    el.removeAttribute("footer-include-path");
                    LoadFOOTER();
                }
            }
            xhttp.open("GET", footpath, true);
            xhttp.send();

            return ;

        }
    }
}