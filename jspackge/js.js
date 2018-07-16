/**
 * Created by 云 on 2018/6/8.
 */
    function fex_Tap(element,callBack) {
        
        var startTime=0;
        var isMove =false;
        var maxTime=300;
       element.addEventListener('touchstart',function (e) {
            startTime =Date.now();
        })
        element.addEventListener('touchmove',function (e) {
                isMove=true;

        })
        element.addEventListener('touchend',function (event) {

            if(isMove===true){
                return ;
            }
            if(Date.now()-startTime>maxTime){
                return ;
            }


            callBack(event);

        })
        
        
        
        
        
    }
