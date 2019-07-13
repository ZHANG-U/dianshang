class List{
    constructor(){
        this.osp = document.querySelector(".shangpin");
        this.url = "http://localhost:8181/json/good.json";

        this.init();
        this.addEvent();
       
    
    }
    addEvent(){
        var that = this;
        this.osp.onclick = function(eve){
            var e = eve || window.event;
            var t = e.target || e.srcElement;
            if(t.className == "addCar"){
                // 获取当前商品的id
                that.id = t.parentNode.getAttribute("index");
                // 存
                that.setData();

            }
        }
    }
    setData(){
        this.goods = localStorage.getItem("goods")
        if(this.goods){
            // 不是第一次
            this.goods = JSON.parse(this.goods);
            var onoff = true;
            // 之后存
            for(var i=0;i<this.goods.length;i++){
                // 老的
                if(this.goods[i].id == this.id){
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            // 新的
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }else{
            // 直接存
            this.goods = [{
                id:this.id,
                num:1
            }];
        }
        // 数据设置回去
        localStorage.setItem("goods",JSON.stringify(this.goods))
    }
    init(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.display()
        })
    }
    display(){
        
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str += `<div class="lists" index="${this.res[i].goodsId}">
                        <a href="http://localhost:8181/xiangqing.html?zhang=${this.res[i].goodsId}"><img src="${this.res[i].src}" /></a>
                        <p class="active">${this.res[i].titles}</p>
                        <p>${this.res[i].tit}</p>
                        <a href="http://localhost:8181/xiangqing.html?zhang=${this.res[i].goodsId}" class="zi">${this.res[i].name}</a>
                        <span>${this.res[i].price}</span>
                        <em class="addCar">加入购物车</em>
                        <i><img src="${this.res[i].url}" /></i>
                        <i><img src="${this.res[i].url}" /></i>
                    </div>`;
        }
        this.osp.innerHTML = str;
    }
}
new List();



