window.onload = function () {
    autoMove();
    bott();
    subnav();
    end();
};
function autoMove() {
    let imgs = document.querySelectorAll('.banner img');
    let point = document.querySelectorAll(".point");

    function move(index) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = "0";
            point[i].style.backgroundColor = "white";
            point[i].style.width=".2rem";
        }
        imgs[index].style.opacity = "1";
        point[index].style.backgroundColor = "red";
        point[index].style.width=".3rem";
    }

    let count = 0;
    move(0);

    function leijia() {
        if (count == imgs.length) {
            count = 0
        }
        move(count);
        count++;
    }

    var change = setInterval(leijia, 2500);
    var wrap = document.querySelector('.banner');
    var startPoint = 0;

    //手指按下
    wrap.addEventListener("touchstart",function(e){
        startPoint = e.changedTouches[0].pageX;
        clearInterval(change);
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
            move(count);
            change = setInterval(leijia,2500);
        }else if(startPoint>currPoint){
            leijia();
            change = setInterval(leijia,2500);
        }
    });
};
function end() {
    var now = new Date();
    var num = now.getTime();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var now1 = new Date(year,month,day,20,00,00);
    var num1 = now1.getTime();
    var ca = num1-num;
    if ( ca>0) {
        var h = Math.floor(ca / 1000 / 60 / 60 % 24);
        var m = Math.floor(ca / 1000 / 60 % 60);
        var s = Math.floor(ca / 1000 % 60);
        setTimeout(end,1000);
    }else{
        h = 0;
        m = 0;
        s = 0;
    }
    document.querySelectorAll(".must-title a")[0].innerText = h;
    document.querySelectorAll(".must-title a")[1].innerText = m;
    document.querySelectorAll(".must-title a")[2].innerText = s;
};