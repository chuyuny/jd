/**
 * Created by 云 on 2018/6/5.
 */
window.onload =function () {
    leftScroll();
}

//触摸滑动左边导航栏
function leftScroll() {
    var ulDom =document.querySelector('.main .mian-left ul');
    var mainLeft=document.querySelector('.main .mian-left');
    var headerHeight=document.querySelector('.header').offsetHeight;
    // console.log(headerHeight);
    var ulHeight =ulDom.offsetHeight;
    var parentHEight=mainLeft.offsetHeight;
    // console.log(ulHeight);
    // console.log(parentHEight);
    var maxDistance=0;
    var minDistance= parentHEight -ulHeight-headerHeight;

    // console.log(minDistance);

    var startY =0;
    var moveY=0;
    var distanceY=0;
    var moveDistance=0;
    var dalayDistance=150;


    function setTransform(distance) {
        ulDom.style.transform="translateY("+(distance)+"px)";
    }
    function setTransition() {
        ulDom.style.transition="all .5s";
    }
    function clearTransition() {
        ulDom.style.transition="";
    }

    ulDom.addEventListener("touchstart",function (event) {
        startY=event.touches[0].clientY;
    });
    ulDom.addEventListener("touchmove",function (event) {
        moveY=event.touches[0].clientY-startY;
        moveDistance=moveY+distanceY;
        clearTransition();
        // ulDom.style.transform="translateY("+(moveY+distanceY)+"px)";
        if(moveDistance>maxDistance){
            moveDistance=maxDistance+dalayDistance;
        }else if(moveDistance<minDistance) {
            moveDistance=minDistance-dalayDistance;
        }
        setTransform(moveDistance);
    });
    ulDom.addEventListener("touchend",function (event) {
        distanceY+=moveY;
        setTransition();
        if(moveDistance>maxDistance){
            moveDistance=maxDistance;
        }else if(moveDistance<minDistance) {
            moveDistance=minDistance;
        }
        setTransform(moveDistance);
    })


    fex_Tap(ulDom,function (e) {
        var liArr =document.querySelectorAll('.main .mian-left ul li');
        //获取当前点击的目标
        var target=e.target;
        var liHeight=liArr[0].offsetHeight;
        // console.log(liHeight);
        // console.log(target);
        // console.log(target.parentNode);

        //为点击中的目标加入样式
        //首先清空所有的目标父级
        // console.log(liArr);
        for(var i=0;i<liArr.length;i++){
            liArr[i].className='';
        }
        // console.log(target.parentNode.dataset['index']);

        target.parentNode.className='current';
        var currentIndex=target.parentNode.dataset['index'];
        var liMoveDistance =currentIndex*liHeight*-1;
        if(liMoveDistance>maxDistance){
            liMoveDistance=maxDistance;
        }else if(liMoveDistance<minDistance) {
            liMoveDistance=minDistance;
        }

        setTransform(liMoveDistance);


    })


}