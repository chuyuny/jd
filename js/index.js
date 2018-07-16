/**
 * Created by 云 on 2018/6/5.
 */
window.onload =function () {
    //顶部的通栏滚动效果
    headerScroll();
    //倒计时的效果
    cutDownTime();
    //轮播图效果
    banner();


}
function headerScroll(argument) {
    //获取一些必须的参数
    /*
        导航栏的高度
        顶部的通栏
     */
    var navDom=document.querySelector('.jd_nav');
    var maxDistance =navDom.offsetTop+navDom.offsetHeight;
    var headerDom=document.querySelector('.jd_header');


    //注册onscroll事件

    window.onscroll =function () {

        var scrollDistance =window.document.documentElement.scrollTop;
        var precent=scrollDistance/maxDistance;
        if(precent>1){
            precent=1;
        }
        headerDom.style.backgroundColor='rgba(201,21,35,'+precent+')';

    }
}
function cutDownTime(argument) {
    var liArr=document.querySelectorAll(".main_content:nth-child(1) .content_top li");
    var hour =3;
    var hourS=3*60*60;
    var timeerC=setInterval(function () {
        if(hourS<0){
            clearInterval(timeerC);
            console.log('结束了');
            return ;
        }
        hourS--;
        var h=Math.floor(hourS/3600);
        var m=Math.floor(hourS%3600/60);
        var s=Math.floor(hourS%60);
        liArr[0].innerHTML=Math.floor(h/10);
        liArr[1].innerHTML=Math.floor(h%10);
        liArr[3].innerHTML=Math.floor(m/10);
        liArr[4].innerHTML=Math.floor(m%10);
        liArr[6].innerHTML=Math.floor(s/10);
        liArr[7].innerHTML=Math.floor(s%10);
    },1000)

}




function banner(argument) {
    var width=document.body.offsetWidth;
    // console.log(width);
    var ulDom =document.querySelector('.banner_images ul');
    var indexLiArr=document.querySelectorAll('.banner_index li')
    var index= 1;
    var timer ='';

    function startTransition(){
        ulDom.style.transition='all .3s';
    }
    function endTransition(){
        ulDom.style.transition='';
    }
    function setTransform(distance){
        ulDom.style.transform= 'translateX('+distance+'px)';
    }
    timer =setInterval(function () {
        index++;
        // ulDom.style.transition='all .3s';
        startTransition();
        // ulDom.style.transform= 'translateX('+index*width*-1+'px)';
        setTransform(index*width*-1);


    },1500);


    ulDom.addEventListener('webkitTransitionEnd',function () {

        if (index>=9){
            index =1;
            // ulDom.style.transition='';
            endTransition();
            //瞬间修改ul位置
            // ulDom.style.transform= 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        }else if (index<1){
            index =8;
            // ulDom.style.transition='';
            endTransition();
            //瞬间修改ul位置
            // ulDom.style.transform= 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        }


        for (var i=0;i<indexLiArr.length;i++){
            indexLiArr[i].className='';
        }
        indexLiArr[index-1].className='current';
    });

    var startX=0;
    var moveX=0;
    document.body.addEventListener('touchstart',function (event) {
        // console.log(event);
        clearInterval(timer);
        startX =event.touches[0].clientX;
    });
    document.body.addEventListener('touchmove',function (event) {
        clearInterval(timer);
        moveX =event.touches[0].clientX-startX;
        // console.log(moveX);
        // ulDom.style.transform= 'translateX('+(moveX+index*width*-1)+'px)';
        setTransform(moveX+index*width*-1);
    });

    document.body.addEventListener('touchend',function (event) {
        var maxDistance =width/3;
        if(Math.abs(moveX)>maxDistance){
            if(moveX>0){
                index--;
            }else {
                index++
            }
            // ulDom.style.transition='all .3s';
            startTransition();
            // ulDom.style.transform= 'translateX('+(index*width*-1)+'px)';
            setTransform(index*width*-1)
        }else {
            // ulDom.style.transition='all .3s';
            startTransition();
            // ulDom.style.transform= 'translateX('+(index*width*-1)+'px)';
            setTransform(index*width*-1)
        }
        timer =setInterval(function () {
            index++;
            // ulDom.style.transition='all .3s';
            startTransition();
            // ulDom.style.transform= 'translateX('+(index*width*-1)+'px)';
            setTransform(index*width*-1)



        },1500);

    });
}