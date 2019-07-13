class Car{
    constructor(){
        this.otbody = document.querySelector("tbody");
        this.url = "http://localhost:8181/json/good.json";
        this.otou = document.querySelector(".tou");
        this.ack = document.querySelectorAll(".ckall");
        this.adan = document.querySelectorAll(".dan");
        this.tfoot = document.querySelector("tfoot");

        this.init();
        // 绑定删除按钮事件
        this.addEvent();
      
        
    }
    addEvent(){
        var that = this;
        this.otbody.onclick = function(){
            if(event.target.className == "del"){
                 that.id = event.target.parentNode.getAttribute("index");  event.target.parentNode.remove();
                that.setData(function(i){
                    that.goods.splice(i,1);
                });
            }
        }
        this.otbody.oninput = function(){
            if(event.target.className == "changeNum"){
                // 9.存储修改的商品的id
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                // 10.修改localstorage的数据
                that.setData(function(i){
                    that.goods[i].num = event.target.value;
                });
            }
        }

    }
    setData(callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                callback(i);
            } 
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    init(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res)
            that.getData();
        })
    }
    getData(){
        this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
        this.display();    
    }
    display(){
        var str ="";
        var strr = "";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId == this.goods[j].id){
                    str += `<tr index="${this.res[i].goodsId}">
                                <td><input type="checkbox" checked="checked" class="dan"><img src="${this.res[i].src}" alt=""></td>
                                <td><p>${this.res[i].name}</p></td>
                                <td><span>${this.res[i].price}</span></td>
                                <td><input type="number" class="changeNum" value="${this.goods[j].num}" min="1" ></td>
                                <td>${"￥"+(this.res[i].price.replace("￥","")*this.goods[j].num)}</td>
                                <td class="del">移除</td>
                            </tr> `;
                            this.otou.style.display = "none";
                }
            }
        }
        strr += `<tr>
                    <th>
                    <input type="checkbox" checked="checked" class="ckall">全选 
                    <em>删除</em>
                    </th>
                    <th></th>
                    <th>已选<span class="nums">1</span> 件商品</th>
                    <th>总计（不含运费）：<span class="yuan">10000</span>元</th>
                    <th></th>
                    <th><a href="#">去结算></a></th>
                </tr>`;
        this.otbody.innerHTML = str;
        this.tfoot.innerHTML = strr;
        this.span = this.tfoot.querySelector(".yuan");
    }
}
new Car();