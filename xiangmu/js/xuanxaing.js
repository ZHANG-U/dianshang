var ali = document.querySelectorAll("#cont li");
var adiv = document.querySelectorAll(".shangpin div");

for(var i=0;i<ali.length;i++){
    ali[i].setAttribute("zz",i);
    ali[i].onclick = function(){
        for(var j=0;j<ali.length;j++){ 
            ali[j].className = "";
            adiv[j].style.display = "none";
        }
        this.className = "active";
            var index = this.getAttribute("zz");
            adiv[index].style.display = "block";
    }
}