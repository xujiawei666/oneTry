window.onload=function(){
    autoMove();
    backTop();
    leftNav();
    end();
}

function autoMove(){
    let imgs=document.getElementsByClassName("imgs");
    let point1 = document.getElementsByClassName('pointer');
    let flag = false;
    function InitMove(index){
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.opacity='0';
            point1[i].style.backgroundColor='aqua';
        }
        imgs[index].style.opacity='1';
        point1[index].style.backgroundColor='yellow';
    }
    InitMove(0);
    var count=0;
    function fMove(){
        count++;
        if(count==imgs.length){
            count=0;
        }
        InitMove(count);
    }
    let scollMove=setInterval(fMove,2500);
    let btnleft=document.getElementsByClassName('arrows-left');
    let btnright=document.getElementsByClassName('arrows-right');
    btnleft[0].onclick=function(){
        if (flag == true) {
            flag = false;
            count--;
            if (count<0){
                count = imgs.length-1;
            }
            InitMove(count);
        }

    };
    btnright[0].onclick=function(){
        if (flag == true) {
            flag = false;
            fMove();
        }
    };

    // 鼠标移入时停止轮播
    let bann = document.querySelector(".main-box");
    bann.onmouseenter = function () {
            clearInterval(scollMove);
        };

    // 鼠标移出时开始轮播
    bann.onmouseleave = function () {
            scollMove = setInterval(fMove, 2500);
    };
    bann.addEventListener("transitionend",function () {
        flag = true;
    })
}
function backTop() {
    let btn = document.querySelector(".back-top");
    let btn2 = document.querySelector(".sidebar-list p")
    btn.onclick=function (){
        window.scrollTo(0,document.scrollTop);
    };
    btn2.onclick=function (){
        window.scrollTo(0,document.scrollTop);
    }
}
function leftNav(){
    let he = document.documentElement.scrollTop;
    let nav = document.querySelector(".sidebar-left");
    let list = document.querySelectorAll(".sidebar-list ul li")
    let comm = document.querySelectorAll(".common");
    if (he > 2200){
        nav.style.transform="scale(1)";
    }else{
        nav.style.transform="scale(0)";
    }
    list.forEach(function (e,index) {
       e.onclick= function (){
           for (let i = 0; i<list.length; i++) {
               list[i].style.backgroundColor="white";
               list[i].style.color="black";
           }
           window.scrollTo(0,2900+600*index);
           e.style.backgroundColor="#ffaa01";
           e.style.color="white";
       }
    });
    comm.forEach(function (e,index){
        e.onmouseover = function (){
            for (let i = 0; i<list.length; i++) {
                list[i].style.backgroundColor="white";
                list[i].style.color="black";
            }
            list[index].style.backgroundColor = "#ffaa01";
            list[index].style.color = "white";
        }
    });
    var inf = setTimeout(leftNav,1000);
}

// 倒计时
function end() {
    var now = new Date();
    var num = now.getTime();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var now1 = new Date(year,month,day,18,00,00);
    var num1 = now1.getTime();
    var ca = num1-num;
    let box = document.querySelectorAll(".qg-title-left span");
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
    box[2].innerText = h;
    box[0].innerText = m;
    box[1].innerText = s;
}
