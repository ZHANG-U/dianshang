// 楼层效果：
$(".control").children("li").click(function(){
    var t = $(".floor").eq($(this).index()).offset().top;
   $("html").stop().animate({
        scrollTop:t,
   },600)
})

// banner插件：
$("#banner").banner({
    aimg:$("#banner").find(".bnr"),
    left:$("#banner").find("#btnLeft"),
    right:$("#banner").find("#btnRight"),
    isList:true,
    autoPlay:true,
    moveTime:1000,
    index:0
});

class Meiuns{
    constructor(){
        this.oa = document.querySelector(".special");
        this. oul = document.querySelector(".meiun-top");
        // this.ali = document.querySelectorAll(".meiun-top .L1");
        
        this.adiv = document.querySelector(".meiun-top .L1 #threemeun");
        this.type = 0;
        this.init();
        
    //   console.log(this.adiv)
        
    }
    init(){
        var that =this;
        this.oa.onmouseover = function(){
            if(that.type == 0){
                that.oul.style.display="block";
                that.type =1;
                that.erTsan();
            }else{
                that.oul.style.display="none";
                that.type = 0;
            } 
        }
    }
    erTsan(){
        var that = this;
        // console.log(this.ali);
        this.oul.onmouseover = function(){
            that.adiv.style.display = "block";
            that.oul.onmouseout = function(){
                that.adiv.style.display = "none";
            }

        }
    }





}
new Meiuns();