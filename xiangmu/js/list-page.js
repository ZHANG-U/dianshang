class Page{
    constructor(options){
        this.list = options.list;
        this.left = options.left;
        this.right = options.right;
        this.pageList = options.pageList;
        this.url = options.url;
        this.num = options.num;
        this.index = options.index; 
        this.load();
        this.addEvent();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            // console.log(res)
            that.res = JSON.parse(res);
            console.log(that.res)
            that.displayPage();
            that.display();
        })   
    }
    displayPage(){
        
        this.maxNum = Math.ceil(this.res.length / this.num);
        var str = "";
			for(var i=0;i<this.maxNum;i++){
				str += `<li>${i+1}</li>`;
			}
            this.pageList.innerHTML = str;
            this.li = this.pageList.children;
            this.active();
    }
    active(){
        for(var i=0;i<this.li.length;i++){
            this.li[i].className = "";
        }
        this.li[this.index].className = "active";
    }
    addEvent(){
        var that = this;
        this.left.onclick = function(){
            that.changeIndex(1) 
        }
        this.right.onclick = function(){
            that.changeIndex(2) 
        }
    }
    changeIndex(type){
        if(type == 1){
            if(this.index == 0){
                this.index = this.maxNum-1;
            }else{
                this.index--;
            }
        }else{
            if(this.index == this.maxNum-1){
                this.index = 0
            }else{
                this.index++;
            }
        }
        this.active();
        this.display();
    }
    display(){
        var str = "";
        for(var i=this.index * this.num;i<this.index * this.num + this.num;i++){
            if(i<this.res.length){
                str += `<div class="lists" index="${this.res[i].goodsId}">
                <a href="http://localhost:8181/xiangqing.html?zhang=${this.res[i].goodsId}"><img src="${this.res[i].src}" /></a>
                <p class="active">${this.res[i].titles}</p>
                <p>${this.res[i].tit}</p>
                <a href="#" class="zi">${this.res[i].name}</a>
                <span>${this.res[i].price}</span>
                <em class="addCar">加入购物车</em>
                <i><img src="${this.res[i].url}" /></i>
                <i><img src="${this.res[i].url}" /></i>
            </div>`;
            }
        }
        this.list.innerHTML = str;
    }

}
new Page({
    list: document.querySelector(".shangpin"),
    left:document.querySelector(".Left"),
    right:document.querySelector(".Right"),
    pageList:document.querySelector(".page").getElementsByTagName("ul")[0],
    url:"http://localhost:8181/json/good.json",
    num:5,
    index:0
})