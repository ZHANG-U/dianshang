// 放大镜
function Fang(){
    this.left = document.querySelector(".left p");
    this.right = document.querySelector(".bigphoto");
    this.oem = document.querySelector("em");
    this.bImg = document.querySelector(".bigphoto img");
    // console.log(this.oem)
    
    this.addEvent()
    
}
Fang.prototype.init = function(){
    var w = this.bImg.offsetWidth/this.right.offsetWidth;
    console.log(w)
    var h = this.bImg.offsetHeight/this.right.offsetHeight;

    this.oem.style.width = this.left.offsetWidth/w + "px";
    console.log(this.oem);
    this.oem.style.height = this.left.offsetHeight/h + "px";

}
Fang.prototype.addEvent = function(){
    
    var that = this;
    this.left.addEventListener("mouseover",function(){
        that.over();
        that.init();
    })
    this.left.addEventListener("mouseout",function(){
        that.out()
    })  
    this.left.addEventListener("mousemove",function(eve){
        var e = eve || window.event;
        that.move(e);
    })
}
Fang.prototype.over = function(){
    this.oem.style.display = "block";
    this.right.style.display = "block";
}
Fang.prototype.out = function(){
    this.oem.style.display = "none";
    this.right.style.display = "none";
}
Fang.prototype.move = function(e){
    var l = e.offsetX - this.oem.offsetWidth/2;
    var t = e.offsetY - this.oem.offsetHeight/2;

    if(l<0){l=0} 
    if(t<0){t=0}
    if(l>this.left.offsetWidth-this.oem.offsetWidth){
        l = this.left.offsetWidth-this.oem.offsetWidth
    } 
    if(t>this.left.offsetHeight-this.oem.offsetHeight){
        t = this.left.offsetHeight-this.oem.offsetHeight
    }  
    var x = l / (this.left.offsetWidth - this.oem.offsetWidth);
    var y = t / (this.left.offsetHeight - this.oem.offsetHeight);

    this.oem.style.left = l + "px";
    this.oem.style.top = t + "px";

    this.bImg.style.left = x *(this.right.offsetWidth - this.bImg.offsetWidth) + "px";
    this.bImg.style.top = y * (this.right.offsetHeight - this.bImg.offsetHeight) + "px";
}
new Fang();
    onload = function(){
    //     // new Fang();
    }


