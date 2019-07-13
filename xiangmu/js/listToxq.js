// 列表跳转到详情页
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
var id = getUrlParam("zhang");
var url = "http://localhost:8181/json/good.json";

ajaxGet(url,function(res){
    // console.log(res)
    res =  JSON.parse(res);
    
    display(res)
    // console.log(res)
    
    
});

function display(res){
    console.log(res)
    var str = "";
    for(var i=0;i<res.length;i++){
        if(id == res[i].goodsId){
            // console.log(res[i].goodsId)
            str += `  <div class="left">
                            <p>
                                <img src="${res[i].src}" />
                                <em></em>
                                <s></s>
                            </p>
                            
                            <p class="two">
                                <i><img src="${res[i].src}" /></i>
                                <i><img src="${res[i].src}" /></i>
                                <i><img src="${res[i].src}" /></i>
                            </p>
                            
                            <span>商品编号：1234</span> 
                            <p class="fenxiang">
                                分享到  
                                <a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101477621&redirect_uri=https%3A%2F%2Fsso.e.qq.com%2Fpassport%3Fsso_redirect_uri%3Dhttp%253A%252F%252Funion.qq.com%252F%26service_tag%3D14&scope=get_user_info"><img src="images/QQ.png" /></a>
                                <a href="https://wx.qq.com/"><img src="images/微信.png" /></a>
                                <a href="https://weibo.com/"><img src="images/微博.png" /></a>
                            </p>
                            <p class="erwei">
                                扫码购买
                                <img src="images/二维码.png" />
                                <a href="#">收藏</a>
                            </p>    
                        </div>
                        <div class="bigphoto">
                            <img src="${res[i].src}" alt="">
                        </div>     
                        <div class="right">
                            <h3>${res[i].name}</h3>
                            <span>${res[i].price}</span>
                            <em>
                                赠     品：  
                                <a href="#">     微软（Microsoft）Surface Book触控笔</a>
                            </em>
                            <s>
                                数量   
                                <input type="number" value="1" min="1" >台
                                库存充足
                            </s>
                            <i><img src="images/车.png" />各种快递配送</i>
                            <i><img src="images/车.png" />全场满800<a href=""> 花呗3期免息、</a>包邮</i>
                            <ul class="four">
                                <li>* 四种工作模式，让创作方式更灵活</li>
                                <li>* 四种工作模式，让创作方式更灵活</li>
                                <li>* 四种工作模式，让创作方式更灵活</li>
                                <li>* 四种工作模式，让创作方式更灵活</li>
                            </ul>
                            <div class="pei">
                                配送至
                                <select>
                                    <option>上海市 宝山区</option>
                                    <option>山东省青岛市</option>
                                </select>
                            </div>
                            <input type="text" id="txt1" value="立即购买">
                            <input type="text" id="txt2" value="加入购物车">
                            <a href="#" class="ke"><img src="images/客服.png" />客服热线</a>
   
                        </div>`;
                      
        }
        // console.log(1)
    }
    $(".zh").append(str);
    
  
    new Fang();
    
    
}
