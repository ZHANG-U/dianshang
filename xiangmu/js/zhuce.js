
        var ouser = document.getElementById("user");
        var opassw = document.getElementById("passw");
        var osure = document.getElementById("sure");
        var obtn = document.getElementById("btn");
        var ock = document.querySelector(".ck");
    

        var user=passw=sure=0;
        // 手机号
        ouser.onfocus = function(){
          this.value = "";
          this.innerHTML = this.value;  
        }
        ouser.onblur = function(){
            var reg = /^1[3-9]\d{9}$/;
            if(reg.test(this.value)){
                this.nextElementSibling.innerHTML = "手机号验证成功";
                user = 1;
            }else{
                this.nextElementSibling.innerHTML = "* 请输入正确的11位数字的手机号码";
                user = 0;
                alert("手机号码输入错误，请重新输入");
            }
        }
        // 密码验证
        opassw.onfocus = function(){
            this.value = "";
            this.innerHTML = this.value;
        }
        opassw.onblur = function(){
            var reg = /^[0-9a-zA-Z]{8,20}$/;
            if(reg.test(this.value)){
            
                this.nextElementSibling.innerHTML = "密码设置成功";
                passw = 1;
            }else{
                this.nextElementSibling.innerHTML = "* 密码为6-20个字符，必须包括数字和大小写字母";
                passw = 0;
                alert("密码设置错误，请重新输入");
            }

        }
        // 再次确认密码
        osure.onfocus = function(){
            this.value = "";
            this.innerHTML = this.value;
        }
        osure.onblur = function(){
            if(this.value === opassw.value){
                this.nextElementSibling.innerHTML = "成功";
                sure = 1; 
            }else{
                this.nextElementSibling.innerHTML = "密码与确认密码不相符，请重新填写"
                sure = 0;
                alert("密码不符，请再次重新输入");
            }
        }
        // 注册按钮
        obtn.onclick = function(){
            if(user && passw && sure){
                alert("注册成功，欢迎加入顺电")
                window.location.href="http://localhost:8181/index.html";
                // window.open("http://localhost:8181/index.html");
                 
            }else{
                if(user == 0){
                    alert("手机号注册失败")
                }
                if(passw == 0){
                    alert("登录密码设置失败")
                }
                if(sure == 0){
                    alert("验证密码失败")
                }
            }
            if(ock.checked)
            setCookie("InforMation",JSON.stringify({user:ouser.value,passw:opassw.value}),{
                expires:7
            })
        }

        






