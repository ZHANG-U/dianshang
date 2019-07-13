var ouser = document.getElementById("user");
var omima = document.getElementById("mima");
var obtn = document.getElementById("btn");

var InforMation = JSON.parse(getCookie("InforMation"));

// console.log(Information);
ouser.value = InforMation.user;
omima.value = InforMation.passw;

obtn.onclick = function(){
        setCookie("InforMation",JSON.stringify((obj),{
            expires:7
        }))
        // console.log(JSON.stringify(obj));
        // console.log(InforMation)
}



















