window.onload=function(){
    rels();
    autoMove();
    bott();
    subnav();
}
function rels(){
    let btn = document.getElementsByTagName('a');
    let s = document.getElementsByClassName('menu');
    let f = document.getElementsByClassName('menu-after');
    btn[0].onclick=function () {
        s[0].style='display:block';
    };
    f[0].onclick=function () {
        s[0].style='display:none';
    }
}
function autoMove() {
    var imgs = document.getElementsByClassName("imgs");
    var point1 = document.getElementsByClassName('banner-pointer');

    function InitMove(index) {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = '0';
            point1[i].style.backgroundColor = 'white';
        }
        imgs[index].style.opacity = '1';
        point1[index].style.backgroundColor = 'yellow';
    }

    InitMove(0);
    var count = 1;

    function fMove() {
        if (count == imgs.length) {
            count = 0;
        }
        InitMove(count);
        count++;
    }
    var scollMove = setInterval(fMove, 6500);
    var wrap = document.querySelector('.banner-img');
    var startPoint = 0;
    //手指按下
    wrap.addEventListener("touchstart",function(e){
        startPoint = e.changedTouches[0].pageX;
        clearInterval(scollMove);
    });
    var currPoint=0;
    // 手指抬起
    wrap.addEventListener("touchend",function(e){
        currPoint = e.changedTouches[0].pageX;
        if (startPoint<currPoint){
            if (count==0){
                count =imgs.length;
            }
            count--;
            InitMove(count);
            scollMove = setInterval(fMove,2500);
        }else if(startPoint>currPoint){
            fMove();
            scollMove = setInterval(fMove,2500);
        }
    });
}
