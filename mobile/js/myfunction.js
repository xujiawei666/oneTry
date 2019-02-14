// 一、 自动轮播图用透明度做
function move() {
    let im = document.querySelectorAll("#move");
    let po = document.querySelectorAll(".point");
    let flag = false;
    function init(index) {
        for (let i=0; i<im.length;i++){
            im[i].style.transform="scale(0)";
            po[i].style.backgroundColor="rgba(0, 0, 0, 0.56)";
        }
        im[index].style.transform="scale(1)";
        po[index].style.backgroundColor="white";
    }
    init(0);
    let count = 0;
    // 计数器
    function he() {
        count++;
        if (count == im.length){
            count = 0;
        }
        init(count);
    }
    let auto = setInterval(he,2500);
    // 手动轮播
    let btn = document.querySelector(".btn2");
    let btn1 = document.querySelector(".btn3");
    btn.onclick = function () {
        if (flag == true) {
            flag = false;
            count--;
            if (count<0){
                count = im.length-1;
            }
            init(count);
        }
    };

    btn1.onclick=function () {
        if (flag == true){
            flag = false;
            he();
        }
    };
    // 鼠标移入时停止轮播
    let bann = document.querySelector(".imgs");
    bann.onmouseenter = function () {
        clearInterval(auto);
    };
    // 鼠标移出时开始轮播
    bann.onmouseleave = function () {
        auto = setInterval(he, 2500);
    };
    bann.addEventListener("transitionend",function () {
        flag = true;
    })
}

//  二、  点击返回页面底部
    function backTop() {
        back.onclick=function () {
            window.scrollTo(0,0);
        }
    }


//三、 滚动条到一定位置时出现导航栏
    function bott(导航栏) {
        let h = document.documentElement.scrollTop;
        // let ends = document.querySelector(".under-nav");
        // let back = document.querySelector(".back-top");
        if (h<1200){
            ends.style.transform="scale(0)";
        }else{
            ends.style.transform="scale(1)";
        }
        setTimeout(bott,0.1);
    }


// 四 手机端手动加自动轮播
    function autoMove(imgs,point,wrap) {
        // let imgs = document.querySelectorAll('.banner img');
        // let point = document.querySelectorAll(".point");
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
        // var wrap = document.querySelector('.banner-img');
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

// 五、 倒计时
    function end() {
        var now = new Date();
        var num = now.getTime();
        var year = now.getFullYear();
        var month = now.getMonth();
        var day = now.getDate();
        var now1 = new Date(year,month,day,18,00,00);
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
        document.getElementsByClassName("box")[0].innerText = h;
        document.getElementsByClassName("box")[1].innerText = m;
        document.getElementsByClassName("box")[2].innerText = s;
    }


// 六、 选项卡
    function change() {
        let $name = document.querySelectorAll(".appliance ul li");
        let $span = document.querySelectorAll(".appliance ul li span")
        let $desc = document.querySelectorAll(".appliance-home-top ul");
        let $desc2 = document.querySelectorAll(".appliance-home-bottom ul");
        $name.forEach(function (ele,index){
            ele.onclick = function (){
                for (let i=0; i<$desc.length; i++){
                    $desc[i].style.opacity="0";
                    $desc2[i].style.opacity="0";
                    $name[i].style.color = "black";
                    $span[i].style.borderBottom= "none";
                }
                $desc[$desc.length-1-index].style.opacity = "1";
                $desc2[$desc.length-1-index].style.opacity = "1";
                this.style.color="#ff6700";
                $span[index].style.borderBottom= "2px solid #ff6700";
            }
        })
    }

