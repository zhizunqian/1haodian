window.onload=function(){
//搜索框
	var nav=$(".navkuang")[0];
	nav.onfocus=function(){
		if(nav.value=="圣诞节跨年幸福购 5折抢福袋"){
			nav.value="";
		}
	}
	nav.onblur=function(){
		if(nav.value){

		}
		else{
			nav.value="圣诞节跨年幸福购 5折抢福袋";
		}
	}

//banner轮播
    var bannerimg=$(".bannerimg");
    var bannerbtn=$(".bannerbtn");
    var bannerimgmbox=$(".bannerimgmbox")[0];
    var num=0;
    var banrrr=$(".banrrr")[0];
    var banrll=$(".banrll")[0];
    
    function move(type){
      if(type=="ll"){    
        num++;    
      	if(num>=8){
      		num=0;
      	}
      }if(type=="rr"){
        num--;
        if(num<0){
          num=7;
        }
      }
    	for(var i=0;i<bannerimg.length;i++){
        bannerimg[i].style.zIndex=2;
        bannerbtn[i].style.background="#ccc";
    	}
    	bannerimg[num].style.zIndex=3;
    	bannerbtn[num].style.background="red";
    
    }
    var t=setInterval(function(){
      move("ll");
    },2000);
    banrll.onclick=function(){
      move("rr");
    }
  banrrr.onclick=function(){
      move("ll");
    }
    hover(bannerimgmbox,function(){
      clearInterval(t);
       banrrr.style.display="block";
       banrll.style.display="block";
    },function(){
      t=setInterval(function(){
        move("ll")
      },2000)
       banrrr.style.display="none";
       banrll.style.display="none";
    })
    hover(banrll,function(){
      clearInterval(t);
       banrrr.style.display="block";
       banrll.style.display="block";
    },function(){
      t=setInterval(function(){
        move("ll")
      },2000)
       banrrr.style.display="none";
       banrll.style.display="none";
    })
     hover(banrrr,function(){
      clearInterval(t);
       banrrr.style.display="block";
       banrll.style.display="block";
    },function(){
      t=setInterval(function(){
        move("rr")
      },2000)
       banrrr.style.display="none";
       banrll.style.display="none";
    })
    for(var j=0;j<bannerbtn.length;j++){
    	bannerbtn[j].index=j;
    	bannerbtn[j].onmouseover=function(){
    		clearInterval(t);
    		for(var k=0;k<bannerbtn.length;k++){
    			bannerbtn[k].style.background="#ccc";
    			bannerimg[k].style.zIndex=2;
    		}
    		bannerbtn[this.index].style.background="red";
    		bannerimg[this.index].style.zIndex=3;
    	}
    	bannerbtn[j].onmouseout=function(){
    		t=setInterval(move,2000);
    		num=this.index+1;
    	}
    }
    
//图片的动
    function bb (b) {
    var lanl=$(".lanl")[b];
    var lanlt3=$(".lanlt3");//tu 
    for (var i = 0; i < lanlt3.length; i++) {
        lanlt3[i].index=i;
        lanlt3[i].onmouseover=function(){
            lanlt3[this.index].style.cssText="position:relative;left:-3px";
        }
        lanlt3[i].onmouseout=function(){
            lanlt3[this.index].style.cssText="position:relative;left:0";
        }
    }
    }

    var lanl=$(".lanl");
    for (var i = 0; i < lanl.length; i++) {
        bb(i);
    }

//左右轮播
       var bigbox=$(".liubigbox")[0];
       var btnl=$(".liubtnl")[0];
       var btnr=$(".liubtnr")[0];
       //先把1拉到左边，再把第一个放到最后一个后面，再把盒子拉回来
        function moveleft(){
       //把第一个放在最后一个的后面
        var first=gfirst(bigbox);
        //1  先把1拉到左边
        animate(bigbox,{left:-100},600,Tween.Linear,function(){
            //2  再把第一个放到最后一个后面
            bigbox.appendChild(gfirst(bigbox));
            //3  再把盒子拉回来,向左移动
            bigbox.style.left=0;
        });
        
        
       }
       var n=setInterval(moveleft,2000);

       function moveright(){
         var last=glast(bigbox);
          //1 把最后一个加到第一个的前面
             bigbox.insertBefore(last,gfirst(bigbox));
             //2  把整个盒子的左边由0变为-300，即把盒子向左移动300
             bigbox.style.left=-100+"px";''
             //3  再把盒子的左边变为0，实现向右边推的效果
             animate(bigbox,{left:0},600,Tween.Linear);
       }

       btnl.onmouseover=btnr.onmouseover=function(){
          clearInterval(n);//鼠标移入时，停止时间函数
       }
       btnl.onmouseout=btnr.onmouseout=function(){
          n=setInterval(moveleft,2000);//鼠标离开时，开启时间函数
       }
       btnl.onclick=function(){
          moveleft();
       }

       btnr.onclick=function(){
          moveright();
       }
//选项卡
    var shanimg=$(".shanimg");
    var shanzi=$(".shangzi");
    for(var i=0;i<shanzi.length;i++){
       shanzi[i].index=i;
       shanzi[i].onmouseover=function(){
            for(var j=0;j<shanimg.length;j++){
            shanimg[j].style.display="none";
            shanzi[j].style.color="#666";
           }
           shanimg[this.index].style.display="block";
           this.style.color="red";
       }
    }
      
//banner选项卡
    var banr=$(".banr");
    var banrzi=$(".conzi");
    for(var i=0;i<banrzi.length;i++){
       banrzi[i].index=i;
       hover(banrzi[i],function(){
          banrzi[this.index].style.cssText="position:relative;left:3px;background:#b01d1d";
           banr[this.index].style.zIndex="8";
           banr[this.index].style.display="block";

       },function(){
        banrzi[this.index].style.cssText="position:relative;left:0;background:#c23131";
           banr[this.index].style.zIndex="1";
           banr[this.index].style.display="none";

       })
        }
   for(var j=0;j<banr.length;j++){
    banr[j].index=j;
      banr[j].onmouseover=function(){
        banrzi[this.index].style.cssText="position:relative;left:3px;background:#b01d1d";
           banr[this.index].style.zIndex="8";
           banr[this.index].style.display="block";
      }
      banr[j].onmouseout=function(){
        banrzi[this.index].style.cssText="position:relative;left:0;background:#c23131";
           banr[this.index].style.zIndex="1";
           banr[this.index].style.display="none";
        }
      }
   
//下拉菜单
var yiji=$(".touryiji");
    var erji=$(".erji");
     for(var i=0;i<yiji.length;i++){
    yiji[i].index=i;
    yiji[i].onmouseover=function(){
      for(var j=0;j<erji.length;j++){
        erji[j].style.display="none";
      }
      erji[this.index].style.display="block";
    }
    yiji[i].onmouseout=function(){
      for(var i=0;i<erji.length;i++){
        erji[i].style.display="none";
      }
    }
  }
 /*   for(var i=0;i<yiji.length;i++){
        yiji[i].index=i;
        hover(yiji[i],function(){
        var lis=$("li",erji[this.index]);
         var h=lis[0].offsetHeight;
         animate(erji[this.index],{height:lis.length*h},100);
         lis.style.cssText="border:1px solid #ccc";
        },function(){
            var lis=$("li",erji[this.index]);
         var h=lis[0].offsetHeight;
         animate(erji[this.index],{height:0},100)
         lis.style.cssText="border:none";
        })
    }*/
 
//楼层跳转
      var floor=$(".bb");
  var btnb=$(".lcbox");
  var rightbox=$(".jump")[0];
  var flos=$(".aa");
  var rightconf=$(".rightconf");
  var pfwordb=$(".pfwordb");
for (var m = 0; m< btnb.length; m++) {
  btnb[m].index11=m;
  flos[m].t=flos[m].offsetTop;
  btnb[m].onclick=function(){
    var obj1=document.documentElement.scrollTop?document.documentElement:document.body;
   animate(obj1,{scrollTop:flos[this.index11].t})
    for (var i = 0; i < pfwordb.length; i++) {
      pfwordb[i].style.display="none";
    }
   pfwordb[this.index11].style.display="block"; 
  }

}


      window.onscroll=function(){
      var ch=document.documentElement.clientHeight;
        //搜索框的显示与隐藏
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        var scrollT=obj.scrollTop;
        if(scrollT>=700){
          rightbox.style.display="block";
        }
        if(scrollT<700){
          rightbox.style.display="none";
        }

  for (var i = 0; i < flos.length; i++) {
      flos[i].t=flos[i].offsetTop; 

       //判断当前楼层的scrolltop值小于滚动条的top值加上1/2的浏览器的高
      if(flos[i].t<scrollT+ch/2){
      for (var j = 0; j<pfwordb.length; j++) {
        pfwordb[j].style.display="none";
      }
        pfwordb[i].style.display="block";
      }
}
for (var j = 0; j < rightconf.length; j++) {
  rightconf[j].index=j;
  hover(rightconf[j],function(){
      pfwordb[this.index].style.display="block";
  },function(){
      pfwordb[this.index].style.display="none";
  })
}
    var scrollT=getScrollT();
            var ch=document.documentElement.clientHeight;
        //alert(floor[0].offsetTop)
        for(var i=0;i<floor.length;i++){
        if(floor[i].offsetTop<scrollT+ch){//当前楼层到顶部的高度如果小于页面内容超出浏览器的距离+浏览器的距离时
                var imgs=$("img",floor[i]);//获取当前楼层的所有图片
                for(var j=0;j<imgs.length;j++){//遍历图片
                  imgs[j].src=imgs[j].getAttribute("ccc");//把每一个图片的aa属性的值赋值给src属性即可
                }
                //alert(imgs.length)
        }
      }

      }
//按需加载
//轮播

     var jink2=$(".jink2");
     /*var jinkbtn1=$(".jinkbtn1");*/
    for(var i=0;i<jink2.length;i++){
       zhong(i);
     }
       /*for(var j=0;j<jinkbtn1.length;j++){
        zhong(j);
      }*/
    
     function zhong(zzz){
       var jink2=$(".jink2")[zzz];
       var jinkimgbox=$(".jinkimgbox")[zzz];
       var jinkbtn=$(".jinkbtn",jink2);
       var jinkbtn1=$(".jinkbtn1",jink2);
       var num11=0;
       var x=0;
       var b;
       var fl=true;
       function move22(){
           x+=6;
          if(x<=30){  
          }else{
            x=0;
            clearInterval(b)         
          }
          jinkbtn1[num11].style.width=x+"px";
       }
       function move11(){
        var fl=true;
              if(num11>=3){
                for(var i=0;i<jinkbtn1.length;i++){
                  jinkbtn1[i].style.width=0;
                }
                 animate(jinkimgbox,{left:-330*num11},600,Tween.Linear,function(){
                     jinkimgbox.style.left=0;
                     if(fl){
                      b=setInterval(move22,600);
                      fl=false;
                     }
                  }) ;
                  num11=0;
              } 
              else{
                   for(var i=0;i<jinkbtn1.length;i++){
                  jinkbtn1[i].style.width=0;
                }
                  animate(jinkimgbox,{left:-330*num11},600,Tween.Linear,function(){
                    // jinkimgbox.style.left=0;
                     if(fl){
                      b=setInterval(move22,600);
                      fl=false;
                     }
                  }) ;
              }
                    num11++;   
        }

       var sssss=setInterval(move11,4200);

       for(var j=0;j<jinkbtn.length;j++){
              jinkbtn[j].index=j;
              jinkbtn[j].onmouseover=function(){
                     clearInterval(sssss);//alert(111);
                     clearInterval(b);//alert(111);
                    for(var i=0;i<jinkbtn1.length;i++){
                    jinkbtn1[i].style.width=0;
                    }
                    /*this.style.cssText="background:red";*/
                     jinkbtn[this.index].style.background="red";
                     animate(jinkimgbox,{left:-330*this.index},600,Tween.Linear) ;
                     fl=false;
              }
              jinkbtn[j].onmouseout=function(){
                sssss=setInterval(move11,4200);
                 for(var k=0;k<jinkbtn.length;k++){
                      jinkbtn[k].style.background="#ccc";
                     }
                     num11=this.index;
                     fl=true;
              }
        }
    //}
   }
// 闪屏白色

  var shanbox=$(".shanbox");
   var lanl=$(".lanlll");
   for(var i=0;i<lanl.length;i++){
    lanl[i].index=i;
  for(var j=0;j<shanbox.length;j++){
     shanbox[j].index=j;
      lanl[i].onmouseover=function (){
           animate(shanbox[this.index],{opacity:0.5},30,function(){
            animate(shanbox[this.index],{opacity:0},30);
          });
        }
         
      }
    }

 // 购物车  
  var gouwc=$(".gouwc")[0];
  var gouwcerji=$(".gouwcerji")[0];
  gouwc.onmouseover=function(){
    gouwcerji.style.display="block";
  }
   gouwc.onmouseout=function(){
    gouwcerji.style.display="none";
  }

  //hi 
  var touhi=$(".touhi")[0];
  var touhierji=$(".touhierji")[0];
  touhi.onmouseover=function(){
    touhierji.style.display="block";
  }
   touhi.onmouseout=function(){
    touhierji.style.display="none";
  }

    //tousong 
  var tousong=$(".tousong")[0];
  var tousongerji=$(".tousongerji")[0];
  tousong.onmouseover=function(){
    tousongerji.style.display="block";
  }
   tousong.onmouseout=function(){
    tousongerji.style.display="none";
  }

















































}